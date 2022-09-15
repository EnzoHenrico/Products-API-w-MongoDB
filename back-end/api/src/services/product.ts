import { Products } from "../models/database/schema";
import { DatabaseError } from "../models/errors/exceptions";
import { messages, HTTP_STATUS } from "../models/strings";

// CREATE
async function addProduct(code: number, label: string, price: number, img: string) {
  try {
    await Products.create({ code, label, price, img });

    return { 
      code: HTTP_STATUS.CREATED, 
      message: messages.sucess.added
    }

  } catch (err: any) {
    throw new DatabaseError(err.toString());
  }
}

// READ
async function getProductByCode(code: number) {
  try {
    const results = await Products.find({code});

    if(results.length !== 0){
      return { 
        code: HTTP_STATUS.OK, 
        message: messages.sucess.found,
        results,
      }
    }
    return { 
      code: HTTP_STATUS.OK, 
      message: messages.error.unfound,
      results,
    }
  
  } catch (err: any) {
    throw new DatabaseError(err.toString());
  }
}

async function getProductByLabel(search: string) {
  try {
    const regex = new RegExp(`${search}`, 'i');
    const results = await Products.find({ label: regex });

    if(results.length !== 0){
      return { code: HTTP_STATUS.OK, 
        message: messages.sucess.found, 
        results, 
      }
    } 
    return {
      code: HTTP_STATUS.OK, 
      message: messages.error.unfound, 
      results,
    }

  } catch (err: any) {
    throw new DatabaseError(err.toString());
  }
}

// UPDATE 
async function updateProduct(code: number, changes: object) {
  try {
    const result = await Products.findOneAndUpdate({ code }, { ...changes }); 

    if(!result) {
      return { 
        code: HTTP_STATUS.NOT_FOUND, 
        message: messages.error.unfound, 
        result, 
      }
    }
    return { 
      code: HTTP_STATUS.OK, 
      message: messages.sucess.updated, 
      result,
    }

  } catch (err: any) {
    throw new DatabaseError(err.toString());
  }
}

// DELETE
async function deleteProduct(code: number) {
  try {
    const result = await Products.findOneAndDelete({ code });    

    if(!result) {
      return { 
        code: HTTP_STATUS.NOT_FOUND, 
        message: messages.error.unfound, 
        result, 
      }
    }
    return { 
      code: HTTP_STATUS.OK, 
      message: messages.sucess.deleted, 
      result,
    }

  } catch (err: any) {
    throw new DatabaseError(err.toString());
  }
}

export { addProduct, getProductByCode, getProductByLabel, updateProduct, deleteProduct };
