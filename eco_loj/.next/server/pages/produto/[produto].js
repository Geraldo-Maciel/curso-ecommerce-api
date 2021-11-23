module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/produto/[produto].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/Campos/Pesquisa.js":
/*!***************************************!*\
  !*** ./components/Campos/Pesquisa.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Campos\\Pesquisa.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Pesquisa extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      termo: ""
    });
  }

  submitPesquisa() {
    const {
      termo
    } = this.state;
    this.props.fetchTermo(termo);
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
      pathname: "/pesquisa",
      query: {
        termo
      }
    });
  }

  render() {
    return __jsx("div", {
      className: "flex-3 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, __jsx("input", {
      name: "pesquisa",
      value: this.state.termo,
      onChange: e => this.setState({
        termo: e.target.value
      }),
      placeholder: "Digite aqui a sua pesquisa ...",
      className: "input-pesquisa",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }), __jsx("button", {
      onClick: () => this.submitPesquisa(),
      className: "button-pesquisa",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx("i", {
      className: "fa fa-search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    }, " ")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(Pesquisa));

/***/ }),

/***/ "./components/Cards/Carrinho.js":
/*!**************************************!*\
  !*** ./components/Cards/Carrinho.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Cards\\Carrinho.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class CardCarrinho extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      cartQtd: 0
    });
  }

  componentDidMount() {
    this.setState({
      cartQtd: Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["getCountItemsCart"])()
    });
  }

  render() {
    return __jsx("div", {
      className: "itens-cabecalho flex-2 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/area-cliente",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "item-cabecalho",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "fa fa-user",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 25
      }
    }, "Minha Conta"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/carrinho",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "item-cabecalho cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "fa fa-shopping-bag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }
    }, this.state.cartQtd || 0))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CardCarrinho);

/***/ }),

/***/ "./components/Head.js":
/*!****************************!*\
  !*** ./components/Head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Head.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const defaultDescricao = '';
const defaultOGURL = '';
const defaultOGImage = "/static/logo.png";

const Head = props => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, " ", props.title || "", " "), __jsx("meta", {
  name: "description",
  content: props.description || defaultDescricao,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  href: "/static/favicon.ico",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:url",
  content: props.url || defaultOGURL,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:title",
  content: props.title || "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:descri\xE7\xE3o",
  content: props.description || defaultDescricao,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "twitter:site",
  content: props.url || defaultOGURL,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "twitter:card",
  content: "summary_large_image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "twitter:image",
  content: props.ogImage || defaultOGImage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:image",
  content: props.ogImage || defaultOGImage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:image:width",
  content: "600",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:image:height",
  content: "600",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet" //            href="/static/font-awesome.min.css" 
  ,
  href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  integryte: "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
  crossOrigin: "anonymous",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/style.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }
}), props.pagSeguro ? __jsx("script", {
  type: "text/javascript",
  src: "https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 17
  }
}) : null, props.children);

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  ogImage: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/Item/DadosDaLoja.js":
/*!****************************************!*\
  !*** ./components/Item/DadosDaLoja.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Item\\DadosDaLoja.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class DadosDaLoja extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (!this.props.loja) return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 39
      }
    }, " ");
    const {
      nome,
      cnpj,
      email,
      endereco,
      telefones
    } = this.props.loja;
    return __jsx("div", {
      className: "flex-1 dados-da-loja",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }, " Entre em Contato "), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    })), __jsx("p", {
      className: "loja-nome",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, " Nome: ", nome, " "), __jsx("p", {
      className: "loja-cnpj",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, " CNPJ: ", cnpj, " "), __jsx("p", {
      className: "loja-email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, " E-mail: ", __jsx("a", {
      href: `mailto:${email}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 54
      }
    }, " ", email, " "), " "), __jsx("p", {
      className: "loja-telefones",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, " Telefones: "), telefones.map(index => __jsx("p", {
      className: "loja-telefone",
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }
    }, "\xA0 \xA0", __jsx("a", {
      href: `phone:${telefones}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 29
      }
    }, " ", telefones, " "))), __jsx("p", {
      className: "loja-endereco",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, " ", endereco.local, ", ", endereco.numero, " - ", endereco.bairro, " "), __jsx("p", {
      className: "loja-cidade",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, " ", endereco.cidade, " / ", endereco.estado, " - ", endereco.CEP, " "));
  }

}

const mapStateToProps = state => ({
  loja: state.loja.loja
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(DadosDaLoja));

/***/ }),

/***/ "./components/Item/Produto.js":
/*!************************************!*\
  !*** ./components/Item/Produto.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./config.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Item\\Produto.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Produto extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      item,
      porLinha
    } = this.props;
    const {
      _id,
      titulo,
      preco,
      promocao,
      fotos
    } = item; //        const temPromo = promocao && preco !== promocao;

    const temPromo = preco !== promocao && promocao !== 0;
    return (//            <Link href = {`/produto/${titulo}?produto=${_id}`}>
      __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: `/produto/${titulo}?id=${_id}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: `produto flex-1 flex vertical wrap-${porLinha} wrap-2-mb`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "produto-image flex flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }
      }, __jsx("img", {
        src: `${_config__WEBPACK_IMPORTED_MODULE_3__["baseImg"]}${fotos[0]}`,
        alt: titulo,
        style: {
          maxWidth: "95%"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "produto-title flex flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 25
        }
      }, " ", titulo, " ")), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: `produto-preco ${temPromo ? "produto-por" : ""} flex flex-center`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }
      }, " ", Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(preco), " ")), temPromo && __jsx("div", {
        className: `produto-preco-promocao flex flex-center`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 29
        }
      }, " ", Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(promocao), " ")), __jsx("div", {
        className: `produto-preco-parcelado flex flex-center`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }
      }, " ou 6x de ", Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])((temPromo ? promocao : preco) / 6), " sem juros "))))
    );
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Produto);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Head */ "./components/Head.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Style */ "./components/Style.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = ({
  children,
  title,
  description,
  url,
  image,
  pagSeguro
}) => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx(_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: title,
  description: description,
  url: url,
  ogImage: image,
  pagSeguro: pagSeguro,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}), __jsx(_Style__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}), __jsx("div", {
  className: "body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }
}, children), __jsx("footer", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "flex flex-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 13
  }
}, __jsx("small", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 17
  }
}, "\xA9 Loja IT - Curso Criando um Ecommerce do Zero"))));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Listas/Categorias.js":
/*!*****************************************!*\
  !*** ./components/Listas/Categorias.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Listas\\Categorias.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Categorias extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      categorias
    } = this.props;
    return __jsx("div", {
      className: "categorias flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, categorias.map(categoria => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: `/categoria/${categoria.nome}?id=${categoria._id}`,
      key: categoria._id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "categoria-item flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 33
      }
    }, categoria.nome)))));
  }

}

const mapStateToProps = state => ({
  categorias: state.categoria.categorias
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Categorias));

/***/ }),

/***/ "./components/Listas/Paginas.js":
/*!**************************************!*\
  !*** ./components/Listas/Paginas.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Listas\\Paginas.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Paginas = () => __jsx("div", {
  className: "flex-1 flex vertical institucional",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, "P\xE1ginas"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }
})), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 13
  }
}, "P\xE1gina Inicial")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/carrinho",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
}, "Ver Sacola")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/area-cliente/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 13
  }
}, "Minha Conta")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/sobre",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 13
  }
}, "Sobre a Loja")));

/* harmony default export */ __webpack_exports__["default"] = (Paginas);

/***/ }),

/***/ "./components/Listas/Produtos.js":
/*!***************************************!*\
  !*** ./components/Listas/Produtos.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Item_Produto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Item/Produto */ "./components/Item/Produto.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Listas\\Produtos.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Produtos extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    var highest = 0;
    const produtosListados = document.querySelectorAll(".produto-title");
    produtosListados.forEach(function (item) {
      if (highest < item.clientHeight) highest = item.clientHeight;
    });
    produtosListados.forEach(function (item) {
      item.style.height = highest + 10 + "px";
    });
  }

  render() {
    const {
      produtos,
      itensPorLinha
    } = this.props;
    return __jsx("div", {
      className: "Produtos flex wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, produtos.map(item => __jsx(_Item_Produto__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item,
      key: item._id,
      porLinha: itensPorLinha,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Produtos);

/***/ }),

/***/ "./components/Listas/RedesSociais.js":
/*!*******************************************!*\
  !*** ./components/Listas/RedesSociais.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Listas\\RedesSociais.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const REDES_SOCIAIS = [{
  nome: "facebook",
  url: "#"
}, {
  nome: "instagram",
  url: "#"
}, {
  nome: "twitter",
  url: "#"
}, {
  nome: "whatsapp",
  url: "#"
}];

const RedesSociais = () => __jsx("div", {
  className: "flex-1 flex vertical",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
}, "Redes Sociais"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 13
  }
})), __jsx("div", {
  className: "flex-1 flex redes-sociais wrap",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, REDES_SOCIAIS.map((item, idx) => __jsx("div", {
  className: "flex-1 flex",
  key: idx,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 21
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: item.url,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 25
  }
}, __jsx("i", {
  className: `fa fa-${item.nome} fa-lg`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 29
  }
}))))));

/* harmony default export */ __webpack_exports__["default"] = (RedesSociais);

/***/ }),

/***/ "./components/Logo/Cabecalho.js":
/*!**************************************!*\
  !*** ./components/Logo/Cabecalho.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Logo\\Cabecalho.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LogoCabecalho = () => __jsx("div", {
  className: "flex-2 flex flex-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx("img", {
  src: "/static/logo.png",
  className: "logo",
  width: "90%",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (LogoCabecalho);

/***/ }),

/***/ "./components/Style.js":
/*!*****************************!*\
  !*** ./components/Style.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2991086144",
  __self: undefined
}, "body{margin:0;padding:0;}body,*{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;}.container,.container-big{width:calc(100% - 20px);padding:0 10px;max-width:1200px;margin:0 auto;}.container-big{max-width:1440 px;}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flex-1{-webkit-flex:1;-ms-flex:1;flex:1;}.flex-2{-webkit-flex:2;-ms-flex:2;flex:2;}.flex-3{-webkit-flex:3;-ms-flex:3;flex:3;}.flex-4{-webkit-flex:4;-ms-flex:4;flex:4;}.flex-5{-webkit-flex:5;-ms-flex:5;flex:5;}.flex-6{-webkit-flex:6;-ms-flex:6;flex:6;}.wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.wrap-1{-webkit-flex-basis:calc(100% - 50px);-ms-flex-preferred-size:calc(100% - 50px);flex-basis:calc(100% - 50px);max-width:calc(100% - 50px);}.wrap-2{flax-basic:calc(50% - 50px);max-width:calc(50% - 50px);}.wrap-3{-webkit-flex-basis:calc(32% - 50px);-ms-flex-preferred-size:calc(32% - 50px);flex-basis:calc(32% - 50px);max-width:calc(32% - 50px);}.wrap-4{-webkit-flex-basis:calc(25% - 50px);-ms-flex-preferred-size:calc(25% - 50px);flex-basis:calc(25% - 50px);max-width:calc(25% - 50px);}.wrap-5{-webkit-flex-basis:calc(20% - 50px);-ms-flex-preferred-size:calc(20% - 50px);flex-basis:calc(20% - 50px);max-width:calc(20% - 50px);}.vertical{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.flex-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.flex-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.flex-right{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text-center{text-align:center;}select{font-size:1rem;}@media screen and (max-width:720px){.wrap-mb{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.wrap-2-mb{-webkit-flex-basis:calc(50% - 20px);-ms-flex-preferred-size:calc(50% - 20px);flex-basis:calc(50% - 20px);max-width:calc(50% - 20px);}.produto.wrap-2-mb{-webkit-flex-basis:calc(50% - 50px);-ms-flex-preferred-size:calc(50% - 50px);flex-basis:calc(50% - 50px);max-width:calc(50% - 50px);}.horizontal-mb{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.horizontal{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxBU1NFU1NPUl9FQ09cXEVDT19MT0pcXGNvbXBvbmVudHNcXFN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd3QixBQUlrQixBQUdrRCxBQUtuQyxBQUtOLEFBRUgsQUFDSixBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFFTSxBQUVZLEFBSUQsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUdMLEFBR0ksQUFHRixBQUlQLEFBSUgsQUFHUyxBQUVRLEFBSUEsQUFHRSxBQUNBLFNBMUV4QixNQTZETSxHQWpERyxBQThDdkIsQ0ExRGUsS0FRSSxJQXFCWSxLQWRmLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxNQVhLLGdCQXFCckIsQ0EzQkEsQUFPa0IsQ0FZSSxBQTBDTyxZQVNVLENBL0RwQixJQUlDLElBOEJhLEFBOEJNLG1CQXBCaEIsRUFOQSxNQWZRLEFBSUEsQUFJQSxBQVVSLEFBZ0JZLEFBSUEsR0E5Q0gsd0JBU2hDLEFBSUEsQUFJQSxBQTBCSSxBQUlBLElBOUNKLHNEQTRCd0IsRUFOQSxNQUdBIiwiZmlsZSI6IkY6XFxBU1NFU1NPUl9FQ09cXEVDT19MT0pcXGNvbXBvbmVudHNcXFN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPiB7YFxyXG4gICAgXHJcbiAgICBib2R5IHsgXHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7IH1cclxuICAgIGJvZHksICoge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lcixcclxuICAgIC5jb250YWluZXItYmlnIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyB9XHJcbiAgICAuY29udGFpbmVyLWJpZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNDQwIHB4OyB9XHJcblxyXG4gICAgLmZsZXgge2Rpc3BsYXk6IGZsZXg7IH1cclxuICAgIC5mbGV4LTEge2ZsZXg6IDE7IH1cclxuICAgIC5mbGV4LTIge2ZsZXg6IDI7IH1cclxuICAgIC5mbGV4LTMge2ZsZXg6IDM7IH1cclxuICAgIC5mbGV4LTQge2ZsZXg6IDQ7IH1cclxuICAgIC5mbGV4LTUge2ZsZXg6IDU7IH1cclxuICAgIC5mbGV4LTYge2ZsZXg6IDY7IH1cclxuXHJcbiAgICAud3JhcCB7ZmxleC13cmFwOiB3cmFwOyB9XHJcbiAgICAud3JhcC0xIHsgXHJcbiAgICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgIH1cclxuICAgIC53cmFwLTIgeyBcclxuICAgICAgICBmbGF4LWJhc2ljOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgIH1cclxuICAgIC53cmFwLTMgeyBcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDMyJSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygzMiUgLSA1MHB4KTtcclxuICAgIH1cclxuICAgIC53cmFwLTQgeyBcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDI1JSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygyNSUgLSA1MHB4KTtcclxuICAgIH1cclxuICAgIC53cmFwLTUgeyBcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDIwJSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygyMCUgLSA1MHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwge2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuXHJcbiAgICAuZmxleC1jZW50ZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuICAgIC5mbGV4LXN0YXJ0IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4gICAgLmZsZXgtcmlnaHQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG5cclxuICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtOyB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgLndyYXAtbWIge2ZsZXgtd3JhcDogd3JhcDsgfVxyXG4gICAgICAgIC53cmFwLTItbWIge1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDUwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdXRvLndyYXAtMi1tYiB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhvcml6b250YWwtbWIge2ZsZXgtZGlyZWN0aW9uOiByb3c7IH1cclxuICAgICAgICAuaG9yaXpvbnRhbCB7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gICAgfVxyXG5cclxuICAgIGB9IDwvc3R5bGU+XHJcbikiXX0= */\n/*@ sourceURL=F:\\\\ASSESSOR_ECO\\\\ECO_LOJ\\\\components\\\\Style.js */"));

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: API, versao, loja, baseImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "versao", function() { return versao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loja", function() { return loja; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseImg", function() { return baseImg; });
const API = "http://localhost:3000",
      versao = "v1",
      loja = "60c262e53ebd9f09c080f59a",
      baseImg = API + "/public/images/";

/***/ }),

/***/ "./containers/Cabecalho/index.js":
/*!***************************************!*\
  !*** ./containers/Cabecalho/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Logo_Cabecalho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Logo/Cabecalho */ "./components/Logo/Cabecalho.js");
/* harmony import */ var _components_Campos_Pesquisa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Campos/Pesquisa */ "./components/Campos/Pesquisa.js");
/* harmony import */ var _components_Cards_Carrinho__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Cards/Carrinho */ "./components/Cards/Carrinho.js");
/* harmony import */ var _components_Listas_Categorias__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Listas/Categorias */ "./components/Listas/Categorias.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Cabecalho\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 //import CardCarrinhoLimpo from '../../components/Cards/CarrinhoLimpo';

class Cabecalho extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  renderCabecalhoNormal() {
    return __jsx("div", {
      className: "Header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "header-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, __jsx(_components_Logo_Cabecalho__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }), __jsx(_components_Campos_Pesquisa__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }), __jsx(_components_Cards_Carrinho__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "categorias-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, __jsx(_components_Listas_Categorias__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    })));
  }
  /*
      renderCabecalhoNormal(){
          return(
              <div className="Header">
                  <div className="header-wrapper">
                      <Logo />
                      <CampoPesquisa />
                      <CardCarrinho />
                      <CardCarrinhoLimpo />
                  </div>
                  <div className="categorias-wrapper">
                      <Categorias />
                  </div>
              </div>
          )
      }
  */


  renderCabecalhoSimples() {
    return __jsx("div", {
      className: "Header No-Links Header-Simples",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "header-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, __jsx(_components_Logo_Cabecalho__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    })));
  }

  render() {
    const {
      simples
    } = this.props;
    return simples ? this.renderCabecalhoSimples() : this.renderCabecalhoNormal();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cabecalho);

/***/ }),

/***/ "./containers/Produto/Avaliacoes.js":
/*!******************************************!*\
  !*** ./containers/Produto/Avaliacoes.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Produto\\Avaliacoes.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Avaliacoes extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      texto: "",
      pontuacao: 5
    });
  }

  renderAvaliacoes() {
    const {
      avaliacoes
    } = this.props;
    return __jsx("div", {
      className: "avaliacoes-items flex horizontal wrap no-wrap-mb",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, avaliacoes.map(avaliacao => __jsx("div", {
      key: avaliacao._id,
      className: "avaliacao flex-1 flex vertical wrap-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "avaliacao-texto flex-3 flex texto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 29
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 33
      }
    }, avaliacao.texto)), __jsx("div", {
      className: "avaliacao-dados flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "avaliacao-nome flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 33
      }
    }, __jsx("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 37
      }
    }, avaliacao.nome)), __jsx("div", {
      className: "avaliacao-pontuacao flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 33
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 37
      }
    }, [...Array(avaliacao.pontuacao).keys()].map((i, idx) => __jsx("i", {
      key: idx,
      className: "fa fa-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 49
      }
    }))))))));
  }

  submitAvaliacao() {
    const {
      texto,
      pontuacao
    } = this.state;
    const {
      produto,
      token,
      usuario
    } = this.props;
    if (!texto || !produto) alert("Preencha o campo de texto da avaliação.");
    this.props.novaAvaliacao({
      nome: usuario.nome,
      token,
      produto: produto._id,
      texto,
      pontuacao
    }, err => {
      if (err) alert("Ocorreu um erro, tente novamente.");else this.setState({
        texto: "",
        pontuacao: 5
      });
    });
  }

  renderFormularioDeAvaliacoes() {
    return __jsx("div", {
      className: "avaliacoes-form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, "Envie sua avalia\xE7\xE3o para o produto:"), __jsx("div", {
      className: "flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    }, "Pontua\xE7\xE3o:\xA0"), __jsx("select", {
      value: this.state.pontuacao,
      onChange: e => this.setState({
        pontuacao: e.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }
    }, __jsx("option", {
      value: "1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }
    }, "1 estrela"), __jsx("option", {
      value: "2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 29
      }
    }, "2 estrelas"), __jsx("option", {
      value: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 29
      }
    }, "3 estrelas"), __jsx("option", {
      value: "4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 29
      }
    }, "4 estrelas"), __jsx("option", {
      value: "5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }, "5 estrelas"))), __jsx("div", {
      className: "flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 25
      }
    }, "Avalia\xE7\xE3o:"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 50
      }
    }), __jsx("textarea", {
      rows: "3",
      style: {
        resize: "none",
        width: "100%",
        maxWidth: "500px"
      },
      placeholder: "Digite aqui a sua avalia\xE7\xE3o...",
      value: this.state.texto,
      onChange: e => this.setState({
        texto: e.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 25
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    }, __jsx("button", {
      onClick: () => this.submitAvaliacao(),
      className: "btn btn-primary btn-lg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 29
      }
    }, "Enviar Avalia\xE7\xE3o")))));
  }

  renderAvisoLogin() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/area-cliente",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, __jsx("button", {
      className: "btn btn-primary btn-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }, "CLIQUE AQUI PARA LOGAR E DEIXAR UMA AVALIA\xC7\xC3O")));
  }

  render() {
    return __jsx("div", {
      className: "Avaliacoes flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }, "Avalia\xE7\xF5es"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }), this.renderAvaliacoes(), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }), this.props.token ? this.renderFormularioDeAvaliacoes() : this.renderAvisoLogin());
  }

}

const mapStateToProps = state => ({
  produto: state.produto.produto,
  avaliacoes: state.produto.avaliacoes,
  token: state.auth.token,
  usuario: state.auth.usuario
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_2__["default"])(Avaliacoes));

/***/ }),

