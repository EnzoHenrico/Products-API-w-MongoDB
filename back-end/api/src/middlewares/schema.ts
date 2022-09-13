import { Schema } from "express-validator";

const schema: Schema = {
  code: {
    in: ["body"],
    isNumeric: {
      errorMessage: "Product code must be a number",
    },
    isLength: {
      options: { min: 8, max: 8 },
      errorMessage: "Product code must have 8 numbers",
    },
  },
  img: {
    in: ["body"],
  },
  label: {
    in: ["body"],
    isLength: {
      options: { min: 4, max: 36 },
      errorMessage: "Invalid Label format",
    },
  },
  price: {
    in: ["body"],
    isNumeric: {
      errorMessage: "Invalid Price format",
    },
  },
};

export default schema;
