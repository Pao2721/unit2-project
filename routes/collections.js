import  { Router } from 'express'
import * as collectionCtrl from '../controllers/collections.js'
import { router } from './cards.js'

export {
 Collection
}

router.get('/', logeedIn, collectionCtrl.index)