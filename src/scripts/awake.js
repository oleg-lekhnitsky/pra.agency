let detailsElement = document.querySelector('header');

let awake = function() {
  let rect = detailsElement.getBoundingClientRect();
  // console.log(rect)
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    detailsElement.classList.add('awake');
  } else {
    detailsElement.classList.remove('awake');
  }
};

document.addEventListener('scroll', awake);

var detailsElements = document.querySelectorAll('h3, h2, p, li');

let awaker = function() {
  for (let i = 0; i < detailsElements.length; i++) {
    let detailsElement = detailsElements[i];
    let rect = detailsElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      detailsElement.classList.add('awake');
    } else {
      detailsElement.classList.remove('awake');
    }
  }
};

document.addEventListener('scroll', awaker);
