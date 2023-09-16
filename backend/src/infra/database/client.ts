import mongoose from 'mongoose';
import { DB_URI } from '../../config/eviromentVars';

console.log(DB_URI)
mongoose.connect(`${DB_URI}`);

mongoose.connection.on('error', () => console.error('connection error'));
mongoose.connection.once('open', () => console.log('connected'));