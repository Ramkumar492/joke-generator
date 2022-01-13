document.querySelector('.button').addEventListener('click', function(e) {


  let num;

  if (parseInt(document.querySelector('.noj').value)) {
    num = document.querySelector('.noj').value;
  }


  let xhr = new XMLHttpRequest();


  xhr.open('GET', `https://api.icndb.com/jokes/random/${num}`, true);

  xhr.onload = function() {

    console.log(this.status);

    let output = '';
    let jokes;
    if (this.status === 200) {
      jokes = JSON.parse(this.responseText);

      console.log(jokes);
      let ol = document.createElement('ol');

      jokes.value.forEach(function(joke) {
          output += `<li> ${joke.joke}</li>`;
          ol.innerHTML = output;
          document.querySelector('.jokes-display').appendChild(ol);
        }

      );




    }


  }

  xhr.send();


  e.preventDefault();
});
