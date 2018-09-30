const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

let love = "I love you ";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(love) || message.author.bot) return;

  if (message.content.startsWith(love + "mukade")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(love + "muka")) {
    message.channel.send("..................///");
  }

  if (message.content.includes("peh")) {
    message.channel.send("Peh!");
  } else

  if (message.content.includes("Peh")) {
    message.channel.send("Peh!");
  } else

  if (message.content.includes("muka")) {
    message.channel.send("Peh?");
  } else

  if (message.content.includes("Muka")) {
    message.channel.send("Peh?");
  } else

  if (message.content.includes("fuck")) {
    message.channel.send("...");
  } else

  if (message.content.includes("Fuck")) {
    message.channel.send("...");
  } else

  if (message.content.includes("i love mukade")) {
    message.channel.send("...?!");
  } else

  if (message.content.includes("I love mukade")) {
    message.channel.send("...?!");
  } else

  if (message.content.includes("Arima")) {
    message.channel.send("Ｄ゛Ａ゛Ｒ゛Ｉ゛Ｍ゛Ａ゛　Ｋ゛Ｉ゛Ｊ゛Ｏ゛Ｕ゛");
  } else

  if (message.content.includes("arima")) {
    message.channel.send("Ｄ゛Ａ゛Ｒ゛Ｉ゛Ｍ゛Ａ゛　Ｋ゛Ｉ゛Ｊ゛Ｏ゛Ｕ゛");
  } else

  if (message.content.includes("i love you, muka")) {
    message.reply("...............///");
  } else

  if (message.content.includes("I love you, muka")) {
    message.reply("...............///");
  } else

   if (message.content.includes("i love you, mukade")) {
    message.reply("...............///");
  } else

   if (message.content.includes("i love you, mukade-chan")) {
    message.reply("...............///");
  } else

   if (message.content.includes("I love you, mukade")) {
    message.reply("...............///");
  } else

   if (message.content.includes("I love you, mukade-chan")) {
    message.reply("...............///");
  } else

    if (message.content.includes("I love you, Mukade-chan")) {
    message.reply("...............///");
  } else

  if (message.content.includes("i love you muka")) {
    message.reply("...............///");
  } else

  if (message.content.includes("I love you muka")) {
    message.reply("...............///");
  } else

   if (message.content.includes("i love you mukade")) {
    message.reply("...............///");
  } else

   if (message.content.includes("i love you mukade-chan")) {
    message.reply("...............///");
  } else

   if (message.content.includes("I love you mukade")) {
    message.reply("...............///");
  } else

   if (message.content.includes("I love you mukade-chan")) {
    message.reply("...............///");
  } else

    if (message.content.includes("I love you Mukade-chan")) {
    message.reply("...............///");
  }

   
});



client.login("NDk1NzYxMzI0MDUyMTg1MDg4.DpHb8w.8lVDtz1XMT92DaTuV2Xe3U_DkDk");
