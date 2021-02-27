import express from 'express';
import dbConfig from './config/db.js';
import middlewareConfig from './config/middlewares.js';
import { PostRoutes, UserRoutes } from './modules';

const app = express();

//Database
dbConfig();

//Middlewares
middlewareConfig(app);

app.use('/api', [PostRoutes, UserRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if(err){
        console.log(err)
    } {
        console.log(`App listen to port: ${PORT}`);
    }
});