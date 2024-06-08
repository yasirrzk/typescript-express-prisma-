import express, {Request, Response}from "express";
import cors from 'cors'
import authorRoute from "./routes/author.route";
import bookRouter from "./routes/book.route";

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors<Request>())

app.use("/api/author", authorRoute);
app.use("/api/books", bookRouter)


app.get('/', async (_req:Request, res:Response) => {
    res.send({
        msg: "Hello World"
    })
})

app.listen(PORT, () =>{
    console.log(`Server running on http://127.0.0.1:${PORT}`);
})