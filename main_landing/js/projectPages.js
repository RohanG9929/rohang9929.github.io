const mainBody = document.querySelector("body");
const viewMoreButton = document.getElementById('viewMore');
const backButton = document.getElementById('backButton');
const firstSection = document.getElementById("firstPage");
const secondSection = document.getElementById("secondPage");

window.onload = function() {
	
	mainBody.classList.add("fade-in-active");
	secondSection.style.display = "none";
}


function fadeOut(element, duration) {
	var opacity = 1;
	var interval = 50;
	var time = duration / interval;
  
	var fadeOutTimer = setInterval(function() {
	  if (opacity > 0) {
		opacity -= 1 / time;
		element.style.opacity = opacity;
	  } else {
		clearInterval(fadeOutTimer);
		element.style.display = "none";
	  }
	}, interval);
  }

function fadeIn(element, duration) {
  element.style.opacity = 0;
  element.style.display = "block";
  var startTime = performance.now();
  (function animate() {
    var elapsedTime = performance.now() - startTime;
    if (elapsedTime >= duration) {
      element.style.opacity = 1;
    } else {
      var opacity = elapsedTime / duration;
      element.style.opacity = opacity;
      requestAnimationFrame(animate);
    }
  })();
}


viewMoreButton.addEventListener('click', () => {
  // Fade out the firstPage
  fadeOut(firstSection,1000);
  
  // Fade in the new section and back button
  setTimeout(function() {
	fadeIn(secondSection,1000);
  }, 1000);

  var top = document.querySelector('.mainContent')
  top.scrollIntoView();  
});

backButton.addEventListener('click', () => {
  // Fade out the body
  fadeOut(secondSection,1000);
  
  // Fade in the new section and back button
  setTimeout(function() {
	fadeIn(firstSection,1000);
  }, 1000);

  var top = document.querySelector('.mainContent')
  top.scrollIntoView();
});

