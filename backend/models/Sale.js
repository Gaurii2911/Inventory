const mongoose = require("mongoose");

const SaleSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  products: [{  //array of productId, quantity
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  issuedTo: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  isReturned: {
    type: Boolean,
    default: false
  },
  returnDate: {
    type: String,
    default: "Pending"
  }
  // history: [
  //   {
  //     soldTo: String,
  //     dateSold: {
  //       type: String
  //     },
  //     // numberSold: Number,
  //   }
  // ],
});

// Once changes has been made to matching customers soldTo, update the corresponding customer collection. itemsBought: {name: name, dateBought: dateSold, numberBought: numberSold}

// Changes to the history field here will affect corresponding customers and products collections. Just as it's done in purchases.

module.exports = mongoose.model("sales", SaleSchema);
