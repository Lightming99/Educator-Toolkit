// ==========================================
// STATE MANAGEMENT & ROUTER INITIALIZATION
// ==========================================
const state = { theme: localStorage.getItem('theme') || 'light' };
const appDiv = document.getElementById('app');
const searchInput = document.getElementById('searchInput');

function init() {
    const sidebar = document.querySelector('.sidebar');
document.getElementById('mobileMenuBtn').addEventListener('click', () => sidebar.classList.toggle('open'));
appDiv.addEventListener('click', () => sidebar.classList.remove('open')); // Closes menu when clicking outside
    // 1. Set Initial Theme
    document.documentElement.setAttribute('data-theme', state.theme);
    
    // 2. Attach Event Listeners
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    searchInput.addEventListener('input', handleSearch);
    window.addEventListener('hashchange', router);
    
    // 3. Build Sidebar Navigation Dynamically from data.js
    buildSidebar();
    
    // 4. Trigger initial route
    router();
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('theme', state.theme);
}

function buildSidebar() {
    // Build Categories
    const catContainer = document.getElementById('nav-categories');
    CATEGORIES.forEach(cat => { 
        catContainer.innerHTML += `
            <a href="#category/${encodeURIComponent(cat)}" class="nav-item">
                <i class="fa-solid fa-folder-tree" style="margin-right: 5px; opacity: 0.7;"></i> ${cat}
            </a>`; 
    });

    // Build Domains
    const domContainer = document.getElementById('nav-domains');
    DOMAINS.forEach(dom => { 
        domContainer.innerHTML += `
            <a href="#domain/${dom.id}" class="nav-item">
                <i class="fa-solid fa-graduation-cap" style="margin-right: 5px; opacity: 0.7;"></i> ${dom.name}
            </a>`; 
    });
}

