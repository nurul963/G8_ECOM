import { DataTypes } from "sequelize"

const productImageModal=(sequelize)=>{
    return sequelize.define('productImage',{
        imageUrl: { type: DataTypes.STRING, allowNull: false }

    })
}
export default productImageModal;