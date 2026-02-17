import { DataTypes } from "sequelize";
const cartModal = (sequelize) => {
    return sequelize.define('cart', {
        quantity: { type: DataTypes.INTEGER, defaultValue: 0 }
    })
}
export default cartModal;