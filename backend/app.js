const express = require('express'); //*calling express to develope backend codes easily
const app =new  express(); //*creating an instance of express
const PORT = 2343 //*Port number
const db = require('./db')




app.listen(PORT,()=>{
    console.log(`Server is running a ${PORT} port`) //*this is called string literals : (back ticks `` and ${} )
})