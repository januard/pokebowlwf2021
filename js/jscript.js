const CONTACTCLICK = document.getElementById('contact-label');
CONTACTCLICK.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Call Us at 555-5555');
});
document.getElementById('on-sounds').addEventListener('click', function(event){
    event.preventDefault();
    alert('sounds playing..');
  document.getElementById('sounds').play();
});