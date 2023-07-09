
import { data } from "./Constants/data.js";
import News from "./Model/newsSchema.js";

const DefaultData = async()=>{
    try {
        await News.insertMany(data);
        console.log('Data Imported Successfully');   
    } catch (error) {
        console.log('Error', error.message);
    }
}

export default DefaultData;