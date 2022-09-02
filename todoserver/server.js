import  {app}  from "./app.js";
import {config} from "dotenv"
import {connectDatabase} from './config/db.js'
import cloudinary from 'cloudinary';
config({
    path:"./config/config.env"
})

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY ,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

connectDatabase();
app.listen(process.env.PORT, () => {
    console.log(`server is running on port : ${process.env.port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  