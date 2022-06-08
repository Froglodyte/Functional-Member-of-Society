export default function opinionDetector(wordsOfString: string[]) {
    let positiveWords = [
        "enjoy",
        "love",
        "like",
        "appreciate",
        "adore"
    ]
    let negativeWords = [
        "hate",
        "dislike",
        "despise",
        "sucks"
    ]

    for(let element of wordsOfString) {
        if(positiveWords.includes(element)) return "positive"; 
        else if(negativeWords.includes(element)) return "negative";
    }
    return "neutral";
}