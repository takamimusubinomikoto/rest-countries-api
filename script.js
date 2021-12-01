const filter = document.getElementById('filter');
const options = document.querySelector('.options');

filter.onclick = e => {
   options.classList.toggle('options-visible');
}
options.onclick = e => {
   if (e.target.tagName == "OPTION") {
      filter.innerText = e.target.innerText;
      options.classList.remove('options-visible');
   }
}