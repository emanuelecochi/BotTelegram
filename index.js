const Telegraf = require('telegraf');
const bot = new Telegraf(YOUR_TOKEN_HERE);
bot.start((message) => {
  console.log('started:', message.from.id)
  return message.reply('Ciao, scrivi qualcosa e io la ripeterò 😄');
})
bot.on('text', message => {
    return message.reply(message.message.text);
});
bot.startPolling();
