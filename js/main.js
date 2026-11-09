/* ============ HELPERS ============ */
var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
var toastTimer;
function toast(msg) {
  var t = $("#toast"); t.textContent = msg; t.classList.add("on");
  clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove("on"); }, 2600);
}
function copyText(text, node) {
  function done() { toast("Email address copied"); }
  function fallback() {
    try { var r = document.createRange(); r.selectNodeContents(node); var s = getSelection(); s.removeAllRanges(); s.addRange(r); } catch (e) {}
    toast("Address selected. Press copy on your keyboard.");
  }
  try { navigator.clipboard.writeText(text).then(done, fallback); } catch (e) { fallback(); }
}

/* ============ FILL CONFIG ============ */
$$("[data-name]").forEach(function (n) { n.textContent = CONFIG.name; });
$$("[data-email]").forEach(function (n) { n.textContent = CONFIG.email; });
$("#mailBtn").href = "mailto:" + CONFIG.email;
$("#mailLink").href = "mailto:" + CONFIG.email;
$("#liLink").href = CONFIG.linkedin;
$("#ghLink").href = CONFIG.github;
$("#yr").textContent = new Date().getFullYear();
$("#copyMail").addEventListener("click", function () { copyText(CONFIG.email, $("#mailText")); });

/* Resume */
(function () {
  var b = $("#resumeBtn");

  if (CONFIG.resume) {
    b.href = CONFIG.resume;
    b.setAttribute("download", "Sonu cv.pdf");
  } else {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      toast("Resume file not found.");
    });
  }
})();

/* ============ THEME ============ */
var root = document.documentElement;
var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
function effective() {
  var t = root.getAttribute("data-theme");
  return t || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}
function paintToggle() {
  var dark = effective() === "dark";
  var b = $("#themeBtn"); b.innerHTML = dark ? SUN : MOON;
  b.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}
try { var saved = localStorage.getItem("portfolio-theme"); if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved); } catch (e) {}
paintToggle();
$("#themeBtn").addEventListener("click", function () {
  var next = effective() === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("portfolio-theme", next); } catch (e) {}
  paintToggle();
});
try { matchMedia("(prefers-color-scheme: dark)").addEventListener("change", paintToggle); } catch (e) {}

/* ============ TYPED LINE ============ */
(function () {
  var el = $("#typed"), pi = 0, ci = PHRASES[0].length, del = true;
  if (reduce) return;
  function tick() {
    var t = PHRASES[pi], wait = del ? 26 : 55;
    if (!del) { ci++; if (ci >= t.length) { del = true; wait = 1700; } }
    else { ci--; if (ci <= 0) { del = false; pi = (pi + 1) % PHRASES.length; wait = 260; } }
    el.textContent = t.slice(0, Math.max(ci, 0));
    setTimeout(tick, wait);
  }
  setTimeout(tick, 2400);
})();

