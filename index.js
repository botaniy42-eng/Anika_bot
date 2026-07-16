const mineflayer = require('mineflayer')
const { pathfinder, Movements, goals: { GoalFollow } } = require('mineflayer-pathfinder')
const autoeat = require('mineflayer-auto-eat')
const config = require('./config.json')

let bot

function createBot() {
  bot = mineflayer.createBot({
    host: config.server.host,
    port: config.server.port,
    username: config.bot.username,
    auth: config.bot.auth,
    version: config.server.version
  })

  bot.loadPlugin(pathfinder)
  bot.loadPlugin(autoeat)

  bot.once('spawn', () => {
    console.log('✅ Anika bot joined the server!')

    const mcData = require('minecraft-data')(bot.version)
    const defaultMove = new Movements(bot, mcData)
    bot.pathfinder.setMovements(defaultMove)

    // Anti-AFK (jump every 10 sec)
    if (config.settings.antiAfk) {
      setInterval(() => {
        bot.setControlState('jump', true)
        setTimeout(() => bot.setControlState('jump', false), 500)
      }, 10000)
    }
  })

  // Chat command system
  bot.on('chat', (username, message) => {
    if (username === bot.username) return
    if (!message.startsWith(config.prefix)) return

    const args = message.slice(config.prefix.length).split(' ')
    const command = args[0].toLowerCase()

    // Only owner can control
    if (username !== config.owner) return

    if (command === 'follow') {
      const target = bot.players[username]?.entity
      if (!target) {
        bot.chat("I can't see you!")
        return
      }
      bot.chat("Following you!")
      bot.pathfinder.setGoal(new GoalFollow(target, 2), true)
    }

    if (command === 'stop') {
      bot.pathfinder.setGoal(null)
      bot.chat("Stopped!")
    }

    if (command === 'come') {
      const target = bot.players[username]?.entity
      if (!target) return
      bot.chat("Coming to you!")
      bot.pathfinder.setGoal(new GoalFollow(target, 1))
    }
  })

  // Auto reconnect
  bot.on('end', () => {
    console.log('❌ Disconnected... Reconnecting...')
    if (config.settings.autoReconnect) {
      setTimeout(createBot, 5000)
    }
  })

  bot.on('error', err => {
    console.log('Error:', err.message)
  })
}

createBot()
