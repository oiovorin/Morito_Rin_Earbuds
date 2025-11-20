(() => {
  console.log("IIFE Fired");

  //scroll animation
  const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 410;
    const images = [];
    const buds = {
        frame: 0
    }

    for(let i=0; i<frameCount; i++) {
        const img = new Image();
        img.src = `images/webp/animation${(i+1).toString().padStart(4, '0')}.webp`;
        images.push(img);
    }
    

    gsap.to(buds, {
        frame: 409,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            scrub: 5,
            start: "top top"
        },
        onUpdate: render
    })

    images[0].addEventListener("load", render);

    function render() {
        context.clearRect(0,0,canvas.width, canvas.height);
        context.drawImage(images[buds.frame], 0,0);
    }

    // video player for mobile
    const player = new Plyr('#player');


    // function box fade-in
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#featureBox-title, .featureBox", {
      opacity: 1,
      y: 0,
      ease: "power1.out",
      stagger: 0.4,
        scrollTrigger: {
            trigger: "#feature-box",
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
        }
    })

    // model viewer

    gsap.to("#model-viewer-title", {
      opacity: 1,
      y: 0,
      ease: "power1.out",
        scrollTrigger: {
            trigger: "#model-viewer-con",
            start: "top 70%",
            end: "top 50%",
            scrub: 1
        }
    })

    gsap.to("model-viewer", {
      opacity: 1,
      ease: "power1.out",
        scrollTrigger: {
            trigger: "#model-viewer-con",
            start: "top 70%",
            end: "top 50%",
            scrub: 1,
        }
    })
    
   const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: "Ultra-fast Charging",
      text: "Ultra-Fast Charging powers your earbuds in minutes for hours of listening.",
      image: "../images/charge.svg",
      alt: "icon for charging feature"
  },
  {
      title: "Volume knob",
      text: "Precision volume handles allow you to fine-tune your audio exactly the way you like.",
      image: "../images/sound.svg",
      alt: "icon for volume knob feature"
  },
  {
      title: "Ear Cushions",
      text: "Soft cushions rest gently for all-day comfort and reduced pressure.",
      image: "../images/soft.svg",
      alt: "icon for silicone of earbuds"
  },
  {
      title: "Comfort-lock Ear Wings",
      text: "Comfort-Lock Ear Wings hug your ears for a secure, all-day fit.",
      image: "../images/clock.svg",
      alt: "icon to show stay all day"
  },
  {
      title: "Perfect fit curb",
      text: "Precision curves follow your ears for a secure, comfortable fit all day.",
      image: "../images/music.svg",
      alt: "icon of music"
  }
]

function getInfo () {
  infoBoxes.forEach((infoBox, index) => {
    let selected = document.querySelector(`#hotspot-${index+1}`);
    let mobileSelected = document.querySelector(`#hotspot-mobile-${index+1}`);


    const titleElement = document.createElement('h2');
    titleElement.textContent =infoBox.title;


    const textElement = document.createElement('p');
    textElement.textContent = infoBox.text;

    const imageElement = document.createElement('img');
    imageElement.src = infoBox.image;
    imageElement.alt = infoBox.alt;

    
    const topWrapper = document.createElement('div');
    topWrapper.classList.add('top-flex');
    topWrapper.appendChild(imageElement);
    topWrapper.appendChild(titleElement);

    selected.appendChild(topWrapper);
    selected.appendChild(textElement);

    //mobile infoBox
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('img-wrap');
    imgWrapper.appendChild(imageElement.cloneNode(true));

    const textWrapper = document.createElement('div');
    textWrapper.classList.add('text-wrap');
    textWrapper.appendChild(titleElement.cloneNode(true));
    textWrapper.appendChild(textElement.cloneNode(true));
    
    mobileSelected.appendChild(textWrapper);
    mobileSelected.appendChild(imgWrapper);

  });
}

getInfo();


gsap.to(".mobile-box", {
      opacity: 1,
      x: 0,
      duration: 2,
      ease: "power1.out",
      stagger: 1,
        scrollTrigger: {
            trigger: "#mobile-content",
            start: "top 70%",
            end: "top 50%",
            scrub: 1,
        }
    })

// animation that infoBox pops up
   function popUpWindow() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.set(selected, { scale: 0, autoAlpha: 0 });

    gsap.to(selected, {
      duration: 0.3,
      autoAlpha: 1,
      scale: 1.01,
      ease: "back.out(1.5)",

      onComplete: () => {
        gsap.to(selected, { 
          duration: 0.05, 
          scale: 1 }); 
      }
    });

  }

  function closeWindow() {
    let selected = document.querySelector(`#${this.slot}`);
     gsap.to(selected, { duration: 0.3, autoAlpha: 0, scale: 0, opacity: 0 });
  }
  
 hotspots.forEach(function(hotspot) {
  hotspot.addEventListener("mouseenter", popUpWindow);
  hotspot.addEventListener("mouseleave", closeWindow);
});


  // Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);


//slider
    const divisor = document.querySelector("#divisor");
    const slider = document.querySelector("#slider");

    function slideDivider() {
        divisor.style.width = `${slider.value}%`;
    }

    function resetSlider() {
        slider.value = 50;
    }

    slider.addEventListener("input", slideDivider);
    window.addEventListener("load", resetSlider);

    gsap.to("#xray-slider", {
      opacity: 1,
      ease: "power1.out",
        scrollTrigger: {
            trigger: "#xray-slider",
            start: "top 60%",
            end: "top 50%",
            scrub: 1
        }
    })

    // support box animation
     gsap.to(".support-box", {
      duration: 0.5,
      opacity: 1,
      scale: 1.01,
      stagger: 0.5,
      ease: "back.out(1.5)",

      onComplete: () => {
        gsap.to(selected, { 
          duration: 0.1, 
          scale: 1 }); 
      },

      scrollTrigger: {
            trigger: "#support-con",
            start: "top 70%",
            end: "top 50%",
            scrub: 1,
        }
    });

})();

