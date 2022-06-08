//dependencies imports
import DiscordJS, {
  Intents,
} from "discord.js";
import dotenv from "dotenv";

//module imports
import sentenceFinder from "./modules/sentenceFinder";
import replies from "./modules/replies";

console.clear();

dotenv.config();

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const fs = require("fs");

client.on("ready", () => {
  console.log("Bot is online");
});

client.on("messageCreate", async (message) => {

  //this line is for debugging, I'll remove it later
  console.log(`${message.author.username}: ${message.content}`);

  if (message.author.bot) return;

  //info about the entire message
  const msg: any = {
    content: message.content.toLowerCase().replaceAll("'", "").trim(),
    sentences: [], //object array which stores INFO about each sentence in the message, not just the content of the sentnce itself
  };

  msg.sentences = sentenceFinder(msg.content, message.content);//this function is what pushes objects with info to the msg.sentences array

  console.log(msg.sentences);//another line for debugging. I'll remove it later

  //just consists of replies to certain messages
  replies(message, msg);

});

client.login(process.env.TOKEN);