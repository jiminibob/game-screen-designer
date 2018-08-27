// middleware
import AppMiddleware from 'store/middleware/App.middleware';
import NavMiddleware from 'store/middleware/Nav.middleware';
import UploadMiddleware from 'store/middleware/Upload.middleware';

// merge and export
export default [...AppMiddleware, ...UploadMiddleware, ...NavMiddleware];
