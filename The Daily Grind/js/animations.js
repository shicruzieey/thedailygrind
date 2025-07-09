// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)
  
  // Observe elements for animation
  document.addEventListener("DOMContentLoaded", () => {
    const animateElements = document.querySelectorAll(".product-card, .story-content, .exp-product")
  
    animateElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(el)
    })
  })
  
  // Button click animations
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2
  
      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple")
  
      this.appendChild(ripple)
  
      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })
  
  // Add ripple effect styles
  const style = document.createElement("style")
  style.textContent = `
      button {
          position: relative;
          overflow: hidden;
      }
      
      .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
          pointer-events: none;
      }
      
      @keyframes ripple-animation {
          to {
              transform: scale(4);
              opacity: 0;
          }
      }
  `
  document.head.appendChild(style)
  
  // Product card hover effects
  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.05)"
      this.style.transition = "transform 0.3s ease"
    })
  
    card.addEventListener("mouseleave", function () {
      if (this.classList.contains("featured")) {
        this.style.transform = "translateY(-20px) scale(1)"
      } else {
        this.style.transform = "translateY(0) scale(1)"
      }
    })
  })
  
  // Coffee beans animation
  function animateBeans() {
    const beans = document.querySelectorAll(".bean")
    beans.forEach((bean, index) => {
      setInterval(
        () => {
          bean.style.transform += ` rotate(${Math.random() * 10 - 5}deg)`
        },
        2000 + index * 500,
      )
    })
  }
  
  // Initialize animations when page loads
  window.addEventListener("load", () => {
    animateBeans()
  
    // Fade in animation for hero content
    const heroContent = document.querySelector(".hero-content")
    if (heroContent) {
      heroContent.style.opacity = "0"
      heroContent.style.transform = "translateY(30px)"
      heroContent.style.transition = "opacity 1s ease, transform 1s ease"
  
      setTimeout(() => {
        heroContent.style.opacity = "1"
        heroContent.style.transform = "translateY(0)"
      }, 300)
    }
  })
  