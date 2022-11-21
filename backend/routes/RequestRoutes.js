import express from "express";
// import multer from "multer"
// import path from "path"


import {
    getRequest,
    
    getRequestById,
    createRequest,
    // upload,
    updateRequest,
    deleteRequest,
    getUserRequest,
    getAdminRequest,
    getRequested,
    getManagerApproveRequest,
    getCeoApproveRequest,
    getAdminPendingRequest, 
    getManagerPendingByIdRequest,
    getManagerApproveForUserRequest,
    getCeoApproveUserRequest,
    getCeoPendingByIdRequest,
    getCeoPendingRequest,
   
    
} from "../controllers/Request.js";
import { verifyUser } from "../middleware/AuthUser.js";



// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'Images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: '1000000' },
//     fileFilter: (req, file, cb, ) => {
//         const fileTypes = /jpeg|jpg|png|gif/
//         const mimeType = fileTypes.test(file.mimetype)  
//         const extname = fileTypes.test(path.extname(file.originalname))

//         if(mimeType && extname) {
//             return cb(null, true)
//         }
//         cb('Give proper files formate to upload')
//     }
// }).single('signature')


const router = express.Router();

router.get('/request', verifyUser, getRequest);
router.get('/adminRequest', verifyUser, getAdminRequest);
router.get('/userRequest', verifyUser, getUserRequest);
router.get('/requested', verifyUser, getRequested);
router.get('/managerApproveRequest', verifyUser, getManagerApproveRequest);
router.get('/ceoApproveRequest', verifyUser, getCeoApproveRequest);
router.get('/adminPendingRequest', verifyUser, getAdminPendingRequest);
router.get('/managerPendingByIdRequest', verifyUser, getManagerPendingByIdRequest);
router.get('/ceoPendingByIdRequest', verifyUser, getCeoPendingByIdRequest);
router.get('/ceoPendingRequest', verifyUser, getCeoPendingRequest);
router.get('/managerApproveForUserRequest', verifyUser, getManagerApproveForUserRequest);
router.get('/ceoApproveUserRequest', verifyUser, getCeoApproveUserRequest);
router.get('/request/:id', verifyUser, getRequestById);
router.post('/request',  verifyUser, createRequest);
router.patch('/request/:id', verifyUser, updateRequest);
router.delete('/request/:id', verifyUser, deleteRequest);
// router.get('/request', getRequest);
// router.get('/request/:id',  getRequestById);
// router.post('/request',  createRequest);
// router.patch('/request/:id',  updateRequest);
// router.delete('/request/:id',  deleteRequest);

export default router;