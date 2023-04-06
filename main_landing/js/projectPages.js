const mainBody = document.querySelector("body");
let firstSection;
let secondSection;

//Checking to see if the second page of projects is loaded in
function page2Loaded() {
	 secondSection = document.getElementById("secondPage");
		if (secondSection) {
			secondSection = document.getElementById("secondPage");
			firstSection = document.getElementById("firstPage");
			secondSection.style.display = "none";
		} else {
			setTimeout(page2Loaded, 100);
		}
}

window.onload = function() {
	
	mainBody.classList.add("fade-in-active");
	page2Loaded();
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

function waitUntilButtonsAvailable() {
  const viewMoreButton = document.getElementById('viewMore');
  const backButton = document.getElementById('backButton');

  if (viewMoreButton && backButton) {

    viewMoreButton.addEventListener('click', () => {
		// Fade out the firstPage
		fadeOut(firstSection,800);
		
		// Fade in the new section and back button
		setTimeout(function() {
			fadeIn(secondSection,800);
		}, 800);

		var top = document.querySelector('.mainContent')
		top.scrollIntoView({ behavior: 'smooth', block: 'start' });  
	});

	backButton.addEventListener('click', () => {
		// Fade out the body
		fadeOut(secondSection,800);
		
		// Fade in the new section and back button
		setTimeout(function() {
			fadeIn(firstSection,800);
		}, 800);

		var top = document.querySelector('.mainContent')
		top.scrollIntoView({ behavior: 'smooth', block: 'start' });
	});

  } else {
    setTimeout(waitUntilButtonsAvailable, 100);
  }

}

waitUntilButtonsAvailable();
