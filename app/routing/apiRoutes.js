var friends = require('../data/friends.js')

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friends)  
  })

  app.post('/api/friends', (req, res) => {
    let friend = req.body
    friend.routeName = friend.name.replace(/\s+/g, '').toLowerCase()
    friends.push(friend)
  })
}