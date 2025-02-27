// const express = require("express");

// const app = express();

// app.get("/health-checkup", function(req,res){
//     //do health checks here
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if (username != "harkirat" || password != "pass") {
//         res.status(400).json({"msg": "Somethings up with your input"})
//         return
//     }

//     if (kidneyId != 1 && kidneyId !=2){
//         res.status(400).json({"msg": "Somethings up with your input"})
//         return
//     }
//     //do something with kidney here
//     res.json({
//         "msg": "Your kidney is fine!"
//     })
// });

// app.listen(3000);

// const express = require("express")

// const zod = require("zod")

// const app = express();

// const schema = zod.array(zod.number()); //my schema will be an array of numbers like input should be given in numbers

// // suppose user has to provide a input like this
// // {
// //   email : string which looks like an email @ .com
// //   password : atleast 8 letters
// //   country : "IN", "US"
// // }
// const schema = zod.object({
//     email: zod.string(),
//     password: z.string(),
//     country: z.literal("IN").or(z.literal("US")),  //literal means it should be literally IN or US none other than this
//     kidneys: z.array(z.number())
// })      

// app.use(express.json());    
 
// app.post("/health-checkup", function (req, res) {
//     //kidneys = [ 1, 2]
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys)
//     if(!response.success) { //it will show this msg when response is not success
//         res.status(411).json({
//             msg: "input is invalid"
//         })
//     } else {
//         res.send({
//             response
//         })  
//     }
// });

// app.listen(3000);

// const zod = require("zod");

// function validateInput(object) {
//     const schema = zod.object({
//         email: zod.string().email(),
//         password: zod.string().min(8),
//     })
//     const response = schema.safeParse(object);
//     console.log(response);
// }
// validateInput({
//     email: "atharvadhumalgmail.com",
//     password: "111" // showed an error cause as per schema pass is not 8 character
// })

function validateInput(object) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8),
    })
    const response = schema.safeParse(object);
    console.log(response);
}
validateInput({
    email: "atharvadhumal@gmail.com",
    password: "12345678" 
})
