const Order = require('../models/order');

// Update only the active status of an order by ID
exports.updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;

        // Buscar la orden por ID
        const order = await Order.findOne({ where: { orderId } });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Cambiar el estado de activo a inactivo
        order.active = !order.active;
        await order.save();

        res.status(200).json({ message: 'Order status updated successfully', order });
    } catch (error) {
        console.error('Error updating order status:', error);
        res.status(500).json({ message: 'Failed to update order status' });
    }
};
