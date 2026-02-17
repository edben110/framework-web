addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".mode");
    let isDarkMode = false;
    
    button.addEventListener("click", function() {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            // Modo oscuro
            document.body.style.backgroundColor = "#1e1e1e";
            document.body.style.color = "#e0e0e0";
            button.textContent = "Modo Claro";
            
            // Cambiar color de las secciones
            const sections = document.querySelectorAll("section");
            sections.forEach(section => {
                section.style.backgroundColor = "#2a2a2a";
            });
            
            // Cambiar color de header y footer
            const header = document.querySelector("header");
            if (header) header.style.borderBottomColor = "#444";
            
            const footer = document.querySelector("footer");
            if (footer) footer.style.borderTopColor = "#444";
            
        } else {
            // Modo claro
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
            button.textContent = "Modo Oscuro";
            button.style.backgroundColor = "#4CAF50";
            // Restaurar color de las secciones
            const sections = document.querySelectorAll("section");
            sections.forEach(section => {
                section.style.backgroundColor = "#f9f9f9";
            });
            
            // Restaurar color de header y footer
            const header = document.querySelector("header");
            if (header) header.style.borderBottomColor = "#ddd";
            
            const footer = document.querySelector("footer");
            if (footer) footer.style.borderTopColor = "#ddd";
        }
    });
});