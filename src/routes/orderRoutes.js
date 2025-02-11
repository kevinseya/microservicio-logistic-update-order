const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

/**
 * @swagger
 * /orders/{orderId}/status:
 *   put:
 *     summary: Update the active status of an order
 *     description: Toggle the active status of an order using its UUID.
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The UUID of the order to update status
 *     responses:
 *       200:
 *         description: Successfully updated order status
 *       404:
 *         description: Order not found
 *       500:
 *         description: Server error
 */
router.put('/order/update/:orderId', orderController.updateOrderStatus);

module.exports = router;
