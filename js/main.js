(() => {
  console.log("IIFE Fired");

   const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: "Ultra-fast Charging",
      text: "Ultra-Fast Charging powers your earbuds in minutes for hours of listening.",
      image: "../images/charge.svg",
      alt: "alttext"
  },
  {
      title: "Volume knob",
      text: "Precision volume handles allow you to fine-tune your audio exactly the way you like.",
      image: "../images/sound.svg",
      alt: "alttext"
  },
  {
      title: "Ear Cushions",
      text: "Soft cushions rest gently for all-day comfort and reduced pressure.",
      image: "../images/soft.svg",
      alt: "alttext"
  },
  {
      title: "Comfort-lock Ear Wings",
      text: "Comfort-Lock Ear Wings hug your ears for a secure, all-day fit.",
      image: "../images/clock.svg",
      alt: "alttext"
  },
  {
      title: "Perfect fit curb",
      text: "Precision curves follow your ears for a secure, comfortable fit all day.",
      image: "../images/music.svg",
      alt: "alttext"
  }
]

//function
function getInfo () {
  infoBoxes.forEach((infoBox, index) => {
   // console.log(index + 1);
   // selected will be the infoBox on out page, e.g. hotsopt-1, hotspot-2, etc
    let selected = document.querySelector(`#hotspot-${index+1}`);
    //console.log(selected);


    //lets create an h2
    const titleElement = document.createElement('h2');
    // lets populate the 2
    titleElement.textContent =infoBox.title;

    //lets create an p
    const textElement = document.createElement('p');
    //lets popilate the p
    textElement.textContent = infoBox.text;

    const imageElement = document.createElement('img');
    imageElement.src = infoBox.image;
    imageElement.alt = infoBox.alt;

    
    // create wrapper for img and h2 to use flex box
    const topWrapper = document.createElement('div');
    topWrapper.classList.add('top-flex');
    topWrapper.appendChild(imageElement);
    topWrapper.appendChild(titleElement);


    // add the wrapper to the selected hotspot
    selected.appendChild(topWrapper);
    // lets add the p to the selected hotspot
    selected.appendChild(textElement);
  });
}

getInfo();

// chack whice hotspot is selected now
let activeWindow = null;

   function popUpWindow() {
    let selected = document.querySelector(`#${this.slot}`);

    // if the selected window already open => close it
    if (activeWindow === selected) {
      gsap.to(selected, {  duration: 0.2, autoAlpha: 0, scale: 0});
      activeWindow = null;
      return;
    }

    // if other window is open => close that window
    if (activeWindow) {
      gsap.to(activeWindow, { duration: 0.2, autoAlpha: 0, scale: 0 }); 
    }

    // make window small so that looks like pops up
    gsap.set(selected, { scale: 0, autoAlpha: 0 });

    // window pop up animatiion
    gsap.to(selected, {
      duration: 0.3,
      autoAlpha: 1,
      scale: 1.01, // make a little bit bigger
      ease: "back.out(1.5)",

      // when window pops up and became little bit bigger => make it scale: 1
      onComplete: () => {
        gsap.to(selected, { 
          duration: 0.05, 
          scale: 1 }); 
      }
    });

    // update activeWindow
    activeWindow = selected;

  }
  
 hotspots.forEach(function(hotspot) {
  hotspot.addEventListener("mouseenter", popUpWindow);
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
})();

