import express from 'express'
import { DeleteContactById, getAllContact, getbyId, getcontactByUserId, newContact, updateContactById } from '../Controllers/contact.js';
import { isAuthenticated } from '../Middlewares/Auth.js';

const router= express.Router();


//New Contsct
// @api dsc :- Creating contact
// @api method :-Post
//@api endPoint :- api/contact/new

router.post('/new',isAuthenticated,newContact)


// Get All Contac

router.get('/',getAllContact)




// Update contact by id

router.put('/:id',isAuthenticated,updateContactById)



//Delete by id

router.delete('/:id',isAuthenticated,DeleteContactById)



//Get All contacts by id

router.get('/:id',getbyId)



//get by user specific id
router.get('/user/:id',getcontactByUserId)


export default router;