const bcrypt = require('bcryptjs');
const pass = process.env.ADMIN_PASS || 'admin123';
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(pass, salt, (err, hash) => {
    if (err) throw err;
    console.log('ADMIN_PASS_HASH=' + hash);
  });
});
