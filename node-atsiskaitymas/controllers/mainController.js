const sendRes = require("../modules/sendRes")
const userDb = require("../schemas/reservationUserSchema")
const bcrypt = require("bcrypt")


module.exports = {

    register: async (req, res) => {
        const {passOne, username,age} = req.body

        const password = await bcrypt.hash(passOne, 10)

        const user = new userDb({
            username,
            password,
            age
        })

        await user.save()

        res.send({success: true})
    },

    login: async (req, res) => {
        const {username, password} = req.body

        const user = await userDb.findOne({username})

        if(user) {
            const compare = await bcrypt.compare(password, user.password)

            if(compare) {
                let newUser = {
                    username: user.username,
                    age:user.age,
                    money:user.money
                    
                }
                return sendRes(res, "all good", false, newUser)
            }

            return sendRes(res, "password do not match", true, null)
        }

        return sendRes(res, "user not found", true, null)
    },
    money: async (req, res) => {
        const {username,amount} = req.body

        const user = await userDb.findOne({username})
let numeris=user.money-amount
        await userDb.findOneAndUpdate({username}, {$inc: {money: -amount}})
        const newUser = await userDb.findOne({username})
                return sendRes(res, "all good", false, newUser)
            }

           

}