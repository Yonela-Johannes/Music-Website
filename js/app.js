window.addEventListener('load', function(){
    const loader = document.getElementById('loader');
    loader.className += " hidden"; 
});

// get Elems
const slides = document.querySelectorAll('.slide');
const auto = true;
const interval = 500;
let slideInterval;

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    // check for next slide
    if(current.nextElementSibling){
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');        
    }else{
        //  add current to start 
        slides[0].classList.add('current');        
    }
    setTimeout(() => current.classList.remove('current'));

}
const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    // check for next slide
    if(current.previousElementSibling){
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');      
    }else{
        //  add current to last 
        slide[slides.length - 1].classList.add('current');        
    }
    setTimeout(() => current.classList.remove('current'));
    
}

// auto slide

if(auto){
    // run next slide at interval time
    slideInterval =  setInterval(nextSlide, interval);
}