const Order = require('../models/order');

// Update an order by ID
exports.updateOrder = async (req, res) => {
    try {
        const { orderId } = req.params; // Tomar el UUID desde la URL
        const updatedOrder = await Order.update(req.body, { where: { orderId } });

        if (updatedOrder[0] === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({ message: 'Order updated successfully' });
    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({ message: 'Failed to update order' });
    }
};
