const { User, UserPost } = require('../models')

const postNewPost = (async (req, res) => {

    const { userId, postText, postImage, postVideo } = req.body

    try {
        const user = await User.findOne({ where: { id: userId } })

        if (user !== null) {

            const post = await UserPost.create({ userId: userId, postText, postImage, postVideo })
            return res.json(post)

        } else {
            return res.status(400).json({ message: `User ${userId} not found` })
        }

    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

const getUserOnePost = (async (req, res) => {

    const postId = req.params.postId

    try {
        const postInfo = await UserPost.findOne({ where: { postId: postId } })

        if (postInfo !== null) {

            return res.json(postInfo)

        } else {
            return res.status(400).json({ message: `Post information not found for postId ${postId}` })
        }


    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

const getUserAllPost = (async (req, res) => {

    const userId = req.params.userId

    try {
        const userAllPost = await UserPost.findAll({ where: { userId: userId } })

        if (userAllPost.length >= 1) {

            return res.json(userAllPost)

        } else {

            return res.status(400).json({ message: `Post information not found for userId ${userId}` })
        }

    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

const getallPost = (async (req, res) => {

    try {
        const getAllPost = await UserPost.findAll({})

        if (getAllPost.length >= 1) {

            return res.json(getAllPost)

        } else {

            return res.status(400).json({ message: `Post information not found` })
        }

    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

const updateUserPost = (async (req, res) => {

    const postId = req.params.postId
    const { postText, postImage, postVideo } = req.body

    try {
        const postInfo = await UserPost.findOne({ where: { postId: postId } })

        if (postInfo !== null) {

            postInfo.postText = postText
            postInfo.postImage = postImage
            postInfo.postVideo = postVideo

            await postInfo.save()
            return res.json({ message: 'Post information updated', postInfo })

        } else {
            return res.status(400).json({ message: `Information not found for postId ${postId}` })
        }


    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

const userdeletepost = (async (req, res) => {

    const postId = req.params.postId

    try {
        const postInfo = await UserPost.findOne({ where: { postId: postId } })

        if (postInfo !== null) {

            await postInfo.destroy()
            return res.json({ message: 'Post deleted', postInfo })

        } else {
            return res.status(400).json({ message: `Information not found for postId ${postId}` })
        }


    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

module.exports = {
    postNewPost,
    getUserOnePost,
    getUserAllPost,
    getallPost,
    updateUserPost,
    userdeletepost
}