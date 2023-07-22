const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://prajwalkhadse75:XUHHZ7uSjhVuf5Th@cluster0.zt5w1ry.mongodb.net/?retryWrites=true&w=majority")
    .then((response) => {
        console.log("Connected to Mango-DB")
    }).catch((error) => {
        console.log("Issue regarding the connecting with Mango-DB") 
    })



    //XUHHZ7uSjhVuf5Th