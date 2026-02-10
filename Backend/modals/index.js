import sequelize from "../config/database.js";
import addressModal from "./address.model.js";
import categoryModal from "./category.model.js";
import productModal from "./product.model.js";
import productImageModal from "./productImage.model.js";
import userModal from "./user.modal.js";
const User=userModal(sequelize);
const Category=categoryModal(sequelize);
const Product=productModal(sequelize);
const ProductImage=productImageModal(sequelize);
const Address=addressModal(sequelize)

//Assocation
Category.hasMany(Product);
Product.belongsTo(Category);
User.hasMany(Address);
Address.belongsTo(User);

export {
    User,
    Category,
    Product,
    ProductImage,
    Address
}