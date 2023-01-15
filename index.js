const TelegramApi = require('node-telegram-bot-api')

const token = '5977256058:AAGIu-aAojiwRPkR7Uxxafg9ItrHiH-nfq8'

const bot = new TelegramApi(token, { polling: true })



const start = () => {
    bot.setMyCommands([
        { command: '/start', description: 'hello' },
        { command: '/info', description: 'information' },
    ])

    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id

        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://telegram.org.ru/uploads/posts/2017-03/1490220322_8.png')
            return bot.sendMessage(chatId, `Добро пожаловать в телеграмм бот клуба Грань`)
        }

        if (text === '/info') {
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name}`)
        }
        return bot.sendMessage(chatId, 'Not anderstend U, try again')
    })
}
start()