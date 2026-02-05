import { DataTypes } from "sequelize"

const userModal=(sequelize)=>{
    return sequelize.define('user',{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        role:{
            type:DataTypes.ENUM('USER','ADMIN','SELLER'),
            allowNull:false,
            defaultValue:'USER'
        },
        isActive:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:false
        }
    })
}
export default userModal;