/***/ "./containers/Produto/Descricao.js":
/*!*****************************************!*\
  !*** ./containers/Produto/Descricao.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Produto\\Descricao.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Descricao extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      produto
    } = this.props;
    return __jsx("div", {
      className: "Descricao flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, "Descri\xE7\xE3o"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, produto.descricao.split("\n").map((item, idx) => __jsx("p", {
      key: idx,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 45
      }
    }, item))));
  }

}

const mapStateToProps = state => ({
  produto: state.produto.produto
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Descricao));

/***/ }),

/***/ "./containers/Produto/Hero.js":
/*!************************************!*\
  !*** ./containers/Produto/Hero.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Produto\\Hero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Hero extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super();

    _defineProperty(this, "setVariacao", (produto, variacao) => {
      this.setState({
        variacao: variacao._id,
        variacaoCompleta: variacao
      });

      if (variacao.fotos && variacao.fotos.length > 0) {
        this.setState({
          fotos: variacao.fotos,
          foto: variacao.fotos[0]
        });
      } else {
        this.setState({
          fotos: produto.fotos,
          foto: produto.fotos[0]
        });
      }
    });

    const {
      produto: _produto,
      variacoes
    } = props;
    this.state = {
      foto: _produto ? _produto.fotos[0] || null : null,
      fotos: _produto ? _produto.fotos || [] : [],
      qtd: 1,
      variacao: variacoes && variacoes.length >= 1 ? variacoes[0]._id : null,
      variacaoCompleta: variacoes && variacoes.length >= 1 ? variacoes[0] : null
    };
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.produto && this.props.produto) {
      const {
        fotos
      } = this.props.produto;
      this.setState({
        foto: fotos[0],
        fotos
      });
    }

    if (!prevProps.variacoes && this.props.variacoes) {
      const variacao = this.props.variacoes[0];
      if (!variacao) return null;
      this.setState({
        variacao: variacao._id,
        variacaoCompleta: variacao
      });
    }
  }

  renderPhotos() {
    return __jsx("div", {
      className: "fotos flex-2 flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "foto-principal flex-6 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _config__WEBPACK_IMPORTED_MODULE_4__["baseImg"] + this.state.foto,
      width: "95%",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "mini-fotos flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, this.state.fotos.map((foto, index) => __jsx("div", {
      key: index,
      className: "mini-foto flex-1 flex flex-center",
      onClick: () => this.setState({
        foto
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: _config__WEBPACK_IMPORTED_MODULE_4__["baseImg"] + foto,
      width: "90%",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 33
      }
    })))));
  }

  renderVariacoes() {
    const {
      variacoes,
      produto
    } = this.props;
    if (!produto || !variacoes || variacoes.length === 0) return null;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }, "Selecione uma op\xE7\xE3o:")), __jsx("div", {
      className: "variacoes flex wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }, variacoes.map((variacao, index) => __jsx("div", {
      className: `
                                    variacao${variacao._id === this.state.variacao ? " variacao-active" : ""} 
                                    flex-1 flex flex-center wrap-4
                                `,
      key: variacao._id,
      onClick: () => this.setVariacao(produto, variacao),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "variacao-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 33
      }
    }, variacao.nome)))));
  }

  addCart() {
    const {
      variacao,
      qtd,
      variacaoCompleta
    } = this.state;
    const {
      produto
    } = this.props;
    Object(_utils_cart__WEBPACK_IMPORTED_MODULE_5__["addCart"])({
      produto: produto._id,
      variacao,
      quantidade: qtd,
      precoUnitario: variacaoCompleta ? variacaoCompleta.promocao || variacaoCompleta.preco : produto.promocao || produto.preco
    }, true);
  }

  renderDetalhes() {
    const {
      produto
    } = this.props;
    const {
      variacaoCompleta
    } = this.state;
    if (!produto) return null;
    return __jsx("div", {
      className: "flex-2 produto-detalhes",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "titulo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }
    }, produto.titulo)), __jsx("div", {
      className: "categoria",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }
    }, "Categoria:\xA0", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: `/categoria?id=${produto.categoria._id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "categoria-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 29
      }
    }, produto.categoria.nome)))), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }), variacaoCompleta ? __jsx("div", {
      className: "precos",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 25
      }
    }, variacaoCompleta.promocao !== 0 && variacaoCompleta.promocao !== variacaoCompleta.preco ? __jsx("h2", {
      className: "preco-original preco-por",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 31
      }
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(variacaoCompleta.preco)) : __jsx("h2", {
      className: "preco-original",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 31
      }
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(variacaoCompleta.preco)), variacaoCompleta.promocao !== 0 && variacaoCompleta.promocao !== variacaoCompleta.preco && __jsx("h2", {
      className: "preco-promocao",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 33
      }
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(variacaoCompleta.promocao)), __jsx("h4", {
      className: "preco-parcelado",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 29
      }
    }, "ou em 6x de ", Object(_utils__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])((variacaoCompleta.promocao || variacaoCompleta.preco) / 6), " sem juros")) : __jsx("div", {
      className: "precos",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 25
      }
    }, produto.promocao !== 0 && produto.promocao !== produto.preco ? __jsx("h2", {
      className: "preco-original preco-por",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 32
      }
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(produto.preco)) : __jsx("h2", {
      className: "preco-original",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 32
      }
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(produto.preco)), produto.promocao !== 0 && produto.promocao !== produto.preco && __jsx("h2", {
      className: "preco-promocao",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 33
      }
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(produto.promocao)), __jsx("h4", {
      className: "preco-parcelado",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 29
      }
    }, "ou em 6x de ", Object(_utils__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])((produto.promocao || produto.preco) / 6), " sem juros")), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }
    }), this.renderVariacoes(), __jsx("div", {
      className: "opcoes",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "opcao flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 21
      }
    }, __jsx("label", {
      className: "opcao-tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 25
      }
    }, "Quantidade:"), __jsx("input", {
      className: "opcao-input",
      type: "number",
      name: "quantidade",
      value: this.state.qtd,
      onChange: e => Number(e.target.value) >= 1 && this.setState({
        qtd: e.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "comprar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 17
      }
    }, __jsx("button", {
      className: "btn btn-success btn-cta",
      onClick: () => this.addCart(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 21
      }
    }, "COMPRAR")));
  }

  render() {
    return __jsx("div", {
      className: "Produto-Hero flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 13
      }
    }, this.renderPhotos(), this.renderDetalhes());
  }

}

const mapStateToProps = state => ({
  produto: state.produto.produto,
  variacoes: state.produto.variacoes
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Hero));

/***/ }),

/***/ "./containers/Produto/ProdutosRelacionados.js":
/*!****************************************************!*\
  !*** ./containers/Produto/ProdutosRelacionados.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Listas_Produtos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Listas/Produtos */ "./components/Listas/Produtos.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Produto\\ProdutosRelacionados.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class ProdutosRelacionados extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    if (this.props.produto) {
      this.props.fetchProdutosCategoria(this.props.produto.categoria._id, 0, 4);
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.produto && this.props.produto) {
      this.props.fetchProdutosCategoria(this.props.produto.categoria._id, 0, 4);
    }
  }

  render() {
    const {
      produtosCategoria
    } = this.props;
    return __jsx("div", {
      className: "Produtos-Relacionados flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, "Produtos Relacionados"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }), __jsx(_components_Listas_Produtos__WEBPACK_IMPORTED_MODULE_1__["default"], {
      produtos: produtosCategoria ? produtosCategoria.docs : [],
      itensPorLinha: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }));
  }

}

const mapStateToProps = state => ({
  produtosCategoria: state.categoria.produtosCategoria,
  produto: state.produto.produto
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(ProdutosRelacionados));

/***/ }),

/***/ "./containers/Produto/index.js":
/*!*************************************!*\
  !*** ./containers/Produto/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProdutoContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero */ "./containers/Produto/Hero.js");
/* harmony import */ var _Descricao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Descricao */ "./containers/Produto/Descricao.js");
/* harmony import */ var _Avaliacoes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Avaliacoes */ "./containers/Produto/Avaliacoes.js");
/* harmony import */ var _ProdutosRelacionados__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProdutosRelacionados */ "./containers/Produto/ProdutosRelacionados.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Produto\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class ProdutoContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "container-big Produto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx(_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }), __jsx(_Descricao__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }), __jsx(_Avaliacoes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }), __jsx(_ProdutosRelacionados__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }));
  }

}

/***/ }),

/***/ "./containers/Rodape/index.js":
/*!************************************!*\
  !*** ./containers/Rodape/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Listas_Paginas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Listas/Paginas */ "./components/Listas/Paginas.js");
/* harmony import */ var _components_Listas_RedesSociais__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Listas/RedesSociais */ "./components/Listas/RedesSociais.js");
/* harmony import */ var _components_Item_DadosDaLoja__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Item/DadosDaLoja */ "./components/Item/DadosDaLoja.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Rodape\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Rodape extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "Rodape",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, __jsx(_components_Listas_Paginas__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }), __jsx(_components_Listas_RedesSociais__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }), __jsx(_components_Item_DadosDaLoja__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Rodape);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/produto/[produto].js":
/*!************************************!*\
  !*** ./pages/produto/[produto].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _containers_Cabecalho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/Cabecalho */ "./containers/Cabecalho/index.js");
/* harmony import */ var _containers_Produto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/Produto */ "./containers/Produto/index.js");
/* harmony import */ var _containers_Rodape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/Rodape */ "./containers/Rodape/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_initialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/initialize */ "./utils/initialize.js");
/* harmony import */ var _utils_callBaseData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/callBaseData */ "./utils/callBaseData.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\pages\\produto\\[produto].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










class ProdutoPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps(ctx) {
    Object(_utils_initialize__WEBPACK_IMPORTED_MODULE_7__["default"])(ctx);
    return Object(_utils_callBaseData__WEBPACK_IMPORTED_MODULE_8__["default"])([_redux_actions__WEBPACK_IMPORTED_MODULE_6__["default"].fetchProduto.bind(null, ctx.query.id), _redux_actions__WEBPACK_IMPORTED_MODULE_6__["default"].fetchAvaliacoes.bind(null, ctx.query.id), _redux_actions__WEBPACK_IMPORTED_MODULE_6__["default"].fetchVariacoes.bind(null, ctx.query.id)], ctx);
  }

  async componentDidMount() {
    await this.props.getUser({
      token: this.props.token
    });
  }

  render() {
    const {
      produto
    } = this.props;
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: `${produto ? produto.titulo : ""} | LOJA IT - Melhores produtos de tecnologia`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx(_containers_Cabecalho__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }), __jsx(_containers_Produto__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }), __jsx(_containers_Rodape__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }));
  }

}

const mapStateToProps = state => ({
  produto: state.produto.produto,
  token: state.auth.token
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_6__["default"])(ProdutoPage));

/***/ }),

/***/ "./redux/actions/authActions.js":
/*!**************************************!*\
  !*** ./redux/actions/authActions.js ***!
  \**************************************/
/*! exports provided: reauthenticate, getUser, autenticar, desautenticar, updateSenha, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reauthenticate", function() { return reauthenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autenticar", function() { return autenticar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desautenticar", function() { return desautenticar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSenha", function() { return updateSenha; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _clienteActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clienteActions */ "./redux/actions/clienteActions.js");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/cookie */ "./utils/cookie.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");








const reauthenticate = token => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR_TOKEN"],
  payload: token
});
const getUser = ({
  token
}) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/usuarios`, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["USER"],
    payload: response.data.usuario
  })).catch(e => console.log(e));
};
const autenticar = ({
  email,
  password
}, goTo = false, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/usuarios/login`, {
    email,
    password
  }).then(response => {
    Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_4__["setCookie"])('token', response.data.usuario.token);
    if (goTo) next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(goTo);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR"],
      payload: response.data
    });
    dispatch(Object(_clienteActions__WEBPACK_IMPORTED_MODULE_3__["fetchCliente"])(response.data.usuario._id, response.data.usuario.token));
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(e)));
};
const desautenticar = () => dispatch => {
  Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_4__["removeCookie"])('token');
  next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DESAUTENTICAR"]
  });
};
const updateSenha = (data, token, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/usuarios`, {
    password: data.novaSenha
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["USER"],
      payload: response.data.usuario
    });
    cb(null);
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(e)));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  reauthenticate,
  getUser,
  autenticar,
  desautenticar,
  updateSenha
});

/***/ }),

/***/ "./redux/actions/carrinhoActions.js":
/*!******************************************!*\
  !*** ./redux/actions/carrinhoActions.js ***!
  \******************************************/
/*! exports provided: setCarrinho, cleanCarrinho, fetchProdutoCarrinho, fetchVariacoesCarrinho, calcularFrete, removerProduto, updateQuantidade, selecionarFrete, cleanFretes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCarrinho", function() { return setCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanCarrinho", function() { return cleanCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutoCarrinho", function() { return fetchProdutoCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVariacoesCarrinho", function() { return fetchVariacoesCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcularFrete", function() { return calcularFrete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removerProduto", function() { return removerProduto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateQuantidade", function() { return updateQuantidade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selecionarFrete", function() { return selecionarFrete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanFretes", function() { return cleanFretes; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./redux/types.js");




const setCarrinho = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_3__["SET_CARRINHO"],
  carrinho: Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["getCart"])()
});
const cleanCarrinho = () => {
  //    console.log('limpar carrinho');
  Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["cleanCart"])();
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_3__["CLEAN_CARRINHO"]
  };
};
const fetchProdutoCarrinho = (id, idxCarrinho) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_1__["versao"]}/api/produtos/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_1__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUTO_CARRINHO"],
    payload: response.data,
    idxCarrinho
  })).catch(e => console.log(e));
};
const fetchVariacoesCarrinho = (id, produto, idxCarrinho) => dispatch => {
  //    console.log(id, produto, idxCarrinho, loja)
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_1__["versao"]}/api/variacoes/${id}?produto=${produto}&loja=${_config__WEBPACK_IMPORTED_MODULE_1__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["FETCH_VARIACAO_CARRINHO"],
    payload: response.data,
    idxCarrinho
  })).catch(e => console.log(e));
};
const calcularFrete = (cep, carrinho) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_1__["versao"]}/api/entregas/calcular`, {
    cep,
    carrinho
  }).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["FETCH_VALOR_ENTREGA"],
    payload: response.data,
    cep
  })).catch(e => console.log(e));
};
const removerProduto = index => {
  Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["removeCart"])(index);
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_3__["REMOVE_PROD_CART"],
    idxCarrinho: index
  };
};
const updateQuantidade = (change, index) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_QTD_CART"],
  change,
  idxCarrinho: index
});
const selecionarFrete = freteSelecionado => ({
  type: _types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_FRETE_CART"],
  freteSelecionado
});
const cleanFretes = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_3__["CLEAN_FRETES"]
});
/* harmony default export */ __webpack_exports__["default"] = ({
  setCarrinho,
  cleanCarrinho,
  fetchProdutoCarrinho,
  fetchVariacoesCarrinho,
  calcularFrete,
  updateQuantidade,
  selecionarFrete,
  removerProduto,
  cleanFretes
});

/***/ }),

/***/ "./redux/actions/categoriaActions.js":
/*!*******************************************!*\
  !*** ./redux/actions/categoriaActions.js ***!
  \*******************************************/
/*! exports provided: fetchCategorias, fetchCategoria, fetchProdutosCategoria, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategorias", function() { return fetchCategorias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategoria", function() { return fetchCategoria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutosCategoria", function() { return fetchProdutosCategoria; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");



const fetchCategorias = () => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/categorias/disponiveis?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIAS"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchCategoria = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/categorias/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIA"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchProdutosCategoria = (id, atual = 0, limit = 20) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/categorias/${id}/produtos?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&offset=${atual}&limit=${limit}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIA_PRODUTOS"],
    payload: response.data
  })).catch(e => console.log(e));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchCategorias,
  fetchCategoria,
  fetchProdutosCategoria
});

/***/ }),

/***/ "./redux/actions/checkoutActions.js":
/*!******************************************!*\
  !*** ./redux/actions/checkoutActions.js ***!
  \******************************************/
/*! exports provided: setForm, cleanForm, setTipoPagamento, getSessionPagamento, novoPedido, pagarPedido, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setForm", function() { return setForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanForm", function() { return cleanForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTipoPagamento", function() { return setTipoPagamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionPagamento", function() { return getSessionPagamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "novoPedido", function() { return novoPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagarPedido", function() { return pagarPedido; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _carrinhoActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carrinhoActions */ "./redux/actions/carrinhoActions.js");








