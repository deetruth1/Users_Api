const express = require('express')
const router = express.Router()
const user = require('../model/users')

router.get("/", async (req,res) => {
    const users = await user.find()
    res.status(200).json(users)
})

router.get("/:id", async (req,res) => {
    const users = await user.findById(req.params.id)
    res.status(200).json(users)
})

router.post("/", async (req,res)=>{
    const users = new user({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        state: req.body.state,
        phoneNo: req.body.phoneNo
    })

    try {
        await users.save()
        res.status(200).json(users)
    } catch (error) {
        res.status(401).send(error)
    }
})

router.patch("/:id", async (req,res)=> {
    try {
        const users = await user.findById(req.params.id)
        users.firstname = req.body.firstname
        users.lastname = req.body.lastname
        users.state = req.body.state
        users.phoneNo = req.body.phoneNo

        users.save()
        res.status(200).json(users)
    } catch (error) {
        res.status(401).send(error)
    }
})
// having issues with delete all 
router.delete("/", async (req,res)=> {
    const users = await user.deleteMany()
    res.status(200).json({message:"deleted"})
    // users.delete
})

router.delete("/:id", async (req,res)=> {
    try {
        const users = await user.findByIdAndDelete(req.params.id)
        users.deleteOne()
        res.status(200).json({message: 'users deleted successfully'})
    } catch (error) {
        res.status(401).send(error)
    }
})

module.exports = router