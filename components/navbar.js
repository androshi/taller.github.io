class Header extends HTMLElement {

    opened = false;

    constructor() {
        super();
    }

    changeMobileState() {
        if (this.opened)
            this.closeMobileNavbar();
        else
            this.openMobileNavbar();
    }

    openMobileNavbar() {
        const navbar = document.getElementById("navbar");
        navbar.classList.add("opened");
        navbar.querySelector(".navbar-toggle").setAttribute("aria-expanded", "true");
        this.opened = true;
    }

    closeMobileNavbar() {
        const navbar = document.getElementById("navbar");
        console.log("closed")
        navbar.classList.remove("opened");
        navbar.querySelector(".navbar-toggle").setAttribute("aria-expanded", "false");
        this.opened = false;
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        :root {
            --navbar-bg-color: hsl(0, 0%, 15%);
            --navbar-text-color: hsl(0, 0%, 85%);
            --navbar-text-color-focus: white;
            --navbar-bg-contrast: hsl(0, 0%, 25%);
        }
        
       
        
        .container {
            max-width: 1000px;
            padding-left: 1.4rem;
            padding-right: 1.4rem;
            margin-left: auto;
            margin-right: auto;
        }
        
        #navbar {
            --navbar-height: 64px;
            position: fixed;
            height: var(--navbar-height);
            background-color: var(--navbar-bg-color);
            left: 0;
            right: 0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        }
        
        .navbar-container {
            display: flex;
            justify-content: space-between;
            height: 100%;
            align-items: center;
        }
        
        .home-link,
        .navbar-link {
            color: var(--navbar-text-color);
            transition: color 0.2s ease-in-out;
            text-decoration: none;
            display: flex;
            font-weight: 400;
            align-items: center;
            transition: background-color 0.2s ease-in-out,
                        color 0.2s ease-in-out;
        }
        
        .home-link:focus,
        .home-link:hover {
            color: var(--navbar-text-color-focus);
        }
        
        .navbar-link {
            justify-content: center;
            width: 100%;
            padding: 0.4em 0.8em;
            border-radius: 5px;    
        }
        
        .navbar-link:focus,
        .navbar-link:hover {
            color: var(--navbar-text-color-focus);
            background-color: var(--navbar-bg-contrast);
        }
        
        .navbar-logo {
            background-image: url("https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=360,h=532,fit=crop,trim=0;0;23.875647668393782;0/Yle2kJ4qNjIV66BW/profile-dJoery2jz9sG5Jop.jpeg");
            border-radius: 50%;
            width: 30px;
            height: 30px;
            margin-right: 0.5em;
        }
        
        .navbar-toggle {
            cursor: pointer;
            border: none;
            background-color: transparent;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        
        .icon-bar {
            display: block;
            width: 25px;
            height: 4px;
            margin: 2px;
            transition: background-color 0.2s ease-in-out,
                        transform 0.2s ease-in-out,
                        opacity 0.2s ease-in-out;
            background-color: var(--navbar-text-color);
        }
        
        .navbar-toggle:focus .icon-bar,
        .navbar-toggle:hover .icon-bar {
            background-color: var(--navbar-text-color-focus);
        }
        
        
        #navbar.opened .navbar-toggle .icon-bar:first-child,
        #navbar.opened .navbar-toggle .icon-bar:last-child {
            position: absolute;
            margin: 0;
            width: 30px;
        }
        
        #navbar.opened .navbar-toggle .icon-bar:first-child {
            transform: rotate(45deg);
        }
        
        #navbar.opened .navbar-toggle .icon-bar:nth-child(2) {
            opacity: 0;
        }
        
        #navbar.opened .navbar-toggle .icon-bar:last-child {
            transform: rotate(-45deg);
        }
        
        #navbar-menu {
            position: fixed;
            top: var(--navbar-height);
            bottom: 0;
            transition: opacity 0.2s ease-in-out,
                        visibility 0.2s ease-in-out,
                        left 0.2s ease-in-out,
                        right 0.2s ease-in-out;
            opacity: 0;
            visibility: hidden;
        }
        
        #navbar-menu.sidebar,
        #navbar-menu.sidebar.left {
            left: -1000px;
            right: 0;
        }
        
        #navbar-menu.sidebar.right {
            right: -1000px;
            left: 0;
        }
        
        #navbar-menu.detached,
        #navbar-menu.attached {
            left: 0;
            right: 0;
        }
        
        #navbar.opened #navbar-menu {
            background-color: rgba(0, 0, 0, 0.4);
            opacity: 1;
            visibility: visible;
        }
        
        #navbar.opened #navbar-menu.sidebar.left {
            left: 0;
        }
        
        #navbar.opened #navbar-menu.sidebar.right {
            right: 0;
        }
        
        .navbar-links {
            list-style-type: none;
            max-height: 0;
            overflow: hidden;
            position: absolute;
            background-color: var(--navbar-bg-color);
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        #navbar.opened .navbar-links {
            padding: 1em;
            max-height: none;
        }
        
        .sidebar .navbar-links {
            top: 0;
            bottom: 0;
        }
        
        .left.sidebar .navbar-links {
            left: 0;
            right: unset;
            box-shadow: 5px 20px 20px rgba(0, 0, 0, 0.3);
        }
        
        .right.sidebar .navbar-links {
            right: 0;
            left: unset;
            box-shadow: -5px 20px 20px rgba(0, 0, 0, 0.3);
        }
        
        .detached .navbar-links {
            left: 0;
            right: 0;
            margin: 1.4rem;
            border-radius: 5px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }
        
        .attached .navbar-links {
            left: 0;
            right: 0;
            box-shadow: 0 20px 20px rgba(0, 0, 0, 0.3);
        }
        
        .navbar-item {
            margin: 0.4em;
            width: 100%;
        }
        
        @media screen and (min-width: 700px) {
            .navbar-toggle {
                display: none;
            }
            
            #navbar #navbar-menu,
            #navbar.opened #navbar-menu {
                visibility: visible;
                opacity: 1;
                position: static;
                display: block;
                height: 100%;
            }
        
            #navbar .navbar-links,
            #navbar.opened .navbar-links {
                margin: 0;
                padding: 0;
                box-shadow: none;
                position: static;
                flex-direction: row;
                list-style-type: none;
                max-height: max-content;
                width: 100%;
                height: 100%;
            }
        
            #navbar .navbar-link:last-child {
                margin-right: 0;
            }
        }
        
        #options {
            display: flex;
            flex-direction: column;
        }
</style>
<header id="navbar">
        <nav class="navbar-container container">
          <a href="/" class="home-link">
            <div class="navbar-logo"></div>
            Desarrollado por Andrés López
          </a>
          <button type="button" class="navbar-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navbar-menu">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <div id="navbar-menu" class="detached">
            <ul class="navbar-links">
              <li class="navbar-item"><a class="navbar-link" href="../actividad_01.html" target="_self">About</a></li>
              <li class="navbar-item"><a class="navbar-link" href="/blog">Blog</a></li>
              <li class="navbar-item"><a class="navbar-link" href="/careers">Careers</a></li>
              <li class="navbar-item"><a class="navbar-link" href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>
    </header>
      `;
        const navbarToggle = this.querySelector(".navbar-toggle");
        navbarToggle.addEventListener("click", () => {
            this.changeMobileState();
        });

        const navbarMenu = this.querySelector("#navbar-menu");
        const navbarLinksContainer = this.querySelector(".navbar-links");

        navbarLinksContainer.addEventListener("click", (clickEvent) => {
            clickEvent.stopPropagation();
        });

        navbarMenu.addEventListener("click", this.closeMobileNavbar);

    }


}

customElements.define('navbar-component', Header);