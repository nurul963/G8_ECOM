import sequelize from "../config/database.js";
import userModal from "./user.modal.js";
const User=userModal(sequelize);
export {
    User
}