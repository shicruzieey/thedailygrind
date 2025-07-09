// Login page functionality
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm")
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")
    const loginBtn = document.querySelector(".login-btn")
  
    // Form validation
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }
  
    function validatePassword(password) {
      return password.length >= 6
    }
  
    function showMessage(message, type) {
      // Remove existing messages
      const existingMessage = document.querySelector(".form-message")
      if (existingMessage) {
        existingMessage.remove()
      }
  
      // Create new message
      const messageDiv = document.createElement("div")
      messageDiv.className = `form-message ${type}`
      messageDiv.textContent = message
  
      // Insert before form
      loginForm.insertBefore(messageDiv, loginForm.firstChild)
  
      // Show with animation
      setTimeout(() => {
        messageDiv.classList.add("show")
      }, 10)
  
      // Auto hide after 5 seconds
      setTimeout(() => {
        if (messageDiv.parentNode) {
          messageDiv.remove()
        }
      }, 5000)
    }
  
    // Real-time validation
    emailInput.addEventListener("input", function () {
      const email = this.value.trim()
      if (email && !validateEmail(email)) {
        this.style.borderColor = "#dc3545"
      } else {
        this.style.borderColor = "#e1e5e9"
      }
    })
  
    passwordInput.addEventListener("input", function () {
      const password = this.value
      if (password && !validatePassword(password)) {
        this.style.borderColor = "#dc3545"
      } else {
        this.style.borderColor = "#e1e5e9"
      }
    })
  
    // Form submission
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault()
  
      const email = emailInput.value.trim()
      const password = passwordInput.value
      const rememberMe = document.getElementById("remember").checked
  
      // Validation
      if (!email || !password) {
        showMessage("Please fill in all fields", "error")
        return
      }
  
      if (!validateEmail(email)) {
        showMessage("Please enter a valid email address", "error")
        return
      }
  
      if (!validatePassword(password)) {
        showMessage("Password must be at least 6 characters long", "error")
        return
      }
  
      // Show loading state
      loginBtn.classList.add("loading")
      loginBtn.disabled = true
  
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))
  
        // For demo purposes, accept any valid email/password
        if (email === "demo@dailygrind.com" && password === "password") {
          showMessage("Login successful! Redirecting...", "success")
  
          // Store login state if remember me is checked
          if (rememberMe) {
            localStorage.setItem("rememberedEmail", email)
          } else {
            localStorage.removeItem("rememberedEmail")
          }
  
          // Redirect after success message
          setTimeout(() => {
            window.location.href = "index.html"
          }, 1500)
        } else {
          showMessage("Invalid email or password. Try demo@dailygrind.com / password", "error")
        }
      } catch (error) {
        showMessage("Login failed. Please try again.", "error")
      } finally {
        // Remove loading state
        loginBtn.classList.remove("loading")
        loginBtn.disabled = false
      }
    })
  
    // Load remembered email
    const rememberedEmail = localStorage.getItem("rememberedEmail")
    if (rememberedEmail) {
      emailInput.value = rememberedEmail
      document.getElementById("remember").checked = true
    }
  
    // Social login handlers
    document.querySelector(".google-btn").addEventListener("click", () => {
      showMessage("Google login integration coming soon!", "error")
    })
  
    document.querySelector(".facebook-btn").addEventListener("click", () => {
      showMessage("Facebook login integration coming soon!", "error")
    })
  
    // Input focus animations
    const inputs = document.querySelectorAll(".form-input")
    inputs.forEach((input) => {
      input.addEventListener("focus", function () {
        this.parentNode.classList.add("focused")
      })
  
      input.addEventListener("blur", function () {
        this.parentNode.classList.remove("focused")
      })
    })
  })
  
  // Password toggle functionality
  function togglePassword() {
    const passwordInput = document.getElementById("password")
    const toggleIcon = document.getElementById("passwordToggleIcon")
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text"
      toggleIcon.className = "ri-eye-off-line"
    } else {
      passwordInput.type = "password"
      toggleIcon.className = "ri-eye-line"
    }
  }
  
  // Animate coffee beans on page load
  window.addEventListener("load", () => {
    const beans = document.querySelectorAll(".coffee-beans-decoration .bean")
    beans.forEach((bean, index) => {
      bean.style.animationDelay = `${index * 0.5}s`
    })
  })
  