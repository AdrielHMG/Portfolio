window.onload = () => {
  
  const transition_element = document.querySelector('.transition');
  const anchors = document.querySelectorAll('a');

  setTimeout(() => {
    transition_element.classList.remove('is-active');
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;

      transition_element.classList.add('is-active');

      setTimeout(() => {
        window.location.href = target;
      }, 500)
    });
  }
  if(!window.location.hash) {
    window.location = window.location + '#';
  } 
}

$(document).ready(function(){    
  if(document.URL.indexOf("#")==-1){ //Check if the current URL contains '#'
      url = document.URL+"#"; // use "#". Add hash to URL
      location = "#";
      location.reload(false); //Reload the page
  }
});
