import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.1tp9s.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

// database ko connect kara or 2 parameter diye, important nahi hai per kabhi error ajate hain tou osay solve karta hai.
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
// .then 2 parameter leta hai, listen or console.
.then(() => app.listen(PORT, () => console.log('Server running on port: ${PORT}')))
// .catch error dene k liye jub kuch na ho tou error ho.
.catch((error) => console.log(error.message));


// mongoose.set('useFindAndModify', false);





