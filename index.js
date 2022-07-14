
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv'
const app = express();
dotenv.config();


import path from 'path';


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
 app.use(cors());

app.use('/posts', postRoutes);
app.use('/',(req,res)=>{
  res.send({message:"hello"}).json();
}
);





const CONNECTION_URL = 'mongodb+srv://ankit:ankit123@cluster0.lsjskkj.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 5000;

// if(process.env.NODE_ENV=="production")
// {
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
// });

// }


import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'client','build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
});
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT || 3000 , () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);