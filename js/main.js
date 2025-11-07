(() => {
  console.log("IIFE Fired");

   const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: "Ultra-fast Charging",
      text: "Ultra-Fast Charging lets you power up your earbuds in just a few minutes, giving you hours of uninterrupted listening so you're always ready to go, no matter where life takes you.",
      image: "images/ameofimage.jpg",
      alt: "alttext"
  },
  {
      title: "Volume knob",
      text: "Precision volume handles allow you to fine-tune your audio exactly the way you like.",
      image: "images/ameofimage.jpg",
      alt: "alttext"
  },
  {
      title: "Cushioned For Your Ears",
      text: "Soft cushions gently rest in your ears, providing all-day comfort and reducing pressure for a perfect listening experience.",
      image: "images/ameofimage.jpg",
      alt: "alttext"
  },
  {
      title: "Comfort-lock Ear Wings",
      text: "Comfort-Lock Ear Wings gently hug your ears, providing a secure and comfortable fit that stays in place all day.",
      image: "images/ameofimage.jpg",
      alt: "alttext"
  },
  {
      title: "Perfect fit curb",
      text: "Precision-engineered curves follow the natural shape of your ears, offering a secure and comfortable fit that stays in place throughout the day",
      image: "images/ameofimage.jpg",
      alt: "alttext"
  }
]

//function
function loadInfo () {
  infoBoxes.forEach((infoBox, index) => {
   // console.log(index + 1);
   // selected will be the infoBOx on out page, e.g. hotsopt-1, hotspot-2, etc
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


    // lets add the h2 to the selected hotspot
    selected.appendChild(titleElement);
    // lets add the p to the selected hotspot
    selected.appendChild(textElement);
  });
}

loadInfo();

   function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 0 });
  }
  
 hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
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