const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});


let pre1 = "mukade";
let pre2 = "Mukade";
let pre3 = "muka";
let pre4 = "Muka";

client.on("message", (message) => {

  if (!message.content.startsWith(pre1) || message.author.bot) return;
  if (!message.content.startsWith(pre2) || message.author.bot) return;
  if (!message.content.startsWith(pre3) || message.author.bot) return;
  if (!message.content.startsWith(pre4) || message.author.bot) return;




  if (message.content.startsWith(pre1 + "-chan")) {
    message.channel.send("...cha..........");
  } else

  if (message.content.startsWith(pre1 + "-chan")) {
    message.channel.send("...cha....n?......");
  } else

  if (message.content.startsWith(pre3 + "-chan")) {
    message.channel.send(".........peh...");
  } else

  if (message.content.startsWith(pre4 + "-chan")) {
    message.channel.send("//Peh!?..........");
  }

});



client.on("message", (message) => {

  if (message.author.bot) return;


  if (message.content.includes("I love you Muka")) {
    message.channel.send("..................peh?....");
  } else

  if (message.content.includes("I love you Muka-chan")) {
    message.channel.send("..................?!//");
  } else

    if (message.content.includes("I love you Mukade")) {
    message.channel.send("..................//");
  } else

  if (message.content.includes("I love you Mukade-chan")) {
    message.channel.send("..................peh///");
  } else

  if (message.content.includes("i love you Muka")) {
    message.channel.send("..................//?....");
  } else

  if (message.content.includes("i love you Muka-chan")) {
    message.channel.send("..................?!//");
  } else

    if (message.content.includes("i love you Mukade")) {
    message.channel.send("..................//");
  } else

  if (message.content.includes("i love you Mukade-chan")) {
    message.channel.send("..................peh///");
  } else

  if (message.content.includes("i love you muka")) {
    message.channel.send("..................peh?....");
  } else

  if (message.content.includes("i love you muka-chan")) {
    message.channel.send("..................?!//");
  } else

    if (message.content.includes("i love you mukade")) {
    message.channel.send("..................//");
  } else

  if (message.content.includes("i love you mukade-chan")) {
    message.channel.send("..................peh///");
  } else







  if (message.content.includes("peh")) {
    message.channel.send("Peh!");
  } else

  if (message.content.includes("Peh")) {
    message.channel.send("Peh!");
  } else

  if (message.content.includes("fuck")) {
    message.channel.send("...");
  } else

  if (message.content.includes("Fuck")) {
    message.channel.send("...");
  } else


  if (message.content.includes("Arima")) {
    message.channel.send("Ｄ゛Ａ゛Ｒ゛Ｉ゛Ｍ゛Ａ゛　Ｋ゛Ｉ゛Ｊ゛Ｏ゛Ｕ゛");
  } else

  if (message.content.includes("arima")) {
    message.channel.send("Ｄ゛Ａ゛Ｒ゛Ｉ゛Ｍ゛Ａ゛　Ｋ゛Ｉ゛Ｊ゛Ｏ゛Ｕ゛");
  } 

   
});



client.login("NDk1NzYxMzI0MDUyMTg1MDg4.DpHb8w.8lVDtz1XMT92DaTuV2Xe3U_DkDk");
