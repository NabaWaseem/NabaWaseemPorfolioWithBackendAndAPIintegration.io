
    // ============================================================
    // 1. CONFIGURATION
    // ============================================================
    const USE_MOCK = true; // true = use mock data, false = use real API

    // ============================================================
    // 2. MOCK DATA (your original projects + other data)
    // ============================================================
    const MOCK_DATA = {
      profile: {
        name: 'Naba Waseem',
        title: 'Frontend Developer',
        bio: 'Computer Science student passionate about Web Development, Frontend Design, and Software Engineering.',
        about: 'Computer Science student focused on Web Development and Software Engineering. Skilled in HTML, CSS, and JavaScript with a passion for creating responsive websites. Always learning and improving through real-world projects.',
        profileImage: './mypic.jpeg',
        highlights: ['💻 Web Development', '🎨 UI/UX Design', '⚡ Responsive Design', '🚀 Problem Solving']
      },
      skills: [
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 85 },
        { name: 'JavaScript', percentage: 70 },
        { name: 'C++', percentage: 65 },
        { name: 'Python', percentage: 60 }
      ],
      education: [
        { degree: 'BS Computer Science', institution: 'Government Women College University - Faisalabad', period: '2023 – 2027 (Continue)' },
        { degree: 'Intermediate', institution: "Students' Inn College", period: '2021 – 2023' },
        { degree: 'Matriculation', institution: 'Govt.Girls School', period: '2019 – 2021' }
      ],
      projects: [
        {
          id: 1,
          title: 'Spotify App Clone',
          description: 'A responsive music streaming UI built using HTML, CSS, and JavaScript. It replicates Spotify-like design with a structured sidebar navigation, playlist layout, and interactive album cards. The project focuses on clean UI design, hover effects, and responsive layout across different screen sizes.',
          image: './image.png',
          category: 'web',
          technologies: ['HTML5', 'CSS3', 'JavaScript'],
          githubLink: 'https://github.com/NabaWaseem/spotify-clone',
          liveDemo: 'https://spotify-clone.vercel.app'
        },
        {
          id: 2,
          title: 'E-Commerce Website',
          description: 'A modern frontend e-commerce website built with HTML, CSS, and JavaScript. It includes product listing pages, category sections, shopping-style layouts, and responsive product cards.',
          image: './2nd.png',
          category: 'web',
          technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
          githubLink: 'https://github.com/NabaWaseem/ecommerce',
          liveDemo: 'https://ecommerce-demo.vercel.app'
        },
        {
          id: 3,
          title: 'Personal Portfolio Website',
          description: 'A professional portfolio website designed to showcase my skills, projects, education, and achievements. Built using HTML, CSS, and JavaScript with dark/light theme, animations, and responsive design.',
          image: 'data:image/jpeg;base64,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',
          category: 'web',
          technologies: ['HTML5', 'CSS3', 'JavaScript', 'AOS', 'Responsive Design'],
          githubLink: 'https://github.com/NabaWaseem/portfolio',
          liveDemo: 'https://naba-portfolio.vercel.app'
        },
        {
          id: 4,
          title: 'Landing Page UI Design',
          description: 'A modern and visually appealing landing page UI design focused on user experience and responsive layouts. Built using HTML and CSS with clean typography, visual hierarchy, and mobile-friendly design.',
          image: 'data:image/jpeg;base64,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',
          category: 'uiux',
          technologies: ['HTML5', 'CSS3', 'UI/UX Design', 'Responsive Design'],
          githubLink: 'https://github.com/NabaWaseem/landing-page',
          liveDemo: 'https://landing-page-demo.vercel.app'
        },
        {
          id: 5,
          title: 'Sales Performance Dashboard',
          description: 'A data analysis project focused on evaluating sales performance, identifying revenue trends, top-performing products, and customer purchasing patterns using Power BI and Excel.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7bgHtw6GTdDu-mg6qQJHvcfqNdfdigN-QEwU92XyC5g&s=10',
          category: 'data',
          technologies: ['Power BI', 'Excel', 'Data Analysis', 'Data Visualization'],
          githubLink: 'https://github.com/NabaWaseem/sales-dashboard',
          liveDemo: null
        },
        {
          id: 6,
          title: 'Customer Behavior Analysis',
          description: 'A data analysis project focused on understanding customer purchasing behavior using Python, Pandas, and Matplotlib to identify customer segments and buying patterns.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjorHun4HS77e5E4Ch4D4d2GNsehaI3wBWBe8NMYR43Q&s=10',
          category: 'data',
          technologies: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
          githubLink: 'https://github.com/NabaWaseem/customer-analysis',
          liveDemo: null
        }
      ],
      testimonials: [
        { name: 'Mohid Waseem', role: 'Web Developer', message: 'Naba delivered a clean and responsive website with excellent attention to detail. Her frontend skills are impressive.' },
        { name: 'Sara Ahmed', role: 'UI/UX Designer', message: 'Working with Naba was a great experience. She created a modern UI that exceeded expectations.' },
        { name: 'Laiba Siddique', role: 'Project Manager', message: 'Professional, creative, and highly dedicated. The project was completed on time with outstanding quality.' }
      ],
      blog: [
        { title: 'What is HTML?', shortText: 'HTML is the structure of a webpage.....', fullText: 'HTML stands for HyperText Markup Language. It is used to structure web pages and define elements like headings, paragraphs, images, and links.' },
        { title: 'CSS Basics', shortText: 'CSS controls the style of a website...', fullText: 'CSS (Cascading Style Sheets) is used to design layouts, colors, fonts, spacing, and responsiveness of a webpage.' },
        { title: 'JavaScript Introduction', shortText: 'JavaScript adds interactivity...', fullText: 'JavaScript is a programming language used to create dynamic and interactive web pages like sliders, modals, and forms.' },
        { title: 'Why Learn React?', shortText: 'React is a powerful frontend library...', fullText: 'React helps developers build fast and reusable UI components. It is widely used in modern web applications.' },
        { title: 'Frontend vs Backend', shortText: 'Frontend is what users see...', fullText: 'Frontend deals with UI/UX while backend handles server, database, and logic of the application.' },
        { title: 'Tips for Developers', shortText: 'Practice is the key to success...', fullText: 'Build projects, solve problems daily, learn Git/GitHub, and stay consistent to become a better developer.' }
      ]
    };

    // ============================================================
    // 3. API FETCH FUNCTION
    // ============================================================
    async function fetchAPI(endpoint) {
      if (USE_MOCK) {
        const basePath = endpoint.split('?')[0].replace('/api/', '');
        
        if (basePath === 'profile') return { data: MOCK_DATA.profile, error: null };
        if (basePath === 'skills') return { data: MOCK_DATA.skills, error: null };
        if (basePath === 'education') return { data: MOCK_DATA.education, error: null };
        if (basePath === 'testimonials') return { data: MOCK_DATA.testimonials, error: null };
        if (basePath === 'blog') return { data: MOCK_DATA.blog, error: null };
        
        if (basePath === 'projects') {
          let projects = [...MOCK_DATA.projects];
          
          const url = new URL(`http://localhost${endpoint}`);
          const category = url.searchParams.get('category');
          const tech = url.searchParams.get('tech');
          const search = url.searchParams.get('search');
          
          // Category filter (case-insensitive)
          if (category && category !== 'all') {
            const catLower = category.toLowerCase();
            projects = projects.filter(p => p.category.toLowerCase() === catLower);
          }
          
          // Technology filter
          if (tech && tech !== 'all') {
            projects = projects.filter(p => p.technologies.includes(tech));
          }
          
          // Search filter
          if (search) {
            const s = search.toLowerCase();
            projects = projects.filter(p =>
              p.title.toLowerCase().includes(s) ||
              p.description.toLowerCase().includes(s)
            );
          }
          
          return { data: projects, error: null };
        }
        
        return { data: null, error: 'Unknown endpoint' };
      }

      // Real API call
      try {
        const response = await fetch(`${API_BASE}${endpoint}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        return { data, error: null };
      } catch (error) {
        return { data: null, error: error.message };
      }
    }

    // ============================================================
    // 4. RENDER FUNCTIONS
    // ============================================================

    // ----- 4.1 PROFILE -----
    async function renderProfile() {
      const profileInfo = document.getElementById('profileInfo');
      const profileAvatar = document.getElementById('profileAvatar');
      const heroContent = document.getElementById('heroContent');
      const aboutText = document.getElementById('aboutText');

      profileInfo.innerHTML = `<div class="loading-spinner"><div class="spinner"></div><p>Loading...</p></div>`;

      const { data, error } = await fetchAPI('/api/profile');
      if (error || !data) {
        profileInfo.innerHTML = `<div class="error-message">⚠️ Failed to load profile <button onclick="renderProfile()" class="retry-btn">Retry</button></div>`;
        return;
      }

      const p = data;
      if (profileAvatar) profileAvatar.src = p.profileImage || './mypic.jpeg';

      profileInfo.innerHTML = `
        <h1>${p.name}</h1>
        <h2>${p.title}</h2>
        <p>${p.bio}</p>
        <a href="#contact" class="conbtn">Contact Me</a>
      `;

      const highlights = (p.highlights || ['💻 Web Development', '🎨 UI/UX Design', '⚡ Responsive Design', '🚀 Problem Solving'])
        .map(h => `<span>${h}</span>`).join('');

      heroContent.innerHTML = `
        <h1>Hi, I'm <span>${p.name}</span></h1>
        <h2>${p.title}</h2>
        <p>${p.bio}</p>
        <div class="hero-highlights">${highlights}</div>
        <div class="hero-buttons">
          <a href="#projects" class="btn">View My Work</a>
          <a href="#contact" class="btn secondary">Hire Me</a>
          <a href="./resume.pdf" class="btn">Download CV</a>
        </div>
      `;

      aboutText.textContent = p.about || p.bio;
      document.querySelector('.footer-bottom h3').textContent = p.name;
    }

    // ----- 4.2 SKILLS -----
    async function renderSkills() {
      const container = document.getElementById('skillsContainer');
      container.innerHTML = `<div class="loading-spinner"><div class="spinner"></div><p>Loading skills...</p></div>`;

      const { data, error } = await fetchAPI('/api/skills');
      if (error || !data || data.length === 0) {
        container.innerHTML = `<div class="error-message">⚠️ Failed to load skills <button onclick="renderSkills()" class="retry-btn">Retry</button></div>`;
        return;
      }

      let html = '';
      data.forEach(skill => {
        const className = skill.name.toLowerCase().replace(/[^a-z]/g, '');
        html += `
          <div class="skill">
            <div class="skill-info">
              <span>${skill.name}</span>
              <span>${skill.percentage}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress ${className}" style="width:0%;" data-width="${skill.percentage}"></div>
            </div>
          </div>
        `;
      });
      container.innerHTML = html;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.width + '%';
          }
        });
      }, { threshold: 0.3 });
      document.querySelectorAll('.progress').forEach(bar => observer.observe(bar));
    }

    // ----- 4.3 EDUCATION -----
    async function renderEducation() {
      const container = document.getElementById('educationContainer');
      container.innerHTML = `<div class="loading-spinner"><div class="spinner"></div><p>Loading education...</p></div>`;

      const { data, error } = await fetchAPI('/api/education');
      if (error || !data || data.length === 0) {
        container.innerHTML = `<div class="error-message">⚠️ Failed to load education <button onclick="renderEducation()" class="retry-btn">Retry</button></div>`;
        return;
      }

      let html = '';
      data.forEach(item => {
        html += `
          <div class="education-card">
            <h3>${item.degree}</h3>
            <p>${item.institution}</p>
            <p>${item.period}</p>
          </div>
        `;
      });
      container.innerHTML = html;
    }

    // ============================================================
    // 4.4 PROJECTS (FULLY WORKING)
    // ============================================================

    let allProjects = [];
    let currentCategory = 'all';
    let currentTechnology = 'all';
    let searchQuery = '';

    async function renderProjects() {
      const wrapper = document.getElementById('projectsWrapper');
      const filterContainer = document.getElementById('filterButtons');

      // Show loading skeletons
      wrapper.innerHTML = `
        <div class="loading-skeletons">
          ${Array(6).fill(`
            <div class="skeleton-card">
              <div class="skeleton-image"></div>
              <div class="skeleton-title"></div>
              <div class="skeleton-text"></div>
              <div class="skeleton-text short"></div>
            </div>
          `).join('')}
        </div>
      `;

      // Build query params
      const params = new URLSearchParams();
      if (currentCategory !== 'all') params.append('category', currentCategory);
      if (currentTechnology !== 'all') params.append('tech', currentTechnology);
      if (searchQuery) params.append('search', searchQuery);
      const query = params.toString();
      const endpoint = `/api/projects${query ? '?' + query : ''}`;

      const { data, error } = await fetchAPI(endpoint);

      if (error || !data || data.length === 0) {
        wrapper.innerHTML = `
          <div class="empty-state">
            <div class="empty-icon">🔍</div>
            <h3>No projects found</h3>
            <p>${error || 'Try adjusting your filters'}</p>
            <button onclick="resetFilters()" class="reset-btn">Reset Filters</button>
          </div>
        `;
        return;
      }

      allProjects = data;

      // --- Category Filter Buttons ---
      const categories = ['all', ...new Set(allProjects.map(p => p.category))];
      filterContainer.innerHTML = categories.map(cat => `
        <button class="filter-btn ${cat === currentCategory ? 'active' : ''}" data-filter="category" data-value="${cat}">
          ${cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      `).join('');

      // --- Technology Filter Dropdown ---
      const allTechs = new Set();
      allProjects.forEach(p => p.technologies.forEach(t => allTechs.add(t)));
      const techOptions = ['all', ...Array.from(allTechs).sort()];

      const techSelect = document.getElementById('techFilter');
      techSelect.innerHTML = techOptions.map(tech => `
        <option value="${tech}" ${tech === currentTechnology ? 'selected' : ''}>
          ${tech === 'all' ? 'All Technologies' : tech}
        </option>
      `).join('');

      // --- Events ---
      document.getElementById('techFilter').addEventListener('change', function() {
        currentTechnology = this.value;
        renderProjects();
      });

      document.querySelectorAll('.filter-btn[data-filter="category"]').forEach(btn => {
        btn.addEventListener('click', function() {
          document.querySelectorAll('.filter-btn[data-filter="category"]').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          currentCategory = this.dataset.value;
          renderProjects();
        });
      });

      // --- Render Project Cards ---
      let html = '';
      allProjects.forEach((project, index) => {
        const techTags = project.technologies.slice(0, 3).map(t =>
          `<span class="tech-tag">${t}</span>`
        ).join('');
        const extraTech = project.technologies.length > 3 ?
          `<span class="tech-tag">+${project.technologies.length - 3}</span>` : '';

        html += `
          <div class="project-card" data-index="${index}">
            <img src="${project.image || './default-project.jpg'}" alt="${project.title}" />
            <div class="project-info">
              <h3>${project.title}</h3>
              <p>${project.description.substring(0, 120)}${project.description.length > 120 ? '...' : ''}</p>
              <div class="tech-tags">${techTags}${extraTech}</div>
              <div class="project-actions">
                <button class="btn-small primary view-details" data-index="${index}">View Details</button>
                ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="btn-small">GitHub</a>` : ''}
                ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank" class="btn-small">Live</a>` : ''}
              </div>
            </div>
          </div>
        `;
      });
      wrapper.innerHTML = html;

      // --- Modal Events ---
      document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          const idx = parseInt(this.dataset.index);
          const project = allProjects[idx];
          if (project) openProjectModal(project);
        });
      });

      document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
          const idx = parseInt(this.dataset.index);
          const project = allProjects[idx];
          if (project) openProjectModal(project);
        });
      });
    }

    // ----- 4.5 PROJECT MODAL -----
    function openProjectModal(project) {
      const modal = document.getElementById('projectModal');
      document.getElementById('modalTitle').textContent = project.title;
      document.getElementById('modalImage').src = project.image || './default-project.jpg';
      document.getElementById('modalDescription').innerHTML = project.description;
      document.getElementById('modalTech').innerHTML = project.technologies.map(t => `<li>${t}</li>`).join('');
      modal.classList.add('active');
    }

    document.querySelector('.close').addEventListener('click', () => {
      document.getElementById('projectModal').classList.remove('active');
    });
    window.addEventListener('click', (e) => {
      if (e.target === document.getElementById('projectModal')) {
        document.getElementById('projectModal').classList.remove('active');
      }
    });

    function resetFilters() {
      currentCategory = 'all';
      currentTechnology = 'all';
      searchQuery = '';
      const searchInput = document.getElementById('projectSearch');
      if (searchInput) searchInput.value = '';
      const techSelect = document.getElementById('techFilter');
      if (techSelect) techSelect.value = 'all';
      document.querySelectorAll('.filter-btn[data-filter="category"]').forEach(b => {
        b.classList.toggle('active', b.dataset.value === 'all');
      });
      renderProjects();
    }

    // ----- 4.6 SEARCH INPUT -----
    (function addSearchInput() {
      const filterContainer = document.getElementById('filterButtons');
      if (filterContainer && !document.getElementById('projectSearch')) {
        const searchDiv = document.createElement('div');
        searchDiv.className = 'search-container';
        searchDiv.innerHTML = `<input type="text" id="projectSearch" placeholder="🔍 Search projects..." />`;
        filterContainer.parentNode.insertBefore(searchDiv, filterContainer.nextSibling);

        document.getElementById('projectSearch').addEventListener('input', function() {
          searchQuery = this.value.trim();
          renderProjects();
        });
      }
    })();

    // ----- 4.7 BLOG -----
    async function renderBlog() {
      const container = document.getElementById('blogContainer');
      container.innerHTML = `<div class="loading-spinner"><div class="spinner"></div><p>Loading articles...</p></div>`;

      const { data, error } = await fetchAPI('/api/blog');
      const blogData = error || !data ? MOCK_DATA.blog : data;

      let html = '';
      blogData.forEach(article => {
        html += `
          <div class="blog-card">
            <h3>${article.title}</h3>
            <p class="short-text">${article.shortText}</p>
            <p class="full-text" style="display:none;">${article.fullText}</p>
            <button class="read-more">Read More</button>
          </div>
        `;
      });
      container.innerHTML = html;

      document.querySelectorAll('.read-more').forEach(btn => {
        btn.addEventListener('click', function() {
          const card = this.closest('.blog-card');
          const fullText = card.querySelector('.full-text');
          card.classList.toggle('active');
          if (fullText.style.display === 'block') {
            fullText.style.display = 'none';
            this.textContent = 'Read More';
          } else {
            fullText.style.display = 'block';
            this.textContent = 'Read Less';
          }
        });
      });
    }

    // ----- 4.8 TESTIMONIALS -----
    async function renderTestimonials() {
      const container = document.getElementById('testimonialsContainer');
      container.innerHTML = `<div class="loading-spinner"><div class="spinner"></div><p>Loading testimonials...</p></div>`;

      const { data, error } = await fetchAPI('/api/testimonials');
      if (error || !data || data.length === 0) {
        container.innerHTML = `<div class="empty-state"><p>No testimonials yet</p></div>`;
        return;
      }

      let html = '';
      data.forEach(t => {
        html += `
          <div class="testimonial-card">
            <p>"${t.message}"</p>
            <h4>- ${t.name}</h4>
            <span>${t.role}</span>
          </div>
        `;
      });
      container.innerHTML = html;
    }

    // ============================================================
    // 5. CONTACT FORM
    // ============================================================
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      let valid = true;
      document.getElementById('nameError').innerText = '';
      document.getElementById('emailError').innerText = '';
      document.getElementById('messageError').innerText = '';
      document.getElementById('successMsg').innerText = '';

      if (name === '') { document.getElementById('nameError').innerText = 'Name is required'; valid = false; }
      if (message === '') { document.getElementById('messageError').innerText = 'Message is required'; valid = false; }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === '') { document.getElementById('emailError').innerText = 'Email is required'; valid = false; }
      else if (!emailPattern.test(email)) { document.getElementById('emailError').innerText = 'Enter valid email'; valid = false; }

      if (valid) {
        document.getElementById('successMsg').innerText = '✅ Message sent successfully!';
        this.reset();
      }
    });

    // ============================================================
    // 6. THEME TOGGLE
    // ============================================================
    const toggleBtn = document.getElementById('themeToggle');
    const body = document.body;
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark');
      toggleBtn.innerText = '☀️';
    }
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark');
      toggleBtn.innerText = body.classList.contains('dark') ? '☀️' : '🌙';
      localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    });

    // ============================================================
    // 7. SCROLL REVEAL
    // ============================================================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const top = section.offsetTop - 150;
        if (window.pageYOffset >= top) current = section.id;
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
      });
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.1 });
    sections.forEach(s => revealObserver.observe(s));

    // ============================================================
    // 8. INITIALIZE
    // ============================================================
    async function init() {
      await renderProfile();
      await renderSkills();
      await renderEducation();
      await renderProjects();
      await renderBlog();
      await renderTestimonials();
      console.log("✅ All sections loaded!");
    }

    init();

