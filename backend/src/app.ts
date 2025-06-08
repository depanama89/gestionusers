import "dotenv/config"
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import createHttpError, { isHttpError } from "http-errors";
import authRouter from "./routes/authRoutes/auth"
const app = express();

const allowedOrigins=["http://localhost:5173"]

const corsOptions: cors.CorsOptions={
    origin:(origin,callback)=>{
        if(!origin || allowedOrigins.includes(origin)){
            callback(null,true)
        }else{
            callback(new Error("Origine non autorisé par Cors"))
        }
    },
    credentials:true,
    optionsSuccessStatus:200

}
app.use(cors(corsOptions))
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-v1/auth",authRouter);



app.get("/", (req, res) => {
  res.send("requete reussi!");
});


app.use((req, res, next) => {
  next(createHttpError(404, "la route n'existe pas"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  let errorMessage = "An unknown error occured";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }

  res.status(statusCode).json({ error: errorMessage });
});
export default app;
