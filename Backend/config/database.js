import { Sequelize } from "sequelize";
import { DB_NAME, DB_PASSWORD, DB_USER, DILECT, HOST } from "../util/constant.js";
const sequelize=new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
    host:HOST,
    dialect:DILECT,
    logging:false  
});
export const connectDB=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default sequelize;