const setForm = (payload, prefix) => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_FORM"],
    payload,
    prefix
  });
  return Promise.resolve();
};
const cleanForm = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_FORM"]
});
const setTipoPagamento = tipoPagamentoSelecionado => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_TIPO_PAGAMENTO"],
  tipoPagamentoSelecionado
});
const getSessionPagamento = () => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/pagamentos/session`).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SESSION_ID"],
      payload: response.data
    });
    PagSeguroDirectPayment.setSessionId(response.data.sessionId);
    let senderHash = PagSeguroDirectPayment.getSenderHash();
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SENDER_HASH"],
      senderHash
    });
  }).catch(e => console.log(e));
};
const novoPedido = (form, freteSelecionado, tipoPagamentoSelecionado, valorTotal, token, senderHash, carrinho = Object(_utils_cart__WEBPACK_IMPORTED_MODULE_3__["getCart"])(), cb = null) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/pedidos?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, {
    carrinho,
    entrega: {
      custo: freteSelecionado.Valor.replace(',', '.'),
      tipo: freteSelecionado.Codigo.toString(),
      prazo: freteSelecionado.PrazoEntrega,
      endereco: {
        local: form.local,
        numero: form.numero,
        complemento: form.complemento,
        bairro: form.bairro,
        cidade: form.cidade,
        estado: form.estado,
        CEP: form.CEP
      }
    },
    pagamento: {
      valor: tipoPagamentoSelecionado === "cartao" ? form.parcelasCartaoSelecionada.totalAmount : valorTotal,
      forma: tipoPagamentoSelecionado === "cartao" ? "creditCard" : "boleto",
      parcelas: tipoPagamentoSelecionado === "cartao" ? form.parcelasCartaoSelecionada.quantity : 1,
      enderecoEntregaIgualCobranca: form.dadosEntregaIgualDadosCobranca,
      endereco: {
        local: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.local : form.local,
        numero: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.numero : form.numero,
        complemento: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.complemento : form.complemento,
        bairro: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.bairro : form.bairro,
        cidade: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.cidade : form.cidade,
        estado: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.estado : form.estado,
        CEP: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.CEP : form.CEP
      },
      cartao: tipoPagamentoSelecionado === "cartao" ? {
        nomeCompleto: form.nomeCartao.trim(),
        codigoArea: form.telefone.slice(0, 2),
        telefone: form.telefone.slice(2).trim(),
        dataDeNascimento: form.dataDeNascimento,
        credit_card_token: form.credit_card_token,
        cpf: form.CPF
      } : undefined
    }
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["NOVO_PEDIDO"],
      payload: response.data
    });
    dispatch(pagarPedido(response.data.pedido.pagamento._id, token, senderHash, cb));
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_5__["default"])(e)));
};
const pagarPedido = (id, token, senderHash, cb = null) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/pagamentos/pagar/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, {
    senderHash
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["PAGAR_PEDIDO"],
      payload: response.data
    });
    cb(null);
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/sucesso');
    dispatch(Object(_carrinhoActions__WEBPACK_IMPORTED_MODULE_7__["cleanCarrinho"])());
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_5__["default"])(e)));
};
/*
export const pagarPedido= (id, token, senderHash, cb = null) => dispatch => {
    cb(null);
    Router.push('/sucesso');
    dispatch(cleanCarrinho());        
};
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  setForm,
  cleanForm,
  setTipoPagamento,
  getSessionPagamento,
  novoPedido,
  pagarPedido
});

/***/ }),

/***/ "./redux/actions/clienteActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/clienteActions.js ***!
  \*****************************************/
/*! exports provided: getRawData, fetchCliente, newCliente, updateCliente, logoutCliente, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRawData", function() { return getRawData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCliente", function() { return fetchCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCliente", function() { return newCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCliente", function() { return updateCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutCliente", function() { return logoutCliente; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cookie */ "./utils/cookie.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authActions */ "./redux/actions/authActions.js");
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");








const getRawData = data => {
  let _data = data.split('/');

  let ano = _data[2];

  let _mes = Number(_data[1]);

  let mes = _mes < 10 ? "0" + _mes : _mes;

  let _dia = Number(_data[0]);

  let dia = _dia < 10 ? "0" + _dia : _dia;
  return `${ano}-${mes}-${dia}`;
};
const fetchCliente = (id, token) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/clientes/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(resposta => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
      payload: resposta.data
    });
  }).catch(e => console.log(e));
};
const newCliente = (form, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/clientes?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, {
    nome: form.nome,
    senha: form.senha,
    cpf: form.CPF,
    email: form.email,
    telefones: [form.telefone],
    endereco: {
      local: form.local,
      numero: form.numero,
      complemento: form.complemento,
      bairro: form.bairro,
      cidade: form.cidade,
      estado: form.estado,
      CEP: form.CEP
    },
    dataDeNascimento: getRawData(form.dataDeNascimento)
  }).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
      payload: response.data
    });
    dispatch(Object(_authActions__WEBPACK_IMPORTED_MODULE_6__["autenticar"])({
      email: form.email,
      senha: form.senha
    }, null, cb));
    cb(null);
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(e)));
};
const updateCliente = (form, id, token, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/clientes/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, {
    nome: form.nome,
    cpf: form.CPF,
    telefones: [form.telefone],
    endereco: {
      local: form.local,
      numero: form.numero,
      complemento: form.complemento,
      bairro: form.bairro,
      cidade: form.cidade,
      estado: form.estado,
      CEP: form.CEP
    },
    dataDeNascimento: getRawData(form.dataDeNascimento)
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
      payload: response.data
    });
    cb(null);
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(e)));
};
const logoutCliente = () => dispatch => {
  dispatch(Object(_authActions__WEBPACK_IMPORTED_MODULE_6__["desautenticar"])());
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_CLIENTE"]
  });
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchCliente,
  newCliente,
  updateCliente,
  logoutCliente
});

/***/ }),

/***/ "./redux/actions/errorHandling.js":
/*!****************************************!*\
  !*** ./redux/actions/errorHandling.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const errorHandling = error => {
  console.log(error, error.response ? error.response.data : null);

  if (!error.response || !error.response.data) {
    return {
      status: 500,
      message: "Ocorreu um erro no servidor. Tente novamente."
    };
  }

  if (error.response.data.status === 401) {
    return {
      status: 401,
      message: "Você não tem autorização para acessar esses dados."
    };
  }

  const _errors = error.response.data.errors || error.response.data.error;

  if (_errors && typeof _errors === "string") return {
    status: 400,
    message: _errors
  };
  let msg = 'Erro: ';

  if (!Array.isArray(_errors)) {
    Object.keys(_errors).forEach((erro, index) => {
      msg += `${erro} ${_errors[erro].message || (_errors[erro].properties ? _errors[erro].properties.message : "") || _errors[erro]}\n`; //            msg += `${erro} ${_errors[erro].message || _errors[erro]}\n`;
    });
  } else {
    msg += `Preencha corretamente ${_errors.length > 1 ? "os campos " : "o campo "} de:`;

    _errors.forEach((item, index) => {
      const field = item.field[item.field.length - 1];
      msg += ` ${field}${index === _errors.length - 1 ? "." : ","}`;
    });
  }

  return {
    status: 400,
    message: msg
  };
};

/* harmony default export */ __webpack_exports__["default"] = (errorHandling);

/***/ }),

/***/ "./redux/actions/helpers.js":
/*!**********************************!*\
  !*** ./redux/actions/helpers.js ***!
  \**********************************/
/*! exports provided: getHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaders", function() { return getHeaders; });
const getHeaders = token => ({
  headers: {
    "Authorization": `Ecommerce ${token}`
  }
});

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authActions */ "./redux/actions/authActions.js");
/* harmony import */ var _categoriaActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoriaActions */ "./redux/actions/categoriaActions.js");
/* harmony import */ var _lojaActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lojaActions */ "./redux/actions/lojaActions.js");
/* harmony import */ var _produtoActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produtoActions */ "./redux/actions/produtoActions.js");
/* harmony import */ var _carrinhoActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carrinhoActions */ "./redux/actions/carrinhoActions.js");
/* harmony import */ var _clienteActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clienteActions */ "./redux/actions/clienteActions.js");
/* harmony import */ var _checkoutActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkoutActions */ "./redux/actions/checkoutActions.js");
/* harmony import */ var _pedidoActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pedidoActions */ "./redux/actions/pedidoActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _authActions__WEBPACK_IMPORTED_MODULE_0__["default"]), _categoriaActions__WEBPACK_IMPORTED_MODULE_1__["default"]), _lojaActions__WEBPACK_IMPORTED_MODULE_2__["default"]), _produtoActions__WEBPACK_IMPORTED_MODULE_3__["default"]), _carrinhoActions__WEBPACK_IMPORTED_MODULE_4__["default"]), _clienteActions__WEBPACK_IMPORTED_MODULE_5__["default"]), _checkoutActions__WEBPACK_IMPORTED_MODULE_6__["default"]), _pedidoActions__WEBPACK_IMPORTED_MODULE_7__["default"]));

/***/ }),

/***/ "./redux/actions/lojaActions.js":
/*!**************************************!*\
  !*** ./redux/actions/lojaActions.js ***!
  \**************************************/
/*! exports provided: fetchDadosLoja, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDadosLoja", function() { return fetchDadosLoja; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");



const fetchDadosLoja = () => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/lojas/${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_DADOS"],
    payload: response.data
  })).catch(e => console.log(e));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchDadosLoja
});

/***/ }),

/***/ "./redux/actions/pedidoActions.js":
/*!****************************************!*\
  !*** ./redux/actions/pedidoActions.js ***!
  \****************************************/
/*! exports provided: fetchPedidos, fetchPedido, cancelarPedido, cleanPedido, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPedidos", function() { return fetchPedidos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPedido", function() { return fetchPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelarPedido", function() { return cancelarPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanPedido", function() { return cleanPedido; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");






const fetchPedidos = ({
  offset,
  limit,
  token
}) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_3__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_3__["versao"]}/api/pedidos?loja=${_config__WEBPACK_IMPORTED_MODULE_3__["loja"]}&offset=${offset}&limit=${limit}`, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDOS"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchPedido = (id, token) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_3__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_3__["versao"]}/api/pedidos/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_3__["loja"]}`, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDO"],
    payload: response.data
  })).catch(e => console.log(e));
};
const cancelarPedido = (id, token, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`${_config__WEBPACK_IMPORTED_MODULE_3__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_3__["versao"]}/api/pedidos/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_3__["loja"]}`, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["CANCELAR_PEDIDO"],
      payload: response.data
    });
    cb(null);
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_4__["default"])(e)));
};
const cleanPedido = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_PEDIDO"]
});
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchPedidos,
  fetchPedido,
  cancelarPedido,
  cleanPedido
});

/***/ }),

/***/ "./redux/actions/produtoActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/produtoActions.js ***!
  \*****************************************/
/*! exports provided: fetchProdutosPaginaInicial, fetchTermo, fetchProdutosPesquisa, fetchProduto, fetchAvaliacoes, fetchVariacoes, novaAvaliacao, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutosPaginaInicial", function() { return fetchProdutosPaginaInicial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTermo", function() { return fetchTermo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutosPesquisa", function() { return fetchProdutosPesquisa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProduto", function() { return fetchProduto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAvaliacoes", function() { return fetchAvaliacoes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVariacoes", function() { return fetchVariacoes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "novaAvaliacao", function() { return novaAvaliacao; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");




const fetchProdutosPaginaInicial = () => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/disponiveis?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&offset=${0}&limit=${4}&sortType=${"preco-crescente"}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTOS"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchTermo = termo => ({
  type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PESQUISA"],
  termo
});
const fetchProdutosPesquisa = (termo, atual = 0, limit = 20) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/search/${termo}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&offset=${atual}&limit=${limit}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTOS_PESQUISA"],
    payload: response.data,
    termo
  })).catch(e => console.log(e));
};
const fetchProduto = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchAvaliacoes = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/${id}/avaliacoes?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&id=${id}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO_AVALIACOES"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchVariacoes = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/${id}/variacoes?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&id=${id}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO_VARIACOES"],
    payload: response.data
  })).catch(e => console.log(e));
};
const novaAvaliacao = ({
  nome,
  token,
  produto,
  texto,
  pontuacao
}, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/avaliacoes?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&produto=${produto}`, {
    nome,
    texto,
    pontuacao
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["NOVA_AVALIACAO"],
      payload: response.data
    });
    cb(null);
  }).catch(e => cb(e));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchProdutosPaginaInicial,
  fetchTermo,
  fetchProdutosPesquisa,
  fetchProduto,
  fetchAvaliacoes,
  fetchVariacoes,
  novaAvaliacao
});

/***/ }),

/***/ "./redux/types.js":
/*!************************!*\
  !*** ./redux/types.js ***!
  \************************/
/*! exports provided: REGISTER, AUTENTICAR_TOKEN, USER, AUTENTICAR, FETCH_CATEGORIAS, FETCH_DADOS, FETCH_PRODUTOS, FETCH_CATEGORIA, FETCH_CATEGORIA_PRODUTOS, FETCH_PESQUISA, FETCH_PRODUTOS_PESQUISA, FETCH_PRODUTO, FETCH_PRODUTO_AVALIACOES, FETCH_PRODUTO_VARIACOES, NOVA_AVALIACAO, SET_CARRINHO, CLEAN_CARRINHO, FETCH_PRODUTO_CARRINHO, FETCH_VARIACAO_CARRINHO, FETCH_VALOR_ENTREGA, UPDATE_QTD_CART, UPDATE_FRETE_CART, REMOVE_PROD_CART, CLEAN_FRETES, FETCH_CLIENTE, SET_FORM, CLEAN_FORM, SET_TIPO_PAGAMENTO, FETCH_SESSION_ID, FETCH_SENDER_HASH, NOVO_PEDIDO, PAGAR_PEDIDO, LOGOUT_CLIENTE, DESAUTENTICAR, FETCH_PEDIDOS, FETCH_PEDIDO, CLEAN_PEDIDO, CANCELAR_PEDIDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTENTICAR_TOKEN", function() { return AUTENTICAR_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER", function() { return USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTENTICAR", function() { return AUTENTICAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIAS", function() { return FETCH_CATEGORIAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DADOS", function() { return FETCH_DADOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS", function() { return FETCH_PRODUTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIA", function() { return FETCH_CATEGORIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIA_PRODUTOS", function() { return FETCH_CATEGORIA_PRODUTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PESQUISA", function() { return FETCH_PESQUISA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS_PESQUISA", function() { return FETCH_PRODUTOS_PESQUISA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO", function() { return FETCH_PRODUTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_AVALIACOES", function() { return FETCH_PRODUTO_AVALIACOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_VARIACOES", function() { return FETCH_PRODUTO_VARIACOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOVA_AVALIACAO", function() { return NOVA_AVALIACAO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CARRINHO", function() { return SET_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_CARRINHO", function() { return CLEAN_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_CARRINHO", function() { return FETCH_PRODUTO_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VARIACAO_CARRINHO", function() { return FETCH_VARIACAO_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VALOR_ENTREGA", function() { return FETCH_VALOR_ENTREGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_QTD_CART", function() { return UPDATE_QTD_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FRETE_CART", function() { return UPDATE_FRETE_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PROD_CART", function() { return REMOVE_PROD_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_FRETES", function() { return CLEAN_FRETES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLIENTE", function() { return FETCH_CLIENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FORM", function() { return SET_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_FORM", function() { return CLEAN_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TIPO_PAGAMENTO", function() { return SET_TIPO_PAGAMENTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SESSION_ID", function() { return FETCH_SESSION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SENDER_HASH", function() { return FETCH_SENDER_HASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOVO_PEDIDO", function() { return NOVO_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGAR_PEDIDO", function() { return PAGAR_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_CLIENTE", function() { return LOGOUT_CLIENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESAUTENTICAR", function() { return DESAUTENTICAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PEDIDOS", function() { return FETCH_PEDIDOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PEDIDO", function() { return FETCH_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_PEDIDO", function() { return CLEAN_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCELAR_PEDIDO", function() { return CANCELAR_PEDIDO; });
const REGISTER = "register",
      AUTENTICAR_TOKEN = "AUTENTICAR_TOKEN",
      USER = "user",
      AUTENTICAR = 'AUTENTICAR',
      FETCH_CATEGORIAS = "fetch_categorias",
      FETCH_DADOS = 'fetch_dados',
      FETCH_PRODUTOS = "FETCH_PRODUTOS",
      FETCH_CATEGORIA = 'FETCH_CATEGORIA',
      FETCH_CATEGORIA_PRODUTOS = 'FETCH_CATEGORIA_PRODUTOS',
      FETCH_PESQUISA = 'FETCH_PESQUISA',
      FETCH_PRODUTOS_PESQUISA = 'FETCH_PRODUTOS_PESQUISA',
      FETCH_PRODUTO = 'FETCH_PRODUTO',
      FETCH_PRODUTO_AVALIACOES = 'FETCH_PRODUTO_AVALIACOES',
      FETCH_PRODUTO_VARIACOES = 'FETCH_PRODUTO_VARIACOES',
      NOVA_AVALIACAO = 'NOVA_AVALIACAO',
      SET_CARRINHO = 'SET_CARRINHO',
      CLEAN_CARRINHO = 'CLEAN_CARRINHO',
      FETCH_PRODUTO_CARRINHO = 'FETCH_PRODUTO_CARRINHO',
      FETCH_VARIACAO_CARRINHO = 'FETCH_VARIACAO_CARRINHO',
      FETCH_VALOR_ENTREGA = 'FETCH_VALOR_ENTREGA',
      UPDATE_QTD_CART = 'UPDATE_QTD_CART',
      UPDATE_FRETE_CART = 'UPDATE_FRETE_CART',
      REMOVE_PROD_CART = 'REMOVE_PROD_CART',
      CLEAN_FRETES = 'CLEAN_FRETES',
      FETCH_CLIENTE = 'FETCH_CLIENTE',
      SET_FORM = 'SET_FORM',
      CLEAN_FORM = 'CLEAN_FORM',
      SET_TIPO_PAGAMENTO = 'SET_TIPO_PAGAMENTO',
      FETCH_SESSION_ID = 'FETCH_SESSION_ID',
      FETCH_SENDER_HASH = 'FETCH_SENDER_HASH',
      NOVO_PEDIDO = 'NOVO_PEDIDO',
      PAGAR_PEDIDO = 'PAGAR_PEDIDO',
      LOGOUT_CLIENTE = 'LOGOUT_CLIENTE',
      DESAUTENTICAR = 'DESAUTENTICAR',
      FETCH_PEDIDOS = 'FETCH_PEDIDOS',
      FETCH_PEDIDO = 'FETCH_PEDIDO',
      CLEAN_PEDIDO = 'CLEAN_PEDIDO',
      CANCELAR_PEDIDO = 'CANCELAR_PEDIDO';

/***/ }),

/***/ "./utils/callBaseData.js":
/*!*******************************!*\
  !*** ./utils/callBaseData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "./utils/fetch.js");


/* harmony default export */ __webpack_exports__["default"] = (function (calls = [], ctx) {
  return Promise.all([Object(_fetch__WEBPACK_IMPORTED_MODULE_1__["fetchData"])(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["default"].fetchCategorias, ctx), Object(_fetch__WEBPACK_IMPORTED_MODULE_1__["fetchData"])(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["default"].fetchDadosLoja, ctx), ...calls.map(action => Object(_fetch__WEBPACK_IMPORTED_MODULE_1__["fetchData"])(action, ctx))]);
});

/***/ }),

/***/ "./utils/cart.js":
/*!***********************!*\
  !*** ./utils/cart.js ***!
  \***********************/
/*! exports provided: getCart, cleanCart, addCart, getCountItemsCart, removeCart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCart", function() { return getCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanCart", function() { return cleanCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCart", function() { return addCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountItemsCart", function() { return getCountItemsCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCart", function() { return removeCart; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const _saveCart = item => {
  let cart = getCart();
  let found;
  cart = cart.map(_item => {
    if (_item.produto === item.produto && _item.variacao === item.variacao) {
      found = true;
      return _objectSpread(_objectSpread({}, _item), {}, {
        quantidade: Number(_item.quantidade) + Number(item.quantidade)
      });
    } else return _item;
  });
  if (!found) cart.push(item);
  localStorage.setItem("@cart", JSON.stringify(cart));
};

const getCart = () => JSON.parse(localStorage.getItem("@cart") || "[]");
const cleanCart = () => localStorage.removeItem("@cart");
const addCart = (item, goToCart = true) => {
  _saveCart(item);

  if (goToCart) next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push("/carrinho");
};
const getCountItemsCart = () => getCart().reduce((c, {
  quantidade
}) => c + (Number(quantidade) || 1), 0);
const removeCart = index => {
  let cart = getCart();
  cart = cart.reduce((all, item, _index) => index !== _index ? all.concat([item]) : all, []);
  localStorage.setItem("@cart", JSON.stringify(cart));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  getCart,
  addCart,
  cleanCart,
  getCountItemsCart,
  removeCart
});

/***/ }),

/***/ "./utils/cookie.js":
/*!*************************!*\
  !*** ./utils/cookie.js ***!
  \*************************/
/*! exports provided: setCookie, removeCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

const setCookie = (key, value) => {
  if (false) {}
};
const removeCookie = key => {
  if (false) {}
};
const getCookie = (key, req) => {
  return false ? undefined : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) return undefined;

  const _cookie = req.headers.cookie.split(";").find(c => c.trim().startsWith(`${key}=`));

  return _cookie ? _cookie.split("=")[1] : undefined;
};

/***/ }),

/***/ "./utils/fetch.js":
/*!************************!*\
  !*** ./utils/fetch.js ***!
  \************************/
/*! exports provided: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
const fetchData = (action, ctx) => new Promise(action()).then(response => ctx.store.dispatch(response)).catch(e => console.log(e));

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: formatMoney, codigosCorreios, ESTADOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codigosCorreios", function() { return codigosCorreios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESTADOS", function() { return ESTADOS; });
const formatMoney = value => "R$ " + Number(value || 0).toFixed(2).replace(".", ",");
const codigosCorreios = {
  "40010": "Sedex",
  "41106": "PAC"
};
const ESTADOS = {
  "AC": "Acre",
  "AL": "Alagoas",
  "AP": "Amapá",
  "AM": "Amazonas",
  "BA": "Bahia",
  "CE": "Ceará",
  "DF": "Distrito Federal",
  "ES": "Espírito Santo",
  "GO": "Goiás",
  "MA": "Maranhão",
  "MT": "Mato Grosso",
  "MS": "Mato Grosso do Sul",
  "MG": "Minas Gerais",
  "PA": "Pará",
  "PB": "Paraíba",
  "PR": "Paraná",
  "PE": "Pernambuco",
  "PI": "Piauí",
  "RJ": "Rio de Janeiro",
  "RN": "Rio Grande do Norte",
  "RS": "Rio Grande do Sul",
  "RO": "Rondônia",
  "RR": "Roraima",
  "SC": "Santa Catarina",
  "SP": "São Paulo",
  "SE": "Sergipe",
  "TO": "Tocantins"
};

/***/ }),

/***/ "./utils/initialize.js":
/*!*****************************!*\
  !*** ./utils/initialize.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookie */ "./utils/cookie.js");



