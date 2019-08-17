const express=require('express');
const BodyParser=require('body-parser');
require('./services/passport.js');
//as we are not referring to any particular object form passport file,
//we will only require the file
//its oauth20 because its 2.0 version but '.' cant be used in npm.
const app=express();

require('./routes/authRoutes')(app);
//just after requiring the file ,we are passing the parametres inside
//another parenthesis.
//normal javascript code just works fine.

const PORT=process.env.PORT||8000;
app.listen(PORT,()=>{
    console.log("Server created successfully");
});
//Client ID
//
//can be shared to the public

//Client Secret
//
//we dont want anyone to see