import dotenv from 'dotenv'
import express from 'express'
import RootRouter from './routers/RootRouter'
import cors from 'cors'


// load the environment variables from the .env file
dotenv.config({
  path: '.env'
});

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
  public app = express();
  public router = RootRouter;
}

//CORS configuration
const allowedOrigins = ['http://localhost:8080'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};


// initialize server app
const server = new Server();

server.app.use(cors(options));

//Root page is /api
server.app.use('/api', server.router);

// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();