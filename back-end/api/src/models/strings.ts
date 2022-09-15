const messages = {
  sucess: {
    added: "Product added successfully!",
    found: "Request resolved sucessfully!",
    updated: "Product updated sucessfully!",
    deleted: "Product deletd sucessfully!"
  },
  error: {
    unknown: "Unknown error",
    server: "Internal server error",
    database: "Database error",
    unfound: "Request returned no results",
  },
}

const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
}

export { messages, HTTP_STATUS }