/* harmony default export */ __webpack_exports__["default"] = (function (ctx) {
  if (ctx.isServer) {
    ctx.store.dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_1__["default"].reauthenticate(Object(_cookie__WEBPACK_IMPORTED_MODULE_2__["getCookie"])("token", ctx.req)));
  } else if (ctx.store) {
    const token = ctx.store.getState().auth.token;
    if (!token && (ctx.pathname.includes("/area-cliente/pedido") || ctx.pathname.includes("/area-cliente/dados") || ctx.pathname.includes("/area-cliente/alterar-senha"))) next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push("/area-cliente");
  }
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FtcG9zL1Blc3F1aXNhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZHMvQ2FycmluaG8uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSXRlbS9EYWRvc0RhTG9qYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW0vUHJvZHV0by5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3Rhcy9DYXRlZ29yaWFzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGlzdGFzL1BhZ2luYXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaXN0YXMvUHJvZHV0b3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaXN0YXMvUmVkZXNTb2NpYWlzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9nby9DYWJlY2FsaG8uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DYWJlY2FsaG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9Qcm9kdXRvL0F2YWxpYWNvZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9Qcm9kdXRvL0Rlc2NyaWNhby5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1Byb2R1dG8vSGVyby5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1Byb2R1dG8vUHJvZHV0b3NSZWxhY2lvbmFkb3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9Qcm9kdXRvL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvUm9kYXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2R1dG8vW3Byb2R1dG9dLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jYXJyaW5ob0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jYXRlZ29yaWFBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2hlY2tvdXRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2xpZW50ZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9lcnJvckhhbmRsaW5nLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvbG9qYUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9wZWRpZG9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvcHJvZHV0b0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY2FsbEJhc2VEYXRhLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29va2llLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiUGVzcXVpc2EiLCJDb21wb25lbnQiLCJ0ZXJtbyIsInN1Ym1pdFBlc3F1aXNhIiwic3RhdGUiLCJwcm9wcyIsImZldGNoVGVybW8iLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInJlbmRlciIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY29ubmVjdCIsImFjdGlvbnMiLCJDYXJkQ2FycmluaG8iLCJjYXJ0UXRkIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZXRDb3VudEl0ZW1zQ2FydCIsImRlZmF1bHREZXNjcmljYW8iLCJkZWZhdWx0T0dVUkwiLCJkZWZhdWx0T0dJbWFnZSIsIkhlYWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXJsIiwib2dJbWFnZSIsInBhZ1NlZ3VybyIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiRGFkb3NEYUxvamEiLCJSZWFjdCIsImxvamEiLCJub21lIiwiY25waiIsImVtYWlsIiwiZW5kZXJlY28iLCJ0ZWxlZm9uZXMiLCJtYXAiLCJpbmRleCIsImxvY2FsIiwibnVtZXJvIiwiYmFpcnJvIiwiY2lkYWRlIiwiZXN0YWRvIiwiQ0VQIiwibWFwU3RhdGVUb1Byb3BzIiwiUHJvZHV0byIsIml0ZW0iLCJwb3JMaW5oYSIsIl9pZCIsInRpdHVsbyIsInByZWNvIiwicHJvbW9jYW8iLCJmb3RvcyIsInRlbVByb21vIiwiYmFzZUltZyIsIm1heFdpZHRoIiwiZm9ybWF0TW9uZXkiLCJMYXlvdXQiLCJpbWFnZSIsIkNhdGVnb3JpYXMiLCJjYXRlZ29yaWFzIiwiY2F0ZWdvcmlhIiwiUGFnaW5hcyIsIlByb2R1dG9zIiwiaGlnaGVzdCIsInByb2R1dG9zTGlzdGFkb3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJwcm9kdXRvcyIsIml0ZW5zUG9yTGluaGEiLCJSRURFU19TT0NJQUlTIiwiUmVkZXNTb2NpYWlzIiwiaWR4IiwiTG9nb0NhYmVjYWxobyIsIkFQSSIsInZlcnNhbyIsIkNhYmVjYWxobyIsInJlbmRlckNhYmVjYWxob05vcm1hbCIsInJlbmRlckNhYmVjYWxob1NpbXBsZXMiLCJzaW1wbGVzIiwiQXZhbGlhY29lcyIsInRleHRvIiwicG9udHVhY2FvIiwicmVuZGVyQXZhbGlhY29lcyIsImF2YWxpYWNvZXMiLCJhdmFsaWFjYW8iLCJBcnJheSIsImtleXMiLCJpIiwic3VibWl0QXZhbGlhY2FvIiwicHJvZHV0byIsInRva2VuIiwidXN1YXJpbyIsImFsZXJ0Iiwibm92YUF2YWxpYWNhbyIsImVyciIsInJlbmRlckZvcm11bGFyaW9EZUF2YWxpYWNvZXMiLCJyZXNpemUiLCJ3aWR0aCIsInJlbmRlckF2aXNvTG9naW4iLCJhdXRoIiwiRGVzY3JpY2FvIiwiZGVzY3JpY2FvIiwic3BsaXQiLCJIZXJvIiwiY29uc3RydWN0b3IiLCJ2YXJpYWNhbyIsInZhcmlhY2FvQ29tcGxldGEiLCJsZW5ndGgiLCJmb3RvIiwidmFyaWFjb2VzIiwicXRkIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicmVuZGVyUGhvdG9zIiwicmVuZGVyVmFyaWFjb2VzIiwic2V0VmFyaWFjYW8iLCJhZGRDYXJ0IiwicXVhbnRpZGFkZSIsInByZWNvVW5pdGFyaW8iLCJyZW5kZXJEZXRhbGhlcyIsIk51bWJlciIsIlByb2R1dG9zUmVsYWNpb25hZG9zIiwiZmV0Y2hQcm9kdXRvc0NhdGVnb3JpYSIsInByb2R1dG9zQ2F0ZWdvcmlhIiwiZG9jcyIsIlByb2R1dG9Db250YWluZXIiLCJSb2RhcGUiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiaHJlZiIsImV2ZW50Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJwIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGUiLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJjaGFuZ2UiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJQcm9kdXRvUGFnZSIsImluaXRpYWxpemUiLCJjYWxsQmFzZURhdGEiLCJmZXRjaFByb2R1dG8iLCJiaW5kIiwiaWQiLCJmZXRjaEF2YWxpYWNvZXMiLCJmZXRjaFZhcmlhY29lcyIsImdldFVzZXIiLCJyZWF1dGhlbnRpY2F0ZSIsInR5cGUiLCJBVVRFTlRJQ0FSX1RPS0VOIiwicGF5bG9hZCIsImRpc3BhdGNoIiwiYXhpb3MiLCJnZXRIZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwiVVNFUiIsImNhdGNoIiwibG9nIiwiYXV0ZW50aWNhciIsInBhc3N3b3JkIiwiZ29UbyIsInBvc3QiLCJzZXRDb29raWUiLCJBVVRFTlRJQ0FSIiwiZmV0Y2hDbGllbnRlIiwiZXJyb3JIYW5kbGluZyIsImRlc2F1dGVudGljYXIiLCJyZW1vdmVDb29raWUiLCJERVNBVVRFTlRJQ0FSIiwidXBkYXRlU2VuaGEiLCJwdXQiLCJub3ZhU2VuaGEiLCJzZXRDYXJyaW5obyIsIlNFVF9DQVJSSU5ITyIsImNhcnJpbmhvIiwiZ2V0Q2FydCIsImNsZWFuQ2FycmluaG8iLCJjbGVhbkNhcnQiLCJDTEVBTl9DQVJSSU5ITyIsImZldGNoUHJvZHV0b0NhcnJpbmhvIiwiaWR4Q2FycmluaG8iLCJGRVRDSF9QUk9EVVRPX0NBUlJJTkhPIiwiZmV0Y2hWYXJpYWNvZXNDYXJyaW5obyIsIkZFVENIX1ZBUklBQ0FPX0NBUlJJTkhPIiwiY2FsY3VsYXJGcmV0ZSIsImNlcCIsIkZFVENIX1ZBTE9SX0VOVFJFR0EiLCJyZW1vdmVyUHJvZHV0byIsInJlbW92ZUNhcnQiLCJSRU1PVkVfUFJPRF9DQVJUIiwidXBkYXRlUXVhbnRpZGFkZSIsIlVQREFURV9RVERfQ0FSVCIsInNlbGVjaW9uYXJGcmV0ZSIsImZyZXRlU2VsZWNpb25hZG8iLCJVUERBVEVfRlJFVEVfQ0FSVCIsImNsZWFuRnJldGVzIiwiQ0xFQU5fRlJFVEVTIiwiZmV0Y2hDYXRlZ29yaWFzIiwiRkVUQ0hfQ0FURUdPUklBUyIsImZldGNoQ2F0ZWdvcmlhIiwiRkVUQ0hfQ0FURUdPUklBIiwiYXR1YWwiLCJsaW1pdCIsIkZFVENIX0NBVEVHT1JJQV9QUk9EVVRPUyIsInNldEZvcm0iLCJTRVRfRk9STSIsInJlc29sdmUiLCJjbGVhbkZvcm0iLCJDTEVBTl9GT1JNIiwic2V0VGlwb1BhZ2FtZW50byIsInRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyIsIlNFVF9USVBPX1BBR0FNRU5UTyIsImdldFNlc3Npb25QYWdhbWVudG8iLCJGRVRDSF9TRVNTSU9OX0lEIiwiUGFnU2VndXJvRGlyZWN0UGF5bWVudCIsInNldFNlc3Npb25JZCIsInNlc3Npb25JZCIsInNlbmRlckhhc2giLCJnZXRTZW5kZXJIYXNoIiwiRkVUQ0hfU0VOREVSX0hBU0giLCJub3ZvUGVkaWRvIiwiZm9ybSIsInZhbG9yVG90YWwiLCJlbnRyZWdhIiwiY3VzdG8iLCJWYWxvciIsInRpcG8iLCJDb2RpZ28iLCJ0b1N0cmluZyIsInByYXpvIiwiUHJhem9FbnRyZWdhIiwiY29tcGxlbWVudG8iLCJwYWdhbWVudG8iLCJ2YWxvciIsInBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEiLCJ0b3RhbEFtb3VudCIsImZvcm1hIiwicGFyY2VsYXMiLCJxdWFudGl0eSIsImVuZGVyZWNvRW50cmVnYUlndWFsQ29icmFuY2EiLCJkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EiLCJkYWRvc0NvYnJhbmNhIiwiY2FydGFvIiwibm9tZUNvbXBsZXRvIiwibm9tZUNhcnRhbyIsInRyaW0iLCJjb2RpZ29BcmVhIiwidGVsZWZvbmUiLCJzbGljZSIsImRhdGFEZU5hc2NpbWVudG8iLCJjcmVkaXRfY2FyZF90b2tlbiIsImNwZiIsIkNQRiIsInVuZGVmaW5lZCIsIk5PVk9fUEVESURPIiwicGFnYXJQZWRpZG8iLCJwZWRpZG8iLCJQQUdBUl9QRURJRE8iLCJnZXRSYXdEYXRhIiwiX2RhdGEiLCJhbm8iLCJfbWVzIiwibWVzIiwiX2RpYSIsImRpYSIsInJlc3Bvc3RhIiwiRkVUQ0hfQ0xJRU5URSIsIm5ld0NsaWVudGUiLCJzZW5oYSIsInVwZGF0ZUNsaWVudGUiLCJsb2dvdXRDbGllbnRlIiwiTE9HT1VUX0NMSUVOVEUiLCJzdGF0dXMiLCJfZXJyb3JzIiwiZXJyb3JzIiwibXNnIiwiaXNBcnJheSIsImVycm8iLCJwcm9wZXJ0aWVzIiwiaGVhZGVycyIsImF1dGhBY3Rpb25zIiwiY2F0ZWdvcmlhQWN0aW9ucyIsImxvamFBY3Rpb25zIiwicHJvZHV0b0FjdGlvbnMiLCJjYXJyaW5ob0FjdGlvbnMiLCJjbGllbnRlQWN0aW9ucyIsImNoZWNrb3V0QWN0aW9ucyIsInBlZGlkb0FjdGlvbnMiLCJmZXRjaERhZG9zTG9qYSIsIkZFVENIX0RBRE9TIiwiZmV0Y2hQZWRpZG9zIiwib2Zmc2V0IiwiRkVUQ0hfUEVESURPUyIsImZldGNoUGVkaWRvIiwiRkVUQ0hfUEVESURPIiwiY2FuY2VsYXJQZWRpZG8iLCJkZWxldGUiLCJDQU5DRUxBUl9QRURJRE8iLCJjbGVhblBlZGlkbyIsIkNMRUFOX1BFRElETyIsImZldGNoUHJvZHV0b3NQYWdpbmFJbmljaWFsIiwiRkVUQ0hfUFJPRFVUT1MiLCJGRVRDSF9QRVNRVUlTQSIsImZldGNoUHJvZHV0b3NQZXNxdWlzYSIsIkZFVENIX1BST0RVVE9TX1BFU1FVSVNBIiwiRkVUQ0hfUFJPRFVUTyIsIkZFVENIX1BST0RVVE9fQVZBTElBQ09FUyIsIkZFVENIX1BST0RVVE9fVkFSSUFDT0VTIiwiTk9WQV9BVkFMSUFDQU8iLCJSRUdJU1RFUiIsImNhbGxzIiwiZmV0Y2hEYXRhIiwiYWN0aW9uIiwiX3NhdmVDYXJ0IiwiY2FydCIsImZvdW5kIiwiX2l0ZW0iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnb1RvQ2FydCIsInJlZHVjZSIsImMiLCJfaW5kZXgiLCJjb25jYXQiLCJjb29raWUiLCJnZXRDb29raWUiLCJyZXEiLCJnZXRDb29raWVGcm9tQnJvd3NlciIsImdldENvb2tpZUZyb21TZXJ2ZXIiLCJfY29va2llIiwiZmluZCIsInN0YXJ0c1dpdGgiLCJzdG9yZSIsInRvRml4ZWQiLCJjb2RpZ29zQ29ycmVpb3MiLCJFU1RBRE9TIiwiaXNTZXJ2ZXIiLCJnZXRTdGF0ZSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFDekIsTUFBSUEsR0FBRyxDQUFDOFIsUUFBUixFQUFrQjtBQUNkOVIsT0FBRyxDQUFDMFIsS0FBSixDQUFVM0wsUUFBVixDQUFtQm5hLHNEQUFPLENBQUMrWixjQUFSLENBQXVCd0wseURBQVMsQ0FBQyxPQUFELEVBQVVuUixHQUFHLENBQUNvUixHQUFkLENBQWhDLENBQW5CO0FBQ0gsR0FGRCxNQUVPLElBQUlwUixHQUFHLENBQUMwUixLQUFSLEVBQWU7QUFDbEIsVUFBTTFnQixLQUFLLEdBQUdnUCxHQUFHLENBQUMwUixLQUFKLENBQVVLLFFBQVYsR0FBcUJ0Z0IsSUFBckIsQ0FBMEJULEtBQXhDO0FBQ0EsUUFBSSxDQUFDQSxLQUFELEtBQ0FnUCxHQUFHLENBQUM1VSxRQUFKLENBQWE0bUIsUUFBYixDQUFzQixzQkFBdEIsS0FDQWhTLEdBQUcsQ0FBQzVVLFFBQUosQ0FBYTRtQixRQUFiLENBQXNCLHFCQUF0QixDQURBLElBRUFoUyxHQUFHLENBQUM1VSxRQUFKLENBQWE0bUIsUUFBYixDQUFzQiw2QkFBdEIsQ0FIQSxDQUFKLEVBSUc5bUIsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLGVBQVo7QUFDTjtBQUNKLEM7Ozs7Ozs7Ozs7O0FDZkQsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvcHJvZHV0by9bcHJvZHV0b10uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Byb2R1dG8vW3Byb2R1dG9dLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuXHJcbmNsYXNzIFBlc3F1aXNhIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge3Rlcm1vOiBcIlwifVxyXG5cclxuICAgIHN1Ym1pdFBlc3F1aXNhKCkge1xyXG4gICAgICAgIGNvbnN0IHt0ZXJtb30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hUZXJtbyh0ZXJtbyk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goe3BhdGhuYW1lOlwiL3Blc3F1aXNhXCIsIHF1ZXJ5OiB7dGVybW99fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMyBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVzcXVpc2FcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRlcm1vfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoe3Rlcm1vOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIGFxdWkgYSBzdWEgcGVzcXVpc2EgLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1wZXNxdWlzYVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXRQZXNxdWlzYSgpfSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tcGVzcXVpc2FcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIj4gPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBhY3Rpb25zKSAoUGVzcXVpc2EpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGdldENvdW50SXRlbXNDYXJ0IH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FydCc7XHJcblxyXG5jbGFzcyBDYXJkQ2FycmluaG8gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7IGNhcnRRdGQ6IDAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnRRdGQ6IGdldENvdW50SXRlbXNDYXJ0KCkgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW5zLWNhYmVjYWxobyBmbGV4LTIgZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hcmVhLWNsaWVudGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tY2FiZWNhbGhvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk1pbmhhIENvbnRhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJyaW5ob1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1jYWJlY2FsaG8gY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaG9wcGluZy1iYWdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnsgdGhpcy5zdGF0ZS5jYXJ0UXRkIHx8IDAgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkQ2FycmluaG87IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5leHRIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7c3RyaW5nfSBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IGRlZmF1bHREZXNjcmljYW8gPSAnJztcclxuY29uc3QgZGVmYXVsdE9HVVJMID0gJyc7XHJcbmNvbnN0IGRlZmF1bHRPR0ltYWdlID0gXCIvc3RhdGljL2xvZ28ucG5nXCI7XHJcblxyXG5jb25zdCBIZWFkID0gcHJvcHMgPT4gKFxyXG4gICAgPE5leHRIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPiB7cHJvcHMudGl0bGUgfHwgXCJcIn0gPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb24gfHwgZGVmYXVsdERlc2NyaWNhb30gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPSBcIi9zdGF0aWMvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17cHJvcHMudXJsIHx8IGRlZmF1bHRPR1VSTH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cHJvcHMudGl0bGUgfHwgXCJcIn0gLz5cclxuICAgICAgICA8bWV0YSBcclxuICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmnDp8Ojb1wiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9uIHx8IGRlZmF1bHREZXNjcmljYW99IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PXtwcm9wcy51cmwgfHwgZGVmYXVsdE9HVVJMfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e3Byb3BzLm9nSW1hZ2UgfHwgZGVmYXVsdE9HSW1hZ2V9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3Byb3BzLm9nSW1hZ2UgfHwgZGVmYXVsdE9HSW1hZ2V9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCI2MDBcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjYwMFwiIC8+XHJcbiAgICAgICAgPGxpbmsgXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIiBcclxuLy8gICAgICAgICAgICBocmVmPVwiL3N0YXRpYy9mb250LWF3ZXNvbWUubWluLmNzc1wiIFxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgXHJcbiAgICAgICAgICAgIGludGVncnl0ZT1cInNoYTM4NC13dmZYcHFwWlpWUUdLNlRBaDVQVmxHT2ZRTkhTb0QyeGJFK1FrUHhDQUZsTkVldm9FSDNTbDBzaWJWY09RVm5OXCIgXHJcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvc3R5bGUuY3NzXCIgLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3BzLnBhZ1NlZ3VybyA/IChcclxuICAgICAgICAgICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3N0Yy5zYW5kYm94LnBhZ3NlZ3Vyby51b2wuY29tLmJyL3BhZ3NlZ3Vyby9hcGkvdjIvY2hlY2tvdXQvcGFnc2VndXJvLmRpcmVjdHBheW1lbnQuanNcIj5cclxuICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxyXG4gICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L05leHRIZWFkPlxyXG4pO1xyXG5cclxuSGVhZC5wcm9wVHlwZXM9e1xyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIG9nSW1hZ2U6IHN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNsYXNzIERhZG9zRGFMb2phIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmxvamEpIHJldHVybiAoPGRpdj4gPC9kaXY+KTtcclxuICAgICAgICBjb25zdCB7bm9tZSwgY25waiwgZW1haWwsIGVuZGVyZWNvLCB0ZWxlZm9uZXN9ID0gdGhpcy5wcm9wcy5sb2phO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTEgZGFkb3MtZGEtbG9qYVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+IEVudHJlIGVtIENvbnRhdG8gPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJsb2phLW5vbWVcIj4gTm9tZToge25vbWV9IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IFwibG9qYS1jbnBqXCI+IENOUEo6IHtjbnBqfSA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWUgPSBcImxvamEtZW1haWxcIj4gRS1tYWlsOiA8YSBocmVmPXtgbWFpbHRvOiR7ZW1haWx9YH0+IHtlbWFpbH0gPC9hPiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWUgPSBcImxvamEtdGVsZWZvbmVzXCI+IFRlbGVmb25lczogPC9wPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbGVmb25lcy5tYXAoKGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IFwibG9qYS10ZWxlZm9uZVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YHBob25lOiR7dGVsZWZvbmVzfWB9PiB7dGVsZWZvbmVzfSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IFwibG9qYS1lbmRlcmVjb1wiPiB7ZW5kZXJlY28ubG9jYWx9LCB7ZW5kZXJlY28ubnVtZXJvfSAtIHtlbmRlcmVjby5iYWlycm99IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IFwibG9qYS1jaWRhZGVcIj4ge2VuZGVyZWNvLmNpZGFkZX0gLyB7ZW5kZXJlY28uZXN0YWRvfSAtIHtlbmRlcmVjby5DRVB9IDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGxvamE6IHN0YXRlLmxvamEubG9qYVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpIChEYWRvc0RhTG9qYSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQge2Zvcm1hdE1vbmV5fSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7YmFzZUltZ30gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuXHJcbmNsYXNzIFByb2R1dG8gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCB7aXRlbSwgcG9yTGluaGF9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7X2lkLCB0aXR1bG8sIHByZWNvLCBwcm9tb2NhbywgZm90b3N9ID0gaXRlbTtcclxuLy8gICAgICAgIGNvbnN0IHRlbVByb21vID0gcHJvbW9jYW8gJiYgcHJlY28gIT09IHByb21vY2FvO1xyXG4gICAgICAgIGNvbnN0IHRlbVByb21vID0gKHByZWNvICE9PSBwcm9tb2NhbykgJiYgKHByb21vY2FvICE9PSAwKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgIDxMaW5rIGhyZWYgPSB7YC9wcm9kdXRvLyR7dGl0dWxvfT9wcm9kdXRvPSR7X2lkfWB9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmID0ge2AvcHJvZHV0by8ke3RpdHVsb30/aWQ9JHtfaWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtgcHJvZHV0byBmbGV4LTEgZmxleCB2ZXJ0aWNhbCB3cmFwLSR7cG9yTGluaGF9IHdyYXAtMi1tYmB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJwcm9kdXRvLWltYWdlIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2Jhc2VJbWd9JHtmb3Rvc1swXX1gfSBhbHQ9e3RpdHVsb30gc3R5bGU9e3ttYXhXaWR0aDogXCI5NSVcIn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInByb2R1dG8tdGl0bGUgZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+IHt0aXR1bG99IDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge2Bwcm9kdXRvLXByZWNvICR7dGVtUHJvbW8gPyBcInByb2R1dG8tcG9yXCIgOiBcIlwifSBmbGV4IGZsZXgtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4ge2Zvcm1hdE1vbmV5KHByZWNvKX0gPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGVtUHJvbW8gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtgcHJvZHV0by1wcmVjby1wcm9tb2NhbyBmbGV4IGZsZXgtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+IHtmb3JtYXRNb25leShwcm9tb2Nhbyl9IDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7YHByb2R1dG8tcHJlY28tcGFyY2VsYWRvIGZsZXggZmxleC1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiBvdSA2eCBkZSB7Zm9ybWF0TW9uZXkoKHRlbVByb21vID8gcHJvbW9jYW8gOiBwcmVjbykgLyA2KX0gc2VtIGp1cm9zIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHV0bzsiLCJpbXBvcnQgSGVhZCBmcm9tICcuL0hlYWQnO1xyXG5cclxuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBkZXNjcmlwdGlvbiwgdXJsLCBpbWFnZSwgcGFnU2VndXJvIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWRcclxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIHVybD17dXJsfVxyXG4gICAgICAgICAgICBvZ0ltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgcGFnU2VndXJvPXtwYWdTZWd1cm99PjwvSGVhZD5cclxuICAgICAgICA8U3R5bGUgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgJmNvcHk7IExvamEgSVQgLSBDdXJzbyBDcmlhbmRvIHVtIEVjb21tZXJjZSBkbyBaZXJvXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jbGFzcyBDYXRlZ29yaWFzIGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgY2F0ZWdvcmlhcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmlhcyBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWFzLm1hcChjYXRlZ29yaWEgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3JpYS8ke2NhdGVnb3JpYS5ub21lfT9pZD0ke2NhdGVnb3JpYS5faWR9YH0ga2V5PXtjYXRlZ29yaWEuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmlhLWl0ZW0gZmxleC0xIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntjYXRlZ29yaWEubm9tZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGNhdGVnb3JpYXM6IHN0YXRlLmNhdGVnb3JpYS5jYXRlZ29yaWFzXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2F0ZWdvcmlhcyk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFBhZ2luYXMgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IHZlcnRpY2FsIGluc3RpdHVjaW9uYWxcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+UMOhZ2luYXM8L2gyPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5Qw6FnaW5hIEluaWNpYWw8L3NwYW4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY2FycmluaG9cIj5cclxuICAgICAgICAgICAgPHNwYW4+VmVyIFNhY29sYTwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9hcmVhLWNsaWVudGUvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPk1pbmhhIENvbnRhPC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3NvYnJlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlNvYnJlIGEgTG9qYTwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hczsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFByb2R1dG8gZnJvbSAnLi4vSXRlbS9Qcm9kdXRvJztcclxuXHJcbmNsYXNzIFByb2R1dG9zIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdmFyIGhpZ2hlc3QgPSAwO1xyXG4gICAgICAgIGNvbnN0IHByb2R1dG9zTGlzdGFkb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2R1dG8tdGl0bGVcIik7XHJcbiAgICAgICAgcHJvZHV0b3NMaXN0YWRvcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICBpZihoaWdoZXN0IDwgaXRlbS5jbGllbnRIZWlnaHQpIGhpZ2hlc3QgPSBpdGVtLmNsaWVudEhlaWdodDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwcm9kdXRvc0xpc3RhZG9zLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuaGVpZ2h0ID0gaGlnaGVzdCArIDEwICsgXCJweFwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgcHJvZHV0b3MsIGl0ZW5zUG9yTGluaGEgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9kdXRvcyBmbGV4IHdyYXBcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdXRvcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdXRvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uX2lkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvckxpbmhhPXtpdGVuc1BvckxpbmhhfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHV0b3M7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFJFREVTX1NPQ0lBSVMgPSBbXHJcbiAgICB7IG5vbWU6IFwiZmFjZWJvb2tcIiwgdXJsOiBcIiNcIiB9LFxyXG4gICAgeyBub21lOiBcImluc3RhZ3JhbVwiLCB1cmw6IFwiI1wiIH0sXHJcbiAgICB7IG5vbWU6IFwidHdpdHRlclwiLCB1cmw6IFwiI1wiIH0sXHJcbiAgICB7IG5vbWU6IFwid2hhdHNhcHBcIiwgdXJsOiBcIiNcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgUmVkZXNTb2NpYWlzID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5SZWRlcyBTb2NpYWlzPC9oMj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCByZWRlcy1zb2NpYWlzIHdyYXBcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUkVERVNfU09DSUFJUy5tYXAoKGl0ZW0sIGlkeCk9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleFwiIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmEgZmEtJHtpdGVtLm5vbWV9IGZhLWxnYH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVkZXNTb2NpYWlzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBMb2dvQ2FiZWNhbGhvID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTIgZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImxvZ29cIiB3aWR0aD1cIjkwJVwiIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ29DYWJlY2FsaG87IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPiB7YFxyXG4gICAgXHJcbiAgICBib2R5IHsgXHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7IH1cclxuICAgIGJvZHksICoge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lcixcclxuICAgIC5jb250YWluZXItYmlnIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyB9XHJcbiAgICAuY29udGFpbmVyLWJpZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNDQwIHB4OyB9XHJcblxyXG4gICAgLmZsZXgge2Rpc3BsYXk6IGZsZXg7IH1cclxuICAgIC5mbGV4LTEge2ZsZXg6IDE7IH1cclxuICAgIC5mbGV4LTIge2ZsZXg6IDI7IH1cclxuICAgIC5mbGV4LTMge2ZsZXg6IDM7IH1cclxuICAgIC5mbGV4LTQge2ZsZXg6IDQ7IH1cclxuICAgIC5mbGV4LTUge2ZsZXg6IDU7IH1cclxuICAgIC5mbGV4LTYge2ZsZXg6IDY7IH1cclxuXHJcbiAgICAud3JhcCB7ZmxleC13cmFwOiB3cmFwOyB9XHJcbiAgICAud3JhcC0xIHsgXHJcbiAgICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgIH1cclxuICAgIC53cmFwLTIgeyBcclxuICAgICAgICBmbGF4LWJhc2ljOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgIH1cclxuICAgIC53cmFwLTMgeyBcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDMyJSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygzMiUgLSA1MHB4KTtcclxuICAgIH1cclxuICAgIC53cmFwLTQgeyBcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDI1JSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygyNSUgLSA1MHB4KTtcclxuICAgIH1cclxuICAgIC53cmFwLTUgeyBcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDIwJSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygyMCUgLSA1MHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwge2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuXHJcbiAgICAuZmxleC1jZW50ZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuICAgIC5mbGV4LXN0YXJ0IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4gICAgLmZsZXgtcmlnaHQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG5cclxuICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtOyB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgLndyYXAtbWIge2ZsZXgtd3JhcDogd3JhcDsgfVxyXG4gICAgICAgIC53cmFwLTItbWIge1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDUwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdXRvLndyYXAtMi1tYiB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhvcml6b250YWwtbWIge2ZsZXgtZGlyZWN0aW9uOiByb3c7IH1cclxuICAgICAgICAuaG9yaXpvbnRhbCB7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gICAgfVxyXG5cclxuICAgIGB9IDwvc3R5bGU+XHJcbikiLCJleHBvcnQgY29uc3QgQVBJID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuICAgICAgICAgICAgIHZlcnNhbyA9IFwidjFcIixcclxuICAgICAgICAgICAgIGxvamEgPSBcIjYwYzI2MmU1M2ViZDlmMDljMDgwZjU5YVwiLFxyXG4gICAgICAgICAgICAgYmFzZUltZyA9IEFQSSArIFwiL3B1YmxpYy9pbWFnZXMvXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9nby9DYWJlY2FsaG8nO1xyXG5pbXBvcnQgQ2FtcG9QZXNxdWlzYSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhbXBvcy9QZXNxdWlzYSc7XHJcbmltcG9ydCBDYXJkQ2FycmluaG8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYXJkcy9DYXJyaW5obyc7XHJcbmltcG9ydCBDYXRlZ29yaWFzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGlzdGFzL0NhdGVnb3JpYXMnO1xyXG4vL2ltcG9ydCBDYXJkQ2FycmluaG9MaW1wbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhcmRzL0NhcnJpbmhvTGltcG8nO1xyXG5cclxuY2xhc3MgQ2FiZWNhbGhvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIHJlbmRlckNhYmVjYWxob05vcm1hbCgpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYW1wb1Blc3F1aXNhIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDYXJyaW5obyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpYXMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWFzIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuLypcclxuICAgIHJlbmRlckNhYmVjYWxob05vcm1hbCgpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYW1wb1Blc3F1aXNhIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDYXJyaW5obyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ2FycmluaG9MaW1wbyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpYXMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWFzIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4qLyBcclxuXHJcbiAgICByZW5kZXJDYWJlY2FsaG9TaW1wbGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXIgTm8tTGlua3MgSGVhZGVyLVNpbXBsZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGNvbnN0IHtzaW1wbGVzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIHNpbXBsZXMgPyBcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2FiZWNhbGhvU2ltcGxlcygpIDogXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNhYmVjYWxob05vcm1hbCgpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhYmVjYWxobzsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNsYXNzIEF2YWxpYWNvZXMgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICB0ZXh0bzogXCJcIixcclxuICAgICAgICBwb250dWFjYW86IDVcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJBdmFsaWFjb2VzKCl7XHJcbiAgICAgICAgY29uc3QgeyBhdmFsaWFjb2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhbGlhY29lcy1pdGVtcyBmbGV4IGhvcml6b250YWwgd3JhcCBuby13cmFwLW1iXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhbGlhY29lcy5tYXAoKGF2YWxpYWNhbykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXthdmFsaWFjYW8uX2lkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF2YWxpYWNhbyBmbGV4LTEgZmxleCB2ZXJ0aWNhbCB3cmFwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhbGlhY2FvLXRleHRvIGZsZXgtMyBmbGV4IHRleHRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2F2YWxpYWNhby50ZXh0b308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhbGlhY2FvLWRhZG9zIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YWxpYWNhby1ub21lIGZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD57YXZhbGlhY2FvLm5vbWV9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YWxpYWNhby1wb250dWFjYW8gZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWy4uLkFycmF5KGF2YWxpYWNhby5wb250dWFjYW8pLmtleXMoKV0ubWFwKChpLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkga2V5PXtpZHh9IGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0QXZhbGlhY2FvKCl7XHJcbiAgICAgICAgY29uc3QgeyB0ZXh0bywgcG9udHVhY2FvIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHsgcHJvZHV0bywgdG9rZW4sIHVzdWFyaW8gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYoIXRleHRvIHx8ICFwcm9kdXRvKSBhbGVydChcIlByZWVuY2hhIG8gY2FtcG8gZGUgdGV4dG8gZGEgYXZhbGlhw6fDo28uXCIpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubm92YUF2YWxpYWNhbyh7IFxyXG4gICAgICAgICAgICBub21lOiB1c3VhcmlvLm5vbWUsIFxyXG4gICAgICAgICAgICB0b2tlbiwgXHJcbiAgICAgICAgICAgIHByb2R1dG86IHByb2R1dG8uX2lkLFxyXG4gICAgICAgICAgICB0ZXh0bywgXHJcbiAgICAgICAgICAgIHBvbnR1YWNhb1xyXG4gICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgaWYoZXJyKSBhbGVydChcIk9jb3JyZXUgdW0gZXJybywgdGVudGUgbm92YW1lbnRlLlwiKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnNldFN0YXRlKHsgdGV4dG86IFwiXCIsIHBvbnR1YWNhbzogNSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGb3JtdWxhcmlvRGVBdmFsaWFjb2VzKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmFsaWFjb2VzLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxoND5FbnZpZSBzdWEgYXZhbGlhw6fDo28gcGFyYSBvIHByb2R1dG86PC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qb250dWHDp8OjbzombmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucG9udHVhY2FvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcG9udHVhY2FvOiBlLnRhcmdldC52YWx1ZSB9KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xIGVzdHJlbGE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+MiBlc3RyZWxhczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zIGVzdHJlbGFzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQgZXN0cmVsYXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NSBlc3RyZWxhczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkF2YWxpYcOnw6NvOjwvbGFiZWw+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCIzXCIgc3R5bGU9e3sgcmVzaXplOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiLCBtYXhXaWR0aDogXCI1MDBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBhcXVpIGEgc3VhIGF2YWxpYcOnw6NvLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRleHRvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRleHRvOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnN1Ym1pdEF2YWxpYWNhbygpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVudmlhciBBdmFsaWHDp8Ojbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckF2aXNvTG9naW4oKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hcmVhLWNsaWVudGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ0xJUVVFIEFRVUkgUEFSQSBMT0dBUiBFIERFSVhBUiBVTUEgQVZBTElBw4fDg09cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXZhbGlhY29lcyBmbGV4IHZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+QXZhbGlhw6fDtWVzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckF2YWxpYWNvZXMoKSB9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2tlbiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZvcm11bGFyaW9EZUF2YWxpYWNvZXMoKSA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckF2aXNvTG9naW4oKSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgcHJvZHV0bzogc3RhdGUucHJvZHV0by5wcm9kdXRvLFxyXG4gICAgYXZhbGlhY29lczogc3RhdGUucHJvZHV0by5hdmFsaWFjb2VzLFxyXG4gICAgdG9rZW46IHN0YXRlLmF1dGgudG9rZW4sXHJcbiAgICB1c3VhcmlvOiBzdGF0ZS5hdXRoLnVzdWFyaW9cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykoQXZhbGlhY29lcyk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNsYXNzIERlc2NyaWNhbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IHByb2R1dG8gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXNjcmljYW8gZmxleCB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkRlc2NyacOnw6NvPC9oMj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1dG8uZGVzY3JpY2FvLnNwbGl0KFwiXFxuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGlkeCkgPT4gPHAga2V5PXtpZHh9PntpdGVtfTwvcD4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHByb2R1dG86IHN0YXRlLnByb2R1dG8ucHJvZHV0b1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShEZXNjcmljYW8pOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgeyBmb3JtYXRNb25leSB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgYmFzZUltZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IGFkZENhcnQgfSBmcm9tICcuLi8uLi91dGlscy9jYXJ0JztcclxuXHJcbmNsYXNzIEhlcm8gZXh0ZW5kcyBDb21wb25lbnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc3QgeyBwcm9kdXRvLCB2YXJpYWNvZXMgfSA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGZvdG86IHByb2R1dG8gPyAocHJvZHV0by5mb3Rvc1swXSB8fCBudWxsKSA6IG51bGwsXHJcbiAgICAgICAgICAgIGZvdG9zOiBwcm9kdXRvID8gKHByb2R1dG8uZm90b3MgfHwgW10pIDogW10sXHJcbiAgICAgICAgICAgIHF0ZDogMSxcclxuICAgICAgICAgICAgdmFyaWFjYW86IHZhcmlhY29lcyAmJiB2YXJpYWNvZXMubGVuZ3RoID49IDEgPyB2YXJpYWNvZXNbMF0uX2lkIDogbnVsbCxcclxuICAgICAgICAgICAgdmFyaWFjYW9Db21wbGV0YTogdmFyaWFjb2VzICYmIHZhcmlhY29lcy5sZW5ndGggPj0gMSA/IHZhcmlhY29lc1swXSA6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpe1xyXG4gICAgICAgIGlmKCFwcmV2UHJvcHMucHJvZHV0byAmJiB0aGlzLnByb3BzLnByb2R1dG8pe1xyXG4gICAgICAgICAgICBjb25zdCB7IGZvdG9zIH0gPSB0aGlzLnByb3BzLnByb2R1dG87XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3RvOiBmb3Rvc1swXSwgZm90b3MgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFwcmV2UHJvcHMudmFyaWFjb2VzICYmIHRoaXMucHJvcHMudmFyaWFjb2VzKXtcclxuICAgICAgICAgICAgY29uc3QgdmFyaWFjYW8gPSB0aGlzLnByb3BzLnZhcmlhY29lc1swXTtcclxuICAgICAgICAgICAgaWYoIXZhcmlhY2FvKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhcmlhY2FvOiB2YXJpYWNhby5faWQsIHZhcmlhY2FvQ29tcGxldGE6IHZhcmlhY2FvIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQaG90b3MoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdG9zIGZsZXgtMiBmbGV4IHZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdG8tcHJpbmNpcGFsIGZsZXgtNiBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Jhc2VJbWcgKyB0aGlzLnN0YXRlLmZvdG99IHdpZHRoPVwiOTUlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW5pLWZvdG9zIGZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZvdG9zLm1hcCgoZm90bywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaS1mb3RvIGZsZXgtMSBmbGV4IGZsZXgtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZm90byB9KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiYXNlSW1nICsgZm90b30gd2lkdGg9XCI5MCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYXJpYWNhbyA9IChwcm9kdXRvLCB2YXJpYWNhbykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYWNhbzogdmFyaWFjYW8uX2lkLCB2YXJpYWNhb0NvbXBsZXRhOiB2YXJpYWNhbyB9KTtcclxuICAgICAgICBpZih2YXJpYWNhby5mb3RvcyAmJiB2YXJpYWNhby5mb3Rvcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvdG9zOiB2YXJpYWNhby5mb3RvcywgZm90bzogdmFyaWFjYW8uZm90b3NbMF0gfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvdG9zOiBwcm9kdXRvLmZvdG9zLCBmb3RvOiBwcm9kdXRvLmZvdG9zWzBdIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJWYXJpYWNvZXMoKXtcclxuICAgICAgICBjb25zdCB7IHZhcmlhY29lcywgcHJvZHV0byB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZighcHJvZHV0byB8fCAhdmFyaWFjb2VzIHx8IHZhcmlhY29lcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TZWxlY2lvbmUgdW1hIG9ww6fDo286PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widmFyaWFjb2VzIGZsZXggd3JhcFwifT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhY29lcy5tYXAoKHZhcmlhY2FvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFjYW8ke3ZhcmlhY2FvLl9pZCA9PT0gdGhpcy5zdGF0ZS52YXJpYWNhbyA/IFwiIHZhcmlhY2FvLWFjdGl2ZVwiIDogXCJcIiB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LTEgZmxleCBmbGV4LWNlbnRlciB3cmFwLTRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dmFyaWFjYW8uX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0VmFyaWFjYW8ocHJvZHV0bywgdmFyaWFjYW8pfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmFyaWFjYW8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhcmlhY2FvLm5vbWUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZENhcnQoKXtcclxuICAgICAgICBjb25zdCB7IHZhcmlhY2FvLCBxdGQsIHZhcmlhY2FvQ29tcGxldGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgeyBwcm9kdXRvIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGFkZENhcnQoe1xyXG4gICAgICAgICAgICBwcm9kdXRvOiBwcm9kdXRvLl9pZCxcclxuICAgICAgICAgICAgdmFyaWFjYW8sXHJcbiAgICAgICAgICAgIHF1YW50aWRhZGU6IHF0ZCxcclxuICAgICAgICAgICAgcHJlY29Vbml0YXJpbzogdmFyaWFjYW9Db21wbGV0YSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFjYW9Db21wbGV0YS5wcm9tb2NhbyB8fCB2YXJpYWNhb0NvbXBsZXRhLnByZWNvIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdXRvLnByb21vY2FvIHx8IHByb2R1dG8ucHJlY29cclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEZXRhbGhlcygpe1xyXG4gICAgICAgIGNvbnN0IHsgcHJvZHV0byB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IHZhcmlhY2FvQ29tcGxldGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgaWYoIXByb2R1dG8pIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0yIHByb2R1dG8tZGV0YWxoZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0dWxvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9kdXRvLnRpdHVsb308L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXRlZ29yaWE6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcmlhP2lkPSR7cHJvZHV0by5jYXRlZ29yaWEuX2lkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcmlhLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHV0by5jYXRlZ29yaWEubm9tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFjYW9Db21wbGV0YSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVjb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFyaWFjYW9Db21wbGV0YS5wcm9tb2NhbyAhPT0gMCAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFjYW9Db21wbGV0YS5wcm9tb2NhbyAhPT0gdmFyaWFjYW9Db21wbGV0YS5wcmVjbyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByZWNvLW9yaWdpbmFsIHByZWNvLXBvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0TW9uZXkodmFyaWFjYW9Db21wbGV0YS5wcmVjbyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+KSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByZWNvLW9yaWdpbmFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRNb25leSh2YXJpYWNhb0NvbXBsZXRhLnByZWNvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICl9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhcmlhY2FvQ29tcGxldGEucHJvbW9jYW8gIT09IDAgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhY2FvQ29tcGxldGEucHJvbW9jYW8gIT09IHZhcmlhY2FvQ29tcGxldGEucHJlY28gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcmVjby1wcm9tb2Nhb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0TW9uZXkodmFyaWFjYW9Db21wbGV0YS5wcm9tb2Nhbyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicHJlY28tcGFyY2VsYWRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3UgZW0gNnggZGUge2Zvcm1hdE1vbmV5KCh2YXJpYWNhb0NvbXBsZXRhLnByb21vY2FvIHx8IHZhcmlhY2FvQ29tcGxldGEucHJlY28pLzYpfSBzZW0ganVyb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlY29zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb2R1dG8ucHJvbW9jYW8gIT09IDAgJiYgcHJvZHV0by5wcm9tb2NhbyAhPT0gcHJvZHV0by5wcmVjbyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcmVjby1vcmlnaW5hbCBwcmVjby1wb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRNb25leShwcm9kdXRvLnByZWNvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+ICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJlY28tb3JpZ2luYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0TW9uZXkocHJvZHV0by5wcmVjbyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb2R1dG8ucHJvbW9jYW8gIT09IDAgJiYgcHJvZHV0by5wcm9tb2NhbyAhPT0gcHJvZHV0by5wcmVjbyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByZWNvLXByb21vY2FvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRNb25leShwcm9kdXRvLnByb21vY2FvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwcmVjby1wYXJjZWxhZG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdSBlbSA2eCBkZSB7Zm9ybWF0TW9uZXkoKHByb2R1dG8ucHJvbW9jYW8gfHwgcHJvZHV0by5wcmVjbykvNil9IHNlbSBqdXJvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyVmFyaWFjb2VzKCkgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGNvZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wY2FvIGZsZXggdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm9wY2FvLXRhYlwiPlF1YW50aWRhZGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcGNhby1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWFudGlkYWRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF0ZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gKE51bWJlcihlLnRhcmdldC52YWx1ZSkgPj0gMSkgJiYgdGhpcy5zZXRTdGF0ZSh7IHF0ZDogZS50YXJnZXQudmFsdWUgfSkgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXByYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4tY3RhXCIgb25DbGljaz17KCkgPT4gdGhpcy5hZGRDYXJ0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDT01QUkFSXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHV0by1IZXJvIGZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlclBob3RvcygpIH1cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJEZXRhbGhlcygpIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgcHJvZHV0bzogc3RhdGUucHJvZHV0by5wcm9kdXRvLFxyXG4gICAgdmFyaWFjb2VzOiBzdGF0ZS5wcm9kdXRvLnZhcmlhY29lc1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIZXJvKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvZHV0b3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaXN0YXMvUHJvZHV0b3MnO1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcblxyXG5jbGFzcyBQcm9kdXRvc1JlbGFjaW9uYWRvcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBpZih0aGlzLnByb3BzLnByb2R1dG8pe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoUHJvZHV0b3NDYXRlZ29yaWEodGhpcy5wcm9wcy5wcm9kdXRvLmNhdGVnb3JpYS5faWQsIDAsIDQpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpe1xyXG4gICAgICAgIGlmKCFwcmV2UHJvcHMucHJvZHV0byAmJiB0aGlzLnByb3BzLnByb2R1dG8pe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoUHJvZHV0b3NDYXRlZ29yaWEodGhpcy5wcm9wcy5wcm9kdXRvLmNhdGVnb3JpYS5faWQsIDAsIDQpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgcHJvZHV0b3NDYXRlZ29yaWEgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9kdXRvcy1SZWxhY2lvbmFkb3MgZmxleCB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlByb2R1dG9zIFJlbGFjaW9uYWRvczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxQcm9kdXRvc1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1dG9zPXtwcm9kdXRvc0NhdGVnb3JpYSA/IHByb2R1dG9zQ2F0ZWdvcmlhLmRvY3MgOiBbXX1cclxuICAgICAgICAgICAgICAgICAgICBpdGVuc1BvckxpbmhhPXs0fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBwcm9kdXRvc0NhdGVnb3JpYTogc3RhdGUuY2F0ZWdvcmlhLnByb2R1dG9zQ2F0ZWdvcmlhLFxyXG4gICAgcHJvZHV0bzogc3RhdGUucHJvZHV0by5wcm9kdXRvXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbnMpKFByb2R1dG9zUmVsYWNpb25hZG9zKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBIZXJvIGZyb20gJy4vSGVybyc7XHJcbmltcG9ydCBEZXNjcmljYW8gZnJvbSAnLi9EZXNjcmljYW8nO1xyXG5pbXBvcnQgQXZhbGlhY29lcyBmcm9tICcuL0F2YWxpYWNvZXMnO1xyXG5pbXBvcnQgUHJvZHV0b3NSZWxhY2lvbmFkb3MgZnJvbSAnLi9Qcm9kdXRvc1JlbGFjaW9uYWRvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdXRvQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbnRhaW5lci1iaWcgUHJvZHV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPEhlcm8gLz5cclxuICAgICAgICAgICAgICAgIDxEZXNjcmljYW8gLz5cclxuICAgICAgICAgICAgICAgIDxBdmFsaWFjb2VzIC8+XHJcbiAgICAgICAgICAgICAgICA8UHJvZHV0b3NSZWxhY2lvbmFkb3MgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBQYWdpbmFzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGlzdGFzL1BhZ2luYXMnO1xyXG5pbXBvcnQgUmVkZXNTb2NpYWlzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGlzdGFzL1JlZGVzU29jaWFpcyc7XHJcbmltcG9ydCBEYWRvc0RhTG9qYSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0l0ZW0vRGFkb3NEYUxvamEnO1xyXG5cclxuY2xhc3MgUm9kYXBlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUm9kYXBlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWRlc1NvY2lhaXMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RGFkb3NEYUxvamEgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvZGFwZTsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQ2FiZWNhbGhvIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvQ2FiZWNhbGhvJztcclxuaW1wb3J0IFByb2R1dG8gZnJvbSAnLi4vLi4vY29udGFpbmVycy9Qcm9kdXRvJztcclxuaW1wb3J0IFJvZGFwZSBmcm9tICcuLi8uLi9jb250YWluZXJzL1JvZGFwZSc7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuXHJcbmltcG9ydCBpbml0aWFsaXplIGZyb20gJy4uLy4uL3V0aWxzL2luaXRpYWxpemUnO1xyXG5pbXBvcnQgY2FsbEJhc2VEYXRhIGZyb20gJy4uLy4uL3V0aWxzL2NhbGxCYXNlRGF0YSc7XHJcblxyXG5jbGFzcyBQcm9kdXRvUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCl7XHJcbiAgICAgICAgaW5pdGlhbGl6ZShjdHgpO1xyXG4gICAgICAgIHJldHVybiBjYWxsQmFzZURhdGEoW1xyXG4gICAgICAgICAgICBhY3Rpb25zLmZldGNoUHJvZHV0by5iaW5kKG51bGwsIGN0eC5xdWVyeS5pZCksXHJcbiAgICAgICAgICAgIGFjdGlvbnMuZmV0Y2hBdmFsaWFjb2VzLmJpbmQobnVsbCwgY3R4LnF1ZXJ5LmlkKSxcclxuICAgICAgICAgICAgYWN0aW9ucy5mZXRjaFZhcmlhY29lcy5iaW5kKG51bGwsIGN0eC5xdWVyeS5pZClcclxuICAgICAgICBdLCBjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9wcy5nZXRVc2VyKHsgdG9rZW46IHRoaXMucHJvcHMudG9rZW4gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgeyBwcm9kdXRvIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPExheW91dCB0aXRsZT17YCR7cHJvZHV0byA/IHByb2R1dG8udGl0dWxvIDogXCJcIn0gfCBMT0pBIElUIC0gTWVsaG9yZXMgcHJvZHV0b3MgZGUgdGVjbm9sb2dpYWB9PlxyXG4gICAgICAgICAgICAgICAgPENhYmVjYWxobyAvPlxyXG4gICAgICAgICAgICAgICAgPFByb2R1dG8gLz5cclxuICAgICAgICAgICAgICAgIDxSb2RhcGUgLz5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgcHJvZHV0bzogc3RhdGUucHJvZHV0by5wcm9kdXRvLFxyXG4gICAgdG9rZW46IHN0YXRlLmF1dGgudG9rZW5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykoUHJvZHV0b1BhZ2UpOyIsImltcG9ydCB7IFxyXG4gICAgQVVURU5USUNBUl9UT0tFTixcclxuICAgIEFVVEVOVElDQVIsXHJcbiAgICBVU0VSLFxyXG4gICAgREVTQVVURU5USUNBUlxyXG59IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJLCB2ZXJzYW8gfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgeyBmZXRjaENsaWVudGUgfSBmcm9tICcuL2NsaWVudGVBY3Rpb25zJztcclxuaW1wb3J0IHsgc2V0Q29va2llLCByZW1vdmVDb29raWUgfSBmcm9tICcuLi8uLi91dGlscy9jb29raWUnO1xyXG5pbXBvcnQgeyBnZXRIZWFkZXJzIH0gZnJvbSAnLi9oZWxwZXJzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgZXJyb3JIYW5kbGluZyBmcm9tICcuL2Vycm9ySGFuZGxpbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlYXV0aGVudGljYXRlID0gdG9rZW4gPT4gKHsgdHlwZTogQVVURU5USUNBUl9UT0tFTiwgcGF5bG9hZDogdG9rZW4gfSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9ICh7IHRva2VuIH0pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS91c3Vhcmlvc2AsIGdldEhlYWRlcnModG9rZW4pKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFVTRVIsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEudXN1YXJpbyB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRlbnRpY2FyID0gKHsgZW1haWwsIHBhc3N3b3JkIH0sIGdvVG8gPSBmYWxzZSwgY2IpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLnBvc3QoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3VzdWFyaW9zL2xvZ2luYCwge2VtYWlsLCBwYXNzd29yZH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRDb29raWUoJ3Rva2VuJywgcmVzcG9uc2UuZGF0YS51c3VhcmlvLnRva2VuKTtcclxuICAgICAgICBpZihnb1RvKSBSb3V0ZXIucHVzaChnb1RvKTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFVVEVOVElDQVIsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDbGllbnRlKHJlc3BvbnNlLmRhdGEudXN1YXJpby5faWQsIHJlc3BvbnNlLmRhdGEudXN1YXJpby50b2tlbikpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlID0+IGNiKGVycm9ySGFuZGxpbmcoZSkpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlc2F1dGVudGljYXIgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZW1vdmVDb29raWUoJ3Rva2VuJyk7XHJcbiAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBERVNBVVRFTlRJQ0FSIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU2VuaGEgPSAoZGF0YSwgdG9rZW4sIGNiKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5wdXQoXHJcbiAgICAgICAgYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3VzdWFyaW9zYCwgXHJcbiAgICAgICAgeyBwYXNzd29yZDogZGF0YS5ub3ZhU2VuaGEgfSwgXHJcbiAgICAgICAgZ2V0SGVhZGVycyh0b2tlbilcclxuICAgIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVVNFUiwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YS51c3VhcmlvIH0pO1xyXG4gICAgICAgIGNiKG51bGwpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlID0+IGNiKGVycm9ySGFuZGxpbmcoZSkpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcmVhdXRoZW50aWNhdGUsXHJcbiAgICBnZXRVc2VyLFxyXG4gICAgYXV0ZW50aWNhcixcclxuICAgIGRlc2F1dGVudGljYXIsXHJcbiAgICB1cGRhdGVTZW5oYVxyXG59OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7QVBJLCB2ZXJzYW8sIGxvamF9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7Z2V0Q2FydCwgcmVtb3ZlQ2FydCwgY2xlYW5DYXJ0fSBmcm9tICcuLi8uLi91dGlscy9jYXJ0JztcclxuaW1wb3J0IHtcclxuICAgIFNFVF9DQVJSSU5ITyxcclxuICAgIENMRUFOX0NBUlJJTkhPLFxyXG4gICAgRkVUQ0hfUFJPRFVUT19DQVJSSU5ITyxcclxuICAgIEZFVENIX1ZBUklBQ0FPX0NBUlJJTkhPLFxyXG4gICAgRkVUQ0hfVkFMT1JfRU5UUkVHQSxcclxuICAgIFVQREFURV9RVERfQ0FSVCxcclxuICAgIFVQREFURV9GUkVURV9DQVJULFxyXG4gICAgUkVNT1ZFX1BST0RfQ0FSVCxcclxuICAgIENMRUFOX0ZSRVRFU1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDYXJyaW5obyA9ICgpID0+ICh7dHlwZTogU0VUX0NBUlJJTkhPLCBjYXJyaW5obzogZ2V0Q2FydCgpfSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYW5DYXJyaW5obyA9ICgpID0+IHtcclxuLy8gICAgY29uc29sZS5sb2coJ2xpbXBhciBjYXJyaW5obycpO1xyXG4gICAgY2xlYW5DYXJ0KCk7XHJcbiAgICByZXR1cm4ge3R5cGU6IENMRUFOX0NBUlJJTkhPfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1dG9DYXJyaW5obyA9IChpZCwgaWR4Q2FycmluaG8pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcHJvZHV0b3MvJHtpZH0/bG9qYT0ke2xvamF9YClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHsgXHJcbiAgICAgICAgICAgIHR5cGU6IEZFVENIX1BST0RVVE9fQ0FSUklOSE8sIFxyXG4gICAgICAgICAgICBwYXlsb2FkOiByZXNwb25zZS5kYXRhLCBcclxuICAgICAgICAgICAgaWR4Q2FycmluaG8gXHJcbiAgICB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFZhcmlhY29lc0NhcnJpbmhvID0gKGlkLCBwcm9kdXRvLCBpZHhDYXJyaW5obykgPT4gZGlzcGF0Y2ggPT4ge1xyXG4vLyAgICBjb25zb2xlLmxvZyhpZCwgcHJvZHV0bywgaWR4Q2FycmluaG8sIGxvamEpXHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3ZhcmlhY29lcy8ke2lkfT9wcm9kdXRvPSR7cHJvZHV0b30mbG9qYT0ke2xvamF9YClcclxuICAgIC50aGVuIChyZXNwb25zZSA9PiBkaXNwYXRjaCh7IFxyXG4gICAgICAgICAgICB0eXBlOiBGRVRDSF9WQVJJQUNBT19DQVJSSU5ITywgXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEsIFxyXG4gICAgICAgICAgICBpZHhDYXJyaW5obyBcclxuICAgIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbGN1bGFyRnJldGUgPSAoY2VwLCBjYXJyaW5obykgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MucG9zdChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvZW50cmVnYXMvY2FsY3VsYXJgLCB7Y2VwLCBjYXJyaW5ob30pXHJcbiAgICAudGhlbiAocmVzcG9uc2UgPT4gZGlzcGF0Y2goeyBcclxuICAgICAgICAgICAgdHlwZTogRkVUQ0hfVkFMT1JfRU5UUkVHQSwgXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEsIFxyXG4gICAgICAgICAgICBjZXBcclxuICAgIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZXJQcm9kdXRvID0gKGluZGV4KSA9PiB7XHJcbiAgICByZW1vdmVDYXJ0KGluZGV4KTtcclxuICAgIHJldHVybiB7dHlwZTogUkVNT1ZFX1BST0RfQ0FSVCwgaWR4Q2FycmluaG86IGluZGV4fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVRdWFudGlkYWRlID0gKGNoYW5nZSwgaW5kZXgpID0+ICh7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBVUERBVEVfUVREX0NBUlQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZHhDYXJyaW5obzogaW5kZXggXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWNpb25hckZyZXRlID0gKGZyZXRlU2VsZWNpb25hZG8pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVVBEQVRFX0ZSRVRFX0NBUlQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJldGVTZWxlY2lvbmFkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuZXhwb3J0IGNvbnN0IGNsZWFuRnJldGVzID0gKCkgPT4gKHt0eXBlOiBDTEVBTl9GUkVURVN9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNldENhcnJpbmhvLFxyXG4gICAgY2xlYW5DYXJyaW5obyxcclxuICAgIGZldGNoUHJvZHV0b0NhcnJpbmhvLFxyXG4gICAgZmV0Y2hWYXJpYWNvZXNDYXJyaW5obyxcclxuICAgIGNhbGN1bGFyRnJldGUsXHJcbiAgICB1cGRhdGVRdWFudGlkYWRlLFxyXG4gICAgc2VsZWNpb25hckZyZXRlLFxyXG4gICAgcmVtb3ZlclByb2R1dG8sXHJcbiAgICBjbGVhbkZyZXRlc1xyXG59OyIsImltcG9ydCB7XHJcbiAgICBGRVRDSF9DQVRFR09SSUFTLFxyXG4gICAgRkVUQ0hfQ0FURUdPUklBLFxyXG4gICAgRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUEksIHZlcnNhbywgbG9qYSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDYXRlZ29yaWFzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL2NhdGVnb3JpYXMvZGlzcG9uaXZlaXM/bG9qYT0ke2xvamF9YClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9DQVRFR09SSUFTLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDYXRlZ29yaWEgPSAoaWQpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvY2F0ZWdvcmlhcy8ke2lkfT9sb2phPSR7bG9qYX1gKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9DQVRFR09SSUEsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1dG9zQ2F0ZWdvcmlhID0gKGlkLCBhdHVhbCA9IDAsIGxpbWl0ID0gMjApID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvY2F0ZWdvcmlhcy8ke2lkfS9wcm9kdXRvcz9sb2phPSR7bG9qYX0mb2Zmc2V0PSR7YXR1YWx9JmxpbWl0PSR7bGltaXR9YClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBmZXRjaENhdGVnb3JpYXMsXHJcbiAgICBmZXRjaENhdGVnb3JpYSxcclxuICAgIGZldGNoUHJvZHV0b3NDYXRlZ29yaWFcclxufTsiLCJpbXBvcnQge1xyXG4gICAgU0VUX0ZPUk0sXHJcbiAgICBDTEVBTl9GT1JNLFxyXG4gICAgU0VUX1RJUE9fUEFHQU1FTlRPLFxyXG4gICAgRkVUQ0hfU0VTU0lPTl9JRCxcclxuICAgIEZFVENIX1NFTkRFUl9IQVNILFxyXG4gICAgTk9WT19QRURJRE8sXHJcbiAgICBQQUdBUl9QRURJRE9cclxufSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7QVBJLCB2ZXJzYW8sIGxvamF9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7Z2V0Q2FydH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FydCc7XHJcbmltcG9ydCB7Z2V0SGVhZGVyc30gZnJvbSAnLi9oZWxwZXJzJztcclxuaW1wb3J0IGVycm9ySGFuZGxpbmcgZnJvbSAnLi9lcnJvckhhbmRsaW5nJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7Y2xlYW5DYXJyaW5ob30gZnJvbSAnLi9jYXJyaW5ob0FjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEZvcm0gPSAocGF5bG9hZCwgcHJlZml4KSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaCh7dHlwZTogU0VUX0ZPUk0sIHBheWxvYWQsIHByZWZpeH0pO1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYW5Gb3JtID0gKCkgPT4gKHt0eXBlOiBDTEVBTl9GT1JNfSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VGlwb1BhZ2FtZW50byA9ICh0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8pID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoe3R5cGU6IFNFVF9USVBPX1BBR0FNRU5UTywgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvfSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2Vzc2lvblBhZ2FtZW50byA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wYWdhbWVudG9zL3Nlc3Npb25gKS50aGVuICgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogRkVUQ0hfU0VTU0lPTl9JRCwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pO1xyXG5cclxuICAgICAgICBQYWdTZWd1cm9EaXJlY3RQYXltZW50LnNldFNlc3Npb25JZChyZXNwb25zZS5kYXRhLnNlc3Npb25JZCk7XHJcbiAgICAgICAgbGV0IHNlbmRlckhhc2ggPSBQYWdTZWd1cm9EaXJlY3RQYXltZW50LmdldFNlbmRlckhhc2goKTtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogRkVUQ0hfU0VOREVSX0hBU0gsIHNlbmRlckhhc2h9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBub3ZvUGVkaWRvID0gKFxyXG4gICAgZm9ybSwgZnJldGVTZWxlY2lvbmFkbywgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvLCBcclxuICAgIHZhbG9yVG90YWwsIHRva2VuLCBzZW5kZXJIYXNoLCBjYXJyaW5obyA9IGdldENhcnQoKSwgY2IgPSBudWxsXHJcbikgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MucG9zdChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcGVkaWRvcz9sb2phPSR7bG9qYX1gLCB7XHJcbiAgICAgICAgY2FycmluaG8sXHJcbiAgICAgICAgZW50cmVnYToge1xyXG4gICAgICAgICAgICBjdXN0bzogZnJldGVTZWxlY2lvbmFkby5WYWxvci5yZXBsYWNlKCcsJywgJy4nKSxcclxuICAgICAgICAgICAgdGlwbzogKGZyZXRlU2VsZWNpb25hZG8uQ29kaWdvKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBwcmF6bzogZnJldGVTZWxlY2lvbmFkby5QcmF6b0VudHJlZ2EsXHJcbiAgICAgICAgICAgIGVuZGVyZWNvOiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbDogZm9ybS5sb2NhbCxcclxuICAgICAgICAgICAgICAgIG51bWVybzogZm9ybS5udW1lcm8sXHJcbiAgICAgICAgICAgICAgICBjb21wbGVtZW50bzogZm9ybS5jb21wbGVtZW50byxcclxuICAgICAgICAgICAgICAgIGJhaXJybzogZm9ybS5iYWlycm8sXHJcbiAgICAgICAgICAgICAgICBjaWRhZGU6IGZvcm0uY2lkYWRlLFxyXG4gICAgICAgICAgICAgICAgZXN0YWRvOiBmb3JtLmVzdGFkbyxcclxuICAgICAgICAgICAgICAgIENFUDogZm9ybS5DRVBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnYW1lbnRvOiB7XHJcbiAgICAgICAgICAgIHZhbG9yOiB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gPT09IFwiY2FydGFvXCIgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5wYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhLnRvdGFsQW1vdW50IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsb3JUb3RhbCxcclxuICAgICAgICAgICAgZm9ybWE6IHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyA9PT0gXCJjYXJ0YW9cIiA/IFwiY3JlZGl0Q2FyZFwiIDogXCJib2xldG9cIixcclxuICAgICAgICAgICAgcGFyY2VsYXM6IHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyA9PT0gXCJjYXJ0YW9cIiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEucXVhbnRpdHkgOiAxLFxyXG4gICAgICAgICAgICBlbmRlcmVjb0VudHJlZ2FJZ3VhbENvYnJhbmNhOiBmb3JtLmRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSxcclxuICAgICAgICAgICAgZW5kZXJlY286IHtcclxuICAgICAgICAgICAgICAgIGxvY2FsOiAhZm9ybS5kYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgPyBmb3JtLmRhZG9zQ29icmFuY2EubG9jYWwgOiBmb3JtLmxvY2FsLFxyXG4gICAgICAgICAgICAgICAgbnVtZXJvOiAhZm9ybS5kYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgPyBmb3JtLmRhZG9zQ29icmFuY2EubnVtZXJvIDogZm9ybS5udW1lcm8sXHJcbiAgICAgICAgICAgICAgICBjb21wbGVtZW50bzogIWZvcm0uZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhID8gZm9ybS5kYWRvc0NvYnJhbmNhLmNvbXBsZW1lbnRvIDogZm9ybS5jb21wbGVtZW50byxcclxuICAgICAgICAgICAgICAgIGJhaXJybzogIWZvcm0uZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhID8gZm9ybS5kYWRvc0NvYnJhbmNhLmJhaXJybyA6IGZvcm0uYmFpcnJvLFxyXG4gICAgICAgICAgICAgICAgY2lkYWRlOiAhZm9ybS5kYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgPyBmb3JtLmRhZG9zQ29icmFuY2EuY2lkYWRlIDogZm9ybS5jaWRhZGUsXHJcbiAgICAgICAgICAgICAgICBlc3RhZG86ICFmb3JtLmRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSA/IGZvcm0uZGFkb3NDb2JyYW5jYS5lc3RhZG8gOiBmb3JtLmVzdGFkbyxcclxuICAgICAgICAgICAgICAgIENFUDogIWZvcm0uZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhID8gZm9ybS5kYWRvc0NvYnJhbmNhLkNFUCA6IGZvcm0uQ0VQXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhcnRhbzogdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSBcImNhcnRhb1wiID8ge1xyXG4gICAgICAgICAgICAgICAgbm9tZUNvbXBsZXRvOiBmb3JtLm5vbWVDYXJ0YW8udHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgY29kaWdvQXJlYTogZm9ybS50ZWxlZm9uZS5zbGljZSgwLDIpLFxyXG4gICAgICAgICAgICAgICAgdGVsZWZvbmU6IGZvcm0udGVsZWZvbmUuc2xpY2UoMikudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgZGF0YURlTmFzY2ltZW50bzogZm9ybS5kYXRhRGVOYXNjaW1lbnRvLFxyXG4gICAgICAgICAgICAgICAgY3JlZGl0X2NhcmRfdG9rZW46IGZvcm0uY3JlZGl0X2NhcmRfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICBjcGY6IGZvcm0uQ1BGICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IDogdW5kZWZpbmVkIFxyXG4gICAgICAgIH1cclxuICAgIH0sIGdldEhlYWRlcnModG9rZW4pKVxyXG4gICAgLnRoZW4gKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogTk9WT19QRURJRE8sIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KTtcclxuICAgICAgICBkaXNwYXRjaChwYWdhclBlZGlkbyhyZXNwb25zZS5kYXRhLnBlZGlkby5wYWdhbWVudG8uX2lkLCB0b2tlbiwgc2VuZGVySGFzaCwgY2IpKTsgXHJcbn0pXHJcbiAgICAuY2F0Y2goZSA9PiBjYiAoZXJyb3JIYW5kbGluZyhlKSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhZ2FyUGVkaWRvID0gKGlkLCB0b2tlbiwgc2VuZGVySGFzaCwgY2IgPSBudWxsKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3BhZ2FtZW50b3MvcGFnYXIvJHtpZH0/bG9qYT0ke2xvamF9YCwgXHJcbiAgICAgICAgICAgIHtzZW5kZXJIYXNofSwgXHJcbiAgICAgICAgICAgIGdldEhlYWRlcnModG9rZW4pXHJcbilcclxuLnRoZW4gKHJlc3BvbnNlID0+IHtcclxuICAgIGRpc3BhdGNoKHt0eXBlOiBQQUdBUl9QRURJRE8sIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KTtcclxuICAgIGNiKG51bGwpO1xyXG4gICAgUm91dGVyLnB1c2goJy9zdWNlc3NvJyk7XHJcbiAgICBkaXNwYXRjaChjbGVhbkNhcnJpbmhvKCkpOyAgICAgICAgXHJcbn0pXHJcbi5jYXRjaChlID0+IGNiIChlcnJvckhhbmRsaW5nKGUpKSk7XHJcbn1cclxuLypcclxuZXhwb3J0IGNvbnN0IHBhZ2FyUGVkaWRvPSAoaWQsIHRva2VuLCBzZW5kZXJIYXNoLCBjYiA9IG51bGwpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGNiKG51bGwpO1xyXG4gICAgUm91dGVyLnB1c2goJy9zdWNlc3NvJyk7XHJcbiAgICBkaXNwYXRjaChjbGVhbkNhcnJpbmhvKCkpOyAgICAgICAgXHJcbn07XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNldEZvcm0sXHJcbiAgICBjbGVhbkZvcm0sXHJcbiAgICBzZXRUaXBvUGFnYW1lbnRvLFxyXG4gICAgZ2V0U2Vzc2lvblBhZ2FtZW50byxcclxuICAgIG5vdm9QZWRpZG8sXHJcbiAgICBwYWdhclBlZGlkb1xyXG59OyIsImltcG9ydCB7IFxyXG4gICAgRkVUQ0hfQ0xJRU5URSxcclxuICAgIExPR09VVF9DTElFTlRFXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge0FQSSwgdmVyc2FvLCBsb2phfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQge3NldENvb2tpZX0gZnJvbSAnLi4vLi4vdXRpbHMvY29va2llJztcclxuaW1wb3J0IHtnZXRIZWFkZXJzfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHthdXRlbnRpY2FyLCBkZXNhdXRlbnRpY2FyfSBmcm9tICcuL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IGVycm9ySGFuZGxpbmcgZnJvbSAnLi9lcnJvckhhbmRsaW5nJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSYXdEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGxldCBfZGF0YSA9IGRhdGEuc3BsaXQoJy8nKTtcclxuICAgIGxldCBhbm8gPSBfZGF0YVsyXTtcclxuICAgIGxldCBfbWVzID0gTnVtYmVyKF9kYXRhWzFdKTtcclxuICAgIGxldCBtZXMgPSBfbWVzIDwgMTAgPyBcIjBcIiArIF9tZXMgOiBfbWVzO1xyXG4gICAgbGV0IF9kaWEgPSBOdW1iZXIoX2RhdGFbMF0pO1xyXG4gICAgbGV0IGRpYSA9IF9kaWEgPCAxMCA/IFwiMFwiICsgX2RpYTogX2RpYTtcclxuICAgIHJldHVybiBgJHthbm99LSR7bWVzfS0ke2RpYX1gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ2xpZW50ZSA9IChpZCwgdG9rZW4pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvY2xpZW50ZXMvJHtpZH0/bG9qYT0ke2xvamF9YCwgZ2V0SGVhZGVycyh0b2tlbikpXHJcbiAgICAudGhlbiAoKHJlc3Bvc3RhKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEZFVENIX0NMSUVOVEUsIHBheWxvYWQ6IHJlc3Bvc3RhLmRhdGF9KVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCAoZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZXdDbGllbnRlID0gKGZvcm0sIGNiKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5wb3N0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9jbGllbnRlcz9sb2phPSR7bG9qYX1gLCB7XHJcbiAgICAgICAgbm9tZTogZm9ybS5ub21lLFxyXG4gICAgICAgIHNlbmhhOiBmb3JtLnNlbmhhLFxyXG4gICAgICAgIGNwZjogZm9ybS5DUEYsXHJcbiAgICAgICAgZW1haWw6IGZvcm0uZW1haWwsXHJcbiAgICAgICAgdGVsZWZvbmVzOiBbZm9ybS50ZWxlZm9uZV0sXHJcbiAgICAgICAgZW5kZXJlY286IHtcclxuICAgICAgICAgICAgbG9jYWw6IGZvcm0ubG9jYWwsXHJcbiAgICAgICAgICAgIG51bWVybzogZm9ybS5udW1lcm8sXHJcbiAgICAgICAgICAgIGNvbXBsZW1lbnRvOiBmb3JtLmNvbXBsZW1lbnRvLFxyXG4gICAgICAgICAgICBiYWlycm86IGZvcm0uYmFpcnJvLFxyXG4gICAgICAgICAgICBjaWRhZGU6IGZvcm0uY2lkYWRlLFxyXG4gICAgICAgICAgICBlc3RhZG86IGZvcm0uZXN0YWRvLFxyXG4gICAgICAgICAgICBDRVA6IGZvcm0uQ0VQXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhRGVOYXNjaW1lbnRvOiBnZXRSYXdEYXRhKGZvcm0uZGF0YURlTmFzY2ltZW50bylcclxuICAgIH0pXHJcbiAgICAudGhlbiAoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEZFVENIX0NMSUVOVEUsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KTtcclxuICAgICAgICBkaXNwYXRjaChhdXRlbnRpY2FyKHtlbWFpbDogZm9ybS5lbWFpbCwgc2VuaGE6IGZvcm0uc2VuaGF9LCBudWxsLCBjYikpO1xyXG4gICAgICAgIGNiKG51bGwpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCAoZSA9PiBjYihlcnJvckhhbmRsaW5nKGUpKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQ2xpZW50ZSA9IChmb3JtLCBpZCwgdG9rZW4sIGNiKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5wdXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL2NsaWVudGVzLyR7aWR9P2xvamE9JHtsb2phfWAsIHtcclxuICAgICAgICBub21lOiBmb3JtLm5vbWUsXHJcbiAgICAgICAgY3BmOiBmb3JtLkNQRixcclxuICAgICAgICB0ZWxlZm9uZXM6IFtmb3JtLnRlbGVmb25lXSxcclxuICAgICAgICBlbmRlcmVjbzoge1xyXG4gICAgICAgICAgICBsb2NhbDogZm9ybS5sb2NhbCxcclxuICAgICAgICAgICAgbnVtZXJvOiBmb3JtLm51bWVybyxcclxuICAgICAgICAgICAgY29tcGxlbWVudG86IGZvcm0uY29tcGxlbWVudG8sXHJcbiAgICAgICAgICAgIGJhaXJybzogZm9ybS5iYWlycm8sXHJcbiAgICAgICAgICAgIGNpZGFkZTogZm9ybS5jaWRhZGUsXHJcbiAgICAgICAgICAgIGVzdGFkbzogZm9ybS5lc3RhZG8sXHJcbiAgICAgICAgICAgIENFUDogZm9ybS5DRVBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFEZU5hc2NpbWVudG86IGdldFJhd0RhdGEoZm9ybS5kYXRhRGVOYXNjaW1lbnRvKVxyXG4gICAgfSwgZ2V0SGVhZGVycyh0b2tlbikpXHJcbiAgICAudGhlbiAoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEZFVENIX0NMSUVOVEUsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KTtcclxuICAgICAgICBjYihudWxsKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2ggKGUgPT4gY2IoZXJyb3JIYW5kbGluZyhlKSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0Q2xpZW50ZSA9ICgpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKGRlc2F1dGVudGljYXIoKSk7XHJcbiAgICBkaXNwYXRjaCh7dHlwZTogTE9HT1VUX0NMSUVOVEV9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBmZXRjaENsaWVudGUsXHJcbiAgICBuZXdDbGllbnRlLFxyXG4gICAgdXBkYXRlQ2xpZW50ZSxcclxuICAgIGxvZ291dENsaWVudGVcclxufTsiLCJjb25zdCBlcnJvckhhbmRsaW5nID0gKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UgPyBlcnJvci5yZXNwb25zZS5kYXRhIDogbnVsbCk7XHJcbiAgICBpZighZXJyb3IucmVzcG9uc2UgfHwgIWVycm9yLnJlc3BvbnNlLmRhdGEpe1xyXG4gICAgICAgIHJldHVybiB7IHN0YXR1czogNTAwLCBtZXNzYWdlOiBcIk9jb3JyZXUgdW0gZXJybyBubyBzZXJ2aWRvci4gVGVudGUgbm92YW1lbnRlLlwiIH07XHJcbiAgICB9XHJcbiAgICBpZihlcnJvci5yZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gNDAxKXtcclxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IDQwMSwgbWVzc2FnZTogXCJWb2PDqiBuw6NvIHRlbSBhdXRvcml6YcOnw6NvIHBhcmEgYWNlc3NhciBlc3NlcyBkYWRvcy5cIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9lcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycyB8fCBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yO1xyXG4gICAgaWYoX2Vycm9ycyAmJiB0eXBlb2YgX2Vycm9ycyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHsgc3RhdHVzOiA0MDAsIG1lc3NhZ2U6IF9lcnJvcnMgfTtcclxuXHJcbiAgICBsZXQgbXNnID0gJ0Vycm86ICc7XHJcbiAgICBpZighQXJyYXkuaXNBcnJheShfZXJyb3JzKSl7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoX2Vycm9ycykuZm9yRWFjaCgoZXJybywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbXNnICs9IGAke2Vycm99ICR7IF9lcnJvcnNbZXJyb10ubWVzc2FnZSB8fCAoX2Vycm9yc1tlcnJvXS5wcm9wZXJ0aWVzID8gX2Vycm9yc1tlcnJvXS5wcm9wZXJ0aWVzLm1lc3NhZ2UgOiBcIlwiKSB8fCBfZXJyb3JzW2Vycm9dIH1cXG5gOyAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgIG1zZyArPSBgJHtlcnJvfSAke19lcnJvcnNbZXJyb10ubWVzc2FnZSB8fCBfZXJyb3JzW2Vycm9dfVxcbmA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1zZyArPSBgUHJlZW5jaGEgY29ycmV0YW1lbnRlICR7IF9lcnJvcnMubGVuZ3RoID4gMSA/IFwib3MgY2FtcG9zIFwiIDogXCJvIGNhbXBvIFwiIH0gZGU6YDtcclxuICAgICAgICBfZXJyb3JzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gaXRlbS5maWVsZFtpdGVtLmZpZWxkLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBtc2cgKz0gYCAke2ZpZWxkfSR7aW5kZXggPT09IF9lcnJvcnMubGVuZ3RoIC0gMSA/IFwiLlwiIDogXCIsXCJ9YDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3RhdHVzOiA0MDAsIG1lc3NhZ2U6IG1zZyB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlcnJvckhhbmRsaW5nOyIsImV4cG9ydCBjb25zdCBnZXRIZWFkZXJzID0gKHRva2VuKSA9PiAoeyBoZWFkZXJzOiB7IFwiQXV0aG9yaXphdGlvblwiOiBgRWNvbW1lcmNlICR7dG9rZW59YCB9IH0pOyIsImltcG9ydCBhdXRoQWN0aW9ucyBmcm9tICcuL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IGNhdGVnb3JpYUFjdGlvbnMgZnJvbSAnLi9jYXRlZ29yaWFBY3Rpb25zJztcclxuaW1wb3J0IGxvamFBY3Rpb25zIGZyb20gJy4vbG9qYUFjdGlvbnMnO1xyXG5pbXBvcnQgcHJvZHV0b0FjdGlvbnMgZnJvbSAnLi9wcm9kdXRvQWN0aW9ucyc7XHJcbmltcG9ydCBjYXJyaW5ob0FjdGlvbnMgZnJvbSAnLi9jYXJyaW5ob0FjdGlvbnMnO1xyXG5pbXBvcnQgY2xpZW50ZUFjdGlvbnMgZnJvbSAnLi9jbGllbnRlQWN0aW9ucyc7XHJcbmltcG9ydCBjaGVja291dEFjdGlvbnMgZnJvbSAnLi9jaGVja291dEFjdGlvbnMnO1xyXG5pbXBvcnQgcGVkaWRvQWN0aW9ucyBmcm9tICcuL3BlZGlkb0FjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLi4uYXV0aEFjdGlvbnMsXHJcbiAgICAuLi5jYXRlZ29yaWFBY3Rpb25zLFxyXG4gICAgLi4ubG9qYUFjdGlvbnMsXHJcbiAgICAuLi5wcm9kdXRvQWN0aW9ucyxcclxuICAgIC4uLmNhcnJpbmhvQWN0aW9ucyxcclxuICAgIC4uLmNsaWVudGVBY3Rpb25zLFxyXG4gICAgLi4uY2hlY2tvdXRBY3Rpb25zLFxyXG4gICAgLi4ucGVkaWRvQWN0aW9uc1xyXG59OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgICBGRVRDSF9EQURPU1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgQVBJLCB2ZXJzYW8sIGxvamEgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoRGFkb3NMb2phID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL2xvamFzLyR7bG9qYX0/bG9qYT0ke2xvamF9YClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9EQURPUywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZmV0Y2hEYWRvc0xvamFcclxufTsiLCJpbXBvcnQge1xyXG4gICAgRkVUQ0hfUEVESURPUyxcclxuICAgIEZFVENIX1BFRElETyxcclxuICAgIENMRUFOX1BFRElETyxcclxuICAgIENBTkNFTEFSX1BFRElET1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7QVBJLCB2ZXJzYW8sIGxvamF9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCBlcnJvckhhbmRsaW5nIGZyb20gJy4vZXJyb3JIYW5kbGluZyc7XHJcbmltcG9ydCB7Z2V0SGVhZGVyc30gZnJvbSAnLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFBlZGlkb3MgPSAoe29mZnNldCwgbGltaXQsIHRva2VufSkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wZWRpZG9zP2xvamE9JHtsb2phfSZvZmZzZXQ9JHtvZmZzZXR9JmxpbWl0PSR7bGltaXR9YCxcclxuICAgICAgICBnZXRIZWFkZXJzKHRva2VuKVxyXG4gICAgKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goe3R5cGU6IEZFVENIX1BFRElET1MsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFBlZGlkbyA9IChpZCwgdG9rZW4pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcGVkaWRvcy8ke2lkfT9sb2phPSR7bG9qYX1gLCBnZXRIZWFkZXJzKHRva2VuKSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHt0eXBlOiBGRVRDSF9QRURJRE8sIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYW5jZWxhclBlZGlkbyA9IChpZCwgdG9rZW4sIGNiKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5kZWxldGUoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3BlZGlkb3MvJHtpZH0/bG9qYT0ke2xvamF9YCwgZ2V0SGVhZGVycyh0b2tlbikpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2ggKHt0eXBlOiBDQU5DRUxBUl9QRURJRE8sIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KTtcclxuICAgICAgICBjYihudWxsKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZSA9PiBjYiAoZXJyb3JIYW5kbGluZyhlKSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFuUGVkaWRvID0gKCkgPT4gKHt0eXBlOiBDTEVBTl9QRURJRE99KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGZldGNoUGVkaWRvcyxcclxuICAgIGZldGNoUGVkaWRvLFxyXG4gICAgY2FuY2VsYXJQZWRpZG8sXHJcbiAgICBjbGVhblBlZGlkb1xyXG59OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgICBGRVRDSF9QUk9EVVRPUyxcclxuICAgIEZFVENIX1BFU1FVSVNBLFxyXG4gICAgRkVUQ0hfUFJPRFVUT1NfUEVTUVVJU0EsXHJcbiAgICBGRVRDSF9QUk9EVVRPLFxyXG4gICAgRkVUQ0hfUFJPRFVUT19BVkFMSUFDT0VTLFxyXG4gICAgRkVUQ0hfUFJPRFVUT19WQVJJQUNPRVMsXHJcbiAgICBOT1ZBX0FWQUxJQUNBT1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgQVBJLCB2ZXJzYW8sIGxvamEgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5cclxuaW1wb3J0IHsgZ2V0SGVhZGVycyB9IGZyb20gJy4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdXRvc1BhZ2luYUluaWNpYWwgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcHJvZHV0b3MvZGlzcG9uaXZlaXM/bG9qYT0ke2xvamF9Jm9mZnNldD0kezB9JmxpbWl0PSR7NH0mc29ydFR5cGU9JHtcInByZWNvLWNyZXNjZW50ZVwifWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfUFJPRFVUT1MsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFRlcm1vID0gKHRlcm1vKSA9PiAoeyB0eXBlOiBGRVRDSF9QRVNRVUlTQSwgdGVybW8gfSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdXRvc1Blc3F1aXNhID0gKHRlcm1vLCBhdHVhbCA9IDAsIGxpbWl0ID0gMjApID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcHJvZHV0b3Mvc2VhcmNoLyR7dGVybW99P2xvamE9JHtsb2phfSZvZmZzZXQ9JHthdHVhbH0mbGltaXQ9JHtsaW1pdH1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1BST0RVVE9TX1BFU1FVSVNBLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLCB0ZXJtbyB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHV0byA9IChpZCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wcm9kdXRvcy8ke2lkfT9sb2phPSR7bG9qYX1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1BST0RVVE8sIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEF2YWxpYWNvZXMgPSAoaWQpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcHJvZHV0b3MvJHtpZH0vYXZhbGlhY29lcz9sb2phPSR7bG9qYX0maWQ9JHtpZH1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1BST0RVVE9fQVZBTElBQ09FUywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVmFyaWFjb2VzID0gKGlkKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3Byb2R1dG9zLyR7aWR9L3ZhcmlhY29lcz9sb2phPSR7bG9qYX0maWQ9JHtpZH1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1BST0RVVE9fVkFSSUFDT0VTLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgbm92YUF2YWxpYWNhbyA9ICh7IG5vbWUsIHRva2VuLCBwcm9kdXRvLCB0ZXh0bywgcG9udHVhY2FvIH0sIGNiKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSX0vJHt2ZXJzYW99L2FwaS9hdmFsaWFjb2VzP2xvamE9JHtsb2phfSZwcm9kdXRvPSR7cHJvZHV0b31gLFxyXG4gICAgICAgIHsgbm9tZSwgdGV4dG8sIHBvbnR1YWNhbyB9LFxyXG4gICAgICAgIGdldEhlYWRlcnModG9rZW4pXHJcbiAgICApLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogTk9WQV9BVkFMSUFDQU8sIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSk7XHJcbiAgICAgICAgY2IobnVsbCk7XHJcbiAgICB9KS5jYXRjaChlID0+IGNiKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZmV0Y2hQcm9kdXRvc1BhZ2luYUluaWNpYWwsXHJcbiAgICBmZXRjaFRlcm1vLFxyXG4gICAgZmV0Y2hQcm9kdXRvc1Blc3F1aXNhLFxyXG4gICAgZmV0Y2hQcm9kdXRvLFxyXG4gICAgZmV0Y2hBdmFsaWFjb2VzLFxyXG4gICAgZmV0Y2hWYXJpYWNvZXMsXHJcbiAgICBub3ZhQXZhbGlhY2FvXHJcbn07IiwiZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gXCJyZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgQVVURU5USUNBUl9UT0tFTiA9IFwiQVVURU5USUNBUl9UT0tFTlwiLFxyXG4gICAgICAgICAgICAgVVNFUiA9IFwidXNlclwiLFxyXG4gICAgICAgICAgICAgQVVURU5USUNBUiA9ICdBVVRFTlRJQ0FSJyxcclxuICAgICAgICAgICAgIEZFVENIX0NBVEVHT1JJQVMgPSBcImZldGNoX2NhdGVnb3JpYXNcIixcclxuICAgICAgICAgICAgIEZFVENIX0RBRE9TID0gJ2ZldGNoX2RhZG9zJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE9TID0gXCJGRVRDSF9QUk9EVVRPU1wiLFxyXG4gICAgICAgICAgICAgRkVUQ0hfQ0FURUdPUklBID0gJ0ZFVENIX0NBVEVHT1JJQScsXHJcbiAgICAgICAgICAgICBGRVRDSF9DQVRFR09SSUFfUFJPRFVUT1MgPSAnRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TJyxcclxuICAgICAgICAgICAgIEZFVENIX1BFU1FVSVNBID0gJ0ZFVENIX1BFU1FVSVNBJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE9TX1BFU1FVSVNBID0gJ0ZFVENIX1BST0RVVE9TX1BFU1FVSVNBJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE8gPSAnRkVUQ0hfUFJPRFVUTycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPX0FWQUxJQUNPRVMgPSAnRkVUQ0hfUFJPRFVUT19BVkFMSUFDT0VTJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE9fVkFSSUFDT0VTID0gJ0ZFVENIX1BST0RVVE9fVkFSSUFDT0VTJyxcclxuICAgICAgICAgICAgIE5PVkFfQVZBTElBQ0FPID0gJ05PVkFfQVZBTElBQ0FPJyxcclxuICAgICAgICAgICAgIFNFVF9DQVJSSU5ITyA9ICdTRVRfQ0FSUklOSE8nLFxyXG4gICAgICAgICAgICAgQ0xFQU5fQ0FSUklOSE8gPSAnQ0xFQU5fQ0FSUklOSE8nLFxyXG4gICAgICAgICAgICAgRkVUQ0hfUFJPRFVUT19DQVJSSU5ITyA9ICdGRVRDSF9QUk9EVVRPX0NBUlJJTkhPJyxcclxuICAgICAgICAgICAgIEZFVENIX1ZBUklBQ0FPX0NBUlJJTkhPID0gJ0ZFVENIX1ZBUklBQ0FPX0NBUlJJTkhPJyxcclxuICAgICAgICAgICAgIEZFVENIX1ZBTE9SX0VOVFJFR0EgPSAnRkVUQ0hfVkFMT1JfRU5UUkVHQScsXHJcbiAgICAgICAgICAgICBVUERBVEVfUVREX0NBUlQgPSAnVVBEQVRFX1FURF9DQVJUJyxcclxuICAgICAgICAgICAgIFVQREFURV9GUkVURV9DQVJUID0gJ1VQREFURV9GUkVURV9DQVJUJyxcclxuICAgICAgICAgICAgIFJFTU9WRV9QUk9EX0NBUlQgPSAnUkVNT1ZFX1BST0RfQ0FSVCcsXHJcbiAgICAgICAgICAgICBDTEVBTl9GUkVURVMgPSAnQ0xFQU5fRlJFVEVTJyxcclxuICAgICAgICAgICAgIEZFVENIX0NMSUVOVEUgPSAnRkVUQ0hfQ0xJRU5URScsXHJcbiAgICAgICAgICAgICBTRVRfRk9STSA9ICdTRVRfRk9STScsXHJcbiAgICAgICAgICAgICBDTEVBTl9GT1JNID0gJ0NMRUFOX0ZPUk0nLFxyXG4gICAgICAgICAgICAgU0VUX1RJUE9fUEFHQU1FTlRPID0gJ1NFVF9USVBPX1BBR0FNRU5UTycsXHJcbiAgICAgICAgICAgICBGRVRDSF9TRVNTSU9OX0lEID0gJ0ZFVENIX1NFU1NJT05fSUQnLFxyXG4gICAgICAgICAgICAgRkVUQ0hfU0VOREVSX0hBU0ggPSAnRkVUQ0hfU0VOREVSX0hBU0gnLFxyXG4gICAgICAgICAgICAgTk9WT19QRURJRE8gPSAnTk9WT19QRURJRE8nLFxyXG4gICAgICAgICAgICAgUEFHQVJfUEVESURPID0gJ1BBR0FSX1BFRElETycsXHJcbiAgICAgICAgICAgICBMT0dPVVRfQ0xJRU5URSA9ICdMT0dPVVRfQ0xJRU5URScsXHJcbiAgICAgICAgICAgICBERVNBVVRFTlRJQ0FSID0gJ0RFU0FVVEVOVElDQVInLFxyXG4gICAgICAgICAgICAgRkVUQ0hfUEVESURPUyA9ICdGRVRDSF9QRURJRE9TJyxcclxuICAgICAgICAgICAgIEZFVENIX1BFRElETyA9ICdGRVRDSF9QRURJRE8nLFxyXG4gICAgICAgICAgICAgQ0xFQU5fUEVESURPID0gJ0NMRUFOX1BFRElETycsXHJcbiAgICAgICAgICAgICBDQU5DRUxBUl9QRURJRE8gPSAnQ0FOQ0VMQVJfUEVESURPJzsiLCJpbXBvcnQgYWN0aW9ucyBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJztcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi9mZXRjaCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxscyA9IFtdLCBjdHgpe1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtcclxuICAgICAgICBmZXRjaERhdGEoYWN0aW9ucy5mZXRjaENhdGVnb3JpYXMsIGN0eCksXHJcbiAgICAgICAgZmV0Y2hEYXRhKGFjdGlvbnMuZmV0Y2hEYWRvc0xvamEsIGN0eCksXHJcbiAgICAgICAgLi4uY2FsbHMubWFwKChhY3Rpb24pID0+IGZldGNoRGF0YShhY3Rpb24sIGN0eCkpXHJcbiAgICBdKTtcclxufSIsImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBfc2F2ZUNhcnQgPSAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IGNhcnQgPSBnZXRDYXJ0KCk7XHJcblxyXG4gICAgbGV0IGZvdW5kO1xyXG4gICAgY2FydCA9IGNhcnQubWFwKChfaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmKFxyXG4gICAgICAgICAgICBfaXRlbS5wcm9kdXRvID09PSBpdGVtLnByb2R1dG8gJiZcclxuICAgICAgICAgICAgX2l0ZW0udmFyaWFjYW8gPT09IGl0ZW0udmFyaWFjYW8gXHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5faXRlbSwgcXVhbnRpZGFkZTogTnVtYmVyKF9pdGVtLnF1YW50aWRhZGUpICsgTnVtYmVyKGl0ZW0ucXVhbnRpZGFkZSkgfVxyXG4gICAgICAgIH0gZWxzZSByZXR1cm4gX2l0ZW07XHJcbiAgICB9KTtcclxuICAgIGlmKCFmb3VuZCkgY2FydC5wdXNoKGl0ZW0pO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQGNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2FydCA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJAY2FydFwiKSB8fCBcIltdXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFuQ2FydCA9ICgpID0+IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiQGNhcnRcIik7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2FydCA9IChpdGVtLCBnb1RvQ2FydCA9IHRydWUpID0+IHtcclxuICAgIF9zYXZlQ2FydChpdGVtKTtcclxuICAgIGlmKGdvVG9DYXJ0KSBSb3V0ZXIucHVzaChcIi9jYXJyaW5ob1wiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb3VudEl0ZW1zQ2FydCA9ICgpID0+IFxyXG4gICAgICAgICAgICBnZXRDYXJ0KCkucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgKGMsIHsgcXVhbnRpZGFkZSB9KSA9PiBcclxuICAgICAgICAgICAgICAgIGMgKyAoTnVtYmVyKHF1YW50aWRhZGUpIHx8IDEpICwgMCk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2FydCA9IChpbmRleCkgPT4ge1xyXG4gICAgbGV0IGNhcnQgPSBnZXRDYXJ0KCk7XHJcbiAgICBjYXJ0ID0gY2FydC5yZWR1Y2UoXHJcbiAgICAgICAgKGFsbCwgaXRlbSwgX2luZGV4KSA9PlxyXG4gICAgICAgIGluZGV4ICE9PSBfaW5kZXggPyBhbGwuY29uY2F0KFtpdGVtXSkgOiBhbGwsIFtdXHJcbiAgICApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJAY2FydFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGdldENhcnQsXHJcbiAgICBhZGRDYXJ0LFxyXG4gICAgY2xlYW5DYXJ0LFxyXG4gICAgZ2V0Q291bnRJdGVtc0NhcnQsXHJcbiAgICByZW1vdmVDYXJ0XHJcbn07IiwiaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICBpZihwcm9jZXNzLmJyb3dzZXIpIGNvb2tpZS5zZXQoa2V5LCB2YWx1ZSwgeyBleHBpcmVzOiAxLCBwYXRoOiBcIi9cIiB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IChrZXkpID0+IHtcclxuICAgIGlmKHByb2Nlc3MuYnJvd3NlcikgY29va2llLnJlbW92ZShrZXksIHsgZXhwaXJlczogMSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChrZXksIHJlcSkgPT4ge1xyXG4gICAgcmV0dXJuIHByb2Nlc3MuYnJvd3NlciA/IFxyXG4gICAgICAgICAgICBnZXRDb29raWVGcm9tQnJvd3NlcihrZXkpIDpcclxuICAgICAgICAgICAgZ2V0Q29va2llRnJvbVNlcnZlcihrZXksIHJlcSlcclxufVxyXG5cclxuY29uc3QgZ2V0Q29va2llRnJvbUJyb3dzZXIgPSBrZXkgPT4gY29va2llLmdldChrZXkpO1xyXG5cclxuY29uc3QgZ2V0Q29va2llRnJvbVNlcnZlciA9IChrZXksIHJlcSkgPT4ge1xyXG4gICAgaWYoIXJlcS5oZWFkZXJzLmNvb2tpZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IF9jb29raWUgPSByZXEuaGVhZGVycy5jb29raWUuc3BsaXQoXCI7XCIpLmZpbmQoYyA9PiBjLnRyaW0oKS5zdGFydHNXaXRoKGAke2tleX09YCkpO1xyXG4gICAgcmV0dXJuIF9jb29raWUgPyBfY29va2llLnNwbGl0KFwiPVwiKVsxXSA6IHVuZGVmaW5lZDtcclxufSIsImV4cG9ydCBjb25zdCBmZXRjaERhdGEgPSAoYWN0aW9uLCBjdHgpID0+IG5ldyBQcm9taXNlKGFjdGlvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBjdHguc3RvcmUuZGlzcGF0Y2gocmVzcG9uc2UpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7IiwiZXhwb3J0IGNvbnN0IGZvcm1hdE1vbmV5ID0gKHZhbHVlKSA9PiBcIlIkIFwiICsgTnVtYmVyKHZhbHVlIHx8IDApLnRvRml4ZWQoMikucmVwbGFjZShcIi5cIixcIixcIik7XHJcblxyXG5leHBvcnQgY29uc3QgY29kaWdvc0NvcnJlaW9zID0ge1xyXG4gICAgXCI0MDAxMFwiOiBcIlNlZGV4XCIsXHJcbiAgICBcIjQxMTA2XCI6IFwiUEFDXCJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBFU1RBRE9TID0ge1xyXG4gICAgXCJBQ1wiOiBcIkFjcmVcIixcclxuICAgIFwiQUxcIjogXCJBbGFnb2FzXCIsXHJcbiAgICBcIkFQXCI6IFwiQW1hcMOhXCIsXHJcbiAgICBcIkFNXCI6IFwiQW1hem9uYXNcIixcclxuICAgIFwiQkFcIjogXCJCYWhpYVwiLFxyXG4gICAgXCJDRVwiOiBcIkNlYXLDoVwiLFxyXG4gICAgXCJERlwiOiBcIkRpc3RyaXRvIEZlZGVyYWxcIixcclxuICAgIFwiRVNcIjogXCJFc3DDrXJpdG8gU2FudG9cIixcclxuICAgIFwiR09cIjogXCJHb2nDoXNcIixcclxuICAgIFwiTUFcIjogXCJNYXJhbmjDo29cIixcclxuICAgIFwiTVRcIjogXCJNYXRvIEdyb3Nzb1wiLFxyXG4gICAgXCJNU1wiOiBcIk1hdG8gR3Jvc3NvIGRvIFN1bFwiLFxyXG4gICAgXCJNR1wiOiBcIk1pbmFzIEdlcmFpc1wiLFxyXG4gICAgXCJQQVwiOiBcIlBhcsOhXCIsXHJcbiAgICBcIlBCXCI6IFwiUGFyYcOtYmFcIixcclxuICAgIFwiUFJcIjogXCJQYXJhbsOhXCIsXHJcbiAgICBcIlBFXCI6IFwiUGVybmFtYnVjb1wiLFxyXG4gICAgXCJQSVwiOiBcIlBpYXXDrVwiLFxyXG4gICAgXCJSSlwiOiBcIlJpbyBkZSBKYW5laXJvXCIsXHJcbiAgICBcIlJOXCI6IFwiUmlvIEdyYW5kZSBkbyBOb3J0ZVwiLFxyXG4gICAgXCJSU1wiOiBcIlJpbyBHcmFuZGUgZG8gU3VsXCIsXHJcbiAgICBcIlJPXCI6IFwiUm9uZMO0bmlhXCIsXHJcbiAgICBcIlJSXCI6IFwiUm9yYWltYVwiLFxyXG4gICAgXCJTQ1wiOiBcIlNhbnRhIENhdGFyaW5hXCIsXHJcbiAgICBcIlNQXCI6IFwiU8OjbyBQYXVsb1wiLFxyXG4gICAgXCJTRVwiOiBcIlNlcmdpcGVcIixcclxuICAgIFwiVE9cIjogXCJUb2NhbnRpbnNcIlxyXG59OyIsImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJztcclxuaW1wb3J0IHtnZXRDb29raWV9IGZyb20gJy4vY29va2llJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGN0eCkge1xyXG4gICAgaWYgKGN0eC5pc1NlcnZlcikge1xyXG4gICAgICAgIGN0eC5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnJlYXV0aGVudGljYXRlKGdldENvb2tpZShcInRva2VuXCIsIGN0eC5yZXEpKSk7XHJcbiAgICB9IGVsc2UgaWYgKGN0eC5zdG9yZSkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gY3R4LnN0b3JlLmdldFN0YXRlKCkuYXV0aC50b2tlbjtcclxuICAgICAgICBpZiAoIXRva2VuICYmIChcclxuICAgICAgICAgICAgY3R4LnBhdGhuYW1lLmluY2x1ZGVzKFwiL2FyZWEtY2xpZW50ZS9wZWRpZG9cIikgfHxcclxuICAgICAgICAgICAgY3R4LnBhdGhuYW1lLmluY2x1ZGVzKFwiL2FyZWEtY2xpZW50ZS9kYWRvc1wiKSB8fCBcclxuICAgICAgICAgICAgY3R4LnBhdGhuYW1lLmluY2x1ZGVzKFwiL2FyZWEtY2xpZW50ZS9hbHRlcmFyLXNlbmhhXCIpXHJcbiAgICAgICAgKSkgUm91dGVyLnB1c2goXCIvYXJlYS1jbGllbnRlXCIpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==