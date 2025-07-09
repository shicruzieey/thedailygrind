// Mobile menu toggle for bottom navigation
function toggleMobileMenu() {
    const navItems = document.querySelector(".nav-items")
    const menuToggle = document.querySelector(".mobile-menu-toggle")
    const mobileMenu = document.querySelector(".mobile-fullscreen-menu")
  
    // Check if we're on mobile (screen width < 768px)
    const isMobile = window.innerWidth < 768
  
    if (isMobile) {
      // Use fullscreen menu on mobile
      mobileMenu.classList.toggle("active")
      menuToggle.classList.toggle("active")
    } else {
      // Use inline menu on desktop
      navItems.classList.toggle("active")
      menuToggle.classList.toggle("active")
    }
  }
  
  // Close mobile menu when clicking on menu items
  document.querySelectorAll(".mobile-menu-item").forEach((item) => {
    item.addEventListener("click", () => {
      const mobileMenu = document.querySelector(".mobile-fullscreen-menu")
      const menuToggle = document.querySelector(".mobile-menu-toggle")
  
      mobileMenu.classList.remove("active")
      menuToggle.classList.remove("active")
    })
  })
  
  // Smooth scrolling for any anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
  
  // Smooth scrolling for bottom navigation links
  document.querySelectorAll('.nav-item[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
  
      // Close mobile menu if open
      const navItems = document.querySelector(".nav-items")
      const menuToggle = document.querySelector(".mobile-menu-toggle")
      navItems.classList.remove("active")
      menuToggle.classList.remove("active")
    })
  })
  
  // Add click outside to close mobile menu
  document.addEventListener("click", (event) => {
    const bottomNav = document.querySelector(".bottom-nav")
    const navItems = document.querySelector(".nav-items")
    const menuToggle = document.querySelector(".mobile-menu-toggle")
    const mobileMenu = document.querySelector(".mobile-fullscreen-menu")
  
    // Close inline menu on desktop
    if (bottomNav && !bottomNav.contains(event.target) && navItems.classList.contains("active")) {
      navItems.classList.remove("active")
      menuToggle.classList.remove("active")
    }
  
    // Close fullscreen menu on mobile
    if (mobileMenu && !bottomNav.contains(event.target) && mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active")
      menuToggle.classList.remove("active")
    }
  })
  
  // Handle window resize to switch between menu types
  window.addEventListener("resize", () => {
    const navItems = document.querySelector(".nav-items")
    const mobileMenu = document.querySelector(".mobile-fullscreen-menu")
    const menuToggle = document.querySelector(".mobile-menu-toggle")
  
    // Close all menus when resizing
    navItems.classList.remove("active")
    mobileMenu.classList.remove("active")
    menuToggle.classList.remove("active")
  })
  