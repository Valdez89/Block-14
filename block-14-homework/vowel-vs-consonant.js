// Below I will commit to a function showing that it accepts strings with lowercased letters

function countConsonantsAndVowels(str) {
    let consonantsCount = 0;
    let vowelsCount = 0;
    const vowels = "aeiou";
  // Here is the for loop necessary to assess the string length.
  // There is also an if/else statement in place to show potential variations.
    for (let i = 0; i < str.length; i++) {
      const letter = str[i].toLowerCase();
      if (vowels.includes(letter)) {
        vowelsCount++;
      } else if (letter.match(/[a-z]/i)) {
        consonantsCount++;
      }
    }
  // Below will be the print of the following words, consonants, and vowels.
    console.log(
      `${str} has ${consonantsCount} consonants and ${vowelsCount} vowels`
    );
  }
  
  // Results for vowels and consonats of the words.
  
  countConsonantsAndVowels("hello"); // hello has 3 consonants and 2 vowels
  countConsonantsAndVowels("ukelele"); // ukelele has 3 consonants and 4 vowels
  countConsonantsAndVowels("awesome"); // awesome has 3 consonants and 4 vowels
  countConsonantsAndVowels("onomonopia"); // onomonopia has 4 consonants and 6 vowels
  countConsonantsAndVowels("textbook"); // textbook has 5 consonants and 3 vowels
  
