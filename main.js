// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorHide = () => {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
}
errorHide();

const heart = node => {
  mimicServerCall().then(() => {
    node.innerText = FULL_HEART;
    node.classList.add("activated-heart").catch(err => {
      errorHide();
      window.setTimeout(errorHide, 3000);
    });
  })
}

window.addEventListener("click", e => {
  if(e.target.textContent === EMPTY_HEART) heart(e.target);
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
