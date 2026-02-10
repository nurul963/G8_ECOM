import { DataTypes } from "sequelize"

const addressModal=(sequelize)=>{
    return sequelize.define('address',{
        addressLine: DataTypes.TEXT,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        pincode: DataTypes.STRING,
        country: DataTypes.STRING
    })
}
export default addressModal;