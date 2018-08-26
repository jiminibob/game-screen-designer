// middleware
import AppMiddleware from 'store/middleware/App.middleware';
import NavMiddleware from 'store/middleware/Nav.middleware';

// merge and export
export default [...AppMiddleware, ...NavMiddleware];
