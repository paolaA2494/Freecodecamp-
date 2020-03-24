'use strict';

const frase = document.getElementById('phrase');

let  arr = ["A-tisket a-tasket A green and yellow basket", "Peter Piper picked a peck of pickled peppers", "A-", "Absolutely Longer"];


function truncateString(str, num) {
    if (str.length > num) {

    let resultado =  str.slice(0, num) + " ... <br>";

    frase.innerHTML = `${frase.innerHTML} <br> ${resultado}`;

  } else {
        document.write(str);
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Peter Piper picked a peck of pickled peppers", 11);
//truncateString("A-tisket a-tasket A green and yellow basket ", "   A-tisket a-tasket A green and yellow basket".length);
//truncateString("A-tisket a-tasket A green and yellow basket ", "   A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("A-", 1);
truncateString("Absolutely Longer", 2);