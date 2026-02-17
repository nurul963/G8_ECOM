import { DataTypes } from "sequelize";
const orderItemModal = (sequelize) => {
    return sequelize.define('orderItem', {
        quantity: { type: DataTypes.INTEGER, allowNull: false },
        priceAtPurchase: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
    })
}
export default orderItemModal;