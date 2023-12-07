import express from "express"
import db from "./config/Database.js"
import cors from "cors"
import session from "express-session"
import dotenv from "dotenv"
import SequelizeStore from "connect-session-sequelize"
import QuizRoute from "./routes/QuizRoute.js"
import AnswerRoute from "./routes/AnswerRoute.js"
import QuestionRoute from "./routes/QuestionRoute.js"
import UserRoute from "./routes/UserRoute.js"
import AuthRoute from "./routes/AuthRoute.js"
import UserResponseRoute from "./routes/UserResponseRoute.js"

dotenv.config()

const app=express()

const sessionStore = SequelizeStore(session.Store)

const store = new sessionStore({
    db:db
});

/*(async()=>{
    await db.sync()
})();*/

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store:store,
    cookie: {
        secure:'auto',
    }
}))
app.use(express.json())
app.use(UserRoute)
app.use(QuizRoute)
app.use(UserResponseRoute)
app.use(QuestionRoute)
app.use(AnswerRoute)
app.use(AuthRoute)

//store.sync();

app.listen(process.env.APP_PORT,()=>{
    console.log('Server running at port',process.env.APP_PORT,'...');
});