/* ============ PHOTO ============ */
(function () {
  var img = $("#photoImg"), ph = $("#photoPh"), input = $("#photoInput"), box = $("#photoBox");
  function show(src) { img.src = src; img.hidden = false; ph.hidden = true; }
  if (CONFIG.photo) { show(CONFIG.photo); input.disabled = true; box.style.cursor = "default"; box.removeAttribute("tabindex"); }
  else {
    input.addEventListener("change", function () {
      var f = input.files && input.files[0]; if (!f) return;
      var r = new FileReader(); r.onload = function () { show(r.result); }; r.readAsDataURL(f);
    });
    box.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); input.click(); } });
  }

  /* pointer glow, tilt and orbiting dot */
  var wrap = $("#photoWrap"), orbit = $("#orbit");
  if (reduce) return;
  var target = null, ang = -Math.PI / 4;
  wrap.addEventListener("pointermove", function (e) {
    var r = wrap.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    wrap.style.setProperty("--px", x + "px"); wrap.style.setProperty("--py", y + "px");
    box.style.setProperty("--ry", ((x / r.width) - .5) * 14 + "deg");
    box.style.setProperty("--rx", -((y / r.height) - .5) * 14 + "deg");
    target = Math.atan2(y - r.height / 2, x - r.width / 2);
  });
  wrap.addEventListener("pointerleave", function () {
    target = null;
    wrap.style.setProperty("--px", "50%"); wrap.style.setProperty("--py", "50%");
    box.style.setProperty("--ry", "0deg"); box.style.setProperty("--rx", "0deg");
  });
  function frame() {
    if (target === null) ang += 0.007;
    else {
      var d = target - ang; d = Math.atan2(Math.sin(d), Math.cos(d)); ang += d * 0.1;
    }
    var w = wrap.offsetWidth, h = wrap.offsetHeight, c = Math.cos(ang), s = Math.sin(ang);
    var x = w / 2 + (w / 2 + 14) * Math.sign(c) * Math.pow(Math.abs(c), 0.5);
    var y = h / 2 + (h / 2 + 14) * Math.sign(s) * Math.pow(Math.abs(s), 0.5);
    orbit.style.left = x + "px"; orbit.style.top = y + "px";
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

/* ============ SKILLS ============ */
$("#skillGrid").innerHTML = SKILLS.map(function (s, k) {
  return '<div class="skill" style="--i:' + k + '"><div class="ico"><svg viewBox="0 0 24 24" aria-hidden="true">' + s.i + '</svg></div><span>' + s.n + '</span></div>';
}).join("");

/* ============ PROJECT CARDS ============ */

/* ============ PROJECT CARDS ============ */

function coverHTML(p) {
  return p.image
    ? '<img src="' + p.image + '" alt="' + p.title + ' screenshot">'
    : COVER_SVG;
}

$("#projGrid").innerHTML = PROJECTS.map(function (p) {

  // If external project documentation page exists
  var projectLink = p.page
    ? p.page
    : "#project-" + p.id;

  return '<a class="proj" href="' + projectLink + '">' +
    '<span class="cover">' + coverHTML(p) + '</span>' +
    '<span class="proj-body">' +
    '<h3>' + p.title + '</h3>' +
    '<p>' + p.short + '</p>' +
    '<span class="tags">' +
    p.tags.map(function (t) {
      return '<span class="tag">' + t + '</span>';
    }).join("") +
    '</span>' +
    '<span class="more">View details <i>&rarr;</i></span>' +
    '</span>' +
    '</a>';

}).join("") +
  '<div class="ghost">' +
  '<span class="eyebrow">next up</span>' +
  '<p>More projects are on the way.</p>' +
  '<code>$ git commit -m "next project"</code>' +
  '</div>';

/* ============ PROJECT DETAIL VIEW ============ */
function renderDetail(p) {
  var links = '';
  if (p.links.repo) links += '<a class="btn primary" href="' + p.links.repo + '" target="_blank" rel="noopener">View on GitHub</a>';
  if (p.links.demo) links += '<a class="btn" href="' + p.links.demo + '" target="_blank" rel="noopener">Live demo</a>';
  $("#detail").innerHTML =
    '<div class="in d-wrap"><a class="back" href="#projects">&larr; All projects</a><div class="d-grid"><div class="d-main">' +
    '<span class="eyebrow">Project</span><h1 class="d-title">' + p.title + '</h1>' +
    '<div class="tags">' + p.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join("") + '</div>' +
    '<p class="d-lead">' + p.overview + '</p>' +
    (links ? '<div class="d-links">' + links + '</div>' : '') +
    '<h2 class="d-h">How a request flows</h2><div class="flow">' +
    p.flow.map(function (f, i) { return (i ? '<i aria-hidden="true">&rarr;</i>' : '') + '<code>' + f + '</code>'; }).join("") + '</div>' +
    '<h2 class="d-h">What it does</h2><ul class="ticks">' + p.does.map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ul>' +
    '<h2 class="d-h">Tech stack</h2><dl class="details">' + p.stack.map(function (r) { return '<dt>' + r[0] + '</dt><dd>' + r[1] + '</dd>'; }).join("") + '</dl>' +
    '<h2 class="d-h">Problems I solved</h2><ul class="ticks">' + p.solved.map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ul>' +
    '</div><div class="d-cover">' + coverHTML(p) + '</div></div></div>';
}

/* ============ ROUTER + MENU ============ */
var mainEl = $("#main"), detailEl = $("#detail");
var SECTIONS = ["home", "about", "skills", "projects"];
function setActive(id) {
  var key = id === "skills" ? "about" : id;
  $$(".menu a").forEach(function (a) { a.setAttribute("aria-current", a.getAttribute("data-nav") === key ? "true" : "false"); });
}
function route() {
  var h = location.hash.slice(1), proj = null;
  if (h.indexOf("project-") === 0) proj = PROJECTS.filter(function (p) { return "project-" + p.id === h; })[0] || null;
  if (proj) {
    renderDetail(proj); mainEl.hidden = true; detailEl.hidden = false;
    window.scrollTo({ top: 0, behavior: "instant" }); setActive("projects"); return;
  }
  var wasDetail = !detailEl.hidden;
  detailEl.hidden = true; mainEl.hidden = false;
  var target = SECTIONS.indexOf(h) > -1 ? document.getElementById(h) : null;
  if (target) target.scrollIntoView({ behavior: wasDetail ? "instant" : "smooth", block: "start" });
  else if (wasDetail || h === "") window.scrollTo({ top: 0, behavior: "instant" });
  setActive(SECTIONS.indexOf(h) > -1 ? h : "home");
}
window.addEventListener("hashchange", route);
$$("[data-nav]").forEach(function (a) {
  a.addEventListener("click", function () { setTimeout(route, 0); });
});
if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting && !mainEl.hidden) setActive(e.target.id); });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["home", "about", "projects"].forEach(function (id) { io.observe(document.getElementById(id)); });
}
setActive("home");
if (location.hash) route();
