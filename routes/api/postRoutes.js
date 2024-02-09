
const { User, Post } = require('../models');

// Post routes
router.get('/', async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await Post.findAll();
    // Respond with the list of posts
    res.status(200).json(posts);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    // Fetch the post by ID from the database
    const post = await Post.findByPk(postId);
    // If the post is found, respond with it; otherwise, return an error
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    // Create a new post in the database
    const newPost = await Post.create({ title, content });
    // Respond with the newly created post
    res.status(201).json(newPost);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;
    // Update the post in the database
    const updatedPost = await Post.update({ title, content }, { where: { id: postId } });
    // If the post is updated successfully, respond with the updated post
    if (updatedPost[0]) {
      res.status(200).json({ message: 'Post updated successfully' });
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    // Delete the post from the database
    const deletedPostCount = await Post.destroy({ where: { id: postId } });
    // If the post is deleted successfully, respond with a success message
    if (deletedPostCount) {
      res.status(200).json({ message: 'Post deleted successfully' });
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
