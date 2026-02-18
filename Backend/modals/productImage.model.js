import { DataTypes } from "sequelize"

const productImageModal=(sequelize)=>{
    return sequelize.define('productImage',{
        imageUrl: { type: DataTypes.STRING, allowNull: false },
        publicId:{type:DataTypes.STRING}
    })
}
export default productImageModal;