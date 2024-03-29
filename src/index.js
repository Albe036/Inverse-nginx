import { format_console } from './utils/formatConsole.js';
import app from './app.js';
import db_connect from './db/db_connect.js';
if (process.env.PORT === undefined) {
    process.loadEnvFile();
}
/* import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io' */

db_connect();
app.listen(process.env.PORT, () => {
    format_console(['yellow', 'bold'], `::Server listening on port ${process.env.PORT}::`);
});