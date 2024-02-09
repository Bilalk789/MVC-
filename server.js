const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/api/authRoutes');
const userRoutes = require('./routes/api/userRoutes');
const postRoutes = require('./routes/api/postRoutes');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));


app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
