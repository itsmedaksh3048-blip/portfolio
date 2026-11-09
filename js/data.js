/* ============ EDIT YOUR DETAILS HERE ============ */
var CONFIG = {
  name: "Sonu",
  email: "itsmedaksh3048@gmail.com",
  linkedin: "https://www.linkedin.com/",          // paste your LinkedIn profile link
  github: "https://github.com/itsmedaksh3048-blip",
  resume: "src/images/Sonu cv.pdf",                                       // paste a public resume link (Google Drive, Dropbox, any https link)
  photo: "src/images/profile.jpg"                                         // your photo (replace with another link or data: image)
  
};

var PHRASES = [
  "building CI/CD pipelines",
  "shipping apps with Docker on AWS",
  "hardening Linux servers",
  "scanning for vulnerabilities"
];

/* Each skill: name + icon drawn on a 24px grid. Swap the icon markup for an official logo any time. */
var SKILLS = [
  { n: "Linux", i: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M7 10l3 2.5L7 15M12.5 15H17"/>' },
  { n: "Docker", i: '<rect x="4" y="9" width="3.5" height="3.5"/><rect x="8.5" y="9" width="3.5" height="3.5"/><rect x="13" y="9" width="3.5" height="3.5"/><rect x="8.5" y="5" width="3.5" height="3.5"/><rect x="13" y="5" width="3.5" height="3.5"/><path d="M2.5 14h19c-.4 3.6-3.6 6-8.4 6-4.4 0-7.6-2.2-10.6-6z"/>' },
  { n: "Kubernetes", i: '<polygon points="12,3 19.04,6.39 20.77,14 15.91,20.11 8.09,20.11 3.23,14 4.96,6.39"/><circle cx="12" cy="12" r="2.4"/><path d="M12 9.6V3M13.9 10.8l5.1-4.4M14.4 12.9l6.4 1.1M12.8 14.3l3.1 5.8M11.2 14.3l-3.1 5.8M9.6 12.9L3.2 14M10.1 10.8L5 6.4"/>' },
  { n: "Git & GitHub", i: '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 7v10M18 11c0 4-5 6-12 6"/>' },
  { n: "CI/CD", i: '<path d="M20 12a8 8 0 0 1-13.7 5.6M4 12a8 8 0 0 1 13.7-5.6"/><path d="M18 3v4h-4M6 21v-4h4"/>' },
  { n: "AWS", i: '<path d="M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 8.6 4.7 4.7 0 0 1 17.5 18z"/>' },
  { n: "Terraform", i: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5"/><path d="M3 17l9 5 9-5"/>' },
  { n: "Python", i: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>' },
  { n: "Django", i: '<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/>' },
  { n: "Nmap", i: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="M12 12l6.5-6.5"/>' },
  { n: "Wireshark", i: '<path d="M2 12h4l3-7 4 14 3-7h6"/>' },
  { n: "Kali Linux", i: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><circle cx="12" cy="11" r="2"/><path d="M12 13v3"/>' }
];

/* Add more projects by copying this object. image: link or data: URI replaces the drawn cover. */
var COVER_SVG = '<svg viewBox="0 0 640 400" role="img" aria-label="Django Notes App screen above its three containers" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
  '<defs><linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b2227"/><stop offset="1" stop-color="#06141a"/></linearGradient>' +
  '<marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M1 1l5 3-5 3z" fill="#4fd6c4"/></marker></defs>' +
  '<rect width="640" height="400" fill="url(#cg)"/>' +
  '<rect x="36" y="32" width="568" height="234" rx="14" fill="#0f2b31" stroke="#235863"/>' +
  '<circle cx="58" cy="54" r="5" fill="#f0b45c"/><circle cx="76" cy="54" r="5" fill="#4fd6c4"/><circle cx="94" cy="54" r="5" fill="#5b7f87"/>' +
  '<rect x="120" y="45" width="300" height="18" rx="9" fill="#0a1f24"/>' +
  '<text x="136" y="58" font-family="JetBrains Mono, monospace" font-size="10" fill="#8fb4ba">http://your-ec2-ip/</text>' +
  '<g fill="#123740" stroke="#235863"><rect x="56" y="84" width="170" height="164" rx="10"/><rect x="240" y="84" width="170" height="164" rx="10"/><rect x="424" y="84" width="170" height="164" rx="10"/></g>' +
  '<g fill="#4fd6c4"><rect x="70" y="100" width="90" height="8" rx="4"/><rect x="254" y="100" width="70" height="8" rx="4"/><rect x="438" y="100" width="104" height="8" rx="4"/></g>' +
  '<g fill="#2a5660"><rect x="70" y="124" width="142" height="6" rx="3"/><rect x="70" y="140" width="112" height="6" rx="3"/><rect x="70" y="156" width="98" height="6" rx="3"/><rect x="70" y="172" width="126" height="6" rx="3"/>' +
  '<rect x="254" y="124" width="142" height="6" rx="3"/><rect x="254" y="140" width="96" height="6" rx="3"/><rect x="254" y="156" width="120" height="6" rx="3"/>' +
  '<rect x="438" y="124" width="142" height="6" rx="3"/><rect x="438" y="140" width="124" height="6" rx="3"/><rect x="438" y="156" width="88" height="6" rx="3"/><rect x="438" y="172" width="110" height="6" rx="3"/><rect x="438" y="188" width="70" height="6" rx="3"/></g>' +
  '<g fill="#17434b"><rect x="70" y="214" width="46" height="16" rx="8"/><rect x="254" y="214" width="46" height="16" rx="8"/><rect x="438" y="214" width="46" height="16" rx="8"/></g>' +
  '<g fill="#0f2b31" stroke="#4fd6c4"><rect x="36" y="298" width="150" height="56" rx="12"/><rect x="245" y="298" width="150" height="56" rx="12"/><rect x="454" y="298" width="150" height="56" rx="12"/></g>' +
  '<g font-family="JetBrains Mono, monospace" text-anchor="middle"><text x="111" y="322" font-size="13" fill="#cfe6e3">nginx_cont</text><text x="111" y="341" font-size="11" fill="#f0b45c">:80</text>' +
  '<text x="320" y="322" font-size="13" fill="#cfe6e3">django_cont</text><text x="320" y="341" font-size="11" fill="#f0b45c">:8000</text>' +
  '<text x="529" y="322" font-size="13" fill="#cfe6e3">db_cont</text><text x="529" y="341" font-size="11" fill="#f0b45c">:3306</text></g>' +
  '<g stroke="#4fd6c4" stroke-width="1.6" marker-end="url(#ar)"><path d="M188 326h54"/><path d="M397 326h54"/></g></svg>';

var PROJECTS = [{
  id: "django-notes",
  title: "Django Notes App",
  page: "projects/django-notes-app.html",
  short: "A notes web app on Django and MySQL, served by Nginx, packaged with Docker Compose and deployed on an AWS EC2 server.",
  overview: "A notes website written in Django with notes stored in MySQL. Nginx sits in front and forwards traffic to Django, and the whole stack runs as three Docker containers started with one command on AWS EC2.",
  tags: ["Django", "MySQL", "Nginx", "Docker Compose", "AWS EC2"],
  image: "",
  links: { repo: "https://github.com/itsmedaksh3048-blip/Django_Notes_App", demo: "" },
  flow: ["Browser", "nginx :80", "django :8000", "mysql :3306"],
  does: [
    "<strong>One-command deploy.</strong> <code>docker compose up --build -d</code> brings up the database, the app and the web server together.",
    "<strong>Safe start-up order.</strong> A MySQL health check makes Django wait for the database, and migrations run when the container starts.",
    "<strong>Private database.</strong> MySQL is reachable only from the other containers, and its data lives in a named volume.",
    "<strong>Simple updates.</strong> Pull the latest code from GitHub, rebuild the containers and the new version is live."
  ],
  stack: [["Backend", "Django on Python 3.9"], ["Database", "MySQL"], ["Web server", "Nginx 1.23.3 (alpine)"], ["Packaging", "Docker, Docker Compose"], ["Hosting", "AWS EC2, Amazon Linux"]],
  solved: [
    "<strong>Old Buildx plugin.</strong> Compose refused to build until a newer Buildx was installed.",
    "<strong>Permission denied on the build context.</strong> Fixed with a <code>.dockerignore</code> that keeps MySQL files out of the image build.",
    "<strong>Port 8000 already allocated.</strong> A stale docker-proxy held the port, cleared by restarting Docker.",
    "<strong>Container exiting at once.</strong> The image had no start command, so a <code>CMD</code> now runs migrations and starts Django."
  ]
}];
