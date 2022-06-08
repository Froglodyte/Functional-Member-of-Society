export default function toneDetector(wordsOfString: string[]) {
  let complimentWords = {
    basic: [
      "good",
      "great",
      "nice",
      "awesome",
      "cool",
      "wonderful",
      "amazing",
      "fantastic",
      "fantabulous",
      "fabulous",
      "incredible",
      "best",
      "excellent",
      "based",
    ],

    intelligence: [
      "smart",
      "intelligent",
      "brilliant",
      "genius",
      "clever",
      "witty",
    ],

    personality: [
      "funny",
      "friendly",
      "helpful",
      "lovable",
      "sweet",
      "humble",
      "kind",
      "caring",
      "generous"
    ],

    looks: [
      "beautiful",
      "handsome",
      "pretty",
      "attractive",
      "gorgeous",
      "cute",
      "hot",
      "sexy",
      "adorable",
    ],
  };

  let insultWords = {
    basic: [
      "bad",
      "terrible",
      "horrible",
      "awful",
      "worst",
      "shitty",
      "crappy",
      "dreadful",
      "disgusting",
      "gross",
      "lame",
      "dumb",
      "stupid",
      "idiotic",
    ],

    intelligence: [
      "dumb",
      "stupid",
      "braindead",
      "dumbass",
      "moron",
      "airhead",
      "brainless",
      "idiot",
      "dingbat",
      "dingus",
      "dunce",
      "jackass",
    ],

    personality: [
      "mean",
      "annoying",
      "irritating",
      "rude",
      "unfriendly",
      "unhelpful",
      "unfunny",
      "unpleasant",
      "creepy",
      "nasty",
      "evil",
      "asshole",
      "bitch",
      "bastard",
      "dickhead",
      "dick",
      "ass",
      "cunt",
      "jerk",
      "selfish"
    ],

    looks: [
      "ugly", 
      "unattractive", 
      "hideous", 
      "unsightly"
    ],
  };

  for(let word of wordsOfString){

    word = word.replaceAll(/[\W_]+/g, ""); //regexp removes all non-alphanumeric characters

    if(complimentWords.basic.includes(word)) return "compliment-basic";
    if(complimentWords.intelligence.includes(word)) return "compliment-intelligence";
    if(complimentWords.personality.includes(word)) return "compliment-personality";
    if(complimentWords.looks.includes(word)) return "compliment-looks";

    if(insultWords.basic.includes(word)) return "insult-basic";
    if(insultWords.intelligence.includes(word)) return "insult-intelligence";
    if(insultWords.personality.includes(word)) return "insult-personality";
    if(insultWords.looks.includes(word)) return "insult-looks";
  }

  return "neutral";
}
