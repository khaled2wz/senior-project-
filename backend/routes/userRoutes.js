const express = require('express');
const { registerUser, loginUser, resetPassword } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/send-verification-code', sendVerificationCode);
router.post('/verify-code-and-reset-password', verifyCodeAndResetPassword);
router.get('/me', protect, async (req, res) => {
  res.json(req.user);
});
router.put('/me', protect, upload.single('profilePic'), updateUserProfile);

module.exports = router;