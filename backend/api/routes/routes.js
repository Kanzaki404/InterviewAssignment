const router = require('express').Router();
import * as SkiSize from '../controllers/SkiSize'

router.get('/', SkiSize.Test)
router.post('/getSize', SkiSize.CalculateSize)



module.exports = router;