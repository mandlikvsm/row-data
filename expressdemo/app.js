import express from "express";
// import User from './routes/User.js'
import cors from 'cors'
import multer from "multer";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

export const app = express();



import mongoose from "mongoose";

export const connectDatabase = async () => {
    try {
        const { connection } = await mongoose.connect('mongodb+srv://vsm123:vsm123@tutorial.qxaq1cv.mongodb.net/React-Native-Tutorial?retryWrites=true&w=majority');
        console.log(`connected :${connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

};




connectDatabase();
app.listen(5000, () => {
    console.log(`server is running on port 5000`);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})





const mult = multer();
app.use(cors());
// app.use(mult.array());
app.use(
    fileUpload({
        limits: { fileSize: 50 * 1024 * 1024 },
        useTempFiles: true,
    })
);
// app.use(bodyParser.json())


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
// app.use("/api/v1", User);

app.post('/login',async(req,res)=>{
    try {
        const { email, password } = req.body;
    
    
        const user = await User.findOne({ email });
    
        
        console.log(user);
       
    
        if (!user) {
          return res
            .status(400)
            .json({ success: false, message: "Invalid Email or Password" });
        }

        return res
        .status(200)
        .json({success: true, message: "Login success", user: user})
    
        
      } catch (error) {
      
        res.status(500).json({ success: false, message: error.message });
      }
    
    
  
})





const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        minlength: [8, "Password musr be at least 8 characters long"],
        select: false,
    },

    avatar: {
        public_id: String,
        url: String,

    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    tasks: [{
        title: "String",
        description: "String",
        completed: Boolean,
        createdAt: Date,


    }],

    verified: {
        type: Boolean,
        default: false,
    },

    otp: Number,
    otp_expiry: Date,
    resetPasswordOtp: Number,
    resetPasswordOtpExpiry: Date,



});


userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
export const User = mongoose.model("user", userSchema);
