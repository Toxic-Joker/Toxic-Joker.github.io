window.TRANSLATIONS = {
  en: {
    "nav.about": "about",
    "nav.projects": "projects",
    "nav.automation": "automation",
    "nav.coursework": "coursework",
    "nav.stack": "stack",

    "hero.whoamiOut": "UNKNOWN Hat — breaking things to understand how to harden them",
    "hero.lines": [
      "Red Team Tooling & AI Orchestration",
      "Hardening / Crypto / Network Security",
      "Deterministic risk scoring, LLM kept on a leash"
    ],

    "about.b1": "Building <strong>multi-agent red team orchestration</strong> — LLMs are consultative only; severity, risk, and report structure stay deterministic and tied to tool evidence.",
    "about.b2": "Hands-on with <strong>OS hardening</strong>, <strong>network security</strong>, and <strong>cryptography</strong> — graduate-level cybersecurity coursework.",
    "about.b3": "Docker-first workflows, FastAPI + LangGraph for agent orchestration.",
    "about.b4": "Occasionally ship things purely for fun — like a real-time OBS broadcast overlay system.",

    "project.flag.featured": "FEATURED PROJECT",
    "project.flag.side": "SIDE PROJECT",
    "project.flag.fork": "FORK &middot; EXTENDED",
    "common.viewRepo": "view repo &rarr;",

    "project.redteam.desc": "Multi-agent red team orchestration framework with a live web dashboard. A local LLM (<code>qwen3.5:9b</code>) is purely <strong>consultative</strong> — it summarizes, drafts, and suggests leads. Every consequential decision (a finding's severity, the mission's overall risk, the report's structure) is <strong>deterministic</strong>, grounded in evidence produced by real tools: nmap, gobuster, nikto, sqlmap, ffuf. Passed its own security audit: auth bypasses closed, timing-safe comparisons, non-root container.",
    "project.redteam.meta": "Docker-first &middot; LangGraph orchestrator &middot; originated as an academic research project",

    "project.securitycheckup.desc": "A Claude Code skill that runs a full, read-only security checkup of a Windows PC, local projects, and a GitHub account — checked against the vulnerabilities currently in the news. Covers OS hardening state, dependency audits across every local project, and GitHub account hygiene (rogue branches, unpinned Actions, exposed secrets, Dependabot). Ends in a priority-ordered fix list and a CRITICAL/HIGH/MEDIUM/LOW score — never changes a setting itself, just hands you the exact steps.",

    "project.emailosint.desc": "Free, self-hosted reverse email lookup. Paste an email and watch a profile build live: ~220 site registrations, Google &amp; Google Play Games data, infostealer infections, and breach exposure — streamed over server-sent events, each check on its own worker thread with a 20s deadline. Local Ollama model writes the summary and risk score; nothing queried needs a paid API key, and no lookup results are stored. Served over HTTPS from a localhost-constrained local CA.",

    "project.autoidentityremove.desc": "Forked <a href=\"https://github.com/stephenlthorn/auto-identity-remove\" target=\"_blank\" rel=\"noopener\">stephenlthorn/auto-identity-remove</a>, an automated data-broker opt-out runner, and added a human-in-the-loop handoff for CAPTCHAs (pauses for you in a headed browser instead of an API solver), a free keyless breach check via XposedOrNot, broader global/phone-number broker coverage, and a Windows launcher script.",

    "project.matchroom.desc": "Self-hosted, real-time football broadcast overlay system for streamers. Bridges a live data feed to OBS Studio, triggering broadcast-grade graphics — scoreboard, goal/card/sub animations, stats, standings, lineups, penalty shootouts, knockout brackets — from a single control panel. Ships both 16:9 and 9:16 overlay formats.",

    "project.tvhomedebloat.desc": "Reversible Google TV debloat over ADB, paired with a fast, minimal launcher written in plain Java — three switchable home styles (Cinema, Glass, Top Shelf), a self-healing key service, and a quick-settings control centre. Apps are only disabled (<code>pm disable-user</code>), never uninstalled. <code>maintain.sh</code> re-applies the debloat automatically after firmware or app updates, cron-scheduled.",

    "automation.sub": "Treating AI as a build tool, not a toy — shipping real automation and custom tooling with it, not just chatting with it.",
    "automation.b1": "This site — copy, structure, and the interactive background — was designed and built end-to-end through AI pair programming, iterated live rather than hand-coded from scratch.",
    "automation.b2": "Same philosophy as <a href=\"https://github.com/Toxic-Joker/redteam-ai-framework\" target=\"_blank\" rel=\"noopener\">redteam-ai-framework</a>: AI drafts and suggests, deterministic logic and real evidence decide — automation you can trust, not a black box.",
    "automation.b3": "Build custom Claude Code skills and agent tooling to automate work that used to take hours by hand — <a href=\"https://github.com/Toxic-Joker/security-checkup\" target=\"_blank\" rel=\"noopener\">security-checkup</a> is a public one, the rest are below.",

    "automation.lab.public": "Tooling &middot; Public",
    "automation.lab.private": "Tooling &middot; &#128274; Private",
    "automation.lab.securitycheckup.desc": "Read-only security audit skill — PC, projects, and GitHub, scored and prioritized",
    "automation.lab.codevideo.desc": "Custom Claude Code skill — voice recording to animated short video",
    "automation.lab.videoeditor.desc": "AI-assisted video editing automation",
    "automation.lab.jobscout.desc": "Automated job search &amp; triage tooling",
    "automation.lab.claudeskills.desc": "Personal collection of Claude Code skills",

    "coursework.sub": "Lab work from a cybersecurity Master's program.",
    "coursework.lab.public": "Coursework",
    "coursework.lab.private": "Coursework &middot; &#128274; Private",
    "coursework.lab.malware.name": "Malware Analysis",
    "coursework.lab.malware.desc": "Malware analysis labs — ongoing coursework",
    "coursework.lab.container.name": "Container Security",
    "coursework.lab.container.desc": "Advanced Docker, image diving, container standards",
    "coursework.lab.oshardening.name": "OS Hardening",
    "coursework.lab.oshardening.desc": "Hardening basics, syscalls, isolation, SELinux",
    "coursework.lab.crypto.name": "Cryptography",
    "coursework.lab.crypto.desc": "OpenSSL, PKI",
    "coursework.lab.network.name": "Network Security",
    "coursework.lab.network.desc": "Cisco / GNS3 labs, VLANs, common network attacks",
    "coursework.lab.devsecops.name": "DevSecOps",
    "coursework.lab.devsecops.desc": "Security integrated into the delivery pipeline",

    "footer.close": "&gt; connection closed_",

    "meta.title": "Toxic-Joker // Red Team &amp; AI Orchestration",
    "meta.description": "Toxic-Joker — Red team tooling & AI orchestration. Multi-agent security frameworks, OS hardening, cryptography, network security."
  },

  fr: {
    "nav.about": "à propos",
    "nav.projects": "projets",
    "nav.automation": "automatisation",
    "nav.coursework": "cours",
    "nav.stack": "stack",

    "hero.whoamiOut": "UNKNOWN Hat — casser les choses pour mieux les protéger",
    "hero.lines": [
      "Outillage Red Team & orchestration IA",
      "Durcissement / Crypto / Sécurité réseau",
      "Score de risque déterministe, IA tenue en laisse"
    ],

    "about.b1": "Je construis une <strong>orchestration red team multi-agents</strong> — les LLM ne sont que consultatifs ; la gravité, le risque et la structure du rapport restent déterministes et ancrés dans les preuves des outils.",
    "about.b2": "À l'aise avec le <strong>durcissement d'OS</strong>, la <strong>sécurité réseau</strong> et la <strong>cryptographie</strong> — cursus de Master en cybersécurité.",
    "about.b3": "Workflows Docker-first, FastAPI + LangGraph pour l'orchestration d'agents.",
    "about.b4": "Je livre aussi des projets juste pour le plaisir — comme un habillage de diffusion OBS en temps réel.",

    "project.flag.featured": "PROJET PHARE",
    "project.flag.side": "PROJET PERSO",
    "project.flag.fork": "FORK &middot; ENRICHI",
    "common.viewRepo": "voir le dépôt &rarr;",

    "project.redteam.desc": "Framework d'orchestration red team multi-agents avec un tableau de bord web en direct. Un LLM local (<code>qwen3.5:9b</code>) est purement <strong>consultatif</strong> — il résume, rédige des brouillons et suggère des pistes. Chaque décision qui compte (la gravité d'une faille, le risque global de la mission, la structure du rapport) reste <strong>déterministe</strong>, ancrée dans les preuves produites par de vrais outils : nmap, gobuster, nikto, sqlmap, ffuf. Il a lui-même passé un audit de sécurité : contournements d'authentification corrigés, comparaisons à temps constant, conteneur non-root.",
    "project.redteam.meta": "Docker-first &middot; orchestrateur LangGraph &middot; parti d'un projet de recherche académique",

    "project.securitycheckup.desc": "Une compétence Claude Code qui fait un bilan de sécurité complet et non-intrusif d'un PC Windows, des projets locaux et d'un compte GitHub — confronté aux vulnérabilités qui font l'actualité. Couvre l'état du durcissement OS, l'audit des dépendances de chaque projet local, et l'hygiène du compte GitHub (branches suspectes, Actions non épinglées, secrets exposés, Dependabot). Se termine par une liste de correctifs priorisée et un score CRITIQUE/ÉLEVÉ/MOYEN/FAIBLE — ne modifie jamais un réglage lui-même, il donne juste la marche à suivre.",

    "project.emailosint.desc": "Recherche inversée d'email gratuite et auto-hébergée. On colle une adresse email et un profil se construit en direct : ~220 inscriptions sur des sites, données Google et Google Play Games, infections par infostealer, et exposition dans des fuites de données — diffusé en flux via server-sent events, chaque vérification sur son propre thread avec un délai de 20 s. Un modèle Ollama local rédige la synthèse et le score de risque ; rien n'exige de clé d'API payante, et aucun résultat de recherche n'est conservé. Servi en HTTPS depuis une autorité de certification locale limitée à localhost.",

    "project.autoidentityremove.desc": "Fork de <a href=\"https://github.com/stephenlthorn/auto-identity-remove\" target=\"_blank\" rel=\"noopener\">stephenlthorn/auto-identity-remove</a>, un outil d'opt-out automatisé auprès des data brokers, auquel j'ai ajouté une prise de relais humaine pour les CAPTCHA (le script se met en pause pour vous laisser faire dans un navigateur visible, au lieu d'un solveur payant), une vérification de fuites gratuite et sans clé via XposedOrNot, une couverture élargie des brokers (international, numéros de téléphone), et un script de lancement pour Windows.",

    "project.matchroom.desc": "Système d'habillage de diffusion de football en temps réel, auto-hébergé, pour les streamers. Relie un flux de données en direct à OBS Studio pour déclencher des graphismes dignes d'une diffusion pro — tableau de score, animations de but/carton/remplacement, stats, classements, compositions, tirs au but, tableaux à élimination directe — depuis un panneau de contrôle unique. Disponible en 16:9 et 9:16.",

    "project.tvhomedebloat.desc": "Débloatage réversible de Google TV via ADB, associé à un launcher rapide et minimaliste écrit en Java pur — trois styles d'accueil interchangeables (Cinema, Glass, Top Shelf), un service de touches auto-réparant, et un centre de contrôle pour les réglages rapides. Les applications sont seulement désactivées (<code>pm disable-user</code>), jamais désinstallées. <code>maintain.sh</code> réapplique le débloatage automatiquement après une mise à jour du firmware ou des apps, planifié via cron.",

    "automation.sub": "Traiter l'IA comme un outil de production, pas un gadget — livrer de la vraie automatisation et des outils sur-mesure avec elle, pas juste discuter avec elle.",
    "automation.b1": "Ce site — contenu, structure, et le fond interactif — a été conçu et construit de bout en bout par pair-programming avec l'IA, itéré en direct plutôt qu'écrit à la main depuis zéro.",
    "automation.b2": "Même philosophie que <a href=\"https://github.com/Toxic-Joker/redteam-ai-framework\" target=\"_blank\" rel=\"noopener\">redteam-ai-framework</a> : l'IA propose et rédige, la logique déterministe et les preuves réelles décident — une automatisation à qui on peut faire confiance, pas une boîte noire.",
    "automation.b3": "Je construis des compétences Claude Code et des outils agentiques sur-mesure pour automatiser ce qui prenait des heures à la main — <a href=\"https://github.com/Toxic-Joker/security-checkup\" target=\"_blank\" rel=\"noopener\">security-checkup</a> en est un exemple public, le reste est ci-dessous.",

    "automation.lab.public": "Outil &middot; Public",
    "automation.lab.private": "Outil &middot; &#128274; Privé",
    "automation.lab.securitycheckup.desc": "Compétence d'audit de sécurité non-intrusif — PC, projets et GitHub, scoré et priorisé",
    "automation.lab.codevideo.desc": "Compétence Claude Code sur-mesure — enregistrement vocal vers vidéo courte animée",
    "automation.lab.videoeditor.desc": "Automatisation de montage vidéo assistée par IA",
    "automation.lab.jobscout.desc": "Outil de recherche d'emploi &amp; de tri automatisé",
    "automation.lab.claudeskills.desc": "Collection personnelle de compétences Claude Code",

    "coursework.sub": "Travaux pratiques d'un cursus de Master en cybersécurité.",
    "coursework.lab.public": "Cours",
    "coursework.lab.private": "Cours &middot; &#128274; Privé",
    "coursework.lab.malware.name": "Analyse de malwares",
    "coursework.lab.malware.desc": "Travaux pratiques d'analyse de malwares — module en cours",
    "coursework.lab.container.name": "Sécurité des conteneurs",
    "coursework.lab.container.desc": "Docker avancé, exploration d'images, standards de conteneurs",
    "coursework.lab.oshardening.name": "Durcissement OS",
    "coursework.lab.oshardening.desc": "Bases du durcissement, syscalls, isolation, SELinux",
    "coursework.lab.crypto.name": "Cryptographie",
    "coursework.lab.crypto.desc": "OpenSSL, PKI",
    "coursework.lab.network.name": "Sécurité réseau",
    "coursework.lab.network.desc": "Travaux pratiques Cisco / GNS3, VLAN, attaques réseau courantes",
    "coursework.lab.devsecops.name": "DevSecOps",
    "coursework.lab.devsecops.desc": "La sécurité intégrée au pipeline de livraison",

    "footer.close": "&gt; connexion fermée_",

    "meta.title": "Toxic-Joker // Red Team &amp; orchestration IA",
    "meta.description": "Toxic-Joker — Outillage red team & orchestration IA. Frameworks de sécurité multi-agents, durcissement OS, cryptographie, sécurité réseau."
  }
};
