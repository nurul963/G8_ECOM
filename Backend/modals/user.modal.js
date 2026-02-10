import { DataTypes } from "sequelize"
import bcrypt from 'bcrypt';
const userModal=(sequelize)=>{
    return sequelize.define('user',{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            // get(){
            //     const rowValue=this.getDataValue('name');
            //     return rowValue?`Mr ${rowValue}`:'Unknown'
            // }
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            set(value){
                const hashPassword=bcrypt.hashSync(value,10);
                this.setDataValue('password', hashPassword);
            }
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