const fs = require('fs');
const {
  Client,
  Collection,
  Intents
} = require('discord.js');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS],
});

const Discord = require('discord.js');
client.discord = Discord;


const quoiResponses = ['feur !🤪', 'quoicoubeh !👈', 'Feur-me ta gueule ! 😡', 'driceps 💪', 'https://media.discordapp.net/attachments/478577225990537216/1088119311249461248/image.png'];
const heinResponses = ['deux ! 🤓', 'deux, trois, SOLEIL ! ☀️', 'dien ! 👨🏾'];
const ouiResponses = ['stiti ! 🙉', 'Fi ! 📡'];
const ouaiResponses = ['stern ! 🤠', 'stern ! 🤠'];
const ouaisResponses = ['stern ! 🤠', 'stern ! 🤠'];
const commentResponses = ['taire ! 💭', 'ça mon reuf ! 🧐', 'commendant de bord ! ✈️'];
const nonResponses = ['bril ! 🥶', 'bril ! 🥶'];
const nanResponses = ['çy ! 🥶', 'terre ! 🥶'];
const reResponses = ['nard ! 🦊', 'lou ! 😒'];
const ahResponses = ['beille ! 🐝'];
const maisResponses = ['on ! 🏠', 'tresse ! 👩‍🏫'];
const alloResponses = ["À l'huile ! ☎️", "pital ! 🏥"];
const etResponses = ["toile ! 🌟", "m'en bas les couilles ! 🙃"];
const tgResponses = ["V ! 🚄", "https://tenor.com/view/uno-reverse-card-gif-24856155"];
const goResponses = ["gole ! 🤪", "gole ! 🤪"];
const quiResponses = ["rikou ! 🧑🏿‍🍼", "rikou ! 🧑🏿‍🍼"];
const siResponses = ["louhette ! 👥", "louhette ! 👥"];
const okResponses = ["sur glace ! 🥶", "sur glace ! 🥶"];
const ratioResponses = ["contre ratio ! ✋", "gros flop ! 😮‍💨"];

console.log('Bot est ON !')
console.log('Merci d avoir installer Bot ❤️');

client.on('message', (message) => {
  const content = message.content.trim();
  const lastWord = content.split(' ').pop();
  const quoiRegex = /^(quoi)[?!]*$/i;
  const heinRegex = /^(hein)[?!]*$/i;
  const ouiRegex = /^(oui)[?!]*$/i;
  const ouaiRegex = /^(ouai)[?!]*$/i;
  const ouaisRegex = /^(ouais)[?!]*$/i;
  const commentRegex = /^(comment)[?!]*$/i;
  const nonRegex = /^(non)[?!]*$/i;
  const nanRegex = /^(nan)[?!]*$/i;
  const reRegex = /^(re)[?!]*$/i;
  const ahRegex = /^(ah)[?!]*$/i;
  const maisRegex = /^(mais)[?!]*$/i;
  const alloRegex = /^(allo)[?!]*$/i;
  const etRegex = /^(et)[?!]*$/i;
  const tgRegex = /^(tg)[?!]*$/i;
  const goRegex = /^(go)[?!]*$/i;
  const quiRegex = /^(qui)[?!]*$/i;
  const siRegex = /^(si)[?!]*$/i;
  const okRegex = /^(ok)[?!]*$/i;
  const ratioRegex = /^(ratio)[?!]*$/i;

  if (quoiRegex.test(lastWord)) {
    const response =
      quoiResponses[Math.floor(Math.random() * quoiResponses.length)];
    message.reply(response);
  } else if (heinRegex.test(lastWord)) {
    const response =
      heinResponses[Math.floor(Math.random() * heinResponses.length)];
    message.reply(response);
  } else if (ouiRegex.test(lastWord)) {
    const response =
      ouiResponses[Math.floor(Math.random() * ouiResponses.length)];
    message.reply(response);
  } else if (ouaiRegex.test(lastWord)) {
    const response =
      ouaiResponses[Math.floor(Math.random() * ouaiResponses.length)];
    message.reply(response);
  } else if (ouaisRegex.test(lastWord)) {
    const response =
      ouaisResponses[Math.floor(Math.random() * ouaisResponses.length)];
    message.reply(response);
  } else if (commentRegex.test(lastWord)) {
    const response =
      commentResponses[Math.floor(Math.random() * commentResponses.length)];
    message.reply(response);
  } else if (nonRegex.test(lastWord)) {
    const response =
      nonResponses[Math.floor(Math.random() * nonResponses.length)];
    message.reply(response);
  } else if (reRegex.test(lastWord)) {
    const response =
      reResponses[Math.floor(Math.random() * reResponses.length)];
    message.reply(response);
  } else if (ahRegex.test(lastWord)) {
    const response =
      ahResponses[Math.floor(Math.random() * ahResponses.length)];
    message.reply(response);
  } else if (maisRegex.test(lastWord)) {
    const response =
      maisResponses[Math.floor(Math.random() * maisResponses.length)];
    message.reply(response);
  } else if (alloRegex.test(lastWord)) {
    const response =
      alloResponses[Math.floor(Math.random() * alloResponses.length)];
    message.reply(response);
  } else if (etRegex.test(lastWord)) {
    const response =
      etResponses[Math.floor(Math.random() * etResponses.length)];
    message.reply(response);
  } else if (tgRegex.test(lastWord)) {
    const response =
      tgResponses[Math.floor(Math.random() * tgResponses.length)];
    message.reply(response);
  } else if (goRegex.test(lastWord)) {
    const response =
      goResponses[Math.floor(Math.random() * goResponses.length)];
    message.reply(response);
  } else if (quiRegex.test(lastWord)) {
    const response =
      quiResponses[Math.floor(Math.random() * quiResponses.length)];
    message.reply(response);
  } else if (siRegex.test(lastWord)) {
    const response =
      siResponses[Math.floor(Math.random() * siResponses.length)];
    message.reply(response);
  } else if (okRegex.test(lastWord)) {
    const response =
      okResponses[Math.floor(Math.random() * okResponses.length)];
    message.reply(response);
  } else if (ratioRegex.test(lastWord)) {
    const response =
      ratioResponses[Math.floor(Math.random() * ratioResponses.length)];
    message.reply(response);
  }
});

