import { Products } from "../models/database/schema";

// CREATE
async function addProduct(code: number, label: string, price: number, img: string) {
  let RESPONSE_CODE: number;
  let RESPONSE_MESSAGE: string;
  
  try {
    await Products.create({ code, label, price, img });
    RESPONSE_CODE = 200;
    RESPONSE_MESSAGE = "Item Added";
  } catch (error) {
    RESPONSE_CODE = 400;
    RESPONSE_MESSAGE = "ERROR";
    console.log(error);
  }

  return { code: RESPONSE_CODE, message: RESPONSE_MESSAGE }
}

// READ
async function getProductByCode(code: string) {
  let RESPONSE_CODE: number;
  let RESPONSE_MESSAGE: string;
  let results: Array<any>;
  try {
    results = await Products.find({code});
    RESPONSE_CODE = 200;
    if(results.length === 0){
      RESPONSE_MESSAGE = "No Results";
    } else {
      RESPONSE_MESSAGE = "OK";
    }
  } catch (error) {
    results = [];
    RESPONSE_CODE = 400;
    RESPONSE_MESSAGE = "ERROR";
  }
  return { code: RESPONSE_CODE, message: RESPONSE_MESSAGE, results }
}

async function getProductByName(search: string) {
  let RESPONSE_CODE: number;
  let RESPONSE_MESSAGE: string;
  let results: Array<any>;
  try {
    const regex = new RegExp(`${search}`, 'i');    
    results = await Products.find({ label: regex });
    if(results.length === 0){
      RESPONSE_CODE = 204;
      RESPONSE_MESSAGE = "No Results";
    } else {
      RESPONSE_CODE = 200;
      RESPONSE_MESSAGE = "OK";
    }
  } catch (error) {
    results = [];
    RESPONSE_CODE = 400;
    RESPONSE_MESSAGE = "ERROR";
  }
  return { code: RESPONSE_CODE, message: RESPONSE_MESSAGE, results }
}

// UPDATE
function updateProduct() {}
// DELEAT
function deleatProduct() {}

export { addProduct, getProductByCode, getProductByName };
