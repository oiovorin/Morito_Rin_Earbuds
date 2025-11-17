(() => {
  console.log("IIFE Fired");

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

//function
function getInfo () {
  infoBoxes.forEach((infoBox, index) => {
    let selected = document.querySelector(`#hotspot-${index+1}`);


    //create and populate h2
    const titleElement = document.createElement('h2');
    titleElement.textContent =infoBox.title;

    //create and populate p
    const textElement = document.createElement('p');
    textElement.textContent = infoBox.text;

    const imageElement = document.createElement('img');
    imageElement.src = infoBox.image;
    imageElement.alt = infoBox.alt;

    
    // create wrapper for img and h2 to use flex box
    const topWrapper = document.createElement('div');
    topWrapper.classList.add('top-flex');
    topWrapper.appendChild(imageElement);
    topWrapper.appendChild(titleElement);


    // add the wrapper and p to the selected hotspot
    selected.appendChild(topWrapper);
    selected.appendChild(textElement);
  });
}

getInfo();


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
})();

