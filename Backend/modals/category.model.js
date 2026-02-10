import { DataTypes } from "sequelize"

const categoryModal=(sequelize)=>{
    return sequelize.define('category',{
        name: { type: DataTypes.STRING, allowNull: false },
        parentId: { type: DataTypes.INTEGER, allowNull: true }
    })
}
export default categoryModal;