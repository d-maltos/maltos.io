document.addEventListener('DOMContentLoaded', (event) => {
    // Get the fading content container
    const fadingContent = document.getElementById('fading-content');
  
    // Start with a fade-in effect when the page loads for the specific content
    fadingContent.classList.add('fade-in');
  
    // Remove the fade-in class after the animation completes
    setTimeout(() => {
        fadingContent.classList.remove('fade-in');
    }, 500); // Match the fade-in animation duration
  
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (e) {
            // Check if the link navigates away from the current page
            if (link.host !== window.location.host || link.hasAttribute('download') || link.getAttribute('target') === '_blank') {
                return;
            }
  
            e.preventDefault(); // Prevent the default link behavior
            const destination = this.href;
  
            // Apply the fade-out animation to the fading content
            fadingContent.classList.add('fade-out');
  
            // Wait for the animation to complete before redirecting
            setTimeout(() => {
                window.location.href = destination;
            }, 500); // Match the fade-out animation duration
        });
    });
  });
  