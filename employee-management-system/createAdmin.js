require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log('⏳ Connecting to DB...');
  await User.deleteMany({}); // Delete any broken accounts
  const hashed = await bcrypt.hash('admin123', 10);
  await User.create({ username: 'admin', password: hashed });
  console.log('✅ Admin successfully forced into Database! (admin / admin123)');
  process.exit(0);
});
