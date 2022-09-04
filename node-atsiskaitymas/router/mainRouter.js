const express = require("express")
const router = express.Router()

const {
    register,
    login,
    money
} = require("../controllers/mainController")

const {validateRegister} = require("../modules/validator")


router.post('/register', validateRegister, register)
router.post('/login', login)
router.post('/money', money)


module.exports = router

