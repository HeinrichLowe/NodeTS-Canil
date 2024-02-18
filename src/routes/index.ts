import { Router } from 'express';
import * as pageCtrl from '../controllers/pageController';
import * as searchCtrl from '../controllers/searchController';

const router = Router();

router.get('/', pageCtrl.home);
router.get('/dogs', pageCtrl.dogs);
router.get('/cats', pageCtrl.cats);
router.get('/fishes', pageCtrl.fishes);

router.get('/search', searchCtrl.search);

export default router;