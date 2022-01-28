import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {

    // Command Handler
    let handler = require('./command_handler')
    if(handler.default) handler = handler.default

    handler(client)
    console.log("Comandos registrados correctamente")
    console.log("Bot encendido correctamente")
})

client.login(process.env.TOKEN)