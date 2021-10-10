const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const stockRoutes = require('./routes/stocks');
const postRoutes = require('./routes/items');
const CategoryRoute = require('./routes/Categories');
const employeeRouter = require('./routes/employees.js');
const postRouter = require('./routes/EmpLeaves.js');
const returnRoutes = require('./routes/posts.js');
const salesRouter = require('./routes/sales');
const itemRouter = require('./routes/items');
const DItemRouter = require('./routes/Ditems');


//app middleware
app.use(bodyParser.json());
app.use(cors());



//route middleware
app.use(stockRoutes);
app.use(postRoutes);
app.use(CategoryRoute);
app.use(employeeRouter);
app.use(postRouter);
app.use(returnRoutes);
app.use(itemRouter);
app.use('/sales', salesRouter);
app.use('/items', DItemRouter);


const PORT = 8000;
const ATLAS_URL= 'mongodb+srv://gishanUser:celetron123@itpproject.pg20h.mongodb.net/stock_db?retryWrites=true&w=majority';

mongoose.connect(ATLAS_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(() =>{
    console.log('MongoDB database connection established successfully.!');
})
.catch((err) => console.log('MongoDB database connection error',err));


app.listen(PORT, () => {
    console.log(`Server is up and running on port no: ${PORT}`);
});



