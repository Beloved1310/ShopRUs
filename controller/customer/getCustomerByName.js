const Customer = require('../../Model/Customer');

module.exports = async(req, res) => {
    const { name } = req.params;
    const data = await Customer.findOne({ where: {name }})
    
    if(!data){
        return res.status(404).json({ user: {}, error: 'User Does Not Exist' }); 
    }
    return res.send({ message: 'Customers', data });
};