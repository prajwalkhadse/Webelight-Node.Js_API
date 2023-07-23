const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://prajwalkhadse75:jKLeVye419GhERjY@cluster0.ogjdlfz.mongodb.net/?retryWrites=true&w=majority")
    .then((response) => {
        console.log("Connected to Mango-DB")
    }).catch((error) => {
        console.log("Issue regarding the connecting with Mango-DB") 
    })



    //XUHHZ7uSjhVuf5Th