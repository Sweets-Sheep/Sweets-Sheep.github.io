document.addEventListener('DOMContentLoaded', function () {
    const subtitleElement = document.querySelector('.subtitle');
    
    if (!subtitleElement) return;
    
    // Fetch the daily poem from the API
    fetch('https://v1.jinrishici.com/all.json')
        .then(response => response.json())
        .then(data => {
            const poem = data.content;
            let index = 0;

            function typeEffect() {
                if (index < poem.length) {
                    subtitleElement.innerHTML += poem.charAt(index);
                    index++;
                    setTimeout(typeEffect, 100); // Adjust typing speed here
                }
            }

            typeEffect();
        })
        .catch(error => console.error('Error fetching daily poem:', error));
});
