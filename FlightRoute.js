import express from 'express';
import {createFlight, getAllFlights, updateFlight, deleteFlight} from '../controller/flightController.js';

const route = express.Router();
route.post('/create',createFlight);
route.get('/getAll',getAllFlights);
route.put('/update/:id',updateFlight);
route.put('/delete/:id',deleteFlight);



export default route;

