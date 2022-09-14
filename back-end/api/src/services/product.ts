import { Products } from "../models/database/schema";

// CREATE
async function addProduct(code: number, label: string, price: number, img: string) {
  try {
    await Products.create({ code, label, price, img });
    
    return { code: 201, message: "Item Added" }
  } catch (error) {

    console.log('ERR: ', error);
    return { code: 400, message: "ERROR" }
  }
}

// READ
async function getProductByCode(code: number) {
  try {
    const results = await Products.find({code});
    if(results.length === 0){
      return { code: 200, message: "No Results", results }
    } else {
      return { code: 200, message: "Success", results }
    }
  } catch (error) {
    return { code: 400, message: "ERROR", results: [] }
  }
}

async function getProductByLabel(search: string) {
  try {
    const regex = new RegExp(`${search}`, 'i');
    const results = await Products.find({ label: regex });
    if(results.length === 0){
      return { code: 200, message: "No Results", results }
    } else {
      return { code: 200, message: "Success", results }
    }
  } catch (error) {
    return { code: 400, message: "ERROR", results: [] }
  }
}

// UPDATE 
async function updateProduct(code: number, changes: object) {
  try {
    const result = await Products.findOneAndUpdate({ code }, { ...changes })
    return { 
      code: result ? 200 : 404, 
      message: result ? "Item Updated" : "Intem not found", 
      result, 
    }
  } catch (error) {
    console.log(error);
    return { code: 400, message: "ERROR", result: {} }
  }
}

// DELETE
async function deleteProduct(code: number) {
  try {
    const deleted = await Products.findOneAndDelete({ code });    
    return { 
      code: deleted ? 200 : 404, 
      message: deleted ? "Item deleted" : "Intem not found", 
      deleted 
    }
  } catch (error) {
    console.log(error);
    return { code: 400, message: "ERROR", deleted: {} }
  }
}

export { addProduct, getProductByCode, getProductByLabel, updateProduct, deleteProduct };
