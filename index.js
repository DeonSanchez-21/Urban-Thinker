const bubbles = document.querySelectorAll(".circle");
const projects = document.querySelectorAll(".projects");
const nav = document.querySelector('.header')

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () =>{
	if (lastScrollY < window.scrollY) {
	
		nav.classList.add("hidden");
	} else {
		nav.classList.remove("hidden");
		
	};

	lastScrollY = window.scrollY;
});

const options = {
    root: null,
    rootMargin: "0px 0px -50% 0px",
    threshold: 0,
};

const observer = new IntersectionObserver(function (enteries, observer) {
        enteries.forEach(entry => {
           entry.isIntersecting ? entry.target.style.backgroundColor = '#09a1a8' : entry.target.style.backgroundColor = '#ededed';
            
        });
    },options
);

bubbles.forEach(bubble => 
    {observer.observe(bubble)}
);


var counter = 0;

projects.forEach((project, index) => {
    project.style.left = `${index * 100}%`
});

const goNext = () =>{
    counter++;
    slideImage();
}
const goPrev = () =>{
    counter--;
    slideImage();
}

const slideImage = () => {
    projects.forEach((project) =>{
        project.style.transform = `translateX(-${(counter%3)*100}%)`
    })
}


$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    wrapAround: true,
    autoPlay: true,
  });

  const text = document.getElementById("hero_text");

  const textLoad = () => {
    setTimeout(() => {
        text.textContent = "the planet"
    }, 0)
    setTimeout(() => {
        text.textContent = "cities"
    }, 3000)
    setTimeout(() => {
        text.textContent = "people"
    }, 6000)
  }

  textLoad();
  setInterval(textLoad, 9000)