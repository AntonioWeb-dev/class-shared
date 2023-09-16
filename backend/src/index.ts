import './config/module-alias';
import dotenv from 'dotenv';

dotenv.config();

import '@infra/database/client';
import { server } from './infra/rest/server';

const httpServer = server.listen(4000, () => console.log('API is running on :4000'));
httpServer.timeout = 6000;