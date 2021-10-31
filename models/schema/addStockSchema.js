const mongoose = require("mongoose");
const addStockSchema = mongoose.Schema({
  stockName: {
    type: String,
    require: true,
  },
  entryPrice: {
    type: Float64Array,
    require: true,
  },
  exitPrice: {
    type: Float64Array,
    require: true,
  },
  noOfContracts: {
    type: Int32Array,
    require: true,
  },

  //   subcriptionType: {
  //       type:
  //   },
  urls: {
    type: String,
    require: true,
  }
});
