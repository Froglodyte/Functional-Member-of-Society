import DiscordJS, {
    Message
  } from "discord.js";

export default function replies(message: Message, msg: any){

    for(let sentence of msg.sentences){


        if( sentence.value.includes("froglodyte") || sentence.value.includes("<@599585039252062259>") ){
          if( sentence.opinionation == "negative" || sentence.tone.includes("insult") && sentence.senType != "interrogative" ) 
          message.react("😐");

          if( sentence.opinionation == "positive" || sentence.tone.includes("compliment") && sentence.senType != "interrogative" ) 
          message.react("👆");
        }//the bot will have a different response if the sentence talks about me lmao
    
        if( sentence.value == "<@976439039953604649>" ) message.reply("you called?") //checks for pings
    
        if( sentence.value.includes("<@976439039953604649>") || sentence.value.includes("fmos") ){

          if( sentence.tone.includes("insult") && sentence.senType != "interrogative" )
          message.reply("Do you *want* to get your knee caps broken or smn? I have connections to dangerous people, but I'll let you off the hook with a warning this time; You're messing with the wrong person kiddo 🤭");
        
          if( sentence.opinionation == "negative" )
          message.reply("Ok, thats  just your opinion, your extremely *incorrect* opinion. Maybe keep it to yourself next time 👍")

          if( (sentence.opinionation == "positive" || sentence.tone.includes("compliment")) && sentence.senType != "interrogative" )
          message.reply("Thank you, I'm flattered.");

        }
    
        if( sentence.value.includes("meaning of life") && sentence.senType == "interrogative" ) 
        message.reply("42");
    
        if( sentence.value.includes("who asked") ) 
        message.reply("It was me. I asked 🦸‍♂️");
    
        if( sentence.value.includes("morbius") && (sentence.tone.includes("compliement") || sentence.opinionation == "positive")) 
        message.reply("This message was found to be **true** by true morbhead fact-checkers ✅");
      }
}