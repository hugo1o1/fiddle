import express from 'express'
var router = express.Router();


const users = [{
  account:'hugo',
  password:1
}]
const controller = (req,res,next)=>{
    const user = req.body

    
    
}

/* GET users listing. */
router.post('/login', controller);



export default router;
