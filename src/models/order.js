const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

// Order model definition
const Order = sequelize.define('Order', {
    orderId: {
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true, 
    },
    idCustomer: { 
        type: DataTypes.UUID,
        allowNull: false,
    },
    senderName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    receiverName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    packageDetails: {
        type: DataTypes.TEXT,
    },
    shippingAddress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending',
    },
    active:  {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
});

Order.sync({ alter: true }) 
    .then(() => console.log('Order table synced successfully'))
    .catch(err => console.error('Error syncing Order table:', err));


module.exports = Order;
