// Component loader to dynamically load HTML components
async function loadComponent(componentPath, containerId) {
    try {
      const response = await fetch(componentPath)
      const html = await response.text()
      document.getElementById(containerId).innerHTML = html
    } catch (error) {
      console.error(`Error loading component ${componentPath}:`, error)
    }
  }
  
  // Load only the reusable components when DOM is ready
  document.addEventListener("DOMContentLoaded", async () => {
    await Promise.all([
      loadComponent("components/bottom-nav.html", "bottom-nav-container"),
      loadComponent("components/footer.html", "footer-container"),
    ])
  
    // Initialize any component-specific functionality after loading
    console.log("Reusable components loaded successfully!")
  })
  