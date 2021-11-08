import { Router } from "express";
import { Express } from "express";
import { RESERVED_EVENTS } from "socket.io/dist/socket";


class ChatRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get("/", (req, res) => {
            res.json({ msg: 'welcome' });
        });
    }
}

const chatRoutes = new ChatRoutes();
export default chatRoutes.router;