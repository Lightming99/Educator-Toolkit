// ==========================================
// 1. DOMAINS CONFIGURATION
// ==========================================
const DOMAINS = [
    { id: 'cs', name: 'Computer Science & IT' }, 
    { id: 'civil', name: 'Civil Engineering' },
    { id: 'eee', name: 'Electronics & Electrical' }, 
    { id: 'mech', name: 'Mechanical Engineering' },
    { id: 'commerce', name: 'Commerce & Finance' }, 
    { id: 'econ', name: 'Economics & Management' },
    { id: 'law', name: 'Law' }, 
    { id: 'edu', name: 'Education & Pedagogy' },
    { id: 'humanities', name: 'Humanities & Social Sciences' }, 
    { id: 'env', name: 'Environmental & Geo Sciences' }
];

// ==========================================
// 2. CATEGORIES CONFIGURATION
// ==========================================
const CATEGORIES = [
    "Teaching & Pedagogy", 
    "Domain-Specific Simulators", 
    "Data & Infrastructure", 
    "Research & Writing", 
    "AI Assistants", 
    "Grants & Upskilling"
];

// ==========================================
// 3. COMPLETE TOOL DATABASE (Highly Specific)
// ==========================================
const db = [
    // ---------------------------------------------------------
    // GRANTS, CLOUD CREDITS & UPSKILLING
    // ---------------------------------------------------------
    {
        id: "google-cloud-research-credits", 
        name: "Google Cloud Research Credits", 
        category: "Grants & Upskilling", 
        isOpenSource: false,
        overview: "A specialized grant program by Google awarding free cloud computing credits (up to $5,000 for Faculty, $1,000 for PhDs) to run heavy computational models, host datasets, or train AI.",
        whyItMatters: "University servers are often bogged down by a waitlist. This program allows educators and researchers to bypass campus IT and instantly deploy enterprise-grade servers, BigQuery databases, and TPUs (Tensor Processing Units) for their specific research entirely for free.",
        coreFeatures: [
            "Form Guidance Step 1: Go to edu.google.com/programs/credits/research/.",
            "Form Guidance Step 2: Register with your official university (.edu/.ac) email address to verify academic status.",
            "Form Guidance Step 3: Write a clear, 200-word proposal abstract. You MUST mention specific Google Cloud tools you plan to use (e.g., 'We will use Compute Engine for simulation and BigQuery for analyzing 50GB of census data').",
            "Form Guidance Step 4: Submit. Approval usually takes 2-4 weeks. You will receive a coupon code to activate in your GCP Billing console."
        ],
        costEligibility: "100% Free. Requires Faculty or PhD status at a degree-granting institution.", 
        registration: "Apply via Google for Education Portal.",
        officialLinks: { main: "https://edu.google.com/programs/credits/research/", docs: "https://cloud.google.com/docs" },
        disciplines: {
            cs: { title: "CS / AI Pedagogy", uses: ["Secure TPU grants to let your graduate students train large language models (LLMs) without hardware bottlenecks."] },
            env: { title: "Environmental Science", uses: ["Process decades of climate and weather data using Google Earth Engine integrated with GCP Cloud Storage."] },
            civil: { title: "Civil Engineering", uses: ["Run heavy finite element analysis (FEA) or fluid dynamics simulations on high-CPU cloud instances."] }
        }
    },
    {
        id: "coursera-finaid", 
        name: "Coursera Financial Aid Program", 
        category: "Grants & Upskilling", 
        isOpenSource: false,
        overview: "A highly accessible financial aid program allowing students and educators to access premium industry certifications (Google Data Analytics, DeepLearning.AI, IBM Data Science) absolutely free.",
        whyItMatters: "Educators can upskill themselves in modern technologies or integrate premium industry certificates into their syllabus by guiding students on how to legally bypass the paywall via aid applications.",
        coreFeatures: [
            "Form Guidance Step 1: Search for the specific course (not Specialization) on Coursera.",
            "Form Guidance Step 2: Do NOT click 'Enroll for Free'. Instead, click the small 'Financial aid available' link next to the enroll button.",
            "Form Guidance Step 3: Write two 150-word essays. Essay 1: Explain your educational status and lack of funds. Essay 2: Explain how this exact course will help your career/teaching.",
            "Form Guidance Step 4: The approval process takes exactly 15 days. Once approved, you get full access to graded assignments and the official certificate."
        ],
        costEligibility: "Free upon approval. Valid for up to 180 days per course.", 
        registration: "Apply per course directly on Coursera.",
        officialLinks: { main: "https://www.coursera.org/", docs: "https://www.coursera.org/support/financial-aid" },
        disciplines: {
            edu: { title: "Student Upskilling", uses: ["Assign students to apply for aid for the 'Google IT Support' certificate as an extra-credit semester project."] },
            commerce: { title: "Commerce Pedagogy", uses: ["Have students complete Wharton's 'Business Foundations' courses to supplement their degree."] },
            cs: { title: "CS Pedagogy", uses: ["Guide students to access Andrew Ng's 'Machine Learning' course for foundational theory alongside your lab practicals."] }
        }
    },
    {
        id: "amazon-sagemaker-studiolab-detailed", 
        name: "Amazon SageMaker Studio Lab", 
        category: "Data & Infrastructure", 
        isOpenSource: false,
        overview: "A completely free machine learning development environment provided by AWS. It offers persistent storage, pre-configured Jupyter Notebooks, and free CPU/GPU compute without ever asking for a credit card.",
        whyItMatters: "It bridges the equity gap in tech education. Students with low-end laptops can write code, train neural networks, and complete data science homework using Amazon's cloud hardware via a simple web browser.",
        coreFeatures: [
            "Form Guidance Step 1: Go to studiolab.sagemaker.aws and click 'Request Account'.",
            "Form Guidance Step 2: Use your university email. AWS prioritizes .edu/.ac domains for faster approval.",
            "Form Guidance Step 3: Approval takes 1 to 5 days. You receive 15GB of permanent storage.",
            "Usage: Spin up a CPU session (12 hours) or GPU session (4 hours). Sessions can be restarted instantly after they expire.",
            "GitHub Integration: Connects directly to GitHub so students can clone course repositories with one click."
        ],
        costEligibility: "100% Free. No AWS account or billing setup required.", 
        registration: "Request an account at the Studio Lab portal.",
        officialLinks: { main: "https://studiolab.sagemaker.aws/", docs: "https://docs.aws.amazon.com/sagemaker/latest/dg/studio-lab.html" },
        disciplines: {
            cs: { title: "CS Pedagogy", uses: ["Host classroom hackathons or teach Deep Learning without requiring IT to install Python/Conda on university machines."] },
            econ: { title: "Econometrics", uses: ["Run heavy statistical models in Python (Pandas/Statsmodels) directly in the browser."] },
            mech: { title: "Mechanical Eng", uses: ["Process heavy predictive maintenance and vibration analysis datasets via Python notebooks."] }
        }
    },
    {
        id: "google-opensource", 
        name: "Google Open Source & GSoC", 
        category: "Data & Infrastructure", 
        isOpenSource: true,
        overview: "The central hub for all of Google's open-source projects (TensorFlow, Kubernetes, Flutter) and the home of the Google Summer of Code (GSoC) program.",
        whyItMatters: "Integrating true open-source projects into the curriculum shifts students from 'writing code for grades' to 'writing code for global impact'. GSoC also provides paid stipends for students.",
        coreFeatures: [
            "Access to massive repositories of industry-standard code.",
            "GSoC Application Step 1: Students browse the list of mentoring organizations announced in February.",
            "GSoC Application Step 2: Students interact with the org via Discord, fix a 'good first issue', and write a proposal.",
            "GSoC Application Step 3: If selected, Google pays a stipend while the student is mentored by industry professionals."
        ],
        costEligibility: "100% Free software. GSoC pays students a stipend.", 
        registration: "GSoC requires formal application during the spring window.",
        officialLinks: { main: "https://opensource.google/", docs: "https://summerofcode.withgoogle.com/" },
        disciplines: {
            cs: { title: "Software Engineering Pedagogy", uses: ["Assign students to analyze the architecture of Google's open-source Kubernetes repositories.", "Mentor students on writing GSoC proposals as part of a Capstone project."] },
            eee: { title: "Hardware / IoT Pedagogy", uses: ["Utilize Google's OpenTitan (open-source silicon project) documentation to teach hardware security."] }
        }
    },

    // ---------------------------------------------------------
    // UNIVERSAL RESEARCH & WRITING
    // ---------------------------------------------------------
    {
        id: "zotero", 
        name: "Zotero", 
        category: "Research & Writing", 
        isOpenSource: true,
        overview: "A free, open-source tool to collect, organize, annotate, cite, and share research.",
        whyItMatters: "Eliminates the friction of manual referencing for students and faculty. Essential for teaching proper academic integrity and citation hygiene.",
        coreFeatures: [
            "Browser extension saves papers instantly with full metadata.", 
            "Generates bibliographies in 10,000+ styles natively in MS Word/Google Docs.", 
            "Group libraries allow you to distribute classroom reading lists instantly."
        ],
        costEligibility: "100% Free Software. (Cloud sync limits apply, 300MB free).", 
        registration: "Download at zotero.org",
        officialLinks: { main: "https://www.zotero.org/", docs: "https://www.zotero.org/support/" },
        disciplines: {
            cs: { title: "CS Pedagogy", uses: ["Extract metadata automatically from arXiv."] },
            law: { title: "Law Pedagogy", uses: ["Teach Bluebook formatting using Zotero's legal citation plugins."] },
            humanities: { title: "Humanities Pedagogy", uses: ["Build shared departmental libraries of primary historical sources."] },
            edu: { title: "Education Pedagogy", uses: ["Teach incoming freshmen foundational literature review skills."] }
        }
    },

    // ---------------------------------------------------------
    // HUMANITIES & SOCIAL SCIENCES SPECIFIC
    // ---------------------------------------------------------
    {
        id: "voyant-tools", 
        name: "Voyant Tools", 
        category: "Data & Infrastructure", 
        isOpenSource: true,
        overview: "A web-based reading and analysis environment for digital texts. It requires no installation or coding.",
        whyItMatters: "Allows Humanities educators to introduce students to 'Digital Humanities' and text mining without requiring them to learn Python or R.",
        coreFeatures: [
            "Word clouds and frequency trends across hundreds of documents.", 
            "Collocation analysis (seeing which words appear together).", 
            "Visualizes text density and emotional arc across a corpus."
        ],
        costEligibility: "100% Free and browser-based.", 
        registration: "None required.",
        officialLinks: { main: "https://voyant-tools.org/", docs: "https://voyant-tools.org/docs/" },
        disciplines: {
            humanities: { title: "Literature & History", uses: ["Upload a corpus of 19th-century literature and have students analyze gendered word frequencies.", "Analyze historical political speeches for shifting rhetorical trends."] },
            law: { title: "Legal Text Analysis", uses: ["Analyze massive bodies of constitutional text to find recurring semantic patterns in early drafts."] },
            edu: { title: "Qualitative Analysis", uses: ["Analyze qualitative student feedback or interview transcripts visually."] }
        }
    },

    // ---------------------------------------------------------
    // EDUCATION & PEDAGOGY SPECIFIC
    // ---------------------------------------------------------
    {
        id: "h5p", 
        name: "H5P (Interactive Content)", 
        category: "Teaching & Pedagogy", 
        isOpenSource: true,
        overview: "A framework that allows educators to easily create, share, and reuse interactive HTML5 content directly within their LMS (Moodle, Canvas, WordPress).",
        whyItMatters: "Passive video lectures lead to student disengagement. H5P allows educators to embed quizzes, interactive timelines, and hotspots directly into their teaching materials, forcing active recall.",
        coreFeatures: [
            "Interactive Video: Quizzes pop up during video playback.", 
            "Drag and drop sorting tasks.", 
            "Virtual 360-degree tours.", 
            "Seamless LMS integration via LTI standard."
        ],
        costEligibility: "Free via plugin for Moodle/WordPress. Paid hosted version available.", 
        registration: "Download plugin or use h5p.org.",
        officialLinks: { main: "https://h5p.org/", docs: "https://h5p.org/documentation" },
        disciplines: {
            edu: { title: "Teacher Training", uses: ["Train future teachers on how to build interactive, universally designed (UDL) digital modules."] },
            humanities: { title: "History Pedagogy", uses: ["Create interactive image hotspots on historical maps or paintings for students to explore context."] },
            env: { title: "Env Science Pedagogy", uses: ["Create interactive before/after image sliders showing glacial retreat over decades."] }
        }
    },

    // ---------------------------------------------------------
    // LAW SPECIFIC
    // ---------------------------------------------------------
    {
        id: "courtlistener", 
        name: "CourtListener (Free Law Project)", 
        category: "Data & Infrastructure", 
        isOpenSource: true,
        overview: "A massive, open-source database of legal opinions, federal judge profiles, and judicial financial records.",
        whyItMatters: "Traditional legal databases (Westlaw/LexisNexis) are incredibly expensive and closed off. CourtListener democratizes access to primary legal documents for teaching empirical legal research and data science in law.",
        coreFeatures: [
            "Millions of searchable legal opinions.", 
            "Bulk data downloads via REST API for research.", 
            "Citation graphs showing visually how cases rely on each other."
        ],
        costEligibility: "100% Free.", 
        registration: "Optional. Required for advanced API limits.",
        officialLinks: { main: "https://www.courtlistener.com/", docs: "https://free.law/" },
        disciplines: {
            law: { title: "Empirical Law Pedagogy", uses: ["Assign students to bulk-download opinions for empirical legal research projects without paying PACER fees.", "Teach students how to build citation network graphs of Supreme Court precedents."] }
        }
    },

    // ---------------------------------------------------------
    // ELECTRONICS & PHYSICS SPECIFIC
    // ---------------------------------------------------------
    {
        id: "falstad", 
        name: "Falstad Circuit Simulator", 
        category: "Domain-Specific Simulators", 
        isOpenSource: true,
        overview: "An educational, browser-based electronic circuit simulator. It visualizes current flow dynamically.",
        whyItMatters: "Physical labs are expensive, components burn out, and abstract concepts are hard to grasp. Falstad provides an immediate, visual, and safe way for students to grasp abstract concepts like alternating current and logic gates.",
        coreFeatures: [
            "Real-time animated visual current flow.", 
            "Built-in oscilloscope view for analyzing voltage/current spikes.", 
            "Hundreds of pre-built circuits (from simple Ohm's Law to complex 555 Timers)."
        ],
        costEligibility: "100% Free.", 
        registration: "None required. Runs in browser.",
        officialLinks: { main: "https://www.falstad.com/circuit/", docs: "https://www.falstad.com/circuit/directions.html" },
        disciplines: {
            eee: { title: "EEE Pedagogy", uses: ["Project the simulator on a smartboard to visually demonstrate voltage drops in an AC circuit.", "Have students design and test logic gates before breadboarding them in the physical lab."] },
            cs: { title: "Hardware Architecture", uses: ["Visually teach Boolean logic and computer architecture components like adders and multiplexers."] }
        }
    },

    // ---------------------------------------------------------
    // ENGINEERING (CIVIL / MECH) SPECIFIC
    // ---------------------------------------------------------
    {
        id: "onshape-edu", 
        name: "Onshape Education", 
        category: "Domain-Specific Simulators", 
        isOpenSource: false,
        overview: "A fully cloud-based 3D CAD platform. It runs entirely in the browser, eliminating the need for expensive computer labs or massive software downloads.",
        whyItMatters: "Traditional CAD (SolidWorks/AutoCAD) requires high-end Windows PCs. Onshape runs on cheap Chromebooks, allowing all students equal access to professional engineering tools to do their homework anywhere.",
        coreFeatures: [
            "Real-time collaborative CAD (Google Docs but for 3D modeling).", 
            "Built-in version control and branching.", 
            "Runs on any OS (Mac, Linux, ChromeOS) natively in Chrome/Firefox."
        ],
        costEligibility: "Free for students and educators.", 
        registration: "Sign up with an institutional email.",
        officialLinks: { main: "https://www.onshape.com/en/education/", docs: "https://learn.onshape.com/" },
        disciplines: {
            mech: { title: "Mechanical Eng Pedagogy", uses: ["Host collaborative design assignments where multiple students work on the same engine assembly simultaneously in the browser."] },
            civil: { title: "Civil Eng Pedagogy", uses: ["Teach basic 3D structural modeling and beam deflection analysis without dealing with complex software licensing."] }
        }
    },

    // ---------------------------------------------------------
    // ECONOMICS & COMMERCE SPECIFIC
    // ---------------------------------------------------------
    {
        id: "fred", 
        name: "FRED (Federal Reserve Economic Data)", 
        category: "Data & Infrastructure", 
        isOpenSource: true,
        overview: "A massive database of hundreds of thousands of economic time series from dozens of national and international sources, maintained by the St. Louis Fed.",
        whyItMatters: "It provides educators and students with real-world, authoritative macro and microeconomic data to test economic theories in the classroom, replacing static textbook examples.",
        coreFeatures: [
            "Customizable interactive graphs directly on the website.", 
            "Excel add-in for easy data pulling directly into spreadsheets.", 
            "API access for integrating live economic data into Python/R scripts."
        ],
        costEligibility: "100% Free.", 
        registration: "Optional (required only for saving custom dashboards).",
        officialLinks: { main: "https://fred.stlouisfed.org/", docs: "https://fred.stlouisfed.org/help" },
        disciplines: {
            econ: { title: "Economics Pedagogy", uses: ["Have students pull live inflation and unemployment data to test the Phillips Curve in Excel or R.", "Create customized macroeconomic dashboards for class discussions on monetary policy."] },
            commerce: { title: "Commerce Pedagogy", uses: ["Analyze historical interest rates against stock market indices to teach corporate finance risk."] }
        }
    },

    // ---------------------------------------------------------
    // GEOGRAPHY & ENVIRONMENTAL SPECIFIC
    // ---------------------------------------------------------
    {
        id: "qgis", 
        name: "QGIS", 
        category: "Data & Infrastructure", 
        isOpenSource: true,
        overview: "A free and open-source Geographic Information System (GIS) application that supports viewing, editing, and analysis of geospatial data.",
        whyItMatters: "Commercial GIS software (like Esri ArcGIS) is incredibly expensive for universities. QGIS allows departments to teach spatial analysis, urban planning, and environmental tracking at zero cost.",
        coreFeatures: [
            "Advanced vector and raster data analysis.", 
            "Integration with PostGIS databases.", 
            "Thousands of community-built plugins for specialized mapping tasks."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Download client.",
        officialLinks: { main: "https://qgis.org/", docs: "https://docs.qgis.org/" },
        disciplines: {
            env: { title: "Env Science Pedagogy", uses: ["Teach students how to map local watersheds or track urban heat islands using open satellite data."] },
            civil: { title: "Civil Planning Pedagogy", uses: ["Overlay topographic maps with proposed infrastructural routes for highway planning courses."] },
            humanities: { title: "Spatial History Pedagogy", uses: ["Teach 'Spatial History' by mapping 18th-century census data onto historical city layouts."] }
        }
    },
    {
        id: "earth-engine", 
        name: "Google Earth Engine", 
        category: "Data & Infrastructure", 
        isOpenSource: false,
        overview: "A planetary-scale platform for earth science data & analysis. Combines a multi-petabyte catalog of satellite imagery (Landsat, Sentinel) with cloud-based analysis.",
        whyItMatters: "Downloading satellite imagery used to take weeks. GEE allows researchers and educators to run global-scale environmental analyses in seconds directly in the browser.",
        coreFeatures: [
            "Petabytes of pre-loaded Earth Observation data.", 
            "JavaScript Code Editor for fast algorithmic testing.", 
            "Python API for deep learning integration."
        ],
        costEligibility: "Free for academic, non-commercial, and research use.", 
        registration: "Apply at earthengine.google.com using academic credentials.",
        officialLinks: { main: "https://earthengine.google.com/", docs: "https://developers.google.com/earth-engine" },
        disciplines: {
            env: { title: "Climate Analysis", uses: ["Calculate global deforestation rates or map surface water changes interactively in the classroom."] },
            econ: { title: "Development Economics", uses: ["Use nighttime light intensity satellite data as a proxy to estimate GDP in developing regions."] },
            civil: { title: "Infrastructural Monitoring", uses: ["Monitor urban expansion and infrastructural settlement/sinking over 20 years."] }
        }
    },

    // ---------------------------------------------------------
    // AI ASSISTANT SPECIFIC
    // ---------------------------------------------------------
    {
        id: "notebooklm", 
        name: "NotebookLM", 
        category: "AI Assistants", 
        isOpenSource: false,
        overview: "Google's AI personalized research assistant that grounds its answers ONLY in the documents, PDFs, and text you upload.",
        whyItMatters: "Solves the 'AI hallucination' problem in education. Educators can upload their specific syllabus, rubrics, and readings to create a safe, bounded study tutor for students.",
        coreFeatures: [
            "Strict Source Grounding: Will refuse to answer if the info isn't in your uploaded PDF.", 
            "Inline Citations: Cites the exact paragraph in your document.", 
            "Audio Overview: Generates an engaging 10-minute podcast discussing your uploaded research paper."
        ],
        costEligibility: "Free with any standard Google Account.", 
        registration: "Sign in at notebooklm.google.com.",
        officialLinks: { main: "https://notebooklm.google.com", docs: "https://support.google.com/notebooklm" },
        disciplines: {
            law: { title: "Legal AI Pedagogy", uses: ["Upload course case law so students can query relationships between specific judgments without the AI referencing outside, irrelevant law."] },
            commerce: { title: "Commerce Pedagogy", uses: ["Upload 200-page corporate financial reports for students to practice extracting specific risk factors."] },
            humanities: { title: "Literature Pedagogy", uses: ["Upload course anthologies to help students draw thematic connections across semester readings."] },
            edu: { title: "Teacher Workflows", uses: ["Upload state curriculum standards to automatically generate aligned lesson plan outlines and grading rubrics."] }
        }
    },
    // ---------------------------------------------------------
    // 1. COMPUTER SCIENCE & IT (2 New Open-Source Tools)
    // ---------------------------------------------------------
    {
        id: "jupyterhub", 
        name: "JupyterHub", 
        category: "Data & Infrastructure", 
        isOpenSource: true,
        overview: "A multi-user version of Jupyter Notebooks designed for classrooms, research labs, and entire institutions.",
        whyItMatters: "Instead of spending the first two weeks of a semester troubleshooting Python, pip, and environment variables on 50 different student laptops, educators can deploy one JupyterHub server. Students just log in via a browser and start coding immediately.",
        coreFeatures: [
            "Centralized compute: Runs on the university server, meaning students can code on cheap Chromebooks.",
            "Pre-configured environments: The professor installs the required libraries (e.g., PyTorch) once, and everyone gets access.",
            "LMS Integration: Plugs natively into Canvas or Moodle."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Deployed locally by university IT or educators.",
        officialLinks: { main: "https://jupyter.org/hub", docs: "https://jupyterhub.readthedocs.io/" },
        disciplines: {
            cs: { title: "Data Science Pedagogy", uses: ["Host a standardized Python environment for an introductory programming course so all students have identical setups."] }
        }
    },
    {
        id: "godot-engine", 
        name: "Godot Engine", 
        category: "Domain-Specific Simulators", 
        isOpenSource: true,
        overview: "A completely free and open-source 2D and 3D game engine and simulation environment.",
        whyItMatters: "Commercial engines like Unity recently changed their pricing models, causing chaos in academia. Godot is entirely open-source (MIT license), meaning universities own their code forever, making it the safest pedagogical choice for teaching interactive media.",
        coreFeatures: [
            "Visual scripting and Python-like GDScript.",
            "Robust 3D physics engine for building realistic simulations.",
            "Runs perfectly on low-end hardware."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Download client (no account required).",
        officialLinks: { main: "https://godotengine.org/", docs: "https://docs.godotengine.org/" },
        disciplines: {
            cs: { title: "Interactive Media Pedagogy", uses: ["Teach object-oriented programming (OOP) by having students build interactive physics simulations or games."] }
        }
    },

    // ---------------------------------------------------------
    // 2. CIVIL ENGINEERING (2 New Open-Source Tools)
    // ---------------------------------------------------------
    {
        id: "freecad-bim", 
        name: "FreeCAD (BIM Workbench)", 
        category: "Domain-Specific Simulators", 
        isOpenSource: true,
        overview: "A highly customizable 3D parametric modeler with a dedicated Building Information Modeling (BIM) workspace.",
        whyItMatters: "AutoCAD and Revit licenses lock students into a commercial ecosystem. FreeCAD allows educators to teach the foundational mathematical concepts of parametric modeling and BIM without vendor lock-in.",
        coreFeatures: [
            "Full parametric modeling history (change a wall thickness, the whole building updates).",
            "Native support for IFC (Industry Foundation Classes) open standards.",
            "Python API for automating structural designs."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Download client.",
        officialLinks: { main: "https://www.freecadweb.org/", docs: "https://wiki.freecad.org/BIM_Workbench" },
        disciplines: {
            civil: { title: "BIM Pedagogy", uses: ["Assign students to design and structurally evaluate a multi-story building using open IFC standards."] }
        }
    },
    {
        id: "opensees", 
        name: "OpenSees", 
        category: "Domain-Specific Simulators", 
        isOpenSource: true,
        overview: "The Open System for Earthquake Engineering Simulation. It is a software framework for simulating the seismic response of structural and geotechnical systems.",
        whyItMatters: "It is the gold standard for earthquake engineering research globally. Teaching this prepares students for high-level infrastructure design and disaster mitigation.",
        coreFeatures: [
            "Advanced non-linear finite element analysis.",
            "Simulates behavior of soils and concrete under seismic loads.",
            "Scriptable via Tcl or Python."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Download client.",
        officialLinks: { main: "https://opensees.berkeley.edu/", docs: "https://opensees.berkeley.edu/wiki/" },
        disciplines: {
            civil: { title: "Structural Dynamics Pedagogy", uses: ["Run classroom simulations of how different bridge pier designs respond to historical earthquake data (e.g., the 1989 Loma Prieta quake)."] }
        }
    },

    // ---------------------------------------------------------
    // 3. ELECTRONICS & ELECTRICAL (2 New Open-Source Tools)
    // ---------------------------------------------------------
    {
        id: "kicad", 
        name: "KiCad EDA", 
        category: "Domain-Specific Simulators", 
        isOpenSource: true,
        overview: "A cross-platform, open-source electronics design automation (EDA) suite for designing schematics and printed circuit boards (PCBs).",
        whyItMatters: "Used by CERN for particle accelerator designs, KiCad proves open-source can handle enterprise hardware. It allows educators to teach PCB routing from schematic to manufacturing file (Gerber) for free.",
        coreFeatures: [
            "Schematic capture and interactive 3D PCB viewer.",
            "Built-in electrical rule checking (ERC).",
            "No artificial limits on board size or layers (unlike commercial free tiers)."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Download client.",
        officialLinks: { main: "https://www.kicad.org/", docs: "https://docs.kicad.org/" },
        disciplines: {
            eee: { title: "Hardware Pedagogy", uses: ["Have students design a custom Arduino shield, route the PCB, and view it in 3D before sending it to a fab lab."] }
        }
    },
    {
        id: "ngspice", 
        name: "Ngspice", 
        category: "Domain-Specific Simulators", 
        isOpenSource: true,
        overview: "An open-source mixed-level, mixed-signal circuit simulator based on the original Berkeley SPICE3.",
        whyItMatters: "It is the mathematical engine behind almost all electronic simulations. Teaching students the raw SPICE syntax prepares them for any commercial EDA tool.",
        coreFeatures: [
            "Non-linear DC, non-linear transient, and linear AC analyses.",
            "Integrates easily into Python for programmatic circuit testing.",
            "Extremely lightweight."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Download client.",
        officialLinks: { main: "https://ngspice.sourceforge.io/", docs: "https://ngspice.sourceforge.io/docs.html" },
        disciplines: {
            eee: { title: "Circuit Analysis Pedagogy", uses: ["Assign complex circuit frequency response homework where students must write raw SPICE netlists instead of relying on drag-and-drop GUIs."] }
        }
    },

    // ---------------------------------------------------------
    // 4. MECHANICAL ENGINEERING (2 New Open-Source Tools)
    // ---------------------------------------------------------
    {
        id: "openfoam", 
        name: "OpenFOAM", 
        category: "Domain-Specific Simulators", 
        isOpenSource: true,
        overview: "The leading free, open-source software for Computational Fluid Dynamics (CFD).",
        whyItMatters: "Commercial CFD software is notoriously expensive. OpenFOAM gives students unlimited access to solve anything from complex fluid flows involving chemical reactions to solid dynamics and electromagnetics.",
        coreFeatures: [
            "Simulates turbulence, heat transfer, and fluid mechanics.",
            "Massively parallel processing (can run on supercomputers).",
            "Command-line driven, teaching students the underlying physics."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Download client.",
        officialLinks: { main: "https://www.openfoam.com/", docs: "https://www.openfoam.com/documentation" },
        disciplines: {
            mech: { title: "Fluid Dynamics Pedagogy", uses: ["Have students model the aerodynamic drag on a custom car chassis or the thermal dissipation of a CPU heatsink."] }
        }
    },
    {
        id: "code-aster", 
        name: "Code_Aster", 
        category: "Domain-Specific Simulators", 
        isOpenSource: true,
        overview: "An open-source software package for civil and structural engineering, finite element analysis (FEA), and numerical simulation.",
        whyItMatters: "Developed by the French electricity network for nuclear reactor analysis, it is incredibly rigorous. It teaches students enterprise-grade stress and thermal analysis without commercial software costs.",
        coreFeatures: [
            "Advanced 3D thermal and mechanical FEA.",
            "Used for fracture mechanics and fatigue analysis.",
            "Usually bundled with Salome-Meca for a visual GUI."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Download client.",
        officialLinks: { main: "https://code-aster.org/", docs: "https://code-aster.org/V2/spip.php?rubrique2" },
        disciplines: {
            mech: { title: "Solid Mechanics Pedagogy", uses: ["Assign students to calculate the structural fatigue of a load-bearing engine bracket under thermal stress."] }
        }
    },

    // ---------------------------------------------------------
    // 5. COMMERCE & FINANCE (2 New Open-Source Tools)
    // ---------------------------------------------------------
    {
        id: "metabase", 
        name: "Metabase", 
        category: "Data & Infrastructure", 
        isOpenSource: true,
        overview: "An open-source business intelligence (BI) tool that lets you create interactive dashboards and visualize databases without SQL knowledge.",
        whyItMatters: "Data analytics is vital in modern commerce. Metabase allows business educators to teach dashboarding, KPIs, and data storytelling without relying on expensive Tableau or PowerBI licenses.",
        coreFeatures: [
            "Connects directly to raw CSVs or databases.",
            "Drag-and-drop dashboard creation.",
            "Allows filtering and drill-down into financial metrics."
        ],
        costEligibility: "100% Free and Open Source (Self-Hosted).", 
        registration: "Download the local JAR file.",
        officialLinks: { main: "https://www.metabase.com/", docs: "https://www.metabase.com/docs/latest/" },
        disciplines: {
            commerce: { title: "Business Analytics Pedagogy", uses: ["Provide students with a massive retail dataset and assign them to build a live BI dashboard tracking quarterly revenue and customer churn."] }
        }
    },
    {
        id: "gnucash", 
        name: "GnuCash", 
        category: "Data & Infrastructure", 
        isOpenSource: true,
        overview: "Open-source financial-accounting software implementing a double-entry bookkeeping system.",
        whyItMatters: "It provides a raw, transparent look into how accounting software works under the hood. It is perfect for teaching the fundamentals of ledgers without the automation hand-holding of modern SaaS tools.",
        coreFeatures: [
            "Strict double-entry accounting.",
            "Generates standard Balance Sheets and Profit & Loss reports.",
            "Handles multiple currencies and stock portfolios."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Download client.",
        officialLinks: { main: "https://www.gnucash.org/", docs: "https://www.gnucash.org/docs.phtml" },
        disciplines: {
            commerce: { title: "Accounting Pedagogy", uses: ["Assign students a fictional company's monthly transactions and have them manually manage the ledger and generate a reconciled balance sheet."] }
        }
    },

    // ---------------------------------------------------------
    // 6. ECONOMICS & MANAGEMENT (2 New Open-Source Tools)
    // ---------------------------------------------------------
    {
        id: "gretl", 
        name: "gretl", 
        category: "Data & Infrastructure", 
        isOpenSource: true,
        overview: "Gnu Regression, Econometrics and Time-series Library. A cross-platform software package for econometric analysis.",
        whyItMatters: "Commercial tools like STATA or EViews cost hundreds of dollars. gretl is specifically built for econometrics, incredibly lightweight, and completely free, ensuring equitable access to data tools.",
        coreFeatures: [
            "Wide variety of estimators: least squares, maximum likelihood, GMM.",
            "Time series methods: ARMA, GARCH, VARs.",
            "Outputs models in LaTeX format for academic papers."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Download client.",
        officialLinks: { main: "https://gretl.sourceforge.net/", docs: "https://gretl.sourceforge.net/manuals.html" },
        disciplines: {
            econ: { title: "Econometrics Pedagogy", uses: ["Teach students how to run time-series regressions on inflation data and export the equations directly into their thesis papers."] }
        }
    },
    {
        id: "rstudio-open", 
        name: "RStudio (Posit) Open Source", 
        category: "Data & Infrastructure", 
        isOpenSource: true,
        overview: "The premier open-source Integrated Development Environment (IDE) for R, the statistical programming language.",
        whyItMatters: "R is the lingua franca of economic and statistical research. RStudio makes teaching R accessible by wrapping it in an intuitive GUI that handles plots, variables, and code simultaneously.",
        coreFeatures: [
            "Interactive data viewer and plotting window.",
            "RMarkdown integration for generating reproducible research reports.",
            "Massive ecosystem of economic libraries (e.g., quantmod)."
        ],
        costEligibility: "100% Free Open Source Edition.", 
        registration: "Download client.",
        officialLinks: { main: "https://posit.co/download/rstudio-desktop/", docs: "https://docs.posit.co/" },
        disciplines: {
            econ: { title: "Quantitative Econ Pedagogy", uses: ["Assign students to use RMarkdown to write an economics paper where the math, data visualization, and text are all compiled from a single script."] }
        }
    },

    // ---------------------------------------------------------
    // 7. LAW (2 New Open-Source Tools)
    // ---------------------------------------------------------
    {
        id: "docassemble", 
        name: "Docassemble", 
        category: "Data & Infrastructure", 
        isOpenSource: true,
        overview: "A free, open-source expert system for guided interviews and legal document assembly.",
        whyItMatters: "Law is shifting towards 'Legal Tech'. Docassemble allows law professors to teach computational law, where students build web apps that interview clients and automatically draft legal documents.",
        coreFeatures: [
            "Uses Markdown and Python for logical routing.",
            "Outputs complex, formatted PDF and Word legal documents.",
            "Can integrate directly with e-signature APIs."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Requires local or cloud server installation.",
        officialLinks: { main: "https://docassemble.org/", docs: "https://docassemble.org/docs.html" },
        disciplines: {
            law: { title: "Legal Tech Pedagogy", uses: ["Have clinical law students build a web app that asks low-income tenants questions and automatically generates a legally binding eviction defense letter."] }
        }
    },
    {
        id: "juris-m", 
        name: "Juris-M", 
        category: "Research & Writing", 
        isOpenSource: true,
        overview: "A variant of Zotero specifically rebuilt for legal scholars. It handles the incredibly complex multi-jurisdictional rules of legal citations.",
        whyItMatters: "Standard reference managers fail at legal citations (like the Bluebook or OSCOLA). Juris-M is built specifically to handle parallel citations, court hierarchies, and international law.",
        coreFeatures: [
            "Native support for the Bluebook, OSCOLA, and ALWD.",
            "Handles multilingual legal databases and translations.",
            "Syncs perfectly with standard Zotero accounts."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Download client.",
        officialLinks: { main: "https://juris-m.github.io/", docs: "https://juris-m.github.io/manual/" },
        disciplines: {
            law: { title: "Legal Writing Pedagogy", uses: ["Mandate Juris-M for first-year legal writing courses to ensure students learn how to properly manage massive databases of case law and statutes."] }
        }
    },

    // ---------------------------------------------------------
    // 8. EDUCATION & PEDAGOGY (2 New Open-Source Tools)
    // ---------------------------------------------------------
    {
        id: "moodle", 
        name: "Moodle", 
        category: "Teaching & Pedagogy", 
        isOpenSource: true,
        overview: "The world's most popular open-source Learning Management System (LMS).",
        whyItMatters: "Understanding Moodle allows educators to fully grasp the mechanics of instructional design, SCORM compliance, and student tracking without relying on proprietary systems like Canvas or Blackboard.",
        coreFeatures: [
            "Deeply customizable course structures and grading rubrics.",
            "Massive plugin ecosystem for gamification and tracking.",
            "Allows offline learning via the Moodle app."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Deploy locally or use a hosting provider.",
        officialLinks: { main: "https://moodle.org/", docs: "https://docs.moodle.org/" },
        disciplines: {
            edu: { title: "Instructional Design Pedagogy", uses: ["Have student-teachers build and deploy their own fully functional digital course, complete with adaptive quizzes and peer-review modules."] }
        }
    },
    {
        id: "bigbluebutton", 
        name: "BigBlueButton", 
        category: "Teaching & Pedagogy", 
        isOpenSource: true,
        overview: "An open-source web conferencing system designed specifically for online learning.",
        whyItMatters: "Zoom and Teams are corporate tools. BigBlueButton was built by educators for educators. It focuses entirely on pedagogical features rather than business meetings.",
        coreFeatures: [
            "Multi-user interactive whiteboard.",
            "Built-in polling and breakout rooms.",
            "Deep native integration with LMS platforms like Moodle and Canvas."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Requires server hosting.",
        officialLinks: { main: "https://bigbluebutton.org/", docs: "https://docs.bigbluebutton.org/" },
        disciplines: {
            edu: { title: "Virtual Pedagogy", uses: ["Train future educators on how to manage remote classrooms using interactive whiteboards and live polling to maintain student engagement."] }
        }
    },

    // ---------------------------------------------------------
    // 9. HUMANITIES & SOCIAL SCIENCES (2 New Open-Source Tools)
    // ---------------------------------------------------------
    {
        id: "omeka", 
        name: "Omeka", 
        category: "Teaching & Pedagogy", 
        isOpenSource: true,
        overview: "A free, open-source web publishing platform for sharing digital collections and creating media-rich online exhibits.",
        whyItMatters: "Instead of writing traditional term papers, Omeka allows Humanities students to act as digital curators, learning how to present historical or cultural artifacts to the public.",
        coreFeatures: [
            "Uses Dublin Core metadata standards (vital for library sciences).",
            "Plugins for interactive mapping and timelines.",
            "Easily handles images, audio, and video archives."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Download for local hosting or use Omeka.net.",
        officialLinks: { main: "https://omeka.org/", docs: "https://omeka.org/classic/docs/" },
        disciplines: {
            humanities: { title: "Digital Humanities Pedagogy", uses: ["Assign a final project where students build a public digital museum exhibit using primary historical documents they have digitized and tagged."] }
        }
    },
    {
        id: "gephi", 
        name: "Gephi", 
        category: "Data & Infrastructure", 
        isOpenSource: true,
        overview: "The leading open-source software for network visualization and exploration. It is like 'Photoshop for graphs'.",
        whyItMatters: "Social sciences increasingly rely on network analysis (e.g., tracking misinformation on social media or historical correspondence). Gephi makes this accessible without requiring complex coding.",
        coreFeatures: [
            "Real-time visualization of massive networks (up to 100,000 nodes).",
            "Calculates social network metrics (betweenness, centrality).",
            "Dynamic filtering and spatial layouts."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Download client.",
        officialLinks: { main: "https://gephi.org/", docs: "https://gephi.org/users/" },
        disciplines: {
            humanities: { title: "Sociology & History Pedagogy", uses: ["Have students visualize the correspondence networks of the Founding Fathers, or map the spread of a specific hashtag during a political election."] }
        }
    },

    // ---------------------------------------------------------
    // 10. ENVIRONMENTAL & GEO SCIENCES (2 New Open-Source Tools)
    // ---------------------------------------------------------
    {
        id: "grass-gis", 
        name: "GRASS GIS", 
        category: "Data & Infrastructure", 
        isOpenSource: true,
        overview: "Geographic Resources Analysis Support System. A free and open-source GIS software suite used for geospatial data management and analysis.",
        whyItMatters: "While QGIS is great for mapping, GRASS is a powerhouse for hardcore environmental modeling, raster analysis, and topological calculations.",
        coreFeatures: [
            "Over 350 core modules for image processing and terrain analysis.",
            "Deep integration with Python and R.",
            "Handles massive satellite datasets natively."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Download client.",
        officialLinks: { main: "https://grass.osgeo.org/", docs: "https://grass.osgeo.org/documentation/" },
        disciplines: {
            env: { title: "Spatial Analysis Pedagogy", uses: ["Teach students how to perform complex hydrological modeling, such as predicting flood basin runoff after heavy rainfall."] }
        }
    },
    {
        id: "invest-models", 
        name: "InVEST", 
        category: "Domain-Specific Simulators", 
        isOpenSource: true,
        overview: "Integrated Valuation of Ecosystem Services and Tradeoffs. A suite of free, open-source software models used to map and value the goods and services from nature.",
        whyItMatters: "Developed by the Natural Capital Project (Stanford), it allows educators to bridge the gap between ecology and economics, showing students how to put a quantifiable value on environmental conservation.",
        coreFeatures: [
            "Models carbon sequestration, coastal vulnerability, and water yield.",
            "Outputs map-based results showing the spatial distribution of ecosystem services.",
            "Runs as a standalone tool or integrates with GIS."
        ],
        costEligibility: "100% Free and Open Source.", 
        registration: "Download client.",
        officialLinks: { main: "https://naturalcapitalproject.stanford.edu/software/invest", docs: "https://invest-userguide.readthedocs.io/" },
        disciplines: {
            env: { title: "Ecological Economics Pedagogy", uses: ["Assign students to model the financial impact of deforestation on local water purification and crop pollination in a specific geographic region."] }
        }
    },// ---------------------------------------------------------
    // COLLABORATION & VERSION CONTROL
    // ---------------------------------------------------------
    {
        id: "github", 
        name: "GitHub", 
        category: "Data & Infrastructure", 
        isOpenSource: false, 
        overview: "The world's largest platform for hosting, versioning, and collaborating on code and data via the Git version control system.",
        whyItMatters: "While it is known for software engineering, GitHub is effectively the 'Google Docs for raw data and scripts.' It allows academic researchers to securely store datasets, collaborate on complex text files, and publish their findings transparently.",
        coreFeatures: [
            "Git Version Control: Travel back in time to any previous version of your file.",
            "Pull Requests: Review and discuss a colleague's changes before merging them into the main project.",
            "GitHub Actions: Automate tasks like compiling LaTeX PDFs or testing datasets."
        ],
        costEligibility: "Free for public and private repositories.", 
        registration: "Sign up at github.com.",
        officialLinks: { main: "https://github.com/", docs: "https://docs.github.com/" },
        disciplines: {
            cs: { title: "Software Collaboration", uses: ["Host open-source libraries and manage collaborative capstone coding projects."] },
            humanities: { title: "Digital Humanities", uses: ["Host massive corpuses of digitized XML texts where historians globally can propose edits to transcriptions via Pull Requests."] },
            env: { title: "Open Science", uses: ["Publish the Python scripts used for your climate models so other researchers can reproduce your exact findings."] }
        }
    },
    {
        id: "github-education", 
        name: "GitHub Education & Classroom", 
        category: "Teaching & Pedagogy", 
        isOpenSource: false,
        overview: "A specialized suite of tools built on top of GitHub. It provides a massive bundle of free premium software (the Student Developer Pack) and a powerful assignment management system called GitHub Classroom.",
        whyItMatters: "For students, the Developer Pack saves thousands of dollars in cloud/software costs. For educators, GitHub Classroom acts as an automated LMS specifically designed for anything involving code, data, or version history—drastically reducing grading time.",
        coreFeatures: [
            "GitHub Classroom: Automatically distributes starter-repositories to students and collects assignments.",
            "Autograding: Automatically run tests on student submissions the moment they submit.",
            "Student Developer Pack: Free access to GitHub Copilot, DigitalOcean cloud credits, Canva Pro, and free domain names."
        ],
        costEligibility: "100% Free for verified students and educators (requires university email).", 
        registration: "Apply at education.github.com.",
        officialLinks: { main: "https://education.github.com/", docs: "https://docs.github.com/en/education" },
        
        /* 
           THE MAGIC SAUCE: How GitHub Classroom applies to ALL 10 DOMAINS
        */
        disciplines: {
            cs: { 
                title: "CS Pedagogy", 
                uses: ["Use GitHub Classroom to distribute starter code. Utilize GitHub Actions to automatically run unit tests and auto-grade the student's logic the second they push their code."] 
            },
            civil: { 
                title: "Civil Engineering Pedagogy", 
                uses: ["Distribute complex CAD configurations or structural analysis scripts to the class. Teach students to use Git LFS (Large File Storage) to version-control 3D models."] 
            },
            eee: { 
                title: "Electrical Eng Pedagogy", 
                uses: ["Assign embedded systems homework (like Arduino/C++). Have students push their firmware code to Classroom, where an automated script checks for memory leaks."] 
            },
            mech: { 
                title: "Mechanical Eng Pedagogy", 
                uses: ["Manage complex G-Code repositories for CNC machining and track iterative, week-by-week changes to student OpenFOAM fluid simulations."] 
            },
            commerce: { 
                title: "Finance Pedagogy", 
                uses: ["Distribute massive financial CSV datasets and Jupyter notebooks for quantitative finance assignments. Use GitHub Codespaces so students can analyze the data directly in the browser."] 
            },
            econ: { 
                title: "Econometrics Pedagogy", 
                uses: ["Teach reproducible research. Have students track their RMarkdown thesis papers and data cleaning scripts, grading them on their version-control history, not just the final PDF."] 
            },
            law: { 
                title: "Legal Drafting Pedagogy", 
                uses: ["Use GitHub Classroom to distribute a flawed legal contract. Have students fix the contract and submit. Use the 'Git Diff' feature to visually see exactly which clauses the student redlined/changed in red and green."] 
            },
            edu: { 
                title: "Instructional Tech Pedagogy", 
                uses: ["Teach future educators how to build free course websites via GitHub Pages, and how to host Open Educational Resources (OER) that other teachers can 'fork' and improve."] 
            },
            humanities: { 
                title: "Digital History Pedagogy", 
                uses: ["Assign collaborative transcription projects. Distribute raw historical scans, and have students use Markdown to collaboratively write the transcriptions, tracking who contributed which paragraph."] 
            },
            env: { 
                title: "GIS & Spatial Pedagogy", 
                uses: ["Distribute complex QGIS project files or Python spatial analysis scripts to the class. Grade how accurately they modified the mapping algorithms over the semester."] 
            }
        }
    },
    // ---------------------------------------------------------
    // MASSIVE CONTEXT AI (Google AI Studio)
    // ---------------------------------------------------------
    {
        id: "google-ai-studio", 
        name: "Google AI Studio (Gemini 1.5)", 
        category: "AI Assistants", 
        isOpenSource: false,
        overview: "A web-based prototyping environment for developers and researchers to experiment directly with Google's most powerful Gemini models.",
        whyItMatters: "Standard AI chatbots have very small memory limits. Google AI Studio provides an unprecedented 2-million token context window completely free. Educators and researchers can upload entire textbooks, complete software codebases, or hours of video into a single prompt for analysis without losing context.",
        coreFeatures: [
            "Massive Context Window: Process up to 2 million tokens (approx. 1.5 million words or 2 hours of video) in a single query.",
            "Multi-Modal Inputs: Upload PDFs, MP4s, MP3s, and Python scripts simultaneously for cross-format analysis.",
            "System Instructions: Hard-code the AI's behavior to act strictly as a harsh grader, a Socratic tutor, or a precise data extractor."
        ],
        costEligibility: "100% Free Tier available (requires a standard Google account).", 
        registration: "Sign in at aistudio.google.com.",
        officialLinks: { main: "https://aistudio.google.com/", docs: "https://ai.google.dev/docs" },
        disciplines: {
            cs: { title: "Codebase Analysis", uses: ["Upload an entire student's GitHub repository at once. Ask the AI to map the architecture or find structural flaws across multiple interconnected files."] },
            humanities: { title: "Literature & History Pedagogy", uses: ["Upload 10 complete novels or 50+ historical archive PDFs simultaneously to perform thematic analysis across the entire corpus in one prompt."] },
            law: { title: "Legal Research", uses: ["Process thousands of pages of case law, trial transcripts, or massive legislative bills in a single query to find contradictions without hitting memory limits."] },
            env: { title: "Qualitative Geography", uses: ["Upload dozens of hours of raw video footage from environmental drone surveys and ask the AI to automatically timestamp specific geographical anomalies."] },
            edu: { title: "Curriculum Alignment", uses: ["Upload a full 4-year degree syllabus and state educational policy documents to check for missing prerequisites or compliance gaps."] }
        }
    }
];