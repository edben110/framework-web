document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".mode");
    
    // Cargar estado guardado del localStorage
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    if (savedDarkMode) {
        toggleDarkMode(true);
    }
    
    button.addEventListener("click", function() {
        const isDarkMode = !document.body.classList.contains("dark-mode");
        toggleDarkMode(isDarkMode);
    });
    
    function toggleDarkMode(enable) {
        const button = document.querySelector(".mode");
        
        if (enable) {
            document.body.classList.add("dark-mode");
            button.textContent = "Modo Claro";
            localStorage.setItem("darkMode", "true");
        } else {
            document.body.classList.remove("dark-mode");
            button.textContent = "Modo Oscuro";
            localStorage.setItem("darkMode", "false");
        }
    }
});