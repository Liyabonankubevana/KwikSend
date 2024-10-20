import { Router } from 'express';
import { exampleController } from './controllers/exampleController';

const router = Router();

// Define a basic GET route
router.get('/', exampleController);

export default router;