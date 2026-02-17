import sequelize from "../config/database.js";
import addressModal from "./address.model.js";
import cartModal from "./cart.model.js";
import categoryModal from "./category.model.js";
import orderModal from "./order.model.js";
import orderItemModal from "./orderItem.model.js";
import paymentModal from "./payment.model.js";
import productModal from "./product.model.js";
import productImageModal from "./productImage.model.js";
import userModal from "./user.modal.js";

const User=userModal(sequelize);
const Address=addressModal(sequelize);
const Category=categoryModal(sequelize);
const Product=productModal(sequelize);
const ProductImage=productImageModal(sequelize);
const Cart=cartModal(sequelize);
const Order=orderModal(sequelize);
const OrderItem=orderItemModal(sequelize);
const Payment=paymentModal(sequelize);

Category.hasMany(Product);
Product.belongsTo(Category);

Product.hasMany(ProductImage);
ProductImage.belongsTo(Product);

User.hasMany(Address);
Address.belongsTo(User);

User.hasMany(Cart);
Cart.belongsTo(User);
Product.hasMany(Cart);
Cart.belongsTo(Product);

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);
Product.hasMany(OrderItem);
OrderItem.belongsTo(Product);

Order.hasOne(Payment);
Payment.belongsTo(Order);

// User.hasMany(Review);
// Review.belongsTo(User);
// Product.hasMany(Review);
// Review.belongsTo(Product);

export {
    User,
    Address,
    Cart,
    Category,
    Order,
    OrderItem,
    Payment,
    Product,
    ProductImage,
    // Review,
    // Wishlist
}