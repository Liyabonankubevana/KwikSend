import { Router } from 'express';
import { exampleController } from './controllers/exampleController';
import { handleRedirect } from './controllers/handleRedirect';

const router = Router();

// Define a basic GET route
router.get('/', exampleController);
router.post('/quote/accepted', handleRedirect);

export default router;