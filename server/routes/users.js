var express = require('express');
var router = express.Router();

var controller = require('../controllers/index');

/* GET all Users. */
router.get('/', controller.users.getAllUsers);

/* CREATE new user*/
router.post('/', controller.users.createUser);

/* USER sign in*/
router.post('/login', controller.users.login);

/* USER sign out*/
router.get('/logout', controller.users.logout);

/* GET user documents */
router.get('/:id/documents', controller.documents.getDocumentsByUserId);

/* GET user by id */
router.get('/:id', controller.users.getUser);

/* UPDATE user by id */
router.put('/:id', controller.users.updateUser);

/* DELETE user by id */
router.delete('/:id', controller.users.deleteUser);


module.exports = router;