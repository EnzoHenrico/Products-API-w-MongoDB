import Query from "../models/database/schema";

// CREATE
async function addProduct(code: number, label: string, price: number, img: string) {
  let RESPONSE_CODE: number;
  let RESPONDE_MESSAGE: string;
  
  try {
    await Query.create({ code, label, price, img });
    RESPONSE_CODE = 200;
    RESPONDE_MESSAGE = "Item Added";
  } catch (error) {
    RESPONSE_CODE = 400;
    RESPONDE_MESSAGE = "ERROR";
    console.log(error);
  }

  return { RESPONSE_CODE, RESPONDE_MESSAGE }
}
// READ
function getProduct() {}
// UPDATE
function updateProduct() {}
// DELEAT
function deleatProduct() {}

export { addProduct };
