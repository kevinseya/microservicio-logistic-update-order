const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

/**
 * @swagger
 * /orders/{orderId}:
 *   put:
 *     summary: Update an existing order
 *     description: Update an order using its UUID.
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The UUID of the order to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               senderName:
 *                 type: string
 *                 example: Kenya Luna
 *               receiverName:
 *                 type: string
 *                 example: Alejandra Luna
 *               packageDetails:
 *                 type: string
 *                 example: Books and documents
 *               shippingAddress:
 *                 type: string
 *                 example: La Arcadia
 *     responses:
 *       '200':
 *         description: Order updated successfully
 *       '404':
 *         description: Order not found
 *       '500':
 *         description: Internal server error
 */

// Route for updating an order
router.put('/orders/:orderId', orderController.updateOrder);

module.exports = router;
