import  express  from "express";
import usersRouter from "./routes/users"
const app = express();

app.use('/api/users', usersRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})