// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.body.addEventListener("click", (e)=>{
  if(e.target.className == "like-glyph") mimicServerCall();
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        alert("Random server error. Try again.");
      } else {
        alert("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
