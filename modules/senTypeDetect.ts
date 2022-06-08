export default function senTypeDetector(message: any, OGMessage: string) {
  let advisoryWords = [
    "should",
    "shouldnt",
    "could",
    "probably",
    "suggest",
    "Id",
    "recommend",
  ];

  let requestWords = ["could", "want", "can", "please"];

  let imperativeWords = [
    "go",
    "do",
    "command",
    "demand",
    "make",
    "get",
    "tell",
    "ask",
    "solve",
    "find",
    "add",
    "remove",
    "change",
    "fix",
    "update",
    "create",
    "delete",
    "start",
    "stop",
    "help",
    "look",
    "shut",
    "search",
    "leave",
    "dont",
    "kill",
  ];

  let interrogativeWords = [
    "how",
    "what",
    "when",
    "where",
    "why",
    "who",
    "whom",
    "whose",
    "hows",
    "whats",
    "whens",
    "wheres",
    "whys",
    "whos"
  ];

  switch (message.charAt(message.length - 1)) {
    case "?":
      return "interrogative";
      break;

    case "!":
      return "exclamative";
      break;

    case ".":
    default:
      if (OGMessage == OGMessage.toUpperCase()) {
        return "exclamative";
      }

      let wordArr = message.split(" ");

      for (let i = 0; i < wordArr.length; i++) {
        let temp = wordArr[i].replaceAll(/[\W_]+/g, ""); //regexp removes all non-alphanumeric characters

        if (interrogativeWords.includes(temp)) return "interrogative";
        if (requestWords.includes(temp)) return "request";
        if (advisoryWords.includes(temp)) return "advisory";
        if (imperativeWords.includes(temp)) return "imperative";
      }
  }
  return "statement";
}
