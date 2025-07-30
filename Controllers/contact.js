import {Contact} from '../Models/Contact.js'


// Get Contact

 export const getAllContact = async (req, res) => {
  const userContact=await Contact.find();

  if(!userContact) return res.json({message:"No contact find",success:false})

    res.json({message:"All contact Fetched",userContact})


 }


 // update the contact by id 
 
 export const updateContactById = async (req, res) => {
    const id = req.params.id;
    const { name, email, phone } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(id, { name, email, phone }, { new:
        true });

        if(!updatedContact) return res.json({
            message:"No conact exists",
            success:false
        })
        res.json({message:"Contact Updated",updatedContact,success:true})
 }


 //Delete by id
 export const DeleteContactById = async (req, res) => {
    const id = req.params.id;
    const deletedContact = await Contact.findByIdAndDelete(id);

        if(!deletedContact) return res.json({
            message:"No conact exists",
            success:false
        })
        res.json({message:"Contact Deleted",success:true})
 }

 



//Get contact by Id


export const getbyId = async (req, res) => {
  const id = req.params.id;
  const userContact = await Contact.findById(id);

  if (!userContact) {
    return res.json({
      message: "Invalid ID entered",
      success: false,
    });
  }

  res.json({
    message: "Contact fetched successfully",
    userContact,
    success: true,
  });
};

//get by user Id

export const getcontactByUserId = async (req, res) => {
  const id = req.params.id;
  const userContact = await Contact.find({user:id});

  if (!userContact) {
    return res.json({
      message: "Invalid ID entered",
      success: false,
    });
  }

  res.json({
    message: "User Specific Contact fetched successfully",
    userContact,
    success: true,
  });
};





//create new contact

export const newContact = async (req, res) => {

    const {name, email, phone, type }= req.body;

    if(name=="" || email=="" || phone=="" || type=="")
        return res.json({message:"All feilds are required",success:false})
    
    let savedContact= await Contact.create({
        name,
        email,
        phone,
        type,
        user:req.user
    });

    res.json({
        messgae:"contact saved Successfully",savedContact,success:true,
        
    })

}