import AppMiddleware from 'store/middleware/App.middleware';
import NavMiddleware from 'store/middleware/Nav.middleware';

export default [...AppMiddleware, ...NavMiddleware];