// ==========================================
// ROUTER ENGINE
// ==========================================
function router() {
    const hash = window.location.hash || '#home';
    const [route, param] = hash.replace('#', '').split('/');

    // Handle Active State in Sidebar visually
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-item[href="${hash}"]`);
    if(activeLink) activeLink.classList.add('active');

    // Route Switching
    if (route === 'home') renderHome();
    else if (route === 'resource') renderResource(param);
    else if (route === 'domain') renderDomain(param);
    else if (route === 'category') renderCategory(decodeURIComponent(param));
    else if (route === 'opensource') renderOpenSource();
    
    // Scroll to top on navigation
    appDiv.scrollTo(0,0);
}

// ==========================================
// UI RENDERING FUNCTIONS
// ==========================================

function createResourceCard(item, focusDomain = null) {
    let domainHighlight = '';
    
    // Only show the specific pedagogical use case if we are browsing a specific domain
    if(focusDomain && item.disciplines[focusDomain]) {
        domainHighlight = `
        <div style="background: var(--accent); padding: 12px; border-radius: 6px; margin-top: 15px; border-left: 3px solid var(--primary);">
            <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--primary); font-weight: bold; margin-bottom: 5px;">
                ${item.disciplines[focusDomain].title}
            </div>
            <div style="font-size: 0.85rem; color: var(--text-main); line-height: 1.4;">
                ${item.disciplines[focusDomain].uses[0]}
            </div>
        </div>`;
    }

    return `
        <div class="card" onclick="window.location.hash='#resource/${item.id}'">
            <div class="card-tags">
                <span class="card-tag">${item.category}</span>
                ${item.isOpenSource ? `<span class="card-tag os"><i class="fa-brands fa-osi"></i> Open Source</span>` : ''}
            </div>
            <h3 class="card-title">${item.name}</h3>
            <p class="card-desc">${item.overview}</p>
            ${domainHighlight}
        </div>
    `;
}

function renderHome() {
    let html = `
        <h1 style="color: var(--primary); font-size: 2.2rem; margin-bottom: 10px;">Educator's Digital Toolkit</h1>
        <p class="text-block" style="font-size: 1.1rem; max-width: 800px;">
            Strictly curated digital tools mapped exclusively to the academic departments where they add pedagogical and research value.
        </p>
        <div class="grid">
            ${db.map(item => createResourceCard(item)).join('')}
        </div>
    `;
    appDiv.innerHTML = html;
}

function renderOpenSource() {
    const osTools = db.filter(item => item.isOpenSource);
    let html = `
        <h1 style="color: var(--opensource); font-size: 2.2rem; margin-bottom: 10px;">
            <i class="fa-brands fa-osi"></i> Open Source Hub
        </h1>
        <p class="text-block" style="max-width: 800px;">
            Free, transparent, and privacy-respecting tools for modern educators. These platforms ensure academic data isn't locked behind commercial paywalls.
        </p>
        <div class="grid">
            ${osTools.map(item => createResourceCard(item)).join('')}
        </div>
    `;
    appDiv.innerHTML = html;
}

function renderDomain(domainId) {
    const domainInfo = DOMAINS.find(d => d.id === domainId);
    // Filter logic: Only return tools that have this specific domain key inside their disciplines object.
    const relevantTools = db.filter(item => item.disciplines && item.disciplines[domainId]);
    
    let html = `
        <h1 style="color: var(--primary); font-size: 2.2rem; margin-bottom: 10px;">${domainInfo.name}</h1>
        <p class="text-block">Highly relevant pedagogical and research tools curated strictly for the ${domainInfo.name} department.</p>
        <div class="grid">
            ${relevantTools.length > 0 
                ? relevantTools.map(item => createResourceCard(item, domainId)).join('') 
                : '<p class="text-block" style="grid-column: 1/-1;">Resources are currently being curated for this department.</p>'}
        </div>
    `;
    appDiv.innerHTML = html;
}

function renderCategory(catName) {
    const tools = db.filter(item => item.category === catName);
    let html = `
        <h1 style="color: var(--primary); font-size: 2.2rem; margin-bottom: 10px;">${catName}</h1>
        <div class="grid">
            ${tools.length > 0
                ? tools.map(item => createResourceCard(item)).join('')
                : '<p class="text-block">No tools found in this category.</p>'}
        </div>
    `;
    appDiv.innerHTML = html;
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    
    // If search is cleared, route back to the current active hash
    if(!query) return router();

    // Deep search: Title, Overview, and Why it matters
    const results = db.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.overview.toLowerCase().includes(query) ||
        item.whyItMatters.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );

    appDiv.innerHTML = `
        <h2 class="section-title" style="margin-top: 0;">Search Results for "${query}"</h2>
        <div class="grid">
            ${results.length 
                ? results.map(item => createResourceCard(item)).join('') 
                : '<p class="text-block">No resources match your search.</p>'}
        </div>
    `;
}

function renderResource(id) {
    const res = db.find(item => item.id === id);
    if(!res) { 
        appDiv.innerHTML = "<h1>Resource Not Found</h1><p>Please return to the dashboard.</p>"; 
        return; 
    }

    // Build the specific use cases for this tool
    let domainGridHTML = '';
    for (const [domKey, domData] of Object.entries(res.disciplines)) {
        domainGridHTML += `
            <div class="discipline-card">
                <h4><i class="fa-solid fa-chalkboard-user"></i> ${domData.title}</h4>
                <ul>
                    ${domData.uses.map(u => `<li>${u}</li>`).join('')}
                </ul>
            </div>`;
    }

    // Main HTML Assembly
    let html = `
        <div class="res-header">
            <div>
                <h1 class="res-title">${res.name}</h1>
                <span class="badge"><i class="fa-solid fa-folder"></i> ${res.category}</span>
                ${res.isOpenSource ? `<span class="badge" style="background: var(--opensource-bg); color: var(--opensource);"><i class="fa-brands fa-osi"></i> Open Source</span>` : ''}
            </div>
            <a href="${res.officialLinks?.main}" target="_blank" class="btn">
                Official Tool Website <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 30px; margin-bottom: 40px;">
            <div>
                <h2 class="section-title" style="margin-top:0">Pedagogical Overview</h2>
                <p class="text-block"><strong>What is it?</strong><br> ${res.overview}</p>
                <p class="text-block"><strong>Why it matters for educators:</strong><br> ${res.whyItMatters}</p>

                <h2 class="section-title">Core Features & Guidance</h2>
                <ul class="feature-list">
                    ${res.coreFeatures?.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>

            <div>
                <div style="background: var(--bg-card); padding: 25px; border-radius: 8px; border: 1px solid var(--border); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                    <h3 style="margin-bottom: 20px; color: var(--primary); display: flex; align-items: center; gap: 10px;">
                        <i class="fa-solid fa-circle-info"></i> Access Details
                    </h3>
                    
                    <div style="margin-bottom: 15px;">
                        <span style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); font-weight: bold;">Cost Structure</span>
                        <p style="font-size: 0.95rem; margin-top: 5px;">${res.costEligibility}</p>
                    </div>
                    
                    <div style="margin-bottom: 20px;">
                        <span style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); font-weight: bold;">Registration Path</span>
                        <p style="font-size: 0.95rem; margin-top: 5px;">${res.registration}</p>
                    </div>

                    <a href="${res.officialLinks?.docs}" target="_blank" class="btn" style="width: 100%; background: var(--bg-body); color: var(--text-main); border: 1px solid var(--border);">
                        <i class="fa-solid fa-book"></i> Read Documentation
                    </a>
                </div>
            </div>
        </div>

        <div style="border-top: 1px solid var(--border); padding-top: 10px;">
            <h2 class="section-title">Specific Applications by Department</h2>
            <p class="text-block" style="margin-bottom: 25px;">This tool is explicitly recommended for the following disciplines:</p>
            <div class="discipline-grid">
                ${domainGridHTML}
            </div>
        </div>
        <br><br>
    `;
    appDiv.innerHTML = html;
}

// ==========================================
// BOOTSTRAP APP
// ==========================================
// Initialize everything when the script loads
init();