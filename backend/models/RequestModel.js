import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Request = db.define('request', {
    uid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },


    staffId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },


    staffName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [5, 100]
        }
    },


    requestingFor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [5, 100]
        }
    },


    department: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },


    amountRequest: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },
    amountRequestInWords: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },


    purpose: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },


    signature: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },


    // requestAt: {
    //     type: DataTypes.DATETIME,
    //     allowNull: false,
    //     validate: {
    //         notEmpty: true,

    //     }
    // },


    adminApproval: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },


    ceoApproval: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },


    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
},


    {
        freezeTableName: true
    });

Users.hasMany(Request);
Request.belongsTo(Users, { foreignKey: 'userId' });

export default Request;