import { DataTypes } from "sequelize";
const paymentModal = (sequelize) => {
    return sequelize.define('payment', {
        method: {
            type: DataTypes.ENUM("COD", "CARD", "UPI", "NETBANKING"),
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM("PENDING", "SUCCESS", "FAILED"),
            defaultValue: "PENDING"
        },
        transactionId: DataTypes.STRING
    })
}
export default paymentModal;