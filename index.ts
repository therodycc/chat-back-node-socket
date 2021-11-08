import express, { Application, urlencoded } from "express";
import cors from "cors";
import http from 'http';
import socket_io from "socket.io";
// routes




class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(urlencoded({ extended: false }));
    }

    routes(): void {

    }

    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server on port ${this.app.get("port")}`);
        });
        const server = http.createServer(this.app);
        const io = socket_io.Server;

        
    }
}

const server = new Server();
server.start();