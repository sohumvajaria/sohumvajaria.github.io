export type Project = {
  name: string;
  kind: string;
  cat: "hardware" | "software";
  status?: { label: string; tone?: "live" | "wip" };
  body: string;
  stack: string[];
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Tremora",
    kind: "Hardware · Startup",
    cat: "hardware",
    status: { label: "Co-founder & COO", tone: "wip" },
    featured: true,
    body: "A wrist-worn device that tracks Parkinson's tremors with gyroscopes and accelerometers, logging every session to SD for clinical review. I own the hardware stack from KiCad schematic to Onshape enclosure on a four person team, and took it to Atlanta Startup Village and a DC competition final this summer. After evaluating around 50 competing concepts, this is the one we committed to.",
    stack: ["KiCad", "IMU fusion", "Embedded C", "Onshape", "SD logging"],
  },
  {
    name: "Provide NC",
    kind: "Software · Civic",
    cat: "software",
    status: { label: "Live", tone: "live" },
    featured: true,
    body: "A statewide food access tool mapping benefit locations across North Carolina so families find resources near them without digging through agency sites. Submitted to the Congressional App Challenge under Rep. Alma Adams.",
    stack: ["Maps", "Public data"],
    href: "https://provide-nc.org/",
  },
  {
    name: "CTSO Center",
    kind: "Software · Education",
    cat: "software",
    status: { label: "Live", tone: "live" },
    body: "AI roleplay prep for DECA and FBLA competitors, built on the Claude API and tested with real DECA students.",
    stack: ["Claude API", "Next.js"],
    href: "https://ctso-center.vercel.app",
  },
  {
    name: "BioWire",
    kind: "Software · Health",
    cat: "software",
    status: { label: "Live", tone: "live" },
    body: "A daily biomedical intelligence brief, so the day's research and industry news lands in one calm read.",
    stack: ["Web", "Daily digest"],
    href: "https://biowire.app",
  },
  {
    name: "Beat Roulette",
    kind: "Software · Game",
    cat: "software",
    status: { label: "Live", tone: "live" },
    body: "A multiplayer music game where friends guess songs against each other in real time, with synced lyrics. Built with a team for the Audiotool LetsBuild hackathon.",
    stack: ["Next.js", "PartyKit", "Supabase"],
    href: "https://beatroulette.app",
  },
  {
    name: "Boil the Ocean",
    kind: "Software · Game",
    cat: "software",
    status: { label: "Live", tone: "live" },
    body: "Say corporate jargon into your mic and rack up points while an AI roasts you for it. Whisper transcribes, Grok does the roasting.",
    stack: ["Whisper", "Grok", "Web Audio"],
    href: "https://boiltheocean.com",
  },
  {
    name: "Jargonaut",
    kind: "Software · Legal",
    cat: "software",
    status: { label: "Hackathon" },
    body: "A legal document analyzer that translates dense contract language into plain English. Built at STEMINATE Hacks 2026 and deployed to Vercel.",
    stack: ["Next.js", "LLM analysis"],
  },
  {
    name: "Renoq",
    kind: "Software · iOS",
    cat: "software",
    status: { label: "Built" },
    body: "Native iOS voice capture. Speak once and it routes the note to your calendar or notes by reading the time words in what you said.",
    stack: ["Swift", "SpeechAnalyzer", "EventKit", "CloudKit"],
  },
  {
    name: "World Cup Picks",
    kind: "Software · Sports",
    cat: "software",
    status: { label: "Live", tone: "live" },
    body: "A soccer prediction app where friends make picks and compete on a live leaderboard.",
    stack: ["Next.js", "Supabase", "Vercel"],
  },
  {
    name: "Oreo",
    kind: "Hardware · Robotics",
    cat: "hardware",
    status: { label: "In progress", tone: "wip" },
    body: "A personal AI companion quadruped on the Sesame platform, running a local LLM (Qwen 2.5 3B via Ollama) with voice interaction as the core loop.",
    stack: ["Sesame", "Ollama", "Voice AI"],
  },
  {
    name: "CV Soldering Gantry",
    kind: "Hardware · Robotics",
    cat: "hardware",
    status: { label: "Built" },
    body: "A gantry that solders PCB pins on its own. OpenCV finds each pin and planar homography maps pixels to board coordinates, landing within 1.2mm for under $300.",
    stack: ["OpenCV", "Python", "Homography"],
  },
  {
    name: "Truss Inspection Bot",
    kind: "Hardware · Robotics",
    cat: "hardware",
    status: { label: "Built" },
    body: "An ESP32 robot that climbs steel warehouse trusses on magnetic mecanum wheels, carrying a thermal sensor to flag hot spots.",
    stack: ["ESP32", "Mecanum drive", "Thermal sensing"],
  },
  {
    name: "FTC Robot",
    kind: "Hardware · Competition",
    cat: "hardware",
    status: { label: "1st · Impact Award" },
    body: "CAD and build co-lead. Designed the spindexer and outtake from first sketch through competition assembly, with a drivetrain tuned for torque under match stress.",
    stack: ["Onshape", "Drivetrain", "FTC"],
  },
  {
    name: "Mamba Maze",
    kind: "Hardware · Competition",
    cat: "hardware",
    status: { label: "Built" },
    body: "A maze-solving robot with IR sensing and an OLED readout, built on an ESP32.",
    stack: ["ESP32", "IR sensors", "OLED"],
  },
];

