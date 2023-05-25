
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())


const allData = {
    header:{
        title : "all my projects"
    },
    projects:[
        {
            title: "Portfolio website",
            tools: ["html", "css",],
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore quia nulla nobis ex corrupti nostrum iste voluptatum repellendus ipsam molestiae, distinctio veritatis rerum facilis iusto laudantium, deleniti voluptates fugiat!",
            pic : "./asset/Carver-Media-web-design.png"
        },
        {
            title: "Company Mobile app",
            tools: ["html","javaScipt", "css", "mongoDB"],
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore quia nulla nobis ex corrupti nostrum iste voluptatum repellendus ipsam molestiae, distinctio veritatis rerum facilis iusto laudantium, deleniti voluptates fugiat!",
            pic : "./asset/Carver-Media-web-design.png"
        },
        {
            title: "Canvas Game",
            tools: ["html","javaScipt","node.js", "css"],
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore quia nulla nobis ex corrupti nostrum iste voluptatum repellendus ipsam molestiae, distinctio veritatis rerum facilis iusto laudantium, deleniti voluptates fugiat!",
            pic : "./asset/Carver-Media-web-design.png"
        },
        {
            title: "Resturant Website",
            tools: ["html","javaScipt","node.js", "css", "mongoDB"],
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore quia nulla nobis ex corrupti nostrum iste voluptatum repellendus ipsam molestiae, distinctio veritatis rerum facilis iusto laudantium, deleniti voluptates fugiat!",
            pic : "./asset/Carver-Media-web-design.png"
        },
        {
            title: "Food Delevery App",
            tools: ["html","javaScipt","node.js", "css", "mongoDB"],
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore quia nulla nobis ex corrupti nostrum iste voluptatum repellendus ipsam molestiae, distinctio veritatis rerum facilis iusto laudantium, deleniti voluptates fugiat!",
            pic : "./asset/Carver-Media-web-design.png"
        }
    ]
}

app.get("/home",(req, res)=>{
    return res.json(allData)
})





app.listen(3000, ()=>{
    console.log("we are listing on port 3000!")
})