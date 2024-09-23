const { Timestamp } = require("mongodb");

const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    produto: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      required: true
    },
    categoria: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    },
    details: {
      descritivo: {
        Faixa_nominal: {
          type: String,
          default: ""
        },
        caracteristica: {
          type: String,
          default: ""
        }
      },
      detalhamento: {
        Faixa_nominal: {
          type: String,
          default: ""
        },
        Ensaio: {
          type: String,
          default: ""
        }
      }
    },
    content: {
      technical: {
        type: [String],
        default: []
      },
      usability: {
        type: [String],
        default: []
      }
    },
    image: {
      type: [String],
      default: []
    }
  }
);

const Product = mongoose.model("JsonProduct", productSchema);

module.exports = Product;
