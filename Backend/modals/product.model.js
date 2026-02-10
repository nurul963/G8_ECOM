import { DataTypes } from "sequelize"

const productModal=(sequelize)=>{
    return sequelize.define('product',{
        name: { type: DataTypes.STRING, allowNull: false },
        description: DataTypes.TEXT,
        price: { type: DataTypes.DECIMAL(10,2), allowNull: false },
        discountPrice: DataTypes.DECIMAL(10,2),
        stock: { type: DataTypes.INTEGER, defaultValue: 0 },
        brand: DataTypes.STRING,
        isActive: { type: DataTypes.BOOLEAN, defaultValue: true }

    })
}
export default productModal;