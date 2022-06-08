export default function negDetector(wordsOfString: string[]) {
  const negativeWords = [
    "wont",
    "isnt",
    "cant",
    "dont",
    "hasnt",
    "havent",
    "hadnt",
    "wasnt",
    "not",
    "never",
    "none",
    "nothing",
    "nowhere",
    "neither",
    "no",
    "nobody",
    "aint",
    "cannot",
  ];

  let negCheck = 1;

  for (let word of wordsOfString) {
    if (negativeWords.includes(word.replaceAll(/[\W_]+/g, ""))) negCheck++; //regexp removes all non-alphanumeric characters
  }

  if (negCheck % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
