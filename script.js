const themeSwitcher=document.querySelector('input[type="checkbox"]');
const nav=document.getElementById('nav');
const textBox=document.getElementById('text-box');
const toggleIcon=document.getElementById('toggle-icon');
const image1=document.getElementById('image1');
const image2=document.getElementById('image2');
const image3=document.getElementById('image3');

// change style function

function changeTheme(isDark){
    nav.style.backgroundColor=isDark?'rgb(0 0 0 / 50%)':'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor=isDark?'rgb(255 255 255 / 50%)':'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent=isDark?'Dark Mode': 'Light Mode';
    isDark? toggleIcon.children[1].classList.replace('fa-sun','fa-moon') :toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    image1.src=isDark? '/img/undraw_proud_coder_dark.svg' : '/img/undraw_proud_coder_light.svg';
    image2.src=isDark? '/img/undraw_conceptual_idea_dark.svg' : '/img/undraw_conceptual_idea_light.svg';
    image3.src=isDark? '/img/undraw_feeling_proud_dark.svg' : '/img/undraw_feeling_proud_light.svg';
}

function switchTheme(event){
   const isChecked=event.target.checked; 
   if(isChecked){
    document.documentElement.setAttribute('data-theme','dark');
    localStorage.setItem('theme','dark')
    changeTheme(true)
   }
   else{
    document.documentElement.setAttribute('data-theme','light');
    localStorage.setItem('theme','light')
    changeTheme(false)
   }
}

themeSwitcher.addEventListener('change',switchTheme);

// current theme

const currentTheme=localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme);
    if(currentTheme==='dark'){
        themeSwitcher.checked=true;
        changeTheme(true);
    }
}