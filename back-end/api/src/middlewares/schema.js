export default {
    _id: {
      in: ['body'],
      errorMessage: 'Invalid ID format',
      isInt: true,      
    },
    label: {
        in: ['body'],
        isLength: {
            options: { min: 2, max: 36 },
            errorMessage: 'Invalid Label format',
        },      
      },
    price: {
        in: ['body'],
        isNumeric: {
            options : true,
            errorMessage: 'Invalid Price format',
        }
    },
}