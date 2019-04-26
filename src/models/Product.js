const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Product = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

Product.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', Product);
