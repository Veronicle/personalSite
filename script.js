/*

// CREDIT TO https://codepen.io/falldowngoboone/pen/PwzPYv FOR THE CURSOR TRAIL CODE

// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
   // of the mouse, set with a mousemove event listener below
   var dots = [],
   mouse = {
     x: 0,
     y: 0
   };

// The Dot object used to scaffold the dots
var Dot = function() {
 this.x = 0;
 this.y = 0;
 this.node = (function(){
   var n = document.createElement("div");
   n.className = "trail";
   document.body.appendChild(n);
   return n;
 }());
};
// The Dot.prototype.draw() method sets the position of 
 // the object's <div> node
Dot.prototype.draw = function() {
 this.node.style.left = this.x + "px";
 this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
 var d = new Dot();
 dots.push(d);
}

// This is the screen redraw function
function draw() {
 // Make sure the mouse position is set everytime
   // draw() is called.
 var x = mouse.x + 1,
     y = mouse.y + 1;
 // adding 1 so that I can click on links (otherwise the dot on cursor will get in the way)
 
 // This loop is where all the 90s magic happens
 dots.forEach(function(dot, index, dots) {
   var nextDot = dots[index + 1] || dots[0];
   
   dot.x = x;
   dot.y = y;
   dot.draw();
   x += (nextDot.x - dot.x) * .6;
   y += (nextDot.y - dot.y) * .6;

 });
}

addEventListener("mousemove", function(event) {
 //event.preventDefault();
 mouse.x = event.pageX;
 mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
 // everytime the screen repaints via requestAnimationFrame().
function animate() {
 draw();
 requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();

const text = "18 @ Wharton / fascinated by finance, sneakers, code, and quantitative problems / currently building";
const typingDiv = document.getElementById("typing");
let index = 0;
const typingSpeed = 50; // milliseconds

function typeLetter() {
    if (index < text.length) {
        typingDiv.textContent += text.charAt(index);
        index++;
        setTimeout(typeLetter, typingSpeed);
    } else {
        typingDiv.classList.add('cursor'); // Add cursor effect at the end
        setTimeout(() => {
            document.getElementById('intro-section').classList.add('shrink');
            setTimeout(() => {
                document.querySelectorAll('section.hidden').forEach((section, i) => {
                    setTimeout(() => {
                        section.classList.remove('hidden');
                        section.classList.add('visible');
                    }, i * 500); // Stagger the appearance of sections
                });
                document.querySelector('nav').style.display = 'flex';
            }, 1000); // 1 second delay after shrinking
        }, 1000); // 1 second after typing is done
    }
}

typingDiv.classList.add('cursor'); // Start with cursor
setTimeout(typeLetter, typingSpeed); // Start typing effect
*/

// Cursor Trail Effect
document.addEventListener("mousemove", (e) => {
  const cursorTrail = document.createElement("div");
  cursorTrail.className = "cursor-trail";
  cursorTrail.style.left = `${e.clientX}px`;
  cursorTrail.style.top = `${e.clientY}px`;
  document.body.appendChild(cursorTrail);

  // Remove the trail after animation ends
  setTimeout(() => {
      cursorTrail.remove();
  }, 500); // Matches the animation duration
});

// Fade-in animations for text
document.addEventListener("DOMContentLoaded", () => {
  const name = document.getElementById("name");
  const intros = document.querySelectorAll(".intro");

  // Ensure the name fades in first
  setTimeout(() => {
      name.style.opacity = "1";
      name.style.transform = "translateY(0)";
  }, 500);

  // Apply fade-in animation to intro text
  intros.forEach((intro, index) => {
      setTimeout(() => {
          intro.style.opacity = "1";
          intro.style.transform = "translateY(0)";
      }, 1000 + index * 300);
  });
});

