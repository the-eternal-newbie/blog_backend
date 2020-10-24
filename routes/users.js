import express from 'express';
import userController from '../controllers/userController';
const router = express.Router();
const controller = new userController();

router.post('/', controller.create);
router.get('/comments', controller.listComments);
router.post('/comments', controller.addComment);
router.delete('/comments/:id', controller.deleteComment);


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default router;
