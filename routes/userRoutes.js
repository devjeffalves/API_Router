
//Importa o modulo Express
const express = require('express');

//Cria o objeto rotas
const router = express.Router();

//Importa o modulo usuarioController
const userController = require('../controllers/userController');

//criar a rota criar usuario
/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new User
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 *       500:
 *         description: Erro ao criar usuario
 */
router.post('/user', userController.createuser);



//criar a rota buscar usuarios
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: find all users
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Return the users list
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/users', userController.getusers);


//criar a rota editar usuarios
/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Update a user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated
 *       404:
 *         description: User not found
 *       500:
 *         description: Error updating user
 */
router.put('/user/:id', userController.updateuser);

//criar a rota deletar usuario
/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID 
 *     responses:
 *       204:
 *         description: User deleted
 *       404:
 *         description: User not found
 *       500:
 *         description: Error to delete user
 */
router.delete('/user/:id', userController.deleteuser);


//exporta as rotas criadas
module.exports = router;