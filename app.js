const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))

const event = []
// require('./models/event')
// app.use(require('./routes/route'))

app.post('/create',async (req,res)=>{
    const {title, description, services, banner,duration, link,date} = req.body
    try{
       await event.push({
        title,
        services,
        description,
        banner,
        duration,
        link,
        date
    })
    console.log('good' + event)
    } 
    catch{e =>
        console.log(e)
    }
    console.log(event)
})

app.get('/preview',(req, res)=>{
    res.json(event)
})


console.log(event)

app.listen('8000')