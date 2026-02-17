import { DataTypes } from "sequelize";
const orderModal = (sequelize) => {
    return sequelize.define('order', {
        totalAmount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
        status: {
            type: DataTypes.ENUM("PLACED", "PAID", "SHIPPED", "DELIVERED", "CANCELLED"),
            defaultValue: "PLACED"
        }

    })
}
export default orderModal;