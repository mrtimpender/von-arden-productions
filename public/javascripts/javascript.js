function activeLink() {
  var links = document.getElementsByClassName('nav-link');
  for (var i = 0; i < links.length; i++) {
    if (links[i].innerHTML == document.title){
      links[i].classList.add('active-link')
    }
  }
}

document.onload = activeLink();

alert('js/js-working');
