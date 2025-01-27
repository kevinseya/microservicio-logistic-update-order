const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Update an existing order
 *     description: Update the details of an existing order using its ID.
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the order to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
            type: 'object',
                    properties: {
                        orderId: { type: 'integer', description: 'Unique identifier for the order' },
                        senderName: { type: 'string', description: 'Name of the sender' },
                        receiverName: { type: 'string', description: 'Name of the receiver' },
                        packageDetails: { type: 'string', description: 'Details of the package' },
                        shippingAddress: { type: 'string', description: 'Shipping address for the package' },
                        status: { type: 'string', description: 'Current status of the order' },
                    },
                    required: ['senderName', 'receiverName', 'packageDetails','shippingAddress', 'status'],
                },
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       404:
 *         description: Order not found
 */

// Route for updating an order
router.put('/orders/:orderId', orderController.updateOrder);

module.exports = router;
