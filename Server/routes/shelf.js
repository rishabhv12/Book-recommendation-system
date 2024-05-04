const express = require('express');
const router = express.Router();

const { ShelfController } = require('../controllers');
const { authenticationVerifier, accessLevelVerifier, isAdminVerifier } = require('../middlewares/verifyToken');

router.get('/', isAdminVerifier, ShelfController.get_shelfs);
router.get('/:userId', accessLevelVerifier, ShelfController.get_shelf)
router.post('/', authenticationVerifier, ShelfController.create_shelf);
router.delete('/:id', accessLevelVerifier, ShelfController.delete_shelf);

module.exports = router;