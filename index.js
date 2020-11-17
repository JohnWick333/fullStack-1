const express = require('express');
const app = express();
app.get('/',(req,res,next)=>{
    res.send('Hi there!')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port`);
});