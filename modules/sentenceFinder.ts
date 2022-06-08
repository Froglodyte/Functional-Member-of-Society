import negDetctor from "./negDetect";
import senTypeDetector from "./senTypeDetect";
import toneDetector from "./toneDetect";
import opinionDetector from "./opinionDetect";

export default function sentenceFinder(message: any, OGMessage: string) {
  if (message === undefined) return;
  if (!(message.endsWith('!') || message.endsWith('?') || message.endsWith('.'))) message = message + ".";

  let sentenceArr = message.match(/[^\.!\?\,]+[\.!\?\,]+/g);
  let sentences = [];

  let sentenceInfo = {
    value: "", //the sentence itself
    senType: "", //type of sentence (interrogative, exclamatory, etc)
    isNegative: false, //does the sentence contains negative words? (dont, not, shouldnt, etc)
    tone: "", //checks if the sentence is an insult, compliment, or neither
    opinionation: "" //the opinionation of the sentence, if any.
  };

  for (let element of sentenceArr) {

    let words = element.split(" ");

    sentenceInfo.value = element;
    sentenceInfo.value = sentenceInfo.value.trim();
    sentenceInfo.senType = senTypeDetector(sentenceInfo.value, OGMessage);
  
    sentenceInfo.isNegative = negDetctor(words);
    if(sentenceInfo.isNegative){
      sentenceInfo.tone = "neutral";
      sentenceInfo.opinionation = "neutral";
    } else {
      sentenceInfo.tone = toneDetector(words);
      sentenceInfo.opinionation = opinionDetector(words);
    }
  
    sentences.push(sentenceInfo);
  
    sentenceInfo = {
      value: "",
      senType: "",
      isNegative: false,
      tone: "",
      opinionation: ""
    };
  }
  return sentences;
}
