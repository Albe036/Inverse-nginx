import { format_console } from './utils/formatConsole.js';
import app from './app.js';
process.loadEnvFile();
/* import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io' */

app.listen(process.env.PORT, () => {
    format_console(['yellow', 'bold'], `::Server listening on port ${process.env.PORT}::`);
});