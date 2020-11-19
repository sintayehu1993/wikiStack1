const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const {db}  = require('./models');
const { nextTick } = require('process');
const main = require('./views/main')

const app = express()

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));


app.get('/',(req, res) => {

    try {
        res.send(main())
    } catch (error) {
        console.log(error)
    }
    
})

const port = 1337

app.listen(port, ()=>{
    console.log('im listening to', port)
})