export const experience = [
  {
    date: "2026 — Present",
    role: "Co-Founder & COO",
    org: "Tremora",
    body: "Wearable Parkinson's tremor monitor. I owned PCB design, electrical systems and CAD on a four person team, and pitched at Atlanta Startup Village and a DC competition final this summer. As technical work winds down, my role is moving to the business side.",
    tags: ["KiCad", "Onshape", "Embedded", "Startup"],
  },
  {
    date: "Summer 2026",
    role: "Engineering Intern",
    org: "Advanced Weapons Systems, Inc.",
    body: "Defense technology company, working on laser tracking and computer vision. Project details are under NDA.",
    tags: ["Computer vision", "Sensing"],
  },
  {
    date: "2025 — 2026",
    role: "CAD & Build Co-Lead",
    org: "FTC Robotics Team",
    body: "Took the spindexer and outtake system from design through competition assembly. The team won the Impact Award, 1st place.",
    tags: ["Onshape", "Mechanical", "FTC"],
  },
  {
    date: "2025 — 2026",
    role: "President",
    org: "Science Club",
    body: "Ran a 40+ member club with weekly meetings, growing membership 20% through hands-on workshops and mentoring newer members through their first projects.",
    tags: ["Leadership", "Mentoring"],
  },
];

export const awards = [
  { place: "3rd", name: "Science Bowl", scope: "National finals" },
  { place: "1st", name: "FTC Impact Award", scope: "FIRST Tech Challenge" },
  { place: "Nationalist", name: "US National Chemistry Olympiad", scope: "Top 1000 in the US" },
  { place: "Semifinalist", name: "US Biology Olympiad", scope: "National" },
  { place: "Submitted", name: "Congressional App Challenge", scope: "Provide NC, under Rep. Alma Adams" },
  { place: "Qualifier", name: "DECA Nationals", scope: "Business and entrepreneurship" },
  { place: "5th", name: "You Be The Chemist", scope: "National" },
  { place: "Top 100", name: "Physics Brawl", scope: "International" },
];

export const toolkit = {
  Hardware: ["KiCad", "Onshape", "ESP32", "Arduino", "Embedded C", "3D printing"],
  Software: ["Python", "OpenCV", "TypeScript", "Next.js", "Supabase", "Swift"],
};

export const EMAIL = "sohumvajaria@gmail.com";
export const GITHUB = "https://github.com/sohumvajaria";
