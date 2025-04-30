import express from 'express';
import { getSections, updateSection, updateSectionOrder } from '../controllers/section.controller';

const router = express.Router();

router.get('/', getSections);
router.put('/:id', updateSection);
router.put('/order/update', updateSectionOrder);

export default router;