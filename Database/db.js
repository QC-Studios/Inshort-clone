import mongoose from "mongoose";



const Connection = async(username, password)=>{

    const URL = `mongodb://${username}:${password}@ac-bkro7di-shard-00-00.fsd90zg.mongodb.net:27017,ac-bkro7di-shard-00-01.fsd90zg.mongodb.net:27017,ac-bkro7di-shard-00-02.fsd90zg.mongodb.net:27017/INSHORT-APP?ssl=true&replicaSet=atlas-79l0o7-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
       await mongoose.connect(URL, {useNewUrlParser:true, useUnifiedTopology:true, useNewUrlParser:true});
       console.log('Database Connected');
    } catch (error) {
        console.log('Error while connection with database', error);
    }
}

export default Connection;