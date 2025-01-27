const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Create a new order
 *     description: Create a new logistics order with the provided details.
 *     tags:
 *       - Orders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               "senderName":
 *                 type: string
 *                 example: Kenya Luna
 *               "receiverName":
 *                 type: string
 *                 example: Alejandra Luna
 *               "packageDetails":
 *                 type: string
 *                 example: Books and documents
 *               "shippingAddress":
 *                 type: string
 *                 example: La Arcadia
 *     responses:
 *       '201':
 *         description: Order created successfully
 *       '500':
 *         description: Internal server error
 *       
 */


// Route for updating an order
router.put('/orders/:orderId', orderController.updateOrder);

module.exports = router;
