import mongoDB from '../../database/mongoDB.js'

// CREATE
async function addProduct(post) {

    try {

        let id = await DataBase.find().count() + 1;

        const values = {
            _id: id,
            code: post.code,
            img: post.img,
            label: post.label,
            price: post.price,
        }
    
        await mongoDB.create(values);
        console.log('Item added!');

    } catch (error) {
        console.log('Add item ERROR: ', error);
    }
};

// READ
function getProduct() {

};

// UPDATE
function updateProduct() {

};
// DELEAT
function deleatProduct() {

};