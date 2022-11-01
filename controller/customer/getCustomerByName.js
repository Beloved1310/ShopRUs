const Customer = require('../../models/Customer');

module.exports = async  = (req, res) => {
    const { username } = req.params;
    const user = findOne({ username })
    .populate('followers', '_id username avatar')
    .populate('following', '_id username avatar')
    .populate('subscriptions', '_id title slug audio_type image_url')
    .exec()


    if(!user){
        return res.status(404).json({ user: {}, error: 'User Does Not Exist' }); 
    }
    return res.send({ message: 'Customers', data });
};