import app from '../src/app/app'
import mongoose from 'mongoose'
import 'dotenv/config'


mongoose
    .connect(`${process.env.URL}`)
    .then(() => { console.log('data base connected') })
    .catch(err => { console.log(err) })


const port = process.env.PORT
app.listen(port, () => {
    console.log(`app listen on http://localhost:${port}`)
})