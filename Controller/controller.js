import News from "../Model/newsSchema.js"

export const getNews = async(req, res)=>{
    try {
        const newsData =await News.find();
        res.status(200).json(newsData)
    } catch (error) {
       res.status(401).json({message: newsData.message})
    }
};