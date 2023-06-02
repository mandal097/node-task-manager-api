const User = require('../../../models/User');

const router = require('express').Router();

// get list of all users @http://localhost:5000/api/v1/user/get-all-users
router.get('/', async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json({
            status: 'success',
            data: users
        })
    } catch (error) {
        res.status(500).json({
            status: 'err',
            message: 'Something went wrong'
        })
    }
});

module.exports = router;
