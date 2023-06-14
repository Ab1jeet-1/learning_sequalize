const express = require('express');
const app = express();
const port = 800;
const userRoute = require('./route/userRouter');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/v1/user', userRoute);


const server = app.listen(port, () => {
    console.log('server is listening at ' + port);
})
