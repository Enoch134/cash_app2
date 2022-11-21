import Request from "../models/RequestModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";
import multer from "multer";
import path from "path"


export const getRequest = async (req, res) => {
    try {
        let response;
        if (req.role === "admin", "ceo", "accountant") {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],

                // where: {
                    userId: req.userId,
                //     // amountRequest: {
                //     //     [Op.lte]: 5000
                //     // },
                // },


                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
} 
// manager View Request From User Less Than Five Thousand start Here
export const getRequested = async (req, res) => {
    try {
        let response;
        if (req.role === "admin" && req.role !== "user", "ceo", "accountant") {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],

                where: {
                    amountRequest: {
                        [Op.lte]: 4999
                    },
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// manager View Request for User Less than five Thousand Leones end here


// user View User Request by Id start Here
export const getUserRequest = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "ceo", "admin", "accountant") {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],

                where: {
                    userId: req.userId,

                },


                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// user View Request User Request by Id


// Admin Request Only Start Here! ie Request above five thousand leones
export const getAdminRequest = async (req, res) => {
    try {
        let response;
        if (req.role === "ceo" && req.role !== "user", "accountant", "admin") {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],

                where: {
                    amountRequest: {
                        [Op.gt]: 5000
                    },
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// ceo Request End Here! ie Request above five thousand leones

// View All Request  Approved by Manager  fro accountant ceo and manager start here
export const getManagerApproveRequest = async (req, res) => {
    try {
        let response;
        if (req.role === "admin", "accountant", "ceo" && req.role !== "user") {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],

                where: {
                    adminApproval: "approved"
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// View All Request  Approved by Manager  fro accountant ceo and manager end here

// View All Request  Approved by Manager  fro user start here
export const getManagerApproveForUserRequest = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "admin", "accountant", "ceo") {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],

                where: {
                    adminApproval: "approved",
                    userId: req.userId
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// View All Request  Approved by Manager  fro user end here

// View CEO  Approved Request for manager and accountant start here
export const getCeoApproveRequest = async (req, res) => {
    try {
        let response;
        if (req.role === "admin", "accountant", "ceo" && req.role !== "user") {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],

                where: {
                    ceoApproval: "approved"
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// View All CEO Approved Request for manager and accountant end here

// View CEO  Approved Request for user start here
export const getCeoApproveUserRequest = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "accountant", "admin", "ceo") {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],

                where: {
                    ceoApproval: "approved",
                    userId: req.userId
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// View All CEO Approved Request for user end here

// View all request Pending by Manager start here
export const getAdminPendingRequest = async (req, res) => {
    try {
        let response;
        if (req.role === "admin" && req.role !== "accountant", "ceo", "user") {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],

                where: {
                    adminApproval: "Pending"
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// View all request Pending by Manager end here


// Admin Manager Request Only Start Here
export const getRequestManager = async (req, res) => {
    try {
        let response;
        if (req.role === "admin", "accountant", "ceo" && req.role !== "user") {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],

                where: {
                    adminApproval: "approved"
                },

                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// Admin Manager Request End Here

// Admin Manager Request Only Start Here
export const getRequestAccountant = async (req, res) => {
    try {
        let response;
        if (req.role === "admin", "accountant", "ceo" && req.role !== "user") {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],

                where: {
                    adminApproval: "approved",
                    ceoApproval: "approved"
                },

                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// Admin Manager Request End Here

// View all request Pending by Manager  by user id start here
export const getManagerPendingByIdRequest = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "ceo", "accountant", "admin") {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],

                where: {
                    adminApproval: "Pending",
                    userId: req.userId
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// View all request Pending by Manager by user id end here



// View all request Pending by CEO  by user id start here
export const getCeoPendingByIdRequest = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "ceo", "accountant", "admin") {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],

                where: {
                    ceoApproval: "Pending",
                    userId: req.userId
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// View all request Pending by CEO by user id end here



// View all request Pending by Ceo start here
export const getCeoPendingRequest = async (req, res) => {
    try {
        let response;
        if (req.role === "ceo" && req.role !== "accountant", "admin", "user") {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],

                where: {
                    ceoApproval: "Pending"
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: [
                    'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// View all request Pending by CEO end here

















































export const getRequestById = async (req, res) => {
    try {
        const request = await Request.findOne({
            where: {
                uid: req.params.id
            }
        });

        if (!request) return res.status(404).json({ msg: "Data not found" });
        let response;
        if (req.role === "admin", "ceo","accountant") {
            response = await Request.findOne({
                attributes: ['id', 'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],
                where: {
                    id: request.id
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        } else {
            response = await Request.findOne({
                attributes: ['id', 'uid', 'staffId',
                    'staffName', 'requestingFor',
                    'department', 'amountRequest',
                    'amountRequestInWords', 'purpose',
                    'signature', 'adminApproval',
                    'ceoApproval'],
                where: {
                    [Op.and]: [{ id: request.id }, { userId: req.userId }]
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'userName']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createRequest = async (req, res) => {
    const { staffId, staffName,
        requestingFor, department,
        amountRequest, amountRequestInWords,
        purpose, signature, adminApproval, ceoApproval } = req.body;
    try {
        await Request.create({
            staffId: staffId,
            staffName: staffName,
            department: department,
            requestingFor: requestingFor,
            amountRequest: amountRequest,
            amountRequestInWords: amountRequestInWords,
            purpose: purpose,
            adminApproval: adminApproval,
            ceoApproval: ceoApproval,
            signature: signature,
            userId: req.userId
        });





        res.status(201).json({ msg: "Request Created Successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateRequest = async (req, res) => {
    try {
        const request = await Request.findOne({
            where: {
                uid: req.params.id
            }
        });
        if (!request) return res.status(404).json({ msg: "Data not found" });
        const { 
            adminApproval, ceoApproval
        } = req.body;
        if (req.role === "admin", "ceo") {
            await Request.update({
                // staffId, staffName,
                // requestingFor, department,
                // amountRequest, amountRequestInWords,
                // purpose, signature,
                adminApproval, ceoApproval
            }, {
                where: {
                    id: request.id
                }
            });
        }
        else {
            if (req.userId !== request.userId) return res.status(403).json({ msg: "Access forbidden" });
            await Request.update({
               
                adminApproval, ceoApproval
            }, {
                where: {
                    [Op.and]: [{ id: request.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Request updated successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deleteRequest = async (req, res) => {
    try {
        const request = await Request.findOne({
            where: {
                uid: req.params.id
            }
        });
        if (!request) return res.status(404).json({ msg: "Data not found" });
        const {
            staffId, staffName,
            requestingFor, department,
            amountRequest, amountRequestInWords,
            purpose, signature
        } = req.body;
        if (req.role === "admin") {
            await Request.destroy({
                staffId, staffName,
                requestingFor, department,
                amountRequest, amountRequestInWords,
                purpose, signature,
                adminApproval, ceoApproval
            },

                {
                    where: {

                        id: request.id
                    }
                });

        } else {
            if (req.userId !== request.userId) return res.status(403).json({ msg: "Access forbidden" });
            await Request.destroy({
                where: {
                    [Op.and]: [{ id: request.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: " deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

export const upload = multer({
    storage: storage,
    limits: { fileSize: '10000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('signature')

