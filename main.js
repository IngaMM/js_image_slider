const imageNumber = 6;
window.imageNumber = imageNumber;

//document.getElementById('arrowLeft').addEventListener('click', showPreviousImage);
const arrows = document.querySelectorAll('.arrow');
arrows.forEach((arrow) => {
  arrow.addEventListener('click', showImageInSequence);
})

function showImageInSequence(){
  const image = document.getElementById('image');
  image.classList.add('transparent');
  setTimeout(function(){
    let imageIndex = parseInt(image.dataset.index);
    if (this.id === 'arrowLeft'){
      (imageIndex > 1) ? imageIndex-- : imageIndex = imageNumber;
    } else {
      (imageIndex < imageNumber) ? imageIndex++ : imageIndex = 1;
    }
    const newImageSource = 'images/img_' + imageIndex.toString() + '.jpg';
    image.setAttribute('src', newImageSource);
    image.setAttribute('data-index', imageIndex.toString())

    // Fill only the circle that belongs to displayed image
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle) => {
      circle.classList.remove('full');
    })
    const circleId = 'circle'+ imageIndex.toString();
    const correctCircle = document.getElementById(circleId);
    correctCircle.classList.add('full');
    image.classList.remove('transparent');
  }, 500);
}

const circles = document.querySelectorAll('.circle');
circles.forEach((circle) => {
  circle.addEventListener('click', changeImage);
})

function changeImage(){
  const image = document.getElementById('image');
  image.classList.add('transparent');
  thisCircle = this;
  setTimeout(function(){
    // Fill only clicked circle
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle) => {
      circle.classList.remove('full');
    })
    thisCircle.classList.add('full');

    // Get the image number that belongs to the clicked circle
    let imageIndex = parseInt(thisCircle.dataset.index);

    // Change the image
    const newImageSource = 'images/img_' + imageIndex.toString() + '.jpg';
    image.setAttribute('src', newImageSource);
    image.setAttribute('data-index', imageIndex.toString());
    image.classList.remove('transparent');
  }, 500);
}

// Change the image automatically
function repeat(){
  showImageInSequence();
  setTimeout(repeat, 5000);
}
repeat();
