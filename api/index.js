import express from 'express';
const server = express();
import router from './routes/index.js'
const routes = router

server.use(express.json({limit: '50mb'}))
server.use(express.urlencoded({extended: true}))

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE');
    next();
});

server.use('/', routes);

const app = server.listen(3001, console.log('server online'))

export default app;