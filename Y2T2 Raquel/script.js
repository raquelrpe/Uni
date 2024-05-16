/* I obtained this code from https://youtu.be/CUEJkJ9HDbY?si=18qeB8Hr0Wp0FgT4. It is the HTML+CSS+JS code to allow light/dark mode to be toggled. This helps users choose the background they want for accessibility reasons */

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const links = document.querySelectorAll('a');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        headerTitle.style.color = 'black';
        links.forEach(link => {
            link.style.color = '#F1AE54'; 
        });
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        links.forEach(link => {
            link.style.color = '#fff'; 
        });
        body.style.transition = '2s';
    }
});
