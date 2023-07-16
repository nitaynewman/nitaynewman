import { MongoClient } from "mongodb";
const express = require('express')
const mongoose = require('mongoose')
const app = express();


const uri = 'mongodb+srv://nitaynewman:Nitay2k1@knowitall.zo6rvgp.mongodb.net/'
async.function.connect(); {
    try {
        await mongoose.connect(uri);
        console.log('connected to mongoDB');
    } catch (error) {
        console.log(error)
    }
}
connect();
app.listen(8000, () => {
    console.log('server started on port 8000');
});

// export const getStaticProps:  = async (context) => {
//     const MongoClient = new MongoClient("mongodb+srv://nitaynewman:Nitay2k1@knowitall.zo6rvgp.mongodb.net/Customers");
//     const data = await MongoClient.db().collection('Customers').find({}).toArray();
//     console.log("!!!", data);
// }