client.on('message', (message) => {
  const content = message.content.trim();
  
  // Vérifie si l'utilisateur a répondu au bot ou mentionné le bot
  if (message.author.bot || !message.mentions.has(client.user)) {
    return;
  }
  const menfouResponses = ["https://media.discordapp.net/attachments/478577225990537216/1088127084393680996/xEQFMbHMdNaRcUI3F3t9cPC6NiklKnwR0rkUy1n9tq6KcZk1vMOgrKTev1IyiprNkhwnNhluuHHGCdtgh6srwZf9lXQiaYxTSIM9s0WewPVYf9D85Miq3ZK5CxAAAAAElFTkSuQmCC.png", "https://media.discordapp.net/attachments/478577225990537216/1088127293488111768/MAAAAASUVORK5CYII.png", "https://media.discordapp.net/attachments/478577225990537216/1088127381333626981/wDRqrZDHqSU4gAAAABJRU5ErkJggg.png", "https://media.discordapp.net/attachments/478577225990537216/1088127619771400302/Z1UcvRobK5uWZwknv3mo6n2j84tNcedzRNIHuZRmZngxMJNxnf31AoIjN44KKfe421yfnhjEh47Lk97W1XmvR7OjpsPy9ublVezDSPJPTVJybCNkYyZksI9wj7yenA4eQjxaGx5tkZfDTKFlc9uT7uIdzD8zGNbiVKqNjDzNzTt0UkkDD9TOdQRKbN8eTfRXRgjI9ZlRwg7TyDEJ9D20qhDKuXVb4JZLQEtxa0LNd84Olxv8BIzzP3rYbKnQAAAAASUVORK5CYII.png", "https://media.discordapp.net/attachments/478577225990537216/1088127875942731846/telechargement.png"];
  const response =
    menfouResponses[Math.floor(Math.random() * menfouResponses.length)];
  // Répond avec le message "je parle pas"
  message.reply(response);
});

client.on('ready', (client) => {
   client.user.setPresence({
       status: "streaming"
   });

client.user.setActivity({
       type: "STREAMING",
       name: `Quoi, Hein ? 🤓`,
       url: "google.fr" //optional
    });
});

client.login(require('./token.json').token);
