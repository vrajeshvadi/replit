const { token, pokeId } = require('./config.json');

const { Client, Intents } = require('discord.js');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

function getChannel(cName){
  return client.channels.cache.find(
    (channel) => channel.name === cName
  );
}

client.once('ready', () => {
  console.log('Ready!');
  const welcome = getChannel('welcome');
  welcome.send('Hello I\'m Back');
});

const findPokemon = require('./findPokemon');

client.on('messageCreate', (message) => {
  if (message.author.id != pokeId) return;
  if (message.content.startsWith('The pokémon is')) return findPokemon(message);
});

const keepAlive = require('./server');
keepAlive();
client.login(token);
