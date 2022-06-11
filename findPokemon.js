const pokemon = require('./pokemon');

function findPokemon(message) {
  const hint = message.content.slice(15, -1);
  const regex = new RegExp('^' + hint.replaceAll(/\\_/g, '.') + '$');
  const match = pokemon.filter((mon) => mon.match(regex));
  if (match.length == 0) {
    return message.channel.send("I don't know this pokemon");
  }
  if (match.length == 1) {
    return message.channel.send('.c ' + match[0]);
  }
  msg = "I'm not sure. :(";
  for (let i = 0; i < match.length; i++) {
    msg += '\n.c ' + match[i];
  }
  return message.channel.send(msg);
}

module.exports = findPokemon;
