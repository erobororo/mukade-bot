const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.includes("peh")) {
    message.channel.send("Peh!");
  }

  if (message.content.includes("Peh")) {
    message.channel.send("Peh!");
  }

  if (message.content.includes("muka")) {
    message.channel.send("Peh?");
  }

  if (message.content.includes("Muka")) {
    message.channel.send("Peh?");
  }

  if (message.content.includes("fuck")) {
    message.channel.send("...");
  }

  if (message.content.includes("Fuck")) {
    message.channel.send("...");
  }

  if (message.content.includes("i love mukade")) {
    message.channel.send("...?!");
  }

  if (message.content.includes("I love mukade")) {
    message.channel.send("...?!");
  }

  if (message.content.includes("Arima")) {
    message.channel.send("Ｄ゛Ａ゛Ｒ゛Ｉ゛Ｍ゛Ａ゛　Ｋ゛Ｉ゛Ｊ゛Ｏ゛Ｕ゛");
  }

  if (message.content.includes("arima")) {
    message.channel.send("Ｄ゛Ａ゛Ｒ゛Ｉ゛Ｍ゛Ａ゛　Ｋ゛Ｉ゛Ｊ゛Ｏ゛Ｕ゛");
  }

  if (message.content.includes("i love you, muka")) {
    message.reply("...............///");
  }

  if (message.content.includes("I love you, muka")) {
    message.reply("...............///");
  }

   if (message.content.includes("i love you, mukade")) {
    message.reply("...............///");
  }

   if (message.content.includes("i love you, mukade-chan")) {
    message.reply("...............///");
  }

   if (message.content.includes("I love you, mukade")) {
    message.reply("...............///");
  }

   if (message.content.includes("I love you, mukade-chan")) {
    message.reply("...............///");
  }

    if (message.content.includes("I love you, Mukade-chan")) {
    message.reply("...............///");
  }

  if (message.content.includes("i love you muka")) {
    message.reply("...............///");
  }

  if (message.content.includes("I love you muka")) {
    message.reply("...............///");
  }

   if (message.content.includes("i love you mukade")) {
    message.reply("...............///");
  }

   if (message.content.includes("i love you mukade-chan")) {
    message.reply("...............///");
  }

   if (message.content.includes("I love you mukade")) {
    message.reply("...............///");
  }

   if (message.content.includes("I love you mukade-chan")) {
    message.reply("...............///");
  }

    if (message.content.includes("I love you Mukade-chan")) {
    message.reply("...............///");
  }


    if (message.substring(0, 2) == "m!") {
        var args = message.substring(2).split(" ");
        var cmd = args[0];
       
        args = args.splice(2);
        switch(cmd) {

            case "help":
                bot.sendMessage({
                    to: channelID,
                    message: "Peh!? (I`m not sure how I got here and I scare easily. Try some keywords and please be nice to me.)"
                });
            break;

        }

    }

});



client.login("NDk1NzYxMzI0MDUyMTg1MDg4.DpHb8w.8lVDtz1XMT92DaTuV2Xe3U_DkDk");
