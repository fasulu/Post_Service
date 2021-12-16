const express = require('express')
const { sequelize } = require('./models')
const { postNewPost, getUserOnePost, getUserAllPost, getallPost, updateUserPost, userdeletepost } = require('./controller/postController.js')
const app = express()
app.use(express.json())

const portNum = 3000

app.post('/userpost', postNewPost)          // create new post
app.get('/userpost/:postId', getUserOnePost)    // find post by postId
app.get('/allposts', getallPost)            // get all posts available in userPosts table
app.get('/userallpost/:userId', getUserAllPost) // get all posts for the given userId
app.put('/usereditpost/:postId', updateUserPost)    // update post by postId
app.delete('/userdeletepost/:postId', userdeletepost)   // delete post by postId

app.listen(portNum, async () => {
    console.log(`Server up on http://localhost:${portNum}`)
    await sequelize.authenticate()
    console.log("Database connected")
})
