const socket = require("socket.io");
const moviesfun = require("./movies")

const movies = moviesfun()
const users = []


const helpers = {
    getUser: (socketId) => {
        const result = users.find(x => x.id === socketId)
        
        return result.user
    },
    emitMoviesToOnlineUsers: (io) => {
        users.map(x => {
            io.to(x.id).emit('movies', movies)
            
            
        })
    }
}

module.exports = (http) => {
    const io = socket(http, {cors: {origin: "http://localhost:3000"}})

    io.on("connect", (socket) => {

        socket.on("login", user => {
            
            const newUser = {
                user,
                id: socket.id,
                
                
            }
            users.push(newUser)
            
            socket.emit('movies', movies)
        })

        socket.on("reserve", data => {
            const user = helpers.getUser(socket.id)
            const {movie: movie, seats: seats, } = data
 

    
movies[movie].seats.map(x=>seats.includes(x.number)?x.reserved=user.username:null)

    

            
            helpers.emitMoviesToOnlineUsers(io)
            
        })

        

    })


}
