const gitmojis = require('.')

gitmojis.forEach(({ emoji, description, name }) => {
  console.log(`### ${emoji} \`:${name}:\``)
  console.log(`${description}`)
})
