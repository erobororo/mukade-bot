const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.includes("ping")) {
    message.channel.send("pong!");
  }
});

client.login("NDk1NzYxMzI0MDUyMTg1MDg4.DpHb8w.8lVDtz1XMT92DaTuV2Xe3U_DkDk");