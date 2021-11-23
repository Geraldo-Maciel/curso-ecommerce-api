module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/checkout.js");
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

/***/ "./components/Alert/Geral.js":
/*!***********************************!*\
  !*** ./components/Alert/Geral.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Alert\\Geral.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class AlertGeral extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    if (!this.props.aviso) return null;
    return __jsx("div", {
      className: "alert alert-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, this.props.aviso.message));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AlertGeral);

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

/***/ "./components/Inputs/FormRadio.js":
/*!****************************************!*\
  !*** ./components/Inputs/FormRadio.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormRadio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Inputs\\FormRadio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class FormRadio extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      name,
      cheked,
      label,
      onChange
    } = this.props;
    return __jsx("div", {
      className: "form-input form-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("input", {
      type: "radio",
      checked: cheked,
      name: name,
      onChange: onChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }), __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, " \xA0 ", label, " "));
  }

}

/***/ }),

/***/ "./components/Inputs/FormSimples.js":
/*!******************************************!*\
  !*** ./components/Inputs/FormSimples.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormSimples; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Inputs\\FormSimples.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class FormSimples extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      value,
      name,
      placeholder,
      type,
      label,
      onChange,
      erro
    } = this.props;
    return __jsx("div", {
      className: "form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, label && __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 27
      }
    }, " ", label, " "), __jsx("input", {
      type: type,
      value: value,
      name: name,
      placeholder: placeholder,
      onChange: onChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }), erro && __jsx("small", {
      className: "erro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }
    }, " ", erro, " "));
  }

}

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

/***/ "./containers/Carrinho/ListaDeProdutos.js":
/*!************************************************!*\
  !*** ./containers/Carrinho/ListaDeProdutos.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Carrinho\\ListaDeProdutos.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class ListaDeProdutos extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  renderCabecalhoCarrinho(semAlteracoes) {
    return __jsx("div", {
      className: "carrinho-cabecalho no-mb-flex flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "headline flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, __jsx("h3", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }, "Quantidade")), __jsx("div", {
      className: "headline flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, __jsx("h3", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, "Pre\xE7o Unit\xE1rio")), __jsx("div", {
      className: "headline flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, __jsx("h3", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }, "Pre\xE7o Total")), !semAlteracoes && __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 38
      }
    }));
  }

  changeQuantidade(e, quantidade, item, index) {
    //        console.log(e.target.value, quantidade, item.variacao.quantidade);
    if (Number(e.target.value) < 1) return;
    let novaQuantidade = Number(e.target.value);
    let change = novaQuantidade - quantidade;

    if (novaQuantidade >= item.variacao.quantidade) {
      return alert("Não temos essa quantidade em estoque.");
    }

    Object(_utils_cart__WEBPACK_IMPORTED_MODULE_5__["addCart"])({
      produto: item.produto._id,
      variacao: item.variacao._id,
      quantidade: change,
      precoUnitario: item.precoUnitario
    }, false);
    this.props.updateQuantidade(change, index);
  }

  removerProdutoCarrinho(index) {
    if (window.confirm("Você deseja realmente remover esse produto?")) {
      this.props.removerProduto(index);
    }
  }

  renderProduto(item, semAlteracoes, index) {
    if (!item.variacao || !item.variacao._id || !item.produto || !item.produto._id) return null;
    const foto = item.variacao.fotos && item.variacao.fotos.length > 0 ? item.variacao.fotos[0] : item.produto.fotos[0];
    const nome = item.produto.titulo + " - " + item.variacao.nome;
    const {
      quantidade,
      precoUnitario
    } = item;
    return __jsx("div", {
      key: index,
      className: "carrinho-item flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-4 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "produto-image flex-2 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: _config__WEBPACK_IMPORTED_MODULE_1__["baseImg"] + foto,
      alt: nome,
      width: "100px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "produto-titulo flex-4 flex flex-start",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }, __jsx("h3", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, nome))), __jsx("div", {
      className: "flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }, semAlteracoes ? __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 26
      }
    }, quantidade) : __jsx("input", {
      type: "number",
      value: quantidade,
      className: "produto-quantidade",
      onChange: e => this.changeQuantidade(e, quantidade, item, index),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 26
      }
    })), __jsx("div", {
      className: "flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(precoUnitario))), __jsx("div", {
      className: "flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(precoUnitario * quantidade))), !semAlteracoes && __jsx("div", {
      className: "flex-1 flex flex-center",
      onClick: () => this.removerProdutoCarrinho(index),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "btn-remover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 25
      }
    }, "Remover")));
  }

  renderProdutos(semAlteracoes) {
    return this.props.carrinho.map((item, index) => this.renderProduto(item, semAlteracoes, index));
  }

  render() {
    const {
      semAlteracoes,
      carrinho
    } = this.props;
    return __jsx("div", {
      className: "Lista-De-Produtos flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }, this.renderCabecalhoCarrinho(semAlteracoes), carrinho && this.renderProdutos(semAlteracoes));
  }

}

const mapStateToProps = state => ({
  carrinho: state.carrinho.carrinho
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(ListaDeProdutos));

/***/ }),

/***/ "./containers/Checkout/CheckoutButton.js":
/*!***********************************************!*\
  !*** ./containers/Checkout/CheckoutButton.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
/* harmony import */ var _components_Alert_Geral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Alert/Geral */ "./components/Alert/Geral.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\CheckoutButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class CheckoutButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      disabled: false,
      aviso: null
    });

    _defineProperty(this, "toggleDisabled", () => this.setState({
      disabled: !this.state.disabled
    }));
  }

  calcularValorTotal(carrinho, freteSelecionado) {
    //        console.log('calcvltotal-frete selecionado: ', freteSelecionado);
    const valorProdutos = carrinho.reduce((all, item) => all + Number(item.precoUnitario) * Number(item.quantidade), 0); //        const valorFrete = Number(freteSelecionado.Valor.replace(',','.'));

    const valorFrete = freteSelecionado ? Number(freteSelecionado.Valor.replace(',', '.')) : 0;
    return valorProdutos + valorFrete;
  }

  validarFormulario() {
    const {
      nome,
      CPF,
      dataDeNascimento,
      telefone,
      local,
      numero,
      bairro,
      cidade,
      estado,
      CEP,
      dadosCobranca,
      dadosEntregaIgualDadosCobranca,
      CPFboleto,
      numeroCartao,
      nomeCartao,
      mesCartao,
      anoCartao,
      parcelasCartaoSelecionada,
      CVVCartao,
      credit_card_token
    } = this.props.form;
    const {
      tipoPagamentoSelecionado
    } = this.props;
    let temErro = false;
    if (!nome) temErro = true;
    if (!CPF || CPF.length !== 14) temErro = true;
    if (CPF && CPF.length === 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validateCPF"])(CPF)) temErro = true;
    if (!dataDeNascimento || dataDeNascimento.length !== 10) temErro = true;
    if (!telefone || telefone.length < 11) temErro = true;
    if (!local) temErro = true;
    if (!numero) temErro = true;
    if (!bairro) temErro = true;
    if (!cidade) temErro = true;
    if (!estado) temErro = true;
    if (!CEP || CEP.length !== 9) temErro = true;

    if (!dadosEntregaIgualDadosCobranca) {
      if (!dadosCobranca.local) temErro = true;
      if (!dadosCobranca.numero) temErro = true;
      if (!dadosCobranca.bairro) temErro = true;
      if (!dadosCobranca.cidade) temErro = true;
      if (!dadosCobranca.estado) temErro = true;
      if (!dadosCobranca.CEP || dadosCobranca.CEP.length !== 9) temErro = true;
    }

    if (tipoPagamentoSelecionado === "boleto") {
      if (!CPFboleto && !CPF) temErro = true;
      if (CPFboleto && CPFboleto.length !== 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validateCPF"])(CPFboleto)) temErro = true;
    } else {
      if (!numeroCartao || numeroCartao.length !== 19) temErro = true;
      if (!nomeCartao) temErro = true;
      if (!mesCartao || mesCartao.length !== 2) temErro = true;
      if (!anoCartao || anoCartao.length !== 4) temErro = true;
      if (!parcelasCartaoSelecionada) temErro = true;
      if (!credit_card_token) temErro = true;
      if (!CVVCartao || CVVCartao.length !== 3) temErro = true;
    } //        console.log('tem erro: ', temErro);


    return !temErro;
  }

  validate() {
    const {
      freteSelecionado,
      tipoPagamentoSelecionado
    } = this.props;
    const validarFormulario = this.validarFormulario();
    return validarFormulario && freteSelecionado && tipoPagamentoSelecionado;
  }

  handleSubmit() {
    const {
      form,
      freteSelecionado,
      token,
      senderHash,
      tipoPagamentoSelecionado
    } = this.props; //        console.log('handlesubmit-frete selecionado: ', freteSelecionado);

    const carrinho = Object(_utils_cart__WEBPACK_IMPORTED_MODULE_3__["getCart"])();
    const valorTotal = this.calcularValorTotal(carrinho, freteSelecionado); //        console.log('valor total: ', valorTotal);

    if (!this.validate()) return null; //        console.log('passou 3');

    this.toggleDisabled(); //        console.log('passou 4');

    this.props.novoPedido(form, freteSelecionado, tipoPagamentoSelecionado, valorTotal, token, senderHash, carrinho, error => {
      if (error) {
        this.setState({
          aviso: {
            status: false,
            message: error.message
          }
        });
      }

      this.toggleDisabled();
    });
  }

  render() {
    //        console.log('hender-frete selecionado: ', this.props.freteSelecionado);
    return __jsx("div", {
      className: "flex flex-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }, __jsx(_components_Alert_Geral__WEBPACK_IMPORTED_MODULE_5__["default"], {
      aviso: this.state.aviso,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }), __jsx("button", {
      className: "btn btn-cta btn-success",
      disabled: this.state.disabled,
      onClick: () => this.handleSubmit(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }
    }, this.state.disabled ? "ENVIANDO..." : "CONCLUIR PEDIDO")));
  }

}

const mapStateToProps = state => ({
  carrinho: state.carrinho.carrinho,
  usuario: state.auth.usuario,
  cliente: state.cliente.cliente,
  freteSelecionado: state.carrinho.freteSelecionado,
  form: state.checkout.form,
  token: state.auth.token,
  senderHash: state.checkout.senderHash,
  tipoPagamentoSelecionado: state.checkout.tipoPagamentoSelecionado
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_2__["default"])(CheckoutButton));

/***/ }),

/***/ "./containers/Checkout/DadosCliente.js":
/*!*********************************************!*\
  !*** ./containers/Checkout/DadosCliente.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cliente_DadosCliente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Cliente/DadosCliente */ "./containers/Cliente/DadosCliente.js");
/* harmony import */ var _Cliente_ClienteLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cliente/ClienteLogin */ "./containers/Cliente/ClienteLogin.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\DadosCliente.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class DadosCliente extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    this.fetchCliente();
  }

  componentDidUpdate() {
    this.fetchCliente();
  }

  fetchCliente() {
    const {
      usuario,
      token,
      cliente
    } = this.props;

    if (usuario && token && !cliente) {
      this.props.fetchCliente(usuario._id, token);
    }
  }

  render() {
    const {
      usuario,
      permissaoInicial,
      permitir
    } = this.props;
    return usuario || permissaoInicial ? __jsx(_Cliente_DadosCliente__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }) : __jsx(_Cliente_ClienteLogin__WEBPACK_IMPORTED_MODULE_2__["default"], {
      permitir: permitir,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    });
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente.cliente
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(DadosCliente));

/***/ }),

/***/ "./containers/Checkout/DadosEntrega.js":
/*!*********************************************!*\
  !*** ./containers/Checkout/DadosEntrega.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\DadosEntrega.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class DadosEntregaContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      erros: {
        dadosCobranca: {}
      }
    });

    _defineProperty(this, "onChange", (field, value, prefix) => this.props.setForm({
      [field]: value
    }, prefix).then(() => this.validate()));

    _defineProperty(this, "onChangeCEP", (field, value, prefix) => {
      this.props.setForm({
        [field]: value
      }, prefix).then(() => {
        this.validate();

        if (value.length === 9) {
          axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`https://viacep.com.br/ws/${value.replace('-', '')}/json/unicode`).then(response => {
            this.props.setForm({
              "local": response.data["logradouro"],
              "bairro": response.data["bairro"],
              "cidade": response.data["localidade"],
              "estado": response.data["uf"]
            }, prefix).then(() => this.validate());
          }).catch(e => console.log(e));
        }
      });
    });
  }

  componentDidMount() {
    this.fetchCliente();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.cliente && this.props.cliente) {
      this.fetchCliente();
    }
  }

  fetchCliente() {
    const {
      cliente
    } = this.props;
    this.props.setForm({
      dadosEntregaIgualDadosCobranca: true,
      local: cliente ? cliente.endereco.local : "",
      numero: cliente ? cliente.endereco.numero : "",
      bairro: cliente ? cliente.endereco.bairro : "",
      complemento: cliente ? cliente.endereco.complemento : "",
      cidade: cliente ? cliente.endereco.cidade : "",
      estado: cliente ? cliente.endereco.estado : "",
      CEP: cliente ? cliente.endereco.CEP : "",
      dadosCobranca: {
        local: cliente ? cliente.endereco.local : "",
        numero: cliente ? cliente.endereco.numero : "",
        bairro: cliente ? cliente.endereco.bairro : "",
        complemento: cliente ? cliente.endereco.complemento : "",
        cidade: cliente ? cliente.endereco.cidade : "",
        estado: cliente ? cliente.endereco.estado : "",
        CEP: cliente ? cliente.endereco.CEP : ""
      }
    });
  }

  validate() {
    const {
      dadosEntregaIgualDadosCobranca,
      local,
      numero,
      bairro,
      cidade,
      estado,
      CEP,
      dadosCobranca
    } = this.props.form;
    const erros = {
      dadosCobranca: {}
    };
    if (!local) erros.local = "Preencha aqui com o seu endereço";
    if (!numero) erros.numero = "Preencha aqui com o seu número";
    if (!bairro) erros.bairro = "Preencha aqui com o seu bairro";
    if (!cidade) erros.cidade = "Preencha aqui com a sua cidade";
    if (!estado) erros.estado = "Selecione o seu estado";
    if (!CEP || CEP.length !== 9) erros.CEP = "Digite aqui seu CEP";

    if (!dadosEntregaIgualDadosCobranca) {
      if (!dadosCobranca.local) erros.dadosCobranca.local = "Preencha aqui com o seu endereço";
      if (!dadosCobranca.numero) erros.dadosCobranca.numero = "Preencha aqui com o seu número";
      if (!dadosCobranca.bairro) erros.dadosCobranca.bairro = "Preencha aqui com o seu bairro";
      if (!dadosCobranca.cidade) erros.dadosCobranca.cidade = "Preencha aqui com a sua cidade";
      if (!dadosCobranca.estado) erros.dadosCobranca.estado = "Selecione o seu estado";
      if (!dadosCobranca.CEP || dadosCobranca.CEP.length !== 9) erros.dadosCobranca.CEP = "Digite aqui seu CEP";
    }

    this.setState({
      erros
    });
    return Object.keys(erros).length === 1 && Object.keys(erros.dadosCobranca).length === 0;
  }

  renderDadosDeEntrega() {
    if (!this.props.form) return null;
    const {
      dadosEntregaIgualDadosCobranca,
      local,
      numero,
      bairro,
      complemento,
      cidade,
      estado,
      CEP
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1 flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, __jsx("div", {
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
    }, "DADOS DE ENTREGA")), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: CEP || "",
      erro: erros.CEP,
      name: "CEP",
      placeholder: "12345-789",
      label: "CEP",
      onChange: e => this.onChangeCEP("CEP", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["formatCEP"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: local || "",
      erro: erros.local,
      name: "local",
      placeholder: "Rua, Avenida, ...",
      label: "Endere\xE7o (Rua, Avenida,..)",
      onChange: e => this.onChange("local", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: numero || "",
      erro: erros.numero,
      name: "numero",
      placeholder: "9999",
      label: "N\xFAmero",
      onChange: e => this.onChange("numero", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["formatNumber"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: bairro || "",
      erro: erros.bairro,
      name: "bairro",
      placeholder: "Bairro",
      label: "Bairro",
      onChange: e => this.onChange("bairro", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: complemento || "",
      erro: erros.complemento,
      name: "complemento",
      placeholder: "Complemento",
      label: "Complemento",
      onChange: e => this.onChange("complemento", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: cidade || "",
      erro: erros.cidade,
      name: "cidade",
      placeholder: "Cidade",
      label: "Cidade",
      onChange: e => this.onChange("cidade", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex vertical form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 21
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 25
      }
    }, "Estado"), __jsx("select", {
      value: estado,
      onChange: e => this.onChange("estado", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 25
      }
    }, __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 29
      }
    }, "Selecione..."), Object.keys(_utils__WEBPACK_IMPORTED_MODULE_6__["ESTADOS"]).map(abbr => __jsx("option", {
      key: abbr,
      value: abbr,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 67
      }
    }, _utils__WEBPACK_IMPORTED_MODULE_6__["ESTADOS"][abbr]))), erros.estado && __jsx("small", {
      className: "erro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 44
      }
    }, erros.estado))), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }
    }), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }
    }, __jsx("input", {
      //                        checked={dadosEntregaIgualDadosCobranca || true} 
      checked: dadosEntregaIgualDadosCobranca,
      type: "checkbox",
      onChange: () => this.props.setForm({
        "dadosEntregaIgualDadosCobranca": !dadosEntregaIgualDadosCobranca
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 21
      }
    }), __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 21
      }
    }, "\xA0Os dados de entrega s\xE3o iguais aos dados de cobran\xE7a")));
  }

  renderDadosDeCobranca() {
    if (!this.props.form || !this.props.form.dadosCobranca) return null;
    const {
      local,
      numero,
      bairro,
      complemento,
      cidade,
      estado,
      CEP
    } = this.props.form.dadosCobranca;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1 flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 21
      }
    }, "DADOS DE COBRAN\xC7A")), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: CEP || "",
      erro: erros.dadosCobranca.CEP,
      name: "CEP",
      placeholder: "12345-789",
      label: "CEP",
      onChange: e => this.onChangeCEP("CEP", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["formatCEP"])(e.target.value), 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: local || "",
      erro: erros.dadosCobranca.local,
      name: "local",
      placeholder: "Rua, Avenida, ...",
      label: "Endere\xE7o (Rua, Avenida,..)",
      onChange: e => this.onChange("local", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: numero || "",
      erro: erros.dadosCobranca.numero,
      name: "numero",
      placeholder: "9999",
      label: "N\xFAmero",
      onChange: e => this.onChange("numero", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["formatNumber"])(e.target.value), 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: bairro || "",
      erro: erros.dadosCobranca.bairro,
      name: "bairro",
      placeholder: "Bairro",
      label: "Bairro",
      onChange: e => this.onChange("bairro", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: complemento || "",
      erro: erros.dadosCobranca.complemento,
      name: "complemento",
      placeholder: "Complemento",
      label: "Complemento",
      onChange: e => this.onChange("complemento", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: cidade || "",
      erro: erros.dadosCobranca.cidade,
      name: "cidade",
      placeholder: "Cidade",
      label: "Cidade",
      onChange: e => this.onChange("cidade", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex vertical form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 21
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 25
      }
    }, "Estado"), __jsx("select", {
      value: estado,
      onChange: e => this.onChange("estado", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 25
      }
    }, __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 29
      }
    }, "Selecione..."), Object.keys(_utils__WEBPACK_IMPORTED_MODULE_6__["ESTADOS"]).map(abbr => __jsx("option", {
      key: abbr,
      value: abbr,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 67
      }
    }, _utils__WEBPACK_IMPORTED_MODULE_6__["ESTADOS"][abbr]))), erros.dadosCobranca.estado && __jsx("small", {
      className: "erro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 58
      }
    }, erros.dadosCobranca.estado))));
  }

  render() {
    const {
      dadosEntregaIgualDadosCobranca
    } = this.props.form;
    return __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 13
      }
    }, this.renderDadosDeEntrega(), !dadosEntregaIgualDadosCobranca && this.renderDadosDeCobranca());
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  cliente: state.cliente.cliente,
  form: state.checkout.form
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(DadosEntregaContainer));

/***/ }),

/***/ "./containers/Checkout/DadosFrete.js":
/*!*******************************************!*\
  !*** ./containers/Checkout/DadosFrete.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormRadio */ "./components/Inputs/FormRadio.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\DadosFrete.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class DadosFrete extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const {
      form
    } = this.props;

    if (form) {
      this.props.calcularFrete(form.CEP, Object(_utils_cart__WEBPACK_IMPORTED_MODULE_4__["getCart"])());
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.form.CEP !== this.props.form.CEP && this.props.form.CEP.length === 9) {
      this.props.calcularFrete(this.props.form.CEP, Object(_utils_cart__WEBPACK_IMPORTED_MODULE_4__["getCart"])());
    }
  }

  selecionarFrete(frete) {
    this.props.selecionarFrete(frete);
  }

  render() {
    const {
      fretes,
      freteSelecionado
    } = this.props; //        console.log('fretes: ', fretes);
    //        console.log('dados frete-frete selecionado: ', freteSelecionado);

    return __jsx("div", {
      className: "Dados-Frete",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }, "M\xC9TODOS DE ENTREGA"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, (fretes || []).map((frete, index) => __jsx("div", {
      className: "flex-1",
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }, __jsx(_components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "frete_selecionado",
      checked: freteSelecionado ? freteSelecionado.Codigo === frete.Codigo : false,
      onChange: () => this.selecionarFrete(frete),
      label: `
                                        ${_utils__WEBPACK_IMPORTED_MODULE_5__["codigosCorreios"][frete.Codigo]} 
                                        (${frete.PrazoEntrega} dias úteis) - 
                                        ${Object(_utils__WEBPACK_IMPORTED_MODULE_5__["formatMoney"])(frete.Valor.replace(',', '.'))}
                                    `,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }
    })))));
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  carrinho: state.carrinho.carrinho,
  cliente: state.cliente.cliente,
  form: state.checkout.form,
  fretes: state.carrinho.fretes,
  freteSelecionado: state.carrinho.freteSelecionado
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(DadosFrete));

/***/ }),

/***/ "./containers/Checkout/DadosPagamento.js":
/*!***********************************************!*\
  !*** ./containers/Checkout/DadosPagamento.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormRadio */ "./components/Inputs/FormRadio.js");
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\DadosPagamento.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class DadosPagamento extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      erros: {}
    });

    _defineProperty(this, "onChange", (field, value) => this.props.setForm({
      [field]: value
    }).then(() => this.validate()));
  }

  componentDidMount() {
    this.props.getSessionPagamento();
  }

  componentDidUpdate(prevProps) {
    const {
      numeroCartao,
      mesCartao,
      anoCartao,
      CVVCartao,
      credit_card_token,
      bandeira_cartao,
      parcelasCartao
    } = this.props.form;

    if (!bandeira_cartao && numeroCartao && numeroCartao.split(' ').join('').length > 7) {
      this.getBrand();
    }

    if (!credit_card_token && numeroCartao && numeroCartao.split(' ').join('').length === 16 && mesCartao && mesCartao.length === 2 && anoCartao && anoCartao.length === 4 && CVVCartao && CVVCartao.length === 3 && bandeira_cartao) this.submitCartaoHash();
    if (!parcelasCartao && bandeira_cartao || parcelasCartao && bandeira_cartao && prevProps.freteSelecionado !== this.props.freteSelecionado) this.getParcelas();
  }

  getBrand() {
    const {
      numeroCartao
    } = this.props.form;
    PagSeguroDirectPayment.getBrand({
      cardBin: numeroCartao.split(' ').join('').slice(0, 6),
      success: r => this.props.setForm({
        bandeira_cartao: r.brand
      }),
      error: r => console.log(r)
    });
  }

  submitCartaoHash() {
    const {
      numeroCartao,
      mesCartao,
      anoCartao,
      CVVCartao,
      bandeira_cartao
    } = this.props.form;
    const params = {
      cardNumber: numeroCartao.split(' ').join(''),
      brand: bandeira_cartao.name,
      cvv: CVVCartao,
      expirationMonth: mesCartao,
      expirationYear: anoCartao,
      success: r => {
        this.props.setForm({
          credit_card_token: r.card.token
        });
      },
      error: r => console.log(r)
    };
    PagSeguroDirectPayment.createCardToken(params);
  }

  getParcelas() {
    const {
      freteSelecionado,
      carrinho
    } = this.props;
    const {
      bandeira_cartao
    } = this.props.form;
    let valorTotal = carrinho.reduce((all, item) => all + Number(item.precoUnitario) * Number(item.quantidade), 0);
    let freteValor = Number(freteSelecionado.Valor.replace(',', '.'));
    PagSeguroDirectPayment.getInstallments({
      amount: valorTotal + freteValor,
      maxInstallmentNoInterest: 6,
      maxInstallment: 6,
      brand: bandeira_cartao.name,
      success: data => {
        this.props.setForm({
          parcelasCartao: data.installments
        });
        this.props.setForm({
          parcelasCartaoSelecionada: data.installments[bandeira_cartao.name][0]
        });
      },
      error: r => console.log(r)
    });
  }

  renderOpcoesPagamento() {
    const {
      tipoPagamentoSelecionado
    } = this.props;
    return __jsx("div", {
      className: "flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "tipo_pagamento_selecionado",
      checked: tipoPagamentoSelecionado === 'boleto',
      onChange: () => this.props.setTipoPagamento("boleto"),
      label: "Boleto Banc\xE1rio",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "tipo_pagamento_selecionado",
      checked: tipoPagamentoSelecionado === 'cartao',
      onChange: () => this.props.setTipoPagamento("cartao"),
      label: "Cart\xE3o de Cr\xE9dito",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    })));
  }

  validate() {
    const {
      tipoPagamentoSelecionado
    } = this.props;
    const {
      CPF,
      CPFboleto,
      numeroCartao,
      nomeCartao,
      mesCartao,
      anoCartao,
      parcelasCartaoSelecionada,
      CVVCartao
    } = this.props.form;
    const erros = {};

    if (tipoPagamentoSelecionado === "boleto") {
      if (!CPFboleto && !CPF) erros.CPFboleto = "Preencha aqui com o seu CPF";
      if (CPFboleto && CPFboleto.length !== 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_7__["validateCPF"])(CPFboleto)) erros.CPFboleto = "Preencha aqui com o seu CPF corretamente";
    }

    ;

    if (tipoPagamentoSelecionado === "cartao") {
      if (!numeroCartao || numeroCartao.length !== 19) erros.numeroCartao = "Preencha aqui com o número do seu cartão";
      if (!nomeCartao) erros.nomeCartao = "Preencha aqui com o nome que está no cartão";
      if (!mesCartao || mesCartao.length !== 2) erros.mesCartao = "Preencha aqui com o mês de vencimento do cartão";
      if (!anoCartao || anoCartao.length !== 4) erros.anoCartao = "Preencha aqui com o ano de vencimento do cartão";
      if (!parcelasCartaoSelecionada) erros.parcelasCartaoSelecionada = "Selecione uma forma de pagamento";
      if (!CVVCartao || CVVCartao.length !== 3) erros.CVVCartao = "Preencha aqui com o código de segurança do cartão";
    }

    ;
    this.setState({
      erros
    });
    return !(Object.keys(erros).length > 0);
  }

  renderPagamentoComBoleto() {
    const {
      CPF,
      CPFboleto
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "Dados-Pagamento",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: CPFboleto || CPF,
      name: "CPF",
      erro: erros.CPFboleto,
      placeholder: "CPF",
      label: "CPF",
      onChange: e => this.onChange("CPFboleto", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatCPF"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }
    }));
  }

  renderPagamentoComCartao() {
    const {
      nomeCartao,
      numeroCartao,
      CVVCartao,
      mesCartao,
      anoCartao,
      parcelasCartao,
      parcelasCartaoSelecionada,
      bandeira_cartao
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "Dados-Pagamento",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: nomeCartao,
      erro: erros.nomeCartao,
      name: "nomeCartao",
      placeholder: "Nome como escrito no cart\xE3o",
      label: "Nome Completo no Cart\xE3o",
      onChange: e => this.onChange("nomeCartao", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: numeroCartao,
      erro: erros.numeroCartao,
      name: "numeroCartao",
      placeholder: "XXXX XXXX XXXX XXXX",
      label: "N\xFAmero do Cart\xE3o",
      onChange: e => this.onChange("numeroCartao", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatCartao"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: CVVCartao,
      erro: erros.CVVCartao,
      name: "CVVCartao",
      placeholder: "XXX",
      label: "C\xF3digo de Seguran\xE7a do Cart\xE3o",
      onChange: e => this.onChange("CVVCartao", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(e.target.value, 3)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 21
      }
    }, " Data de Validade ")), __jsx("div", {
      className: "flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: mesCartao,
      erro: erros.mesCartao,
      name: "mesCartao",
      placeholder: "MM",
      label: "M\xEAs",
      onChange: e => this.onChange("mesCartao", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(e.target.value, 2)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 21
      }
    }), __jsx("span", {
      className: "slash-pagamento",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 21
      }
    }, " \xA0 / \xA0 "), __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: anoCartao,
      erro: erros.anoCartao,
      name: "anoCartao",
      placeholder: "AAAA",
      label: "Ano",
      onChange: e => this.onChange("anoCartao", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(e.target.value, 4)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 21
      }
    })), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 21
      }
    }, " Parcelas ")), parcelasCartao && parcelasCartaoSelecionada && __jsx("div", {
      className: "flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 25
      }
    }, __jsx("select", {
      name: "parcela",
      value: parcelasCartaoSelecionada.quantity,
      onChange: e => this.onChange("parcelasCartaoSelecionada", parcelasCartao[bandeira_cartao.name][e.target.value - 1]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 29
      }
    }, !parcelasCartaoSelecionada && __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 37
      }
    }, " Selecione a quantidade de parcelas para pagamento "), parcelasCartao[bandeira_cartao.name].slice(0, 6).map((item, index) => __jsx("option", {
      key: index,
      value: item.quantity,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 41
      }
    }, item.quantity, " x de ", Object(_utils__WEBPACK_IMPORTED_MODULE_6__["formatMoney"])(item.totalAmount / item.quantity), " sem juros"))), erros.parcelasCartaoSelecionada && __jsx("small", {
      className: "erro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 33
      }
    }, " ", erros.parcelasCartaoSelecionada, " ")));
  }

  render() {
    const {
      tipoPagamentoSelecionado
    } = this.props;
    return __jsx("div", {
      className: "Dados-Pagamento-Container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 17
      }
    }, " DADOS DE PAGAMENTO "), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 17
      }
    }), this.renderOpcoesPagamento(), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 17
      }
    }), tipoPagamentoSelecionado === 'boleto' && this.renderPagamentoComBoleto(), tipoPagamentoSelecionado === 'cartao' && this.renderPagamentoComCartao());
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  carrinho: state.carrinho.carrinho,
  cliente: state.cliente.cliente,
  form: state.checkout.form,
  tipoPagamentoSelecionado: state.checkout.tipoPagamentoSelecionado,
  sessionId: state.checkout.sessionId,
  senderHash: state.checkout.senderHash,
  freteSelecionado: state.carrinho.freteSelecionado
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(DadosPagamento));

/***/ }),

/***/ "./containers/Checkout/DadosPedido.js":
/*!********************************************!*\
  !*** ./containers/Checkout/DadosPedido.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carrinho_ListaDeProdutos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Carrinho/ListaDeProdutos */ "./containers/Carrinho/ListaDeProdutos.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\DadosPedido.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class DadosPedido extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "Dados-Pedido-Container",
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
    }, "DADOS DO PEDIDO"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }), __jsx(_Carrinho_ListaDeProdutos__WEBPACK_IMPORTED_MODULE_1__["default"], {
      semAlteracoes: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 23
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DadosPedido);

/***/ }),

/***/ "./containers/Checkout/SubmitDadosCliente.js":
/*!***************************************************!*\
  !*** ./containers/Checkout/SubmitDadosCliente.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Alert_Geral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Alert/Geral */ "./components/Alert/Geral.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\SubmitDadosCliente.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class SubmitDadosCliente extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      aviso: null
    });

    _defineProperty(this, "callback", error => {
      if (!error) {
        this.props.permitir();
        this.setState({
          aviso: null
        });
      } else {
        this.setState({
          aviso: {
            status: false,
            message: error.message
          }
        });
      }
    });

    _defineProperty(this, "validate", () => {
      const {
        email,
        senha,
        nome,
        CPF,
        dataDeNascimento,
        telefone,
        local,
        numero,
        bairro,
        cidade,
        estado,
        CEP
      } = this.props.form;
      const {
        usuario
      } = this.props;
      let temErro = false;
      if (!usuario && !email) temErro = true;
      if (!usuario && !senha) temErro = true;
      if (!nome) temErro = true;
      if (!CPF || CPF.length !== 14) temErro = true;
      if (CPF && CPF.length === 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_2__["validateCPF"])(CPF)) temErro = true;
      if (!dataDeNascimento || dataDeNascimento.length !== 10) temErro = true;
      if (!telefone || telefone.length < 11) temErro = true;
      if (!local) temErro = true;
      if (!numero) temErro = true;
      if (!bairro) temErro = true;
      if (!cidade) temErro = true;
      if (!estado) temErro = true;
      if (!CEP || CEP.length !== 9) temErro = true;
      return !temErro;
    });
  }

  handleSubmit() {
    if (!this.validate()) return null;
    const {
      token,
      form,
      cliente
    } = this.props;
    if (!token) this.props.newCliente(form, this.callback);else this.props.updateCliente(form, cliente._id, token, this.callback);
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, __jsx(_components_Alert_Geral__WEBPACK_IMPORTED_MODULE_1__["default"], {
      aviso: this.state.aviso,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "flex flex-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, __jsx("button", {
      className: "btn btn-success btn-cta",
      onClick: () => this.handleSubmit(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, "CONTINUAR PEDIDO")));
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente.cliente,
  form: state.checkout.form
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(SubmitDadosCliente));

/***/ }),

/***/ "./containers/Checkout/index.js":
/*!**************************************!*\
  !*** ./containers/Checkout/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DadosCliente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DadosCliente */ "./containers/Checkout/DadosCliente.js");
/* harmony import */ var _DadosEntrega__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DadosEntrega */ "./containers/Checkout/DadosEntrega.js");
/* harmony import */ var _SubmitDadosCliente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubmitDadosCliente */ "./containers/Checkout/SubmitDadosCliente.js");
/* harmony import */ var _DadosFrete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DadosFrete */ "./containers/Checkout/DadosFrete.js");
/* harmony import */ var _DadosPagamento__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DadosPagamento */ "./containers/Checkout/DadosPagamento.js");
/* harmony import */ var _DadosPedido__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DadosPedido */ "./containers/Checkout/DadosPedido.js");
/* harmony import */ var _CheckoutButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CheckoutButton */ "./containers/Checkout/CheckoutButton.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class CheckoutContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      permissaoInicial: false,
      permissaoCheckout: false
    });
  }

  render() {
    const {
      permissaoInicial,
      permissaoCheckout
    } = this.state;
    const {
      usuario,
      freteSelecionado
    } = this.props; //        console.log('frete selecionado: ', freteSelecionado);

    return __jsx("div", {
      className: "Checkout container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, "CONCLUINDO SEU PEDIDO"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }), __jsx(_DadosCliente__WEBPACK_IMPORTED_MODULE_1__["default"], {
      usuario: usuario,
      permissaoInicial: permissaoInicial,
      permitir: () => this.setState({
        permissaoInicial: true
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }), (permissaoInicial || usuario) && __jsx(_DadosEntrega__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 54
      }
    }), (permissaoInicial || usuario) && __jsx(_SubmitDadosCliente__WEBPACK_IMPORTED_MODULE_3__["default"], {
      permitir: () => this.setState({
        permissaoCheckout: true
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }), permissaoCheckout && __jsx(_DadosFrete__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 40
      }
    }), permissaoCheckout && __jsx(_DadosPagamento__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 40
      }
    }), permissaoCheckout && __jsx(_DadosPedido__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 40
      }
    }), permissaoCheckout && __jsx(_CheckoutButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 40
      }
    }));
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  freteSelecionado: state.carrinho.freteSelecionado
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_9__["default"])(CheckoutContainer));

/***/ }),

/***/ "./containers/Cliente/ClienteLogin.js":
/*!********************************************!*\
  !*** ./containers/Cliente/ClienteLogin.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _components_Alert_Geral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Alert/Geral */ "./components/Alert/Geral.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Cliente\\ClienteLogin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ClienteLogin extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      email: "",
      senha: "",
      aviso: null,
      erros: {}
    });

    _defineProperty(this, "onChange", (field, e) => this.setState({
      [field]: e.target.value
    }, () => this.validate()));
  }

  renderAvisoDeRegistro() {
    return __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, "Comprar como Visitante/Realizar Registro"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }), __jsx("button", {
      className: "btn btn-success",
      onClick: () => this.props.permitir(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }
    }, "CONTINUAR")));
  }

  validate() {
    const {
      email,
      senha
    } = this.state;
    const erros = {};
    if (!email) erros.email = "Preencha aqui com o seu email";
    if (!senha) erros.senha = "Preencha aqui com a sua senha";
    this.setState({
      erros,
      aviso: null
    });
    return !(Object.keys(erros).length > 0);
  }

  handleSubmit() {
    if (!this.validate()) return null;
    const {
      email,
      senha
    } = this.state;
    this.props.autenticar({
      email,
      password: senha
    }, false, error => {
      if (error) this.setState({
        aviso: {
          status: false,
          message: error.message
        }
      });
    });
  }

  renderFormLogin() {
    const {
      email,
      senha,
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, "Fazer Login"), __jsx(_components_Alert_Geral__WEBPACK_IMPORTED_MODULE_4__["default"], {
      aviso: this.state.aviso,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }), __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: email,
      name: "email",
      label: "E-mail",
      erro: erros.email,
      placeholder: "E-mail",
      onChange: e => this.onChange("email", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }), __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: senha,
      name: "senha",
      erro: erros.senha,
      label: "Senha",
      type: "password",
      placeholder: "Senha",
      onChange: e => this.onChange("senha", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }), __jsx("button", {
      className: "btn btn-success",
      onClick: () => this.handleSubmit(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }
    }, "ENTRAR")));
  }

  render() {
    return __jsx("div", {
      className: "Cliente-Login flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, this.renderAvisoDeRegistro(), this.renderFormLogin());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(ClienteLogin));

/***/ }),

/***/ "./containers/Cliente/DadosCliente.js":
/*!********************************************!*\
  !*** ./containers/Cliente/DadosCliente.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Cliente\\DadosCliente.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class DadosClienteContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      erros: {}
    });

    _defineProperty(this, "onChange", (field, e, value) => {
      this.props.setForm({
        [field]: value || e.target.value
      }, null).then(() => this.validate());
    });
  }

  componentDidMount() {
    this.props.setForm({
      email: "",
      senha: "",
      nome: this.props.cliente ? this.props.cliente.nome : "",
      CPF: this.props.cliente ? this.props.cliente.cpf : "",
      telefone: this.props.cliente && this.props.cliente.telefones ? this.props.cliente.telefones[0] : "",
      dataDeNascimento: this.props.cliente ? moment__WEBPACK_IMPORTED_MODULE_4___default()(this.props.cliente.dataDeNascimento).format("DD/MM/YYYY") : ""
    });
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.cliente && this.props.cliente) {
      const {
        nome,
        cpf,
        telefones,
        dataDeNascimento
      } = this.props.cliente;
      this.props.setForm({
        nome,
        CPF: cpf,
        telefone: telefones[0],
        dataDeNascimento: moment__WEBPACK_IMPORTED_MODULE_4___default()(dataDeNascimento).format("DD/MM/YYYY")
      });
    }
  }

  validate() {
    const {
      email,
      senha,
      nome,
      CPF,
      dataDeNascimento,
      telefone
    } = this.props.form;
    const {
      usuario
    } = this.props;
    const erros = {};
    if (!usuario && !email) erros.email = "Preencha aqui com o seu email";
    if (!usuario && !senha) erros.senha = "Preencha aqui com a sua senha";
    if (!nome) erros.nome = "Preencha aqui com o seu nome";
    if (!CPF || CPF.length !== 14) erros.CPF = "Preencha aqui com o seu CPF";
    if (CPF && CPF.length === 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_5__["validateCPF"])(CPF)) erros.CPF = "Preencha aqui com o seu CPF corretamente";
    if (!dataDeNascimento || dataDeNascimento.length !== 10) erros.dataDeNascimento = "Preencha aqui com a sua data de nascimento";
    if (!telefone || telefone.length < 11) erros.telefone = "Preencha aqui com o seu telefone";
    this.setState({
      erros
    });
    return !(Object.keys(erros).length > 0);
  }

  renderDadosRegistro() {
    const {
      email,
      senha
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: email || "",
      name: "email",
      placeholder: "E-mail",
      label: "E-mail",
      erro: erros.email,
      onChange: e => this.onChange("email", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: senha || "",
      name: "senha",
      placeholder: "Senha",
      label: "Senha",
      type: "senha",
      erro: erros.senha,
      onChange: e => this.onChange("senha", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    })));
  }

  renderDadosUsuario() {
    const {
      nome,
      CPF,
      dataDeNascimento,
      telefone
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1 flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: nome || "",
      name: "nome",
      placeholder: "Nome",
      label: "Nome",
      erro: erros.nome,
      onChange: e => this.onChange("nome", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: CPF || "",
      name: "CPF",
      placeholder: "CPF",
      label: "CPF",
      erro: erros.CPF,
      onChange: e => this.onChange("CPF", e, Object(_utils_format__WEBPACK_IMPORTED_MODULE_6__["formatCPF"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: dataDeNascimento || "",
      erro: erros.dataDeNascimento,
      name: "dataDeNascimento",
      placeholder: "DD/MM/AAAA",
      label: "Data de Nascimento",
      onChange: e => this.onChange("dataDeNascimento", e, Object(_utils_format__WEBPACK_IMPORTED_MODULE_6__["formatDataDeNascimento"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: telefone || "",
      erro: erros.telefone,
      name: "telefone",
      placeholder: "(34) 1234-5678",
      label: "Telefone/Celular",
      onChange: e => this.onChange("telefone", e, Object(_utils_format__WEBPACK_IMPORTED_MODULE_6__["formatTelefone"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }))));
  }

  render() {
    return __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 21
      }
    }, " DADOS DO CLIENTE ")), !this.props.usuario && this.renderDadosRegistro(), this.renderDadosUsuario());
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente.cliente,
  form: state.checkout.form
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(DadosClienteContainer));

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

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _containers_Cabecalho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/Cabecalho */ "./containers/Cabecalho/index.js");
/* harmony import */ var _containers_Checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/Checkout */ "./containers/Checkout/index.js");
/* harmony import */ var _containers_Rodape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/Rodape */ "./containers/Rodape/index.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\pages\\checkout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Checkout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps({
    res
  }) {
    if (res) {
      res.writeHead(302, {
        Location: "/carrinho"
      });
      res.end();
    }

    return {};
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Check-out | LOJA IT - Melhores produtos de tecnologia",
      pagSeguro: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx(_containers_Cabecalho__WEBPACK_IMPORTED_MODULE_2__["default"], {
      simples: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }), __jsx(_containers_Checkout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }), __jsx(_containers_Rodape__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }));
  }

}

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

/***/ "./utils/format.js":
/*!*************************!*\
  !*** ./utils/format.js ***!
  \*************************/
/*! exports provided: numberPattern, formatCEP, formatCPF, formatDataDeNascimento, formatTelefone, formatNumber, formatCartao, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberPattern", function() { return numberPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCEP", function() { return formatCEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCPF", function() { return formatCPF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDataDeNascimento", function() { return formatDataDeNascimento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTelefone", function() { return formatTelefone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCartao", function() { return formatCartao; });
const numberPattern = /\d+/g;
const formatCEP = value => {
  const auxCep = (value || "").match(numberPattern);

  const _cep = (auxCep || []).join('');

  return _cep.length > 5 ? _cep.slice(0, 5) + '-' + _cep.slice(5, 8) : _cep;
};
const formatCPF = value => {
  const auxCPF = (value || "").match(numberPattern);

  const _CPF = (auxCPF || []).join('');

  if (_CPF.length > 9) return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6) + '.' + _CPF.slice(6, 9) + '-' + _CPF.slice(9, 11);
  if (_CPF.length > 6) return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6) + '.' + _CPF.slice(6, 9);
  if (_CPF.length > 3) return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6);
  return _CPF;
};
const formatDataDeNascimento = value => {
  const auxData = (value || "").match(numberPattern);

  const _data = (auxData || []).join('');

  if (_data.length > 4) return _data.slice(0, 2) + '/' + _data.slice(2, 4) + '/' + _data.slice(4, 8);
  if (_data.length > 2) return _data.slice(0, 2) + '/' + _data.slice(2, 4);
  return _data;
};
const formatTelefone = value => {
  const auxTelefone = (value || "").match(numberPattern);

  const _telefone = (auxTelefone || []).join('');

  return _telefone.length > 2 ? _telefone.slice(0, 2) + ' ' + _telefone.slice(2, 12) : _telefone;
};
const formatNumber = (value, limit) => {
  const auxN = (value || "").match(numberPattern);

  const _n = (auxN || []).join('');

  return limit ? _n.slice(0, limit) : _n;
};
const formatCartao = value => {
  const auxCartao = (value || "").match(numberPattern);

  const _cartao = (auxCartao || []).join('');

  if (_cartao.length > 12) return _cartao.slice(0, 4) + ' ' + _cartao.slice(4, 8) + ' ' + _cartao.slice(8, 12) + ' ' + _cartao.slice(12, 16);
  if (_cartao.length > 8) return _cartao.slice(0, 4) + ' ' + _cartao.slice(4, 8) + ' ' + _cartao.slice(8, 12);
  if (_cartao.length > 4) return _cartao.slice(0, 4) + ' ' + _cartao.slice(4, 8);
  return _cartao;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  numberPattern,
  formatCEP,
  formatCPF,
  formatDataDeNascimento,
  formatTelefone,
  formatNumber,
  formatCartao
});

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

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: onlyNumbers, validateCPF, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyNumbers", function() { return onlyNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateCPF", function() { return validateCPF; });
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format */ "./utils/format.js");

const onlyNumbers = value => {
  const auxCep = (value || "").match(_format__WEBPACK_IMPORTED_MODULE_0__["numberPattern"]);
  return (auxCep || []).join("");
};
const validateCPF = _strCPF => {
  const strCPF = onlyNumbers(_strCPF);
  if (strCPF.length !== 11) return false;
  let soma;
  let resto;
  soma = 0;
  if (strCPF == "00000000000") return false;

  for (var i = 1; i <= 9; i++) {
    soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(strCPF.substring(9, 10))) return false;
  soma = 0;

  for (var j = 1; j <= 10; j++) {
    soma = soma + parseInt(strCPF.substring(j - 1, j)) * (12 - j);
  }

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  validateCPF,
  onlyNumbers
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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWxlcnQvR2VyYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYW1wb3MvUGVzcXVpc2EuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy9DYXJyaW5oby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbnB1dHMvRm9ybVJhZGlvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5wdXRzL0Zvcm1TaW1wbGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSXRlbS9EYWRvc0RhTG9qYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3Rhcy9DYXRlZ29yaWFzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGlzdGFzL1BhZ2luYXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaXN0YXMvUmVkZXNTb2NpYWlzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9nby9DYWJlY2FsaG8uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DYWJlY2FsaG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DYXJyaW5oby9MaXN0YURlUHJvZHV0b3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DaGVja291dC9DaGVja291dEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0NoZWNrb3V0L0RhZG9zQ2xpZW50ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0NoZWNrb3V0L0RhZG9zRW50cmVnYS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0NoZWNrb3V0L0RhZG9zRnJldGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DaGVja291dC9EYWRvc1BhZ2FtZW50by5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0NoZWNrb3V0L0RhZG9zUGVkaWRvLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQ2hlY2tvdXQvU3VibWl0RGFkb3NDbGllbnRlLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQ2hlY2tvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DbGllbnRlL0NsaWVudGVMb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0NsaWVudGUvRGFkb3NDbGllbnRlLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvUm9kYXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NoZWNrb3V0LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jYXJyaW5ob0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jYXRlZ29yaWFBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2hlY2tvdXRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2xpZW50ZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9lcnJvckhhbmRsaW5nLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvbG9qYUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9wZWRpZG9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvcHJvZHV0b0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL3ZhbGlkYXRlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkFsZXJ0R2VyYWwiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsImF2aXNvIiwibWVzc2FnZSIsIlBlc3F1aXNhIiwidGVybW8iLCJzdWJtaXRQZXNxdWlzYSIsInN0YXRlIiwiZmV0Y2hUZXJtbyIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25uZWN0IiwiYWN0aW9ucyIsIkNhcmRDYXJyaW5obyIsImNhcnRRdGQiLCJjb21wb25lbnREaWRNb3VudCIsImdldENvdW50SXRlbXNDYXJ0IiwiZGVmYXVsdERlc2NyaWNhbyIsImRlZmF1bHRPR1VSTCIsImRlZmF1bHRPR0ltYWdlIiwiSGVhZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJvZ0ltYWdlIiwicGFnU2VndXJvIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJGb3JtUmFkaW8iLCJuYW1lIiwiY2hla2VkIiwibGFiZWwiLCJvbkNoYW5nZSIsIkZvcm1TaW1wbGVzIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiZXJybyIsIkRhZG9zRGFMb2phIiwiUmVhY3QiLCJsb2phIiwibm9tZSIsImNucGoiLCJlbWFpbCIsImVuZGVyZWNvIiwidGVsZWZvbmVzIiwibWFwIiwiaW5kZXgiLCJsb2NhbCIsIm51bWVybyIsImJhaXJybyIsImNpZGFkZSIsImVzdGFkbyIsIkNFUCIsIm1hcFN0YXRlVG9Qcm9wcyIsIkxheW91dCIsImltYWdlIiwiQ2F0ZWdvcmlhcyIsImNhdGVnb3JpYXMiLCJjYXRlZ29yaWEiLCJfaWQiLCJQYWdpbmFzIiwiUkVERVNfU09DSUFJUyIsIlJlZGVzU29jaWFpcyIsIml0ZW0iLCJpZHgiLCJMb2dvQ2FiZWNhbGhvIiwiQVBJIiwidmVyc2FvIiwiYmFzZUltZyIsIkNhYmVjYWxobyIsInJlbmRlckNhYmVjYWxob05vcm1hbCIsInJlbmRlckNhYmVjYWxob1NpbXBsZXMiLCJzaW1wbGVzIiwiTGlzdGFEZVByb2R1dG9zIiwicmVuZGVyQ2FiZWNhbGhvQ2FycmluaG8iLCJzZW1BbHRlcmFjb2VzIiwiY2hhbmdlUXVhbnRpZGFkZSIsInF1YW50aWRhZGUiLCJOdW1iZXIiLCJub3ZhUXVhbnRpZGFkZSIsImNoYW5nZSIsInZhcmlhY2FvIiwiYWxlcnQiLCJhZGRDYXJ0IiwicHJvZHV0byIsInByZWNvVW5pdGFyaW8iLCJ1cGRhdGVRdWFudGlkYWRlIiwicmVtb3ZlclByb2R1dG9DYXJyaW5obyIsIndpbmRvdyIsImNvbmZpcm0iLCJyZW1vdmVyUHJvZHV0byIsInJlbmRlclByb2R1dG8iLCJmb3RvIiwiZm90b3MiLCJsZW5ndGgiLCJ0aXR1bG8iLCJmb3JtYXRNb25leSIsInJlbmRlclByb2R1dG9zIiwiY2FycmluaG8iLCJDaGVja291dEJ1dHRvbiIsImRpc2FibGVkIiwiY2FsY3VsYXJWYWxvclRvdGFsIiwiZnJldGVTZWxlY2lvbmFkbyIsInZhbG9yUHJvZHV0b3MiLCJyZWR1Y2UiLCJhbGwiLCJ2YWxvckZyZXRlIiwiVmFsb3IiLCJyZXBsYWNlIiwidmFsaWRhckZvcm11bGFyaW8iLCJDUEYiLCJkYXRhRGVOYXNjaW1lbnRvIiwidGVsZWZvbmUiLCJkYWRvc0NvYnJhbmNhIiwiZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhIiwiQ1BGYm9sZXRvIiwibnVtZXJvQ2FydGFvIiwibm9tZUNhcnRhbyIsIm1lc0NhcnRhbyIsImFub0NhcnRhbyIsInBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEiLCJDVlZDYXJ0YW8iLCJjcmVkaXRfY2FyZF90b2tlbiIsImZvcm0iLCJ0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8iLCJ0ZW1FcnJvIiwidmFsaWRhdGVDUEYiLCJ2YWxpZGF0ZSIsImhhbmRsZVN1Ym1pdCIsInRva2VuIiwic2VuZGVySGFzaCIsImdldENhcnQiLCJ2YWxvclRvdGFsIiwidG9nZ2xlRGlzYWJsZWQiLCJub3ZvUGVkaWRvIiwiZXJyb3IiLCJzdGF0dXMiLCJ1c3VhcmlvIiwiYXV0aCIsImNsaWVudGUiLCJjaGVja291dCIsIkRhZG9zQ2xpZW50ZSIsImZldGNoQ2xpZW50ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInBlcm1pc3Nhb0luaWNpYWwiLCJwZXJtaXRpciIsIkRhZG9zRW50cmVnYUNvbnRhaW5lciIsImVycm9zIiwiZmllbGQiLCJwcmVmaXgiLCJzZXRGb3JtIiwidGhlbiIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwicHJldlByb3BzIiwiY29tcGxlbWVudG8iLCJPYmplY3QiLCJrZXlzIiwicmVuZGVyRGFkb3NEZUVudHJlZ2EiLCJvbkNoYW5nZUNFUCIsImZvcm1hdENFUCIsImZvcm1hdE51bWJlciIsIkVTVEFET1MiLCJhYmJyIiwicmVuZGVyRGFkb3NEZUNvYnJhbmNhIiwiRGFkb3NGcmV0ZSIsImNhbGN1bGFyRnJldGUiLCJzZWxlY2lvbmFyRnJldGUiLCJmcmV0ZSIsImZyZXRlcyIsIkNvZGlnbyIsImNvZGlnb3NDb3JyZWlvcyIsIlByYXpvRW50cmVnYSIsIkRhZG9zUGFnYW1lbnRvIiwiZ2V0U2Vzc2lvblBhZ2FtZW50byIsImJhbmRlaXJhX2NhcnRhbyIsInBhcmNlbGFzQ2FydGFvIiwic3BsaXQiLCJqb2luIiwiZ2V0QnJhbmQiLCJzdWJtaXRDYXJ0YW9IYXNoIiwiZ2V0UGFyY2VsYXMiLCJQYWdTZWd1cm9EaXJlY3RQYXltZW50IiwiY2FyZEJpbiIsInNsaWNlIiwic3VjY2VzcyIsInIiLCJicmFuZCIsInBhcmFtcyIsImNhcmROdW1iZXIiLCJjdnYiLCJleHBpcmF0aW9uTW9udGgiLCJleHBpcmF0aW9uWWVhciIsImNhcmQiLCJjcmVhdGVDYXJkVG9rZW4iLCJmcmV0ZVZhbG9yIiwiZ2V0SW5zdGFsbG1lbnRzIiwiYW1vdW50IiwibWF4SW5zdGFsbG1lbnROb0ludGVyZXN0IiwibWF4SW5zdGFsbG1lbnQiLCJpbnN0YWxsbWVudHMiLCJyZW5kZXJPcGNvZXNQYWdhbWVudG8iLCJzZXRUaXBvUGFnYW1lbnRvIiwicmVuZGVyUGFnYW1lbnRvQ29tQm9sZXRvIiwiZm9ybWF0Q1BGIiwicmVuZGVyUGFnYW1lbnRvQ29tQ2FydGFvIiwiZm9ybWF0Q2FydGFvIiwicXVhbnRpdHkiLCJ0b3RhbEFtb3VudCIsInNlc3Npb25JZCIsIkRhZG9zUGVkaWRvIiwiU3VibWl0RGFkb3NDbGllbnRlIiwic2VuaGEiLCJuZXdDbGllbnRlIiwiY2FsbGJhY2siLCJ1cGRhdGVDbGllbnRlIiwiQ2hlY2tvdXRDb250YWluZXIiLCJwZXJtaXNzYW9DaGVja291dCIsIkNsaWVudGVMb2dpbiIsInJlbmRlckF2aXNvRGVSZWdpc3RybyIsImF1dGVudGljYXIiLCJwYXNzd29yZCIsInJlbmRlckZvcm1Mb2dpbiIsIkRhZG9zQ2xpZW50ZUNvbnRhaW5lciIsImNwZiIsIm1vbWVudCIsImZvcm1hdCIsInJlbmRlckRhZG9zUmVnaXN0cm8iLCJyZW5kZXJEYWRvc1VzdWFyaW8iLCJmb3JtYXREYXRhRGVOYXNjaW1lbnRvIiwiZm9ybWF0VGVsZWZvbmUiLCJSb2RhcGUiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsInAiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZSIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQ2hlY2tvdXQiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsInJlYXV0aGVudGljYXRlIiwiQVVURU5USUNBUl9UT0tFTiIsInBheWxvYWQiLCJnZXRVc2VyIiwiZGlzcGF0Y2giLCJnZXRIZWFkZXJzIiwiVVNFUiIsImdvVG8iLCJwb3N0Iiwic2V0Q29va2llIiwiQVVURU5USUNBUiIsImVycm9ySGFuZGxpbmciLCJkZXNhdXRlbnRpY2FyIiwicmVtb3ZlQ29va2llIiwiREVTQVVURU5USUNBUiIsInVwZGF0ZVNlbmhhIiwicHV0Iiwibm92YVNlbmhhIiwic2V0Q2FycmluaG8iLCJTRVRfQ0FSUklOSE8iLCJjbGVhbkNhcnJpbmhvIiwiY2xlYW5DYXJ0IiwiQ0xFQU5fQ0FSUklOSE8iLCJmZXRjaFByb2R1dG9DYXJyaW5obyIsImlkIiwiaWR4Q2FycmluaG8iLCJGRVRDSF9QUk9EVVRPX0NBUlJJTkhPIiwiZmV0Y2hWYXJpYWNvZXNDYXJyaW5obyIsIkZFVENIX1ZBUklBQ0FPX0NBUlJJTkhPIiwiY2VwIiwiRkVUQ0hfVkFMT1JfRU5UUkVHQSIsInJlbW92ZUNhcnQiLCJSRU1PVkVfUFJPRF9DQVJUIiwiVVBEQVRFX1FURF9DQVJUIiwiVVBEQVRFX0ZSRVRFX0NBUlQiLCJjbGVhbkZyZXRlcyIsIkNMRUFOX0ZSRVRFUyIsImZldGNoQ2F0ZWdvcmlhcyIsIkZFVENIX0NBVEVHT1JJQVMiLCJmZXRjaENhdGVnb3JpYSIsIkZFVENIX0NBVEVHT1JJQSIsImZldGNoUHJvZHV0b3NDYXRlZ29yaWEiLCJhdHVhbCIsImxpbWl0IiwiRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TIiwiU0VUX0ZPUk0iLCJyZXNvbHZlIiwiY2xlYW5Gb3JtIiwiQ0xFQU5fRk9STSIsIlNFVF9USVBPX1BBR0FNRU5UTyIsIkZFVENIX1NFU1NJT05fSUQiLCJzZXRTZXNzaW9uSWQiLCJnZXRTZW5kZXJIYXNoIiwiRkVUQ0hfU0VOREVSX0hBU0giLCJlbnRyZWdhIiwiY3VzdG8iLCJ0aXBvIiwidG9TdHJpbmciLCJwcmF6byIsInBhZ2FtZW50byIsInZhbG9yIiwiZm9ybWEiLCJwYXJjZWxhcyIsImVuZGVyZWNvRW50cmVnYUlndWFsQ29icmFuY2EiLCJjYXJ0YW8iLCJub21lQ29tcGxldG8iLCJ0cmltIiwiY29kaWdvQXJlYSIsInVuZGVmaW5lZCIsIk5PVk9fUEVESURPIiwicGFnYXJQZWRpZG8iLCJwZWRpZG8iLCJQQUdBUl9QRURJRE8iLCJnZXRSYXdEYXRhIiwiX2RhdGEiLCJhbm8iLCJfbWVzIiwibWVzIiwiX2RpYSIsImRpYSIsInJlc3Bvc3RhIiwiRkVUQ0hfQ0xJRU5URSIsImxvZ291dENsaWVudGUiLCJMT0dPVVRfQ0xJRU5URSIsIl9lcnJvcnMiLCJlcnJvcnMiLCJtc2ciLCJpc0FycmF5IiwiZm9yRWFjaCIsInByb3BlcnRpZXMiLCJoZWFkZXJzIiwiYXV0aEFjdGlvbnMiLCJjYXRlZ29yaWFBY3Rpb25zIiwibG9qYUFjdGlvbnMiLCJwcm9kdXRvQWN0aW9ucyIsImNhcnJpbmhvQWN0aW9ucyIsImNsaWVudGVBY3Rpb25zIiwiY2hlY2tvdXRBY3Rpb25zIiwicGVkaWRvQWN0aW9ucyIsImZldGNoRGFkb3NMb2phIiwiRkVUQ0hfREFET1MiLCJmZXRjaFBlZGlkb3MiLCJvZmZzZXQiLCJGRVRDSF9QRURJRE9TIiwiZmV0Y2hQZWRpZG8iLCJGRVRDSF9QRURJRE8iLCJjYW5jZWxhclBlZGlkbyIsImRlbGV0ZSIsIkNBTkNFTEFSX1BFRElETyIsImNsZWFuUGVkaWRvIiwiQ0xFQU5fUEVESURPIiwiZmV0Y2hQcm9kdXRvc1BhZ2luYUluaWNpYWwiLCJGRVRDSF9QUk9EVVRPUyIsIkZFVENIX1BFU1FVSVNBIiwiZmV0Y2hQcm9kdXRvc1Blc3F1aXNhIiwiRkVUQ0hfUFJPRFVUT1NfUEVTUVVJU0EiLCJmZXRjaFByb2R1dG8iLCJGRVRDSF9QUk9EVVRPIiwiZmV0Y2hBdmFsaWFjb2VzIiwiRkVUQ0hfUFJPRFVUT19BVkFMSUFDT0VTIiwiZmV0Y2hWYXJpYWNvZXMiLCJGRVRDSF9QUk9EVVRPX1ZBUklBQ09FUyIsIm5vdmFBdmFsaWFjYW8iLCJ0ZXh0byIsInBvbnR1YWNhbyIsIk5PVkFfQVZBTElBQ0FPIiwiUkVHSVNURVIiLCJfc2F2ZUNhcnQiLCJjYXJ0IiwiZm91bmQiLCJfaXRlbSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImdvVG9DYXJ0IiwiYyIsIl9pbmRleCIsImNvbmNhdCIsImNvb2tpZSIsImdldENvb2tpZSIsInJlcSIsImdldENvb2tpZUZyb21Ccm93c2VyIiwiZ2V0Q29va2llRnJvbVNlcnZlciIsIl9jb29raWUiLCJmaW5kIiwic3RhcnRzV2l0aCIsIm51bWJlclBhdHRlcm4iLCJhdXhDZXAiLCJtYXRjaCIsIl9jZXAiLCJhdXhDUEYiLCJfQ1BGIiwiYXV4RGF0YSIsImF1eFRlbGVmb25lIiwiX3RlbGVmb25lIiwiYXV4TiIsIl9uIiwiYXV4Q2FydGFvIiwiX2NhcnRhbyIsInRvRml4ZWQiLCJvbmx5TnVtYmVycyIsIl9zdHJDUEYiLCJzdHJDUEYiLCJzb21hIiwicmVzdG8iLCJzdWJzdHJpbmciLCJqIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7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QUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJLEVBQXJCLEVBQXlCQSxDQUFDLEVBQTFCLEVBQStCO0FBQzNCSCxRQUFJLEdBQUdBLElBQUksR0FBR3ZMLFFBQVEsQ0FBQ3NMLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkMsQ0FBQyxHQUFDLENBQW5CLEVBQXNCQSxDQUF0QixDQUFELENBQVIsSUFBc0MsS0FBS0EsQ0FBM0MsQ0FBZDtBQUNIOztBQUNERixPQUFLLEdBQUlELElBQUksR0FBRyxFQUFSLEdBQWEsRUFBckI7QUFFQSxNQUFLQyxLQUFLLElBQUksRUFBVixJQUFrQkEsS0FBSyxJQUFJLEVBQS9CLEVBQW9DQSxLQUFLLEdBQUcsQ0FBUjtBQUNwQyxNQUFJQSxLQUFLLElBQUl4TCxRQUFRLENBQUNzTCxNQUFNLENBQUNHLFNBQVAsQ0FBaUIsRUFBakIsRUFBcUIsRUFBckIsQ0FBRCxDQUFyQixFQUFpRCxPQUFPLEtBQVA7QUFFakQsU0FBTyxJQUFQO0FBQ0gsQ0ExQk07QUE0QlE7QUFDWDlpQixhQURXO0FBRVh5aUI7QUFGVyxDQUFmLEU7Ozs7Ozs7Ozs7O0FDbkNBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2NoZWNrb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9jaGVja291dC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEFsZXJ0R2VyYWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMuYXZpc28pIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5hdmlzby5tZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGVydEdlcmFsOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgUGVzcXVpc2EgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7dGVybW86IFwiXCJ9XHJcblxyXG4gICAgc3VibWl0UGVzcXVpc2EoKSB7XHJcbiAgICAgICAgY29uc3Qge3Rlcm1vfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFRlcm1vKHRlcm1vKTtcclxuICAgICAgICBSb3V0ZXIucHVzaCh7cGF0aG5hbWU6XCIvcGVzcXVpc2FcIiwgcXVlcnk6IHt0ZXJtb319KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0zIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXNxdWlzYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGVybW99XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7dGVybW86IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGUgYXF1aSBhIHN1YSBwZXNxdWlzYSAuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LXBlc3F1aXNhXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnN1Ym1pdFBlc3F1aXNhKCl9IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1wZXNxdWlzYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiPiA8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIGFjdGlvbnMpIChQZXNxdWlzYSk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZ2V0Q291bnRJdGVtc0NhcnQgfSBmcm9tICcuLi8uLi91dGlscy9jYXJ0JztcclxuXHJcbmNsYXNzIENhcmRDYXJyaW5obyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgY2FydFF0ZDogMCB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2FydFF0ZDogZ2V0Q291bnRJdGVtc0NhcnQoKSB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbnMtY2FiZWNhbGhvIGZsZXgtMiBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FyZWEtY2xpZW50ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1jYWJlY2FsaG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TWluaGEgQ29udGE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnJpbmhvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWNhYmVjYWxobyBjYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNob3BwaW5nLWJhZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+eyB0aGlzLnN0YXRlLmNhcnRRdGQgfHwgMCB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRDYXJyaW5obzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHtzdHJpbmd9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgZGVmYXVsdERlc2NyaWNhbyA9ICcnO1xyXG5jb25zdCBkZWZhdWx0T0dVUkwgPSAnJztcclxuY29uc3QgZGVmYXVsdE9HSW1hZ2UgPSBcIi9zdGF0aWMvbG9nby5wbmdcIjtcclxuXHJcbmNvbnN0IEhlYWQgPSBwcm9wcyA9PiAoXHJcbiAgICA8TmV4dEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICA8dGl0bGU+IHtwcm9wcy50aXRsZSB8fCBcIlwifSA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIFxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBjb250ZW50PXtwcm9wcy5kZXNjcmlwdGlvbiB8fCBkZWZhdWx0RGVzY3JpY2FvfSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9IFwiL3N0YXRpYy9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtwcm9wcy51cmwgfHwgZGVmYXVsdE9HVVJMfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwcm9wcy50aXRsZSB8fCBcIlwifSAvPlxyXG4gICAgICAgIDxtZXRhIFxyXG4gICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyacOnw6NvXCJcclxuICAgICAgICAgICAgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb24gfHwgZGVmYXVsdERlc2NyaWNhb30gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9e3Byb3BzLnVybCB8fCBkZWZhdWx0T0dVUkx9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17cHJvcHMub2dJbWFnZSB8fCBkZWZhdWx0T0dJbWFnZX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17cHJvcHMub2dJbWFnZSB8fCBkZWZhdWx0T0dJbWFnZX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOndpZHRoXCIgY29udGVudD1cIjYwMFwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiNjAwXCIgLz5cclxuICAgICAgICA8bGluayBcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiIFxyXG4vLyAgICAgICAgICAgIGhyZWY9XCIvc3RhdGljL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiBcclxuICAgICAgICAgICAgaW50ZWdyeXRlPVwic2hhMzg0LXd2ZlhwcXBaWlZRR0s2VEFoNVBWbEdPZlFOSFNvRDJ4YkUrUWtQeENBRmxORWV2b0VIM1NsMHNpYlZjT1FWbk5cIiBcclxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9zdHlsZS5jc3NcIiAvPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvcHMucGFnU2VndXJvID8gKFxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc3RjLnNhbmRib3gucGFnc2VndXJvLnVvbC5jb20uYnIvcGFnc2VndXJvL2FwaS92Mi9jaGVja291dC9wYWdzZWd1cm8uZGlyZWN0cGF5bWVudC5qc1wiPlxyXG4gICAgICAgICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvTmV4dEhlYWQ+XHJcbik7XHJcblxyXG5IZWFkLnByb3BUeXBlcz17XHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgb2dJbWFnZTogc3RyaW5nXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVJhZGlvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgY29uc3Qge25hbWUsIGNoZWtlZCwgbGFiZWwsIG9uQ2hhbmdlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0taW5wdXQgZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9e2NoZWtlZH0gbmFtZT17bmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPiAmbmJzcDsge2xhYmVsfSA8L2xhYmVsPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtU2ltcGxlcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGNvbnN0IHt2YWx1ZSwgbmFtZSwgcGxhY2Vob2xkZXIsIHR5cGUsIGxhYmVsLCBvbkNoYW5nZSwgZXJyb30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWwgJiYgPGxhYmVsPiB7bGFiZWx9IDwvbGFiZWw+fVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e3R5cGV9IHZhbHVlPXt2YWx1ZX0gbmFtZT17bmFtZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJybyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWUgPSBcImVycm9cIj4ge2Vycm99IDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNsYXNzIERhZG9zRGFMb2phIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmxvamEpIHJldHVybiAoPGRpdj4gPC9kaXY+KTtcclxuICAgICAgICBjb25zdCB7bm9tZSwgY25waiwgZW1haWwsIGVuZGVyZWNvLCB0ZWxlZm9uZXN9ID0gdGhpcy5wcm9wcy5sb2phO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTEgZGFkb3MtZGEtbG9qYVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+IEVudHJlIGVtIENvbnRhdG8gPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJsb2phLW5vbWVcIj4gTm9tZToge25vbWV9IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IFwibG9qYS1jbnBqXCI+IENOUEo6IHtjbnBqfSA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWUgPSBcImxvamEtZW1haWxcIj4gRS1tYWlsOiA8YSBocmVmPXtgbWFpbHRvOiR7ZW1haWx9YH0+IHtlbWFpbH0gPC9hPiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWUgPSBcImxvamEtdGVsZWZvbmVzXCI+IFRlbGVmb25lczogPC9wPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbGVmb25lcy5tYXAoKGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IFwibG9qYS10ZWxlZm9uZVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YHBob25lOiR7dGVsZWZvbmVzfWB9PiB7dGVsZWZvbmVzfSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IFwibG9qYS1lbmRlcmVjb1wiPiB7ZW5kZXJlY28ubG9jYWx9LCB7ZW5kZXJlY28ubnVtZXJvfSAtIHtlbmRlcmVjby5iYWlycm99IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IFwibG9qYS1jaWRhZGVcIj4ge2VuZGVyZWNvLmNpZGFkZX0gLyB7ZW5kZXJlY28uZXN0YWRvfSAtIHtlbmRlcmVjby5DRVB9IDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGxvamE6IHN0YXRlLmxvamEubG9qYVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpIChEYWRvc0RhTG9qYSk7IiwiaW1wb3J0IEhlYWQgZnJvbSAnLi9IZWFkJztcclxuXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuL1N0eWxlJztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgZGVzY3JpcHRpb24sIHVybCwgaW1hZ2UsIHBhZ1NlZ3VybyB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkXHJcbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICB1cmw9e3VybH1cclxuICAgICAgICAgICAgb2dJbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICAgIHBhZ1NlZ3Vybz17cGFnU2VndXJvfT48L0hlYWQ+XHJcbiAgICAgICAgPFN0eWxlIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICZjb3B5OyBMb2phIElUIC0gQ3Vyc28gQ3JpYW5kbyB1bSBFY29tbWVyY2UgZG8gWmVyb1xyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY2xhc3MgQ2F0ZWdvcmlhcyBleHRlbmRzIENvbXBvbmVudHtcclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IGNhdGVnb3JpYXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpYXMgZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhcy5tYXAoY2F0ZWdvcmlhID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jYXRlZ29yaWEvJHtjYXRlZ29yaWEubm9tZX0/aWQ9JHtjYXRlZ29yaWEuX2lkfWB9IGtleT17Y2F0ZWdvcmlhLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpYS1pdGVtIGZsZXgtMSBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57Y2F0ZWdvcmlhLm5vbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBjYXRlZ29yaWFzOiBzdGF0ZS5jYXRlZ29yaWEuY2F0ZWdvcmlhc1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENhdGVnb3JpYXMpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBQYWdpbmFzID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCB2ZXJ0aWNhbCBpbnN0aXR1Y2lvbmFsXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPlDDoWdpbmFzPC9oMj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPHNwYW4+UMOhZ2luYSBJbmljaWFsPC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2NhcnJpbmhvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlZlciBTYWNvbGE8L3NwYW4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYXJlYS1jbGllbnRlL1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5NaW5oYSBDb250YTwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zb2JyZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5Tb2JyZSBhIExvamE8L3NwYW4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFJFREVTX1NPQ0lBSVMgPSBbXHJcbiAgICB7IG5vbWU6IFwiZmFjZWJvb2tcIiwgdXJsOiBcIiNcIiB9LFxyXG4gICAgeyBub21lOiBcImluc3RhZ3JhbVwiLCB1cmw6IFwiI1wiIH0sXHJcbiAgICB7IG5vbWU6IFwidHdpdHRlclwiLCB1cmw6IFwiI1wiIH0sXHJcbiAgICB7IG5vbWU6IFwid2hhdHNhcHBcIiwgdXJsOiBcIiNcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgUmVkZXNTb2NpYWlzID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5SZWRlcyBTb2NpYWlzPC9oMj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCByZWRlcy1zb2NpYWlzIHdyYXBcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUkVERVNfU09DSUFJUy5tYXAoKGl0ZW0sIGlkeCk9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleFwiIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmEgZmEtJHtpdGVtLm5vbWV9IGZhLWxnYH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVkZXNTb2NpYWlzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBMb2dvQ2FiZWNhbGhvID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTIgZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImxvZ29cIiB3aWR0aD1cIjkwJVwiIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ29DYWJlY2FsaG87IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPiB7YFxyXG4gICAgXHJcbiAgICBib2R5IHsgXHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7IH1cclxuICAgIGJvZHksICoge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lcixcclxuICAgIC5jb250YWluZXItYmlnIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyB9XHJcbiAgICAuY29udGFpbmVyLWJpZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNDQwIHB4OyB9XHJcblxyXG4gICAgLmZsZXgge2Rpc3BsYXk6IGZsZXg7IH1cclxuICAgIC5mbGV4LTEge2ZsZXg6IDE7IH1cclxuICAgIC5mbGV4LTIge2ZsZXg6IDI7IH1cclxuICAgIC5mbGV4LTMge2ZsZXg6IDM7IH1cclxuICAgIC5mbGV4LTQge2ZsZXg6IDQ7IH1cclxuICAgIC5mbGV4LTUge2ZsZXg6IDU7IH1cclxuICAgIC5mbGV4LTYge2ZsZXg6IDY7IH1cclxuXHJcbiAgICAud3JhcCB7ZmxleC13cmFwOiB3cmFwOyB9XHJcbiAgICAud3JhcC0xIHsgXHJcbiAgICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgIH1cclxuICAgIC53cmFwLTIgeyBcclxuICAgICAgICBmbGF4LWJhc2ljOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgIH1cclxuICAgIC53cmFwLTMgeyBcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDMyJSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygzMiUgLSA1MHB4KTtcclxuICAgIH1cclxuICAgIC53cmFwLTQgeyBcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDI1JSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygyNSUgLSA1MHB4KTtcclxuICAgIH1cclxuICAgIC53cmFwLTUgeyBcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDIwJSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygyMCUgLSA1MHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwge2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuXHJcbiAgICAuZmxleC1jZW50ZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuICAgIC5mbGV4LXN0YXJ0IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4gICAgLmZsZXgtcmlnaHQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG5cclxuICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtOyB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgLndyYXAtbWIge2ZsZXgtd3JhcDogd3JhcDsgfVxyXG4gICAgICAgIC53cmFwLTItbWIge1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDUwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdXRvLndyYXAtMi1tYiB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhvcml6b250YWwtbWIge2ZsZXgtZGlyZWN0aW9uOiByb3c7IH1cclxuICAgICAgICAuaG9yaXpvbnRhbCB7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gICAgfVxyXG5cclxuICAgIGB9IDwvc3R5bGU+XHJcbikiLCJleHBvcnQgY29uc3QgQVBJID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuICAgICAgICAgICAgIHZlcnNhbyA9IFwidjFcIixcclxuICAgICAgICAgICAgIGxvamEgPSBcIjYwYzI2MmU1M2ViZDlmMDljMDgwZjU5YVwiLFxyXG4gICAgICAgICAgICAgYmFzZUltZyA9IEFQSSArIFwiL3B1YmxpYy9pbWFnZXMvXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9nby9DYWJlY2FsaG8nO1xyXG5pbXBvcnQgQ2FtcG9QZXNxdWlzYSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhbXBvcy9QZXNxdWlzYSc7XHJcbmltcG9ydCBDYXJkQ2FycmluaG8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYXJkcy9DYXJyaW5obyc7XHJcbmltcG9ydCBDYXRlZ29yaWFzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGlzdGFzL0NhdGVnb3JpYXMnO1xyXG4vL2ltcG9ydCBDYXJkQ2FycmluaG9MaW1wbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhcmRzL0NhcnJpbmhvTGltcG8nO1xyXG5cclxuY2xhc3MgQ2FiZWNhbGhvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIHJlbmRlckNhYmVjYWxob05vcm1hbCgpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYW1wb1Blc3F1aXNhIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDYXJyaW5obyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpYXMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWFzIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuLypcclxuICAgIHJlbmRlckNhYmVjYWxob05vcm1hbCgpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYW1wb1Blc3F1aXNhIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDYXJyaW5obyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ2FycmluaG9MaW1wbyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpYXMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWFzIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4qLyBcclxuXHJcbiAgICByZW5kZXJDYWJlY2FsaG9TaW1wbGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXIgTm8tTGlua3MgSGVhZGVyLVNpbXBsZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGNvbnN0IHtzaW1wbGVzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIHNpbXBsZXMgPyBcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2FiZWNhbGhvU2ltcGxlcygpIDogXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNhYmVjYWxob05vcm1hbCgpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhYmVjYWxobzsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBiYXNlSW1nIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHsgZm9ybWF0TW9uZXkgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBhZGRDYXJ0IH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FydCc7XHJcblxyXG5jbGFzcyBMaXN0YURlUHJvZHV0b3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlckNhYmVjYWxob0NhcnJpbmhvKHNlbUFsdGVyYWNvZXMpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FycmluaG8tY2FiZWNhbGhvIG5vLW1iLWZsZXggZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGxpbmUgZmxleC0xIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5RdWFudGlkYWRlPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkbGluZSBmbGV4LTEgZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlByZcOnbyBVbml0w6FyaW88L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRsaW5lIGZsZXgtMSBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+UHJlw6dvIFRvdGFsPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyAhc2VtQWx0ZXJhY29lcyAmJiAoPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj48L2Rpdj4pIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVF1YW50aWRhZGUoZSwgcXVhbnRpZGFkZSwgaXRlbSwgaW5kZXgpe1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUsIHF1YW50aWRhZGUsIGl0ZW0udmFyaWFjYW8ucXVhbnRpZGFkZSk7XHJcbiAgICAgICAgaWYoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA8IDEpIHJldHVybjtcclxuICAgICAgICBsZXQgbm92YVF1YW50aWRhZGUgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGxldCBjaGFuZ2UgPSBub3ZhUXVhbnRpZGFkZSAtIHF1YW50aWRhZGU7XHJcbiAgICAgICAgaWYoIG5vdmFRdWFudGlkYWRlID49IGl0ZW0udmFyaWFjYW8ucXVhbnRpZGFkZSApe1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJOw6NvIHRlbW9zIGVzc2EgcXVhbnRpZGFkZSBlbSBlc3RvcXVlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWRkQ2FydCh7XHJcbiAgICAgICAgICAgIHByb2R1dG86IGl0ZW0ucHJvZHV0by5faWQsXHJcbiAgICAgICAgICAgIHZhcmlhY2FvOiBpdGVtLnZhcmlhY2FvLl9pZCxcclxuICAgICAgICAgICAgcXVhbnRpZGFkZTogY2hhbmdlLFxyXG4gICAgICAgICAgICBwcmVjb1VuaXRhcmlvOiBpdGVtLnByZWNvVW5pdGFyaW9cclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVRdWFudGlkYWRlKGNoYW5nZSwgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZXJQcm9kdXRvQ2FycmluaG8oaW5kZXgpe1xyXG4gICAgICAgIGlmKHdpbmRvdy5jb25maXJtKFwiVm9jw6ogZGVzZWphIHJlYWxtZW50ZSByZW1vdmVyIGVzc2UgcHJvZHV0bz9cIikpe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZXJQcm9kdXRvKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUHJvZHV0byhpdGVtLCBzZW1BbHRlcmFjb2VzLCBpbmRleCl7XHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAgICFpdGVtLnZhcmlhY2FvIHx8ICFpdGVtLnZhcmlhY2FvLl9pZCB8fCBcclxuICAgICAgICAgICAgIWl0ZW0ucHJvZHV0byB8fCAhaXRlbS5wcm9kdXRvLl9pZFxyXG4gICAgICAgICkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZm90byA9IGl0ZW0udmFyaWFjYW8uZm90b3MgJiYgaXRlbS52YXJpYWNhby5mb3Rvcy5sZW5ndGggPiAwID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhcmlhY2FvLmZvdG9zWzBdIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByb2R1dG8uZm90b3NbMF07XHJcbiAgICAgICAgY29uc3Qgbm9tZSA9IGl0ZW0ucHJvZHV0by50aXR1bG8gKyBcIiAtIFwiICsgaXRlbS52YXJpYWNhby5ub21lO1xyXG4gICAgICAgIGNvbnN0IHsgcXVhbnRpZGFkZSwgcHJlY29Vbml0YXJpbyB9ID0gaXRlbTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhcnJpbmhvLWl0ZW0gZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTQgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHV0by1pbWFnZSBmbGV4LTIgZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmFzZUltZyArIGZvdG99IGFsdD17bm9tZX0gd2lkdGg9XCIxMDBweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdXRvLXRpdHVsbyBmbGV4LTQgZmxleCBmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntub21lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbUFsdGVyYWNvZXMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPHNwYW4+e3F1YW50aWRhZGV9PC9zcGFuPikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtxdWFudGlkYWRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1dG8tcXVhbnRpZGFkZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmNoYW5nZVF1YW50aWRhZGUoZSwgcXVhbnRpZGFkZSwgaXRlbSwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Zm9ybWF0TW9uZXkocHJlY29Vbml0YXJpbyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdE1vbmV5KHByZWNvVW5pdGFyaW8gKiBxdWFudGlkYWRlKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsgIXNlbUFsdGVyYWNvZXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5yZW1vdmVyUHJvZHV0b0NhcnJpbmhvKGluZGV4KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tcmVtb3ZlclwiPlJlbW92ZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUHJvZHV0b3Moc2VtQWx0ZXJhY29lcyl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2FycmluaG8ubWFwKChpdGVtLCBpbmRleCkgPT4gdGhpcy5yZW5kZXJQcm9kdXRvKGl0ZW0sIHNlbUFsdGVyYWNvZXMsIGluZGV4KSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IHNlbUFsdGVyYWNvZXMsIGNhcnJpbmhvIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTGlzdGEtRGUtUHJvZHV0b3MgZmxleCB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNhYmVjYWxob0NhcnJpbmhvKHNlbUFsdGVyYWNvZXMpIH1cclxuICAgICAgICAgICAgICAgIHsgY2FycmluaG8gJiYgdGhpcy5yZW5kZXJQcm9kdXRvcyhzZW1BbHRlcmFjb2VzKSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5oby5jYXJyaW5ob1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25zKShMaXN0YURlUHJvZHV0b3MpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDYXJ0IH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FydCc7XHJcbmltcG9ydCB7IHZhbGlkYXRlQ1BGIH0gZnJvbSAnLi4vLi4vdXRpbHMvdmFsaWRhdGUnO1xyXG5pbXBvcnQgQWxlcnRHZXJhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FsZXJ0L0dlcmFsJztcclxuXHJcbmNsYXNzIENoZWNrb3V0QnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsIFxyXG4gICAgICAgIGF2aXNvOiBudWxsIFxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZURpc2FibGVkID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRpc2FibGVkOiAhdGhpcy5zdGF0ZS5kaXNhYmxlZCB9KTtcclxuXHJcbiAgICBjYWxjdWxhclZhbG9yVG90YWwoY2FycmluaG8sIGZyZXRlU2VsZWNpb25hZG8pe1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coJ2NhbGN2bHRvdGFsLWZyZXRlIHNlbGVjaW9uYWRvOiAnLCBmcmV0ZVNlbGVjaW9uYWRvKTtcclxuICAgICAgICBjb25zdCB2YWxvclByb2R1dG9zID0gY2FycmluaG8ucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFsbCwgaXRlbSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGwgKyAoTnVtYmVyKGl0ZW0ucHJlY29Vbml0YXJpbykgKiBOdW1iZXIoaXRlbS5xdWFudGlkYWRlKSkgLCAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICBjb25zdCB2YWxvckZyZXRlID0gTnVtYmVyKGZyZXRlU2VsZWNpb25hZG8uVmFsb3IucmVwbGFjZSgnLCcsJy4nKSk7XHJcbiAgICAgICAgY29uc3QgdmFsb3JGcmV0ZSA9IGZyZXRlU2VsZWNpb25hZG8gPyBOdW1iZXIoZnJldGVTZWxlY2lvbmFkby5WYWxvci5yZXBsYWNlKCcsJywnLicpKSA6IDA7XHJcbiAgICAgICAgcmV0dXJuIHZhbG9yUHJvZHV0b3MgKyB2YWxvckZyZXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXJGb3JtdWxhcmlvKCl7XHJcbiAgICAgICAgY29uc3QgeyAgXHJcbiAgICAgICAgICAgIG5vbWUsIENQRiwgZGF0YURlTmFzY2ltZW50bywgdGVsZWZvbmUsXHJcbiAgICAgICAgICAgIGxvY2FsLCBudW1lcm8sIGJhaXJybywgY2lkYWRlLCBlc3RhZG8sIENFUCxcclxuICAgICAgICAgICAgZGFkb3NDb2JyYW5jYSwgZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhLFxyXG4gICAgICAgICAgICBDUEZib2xldG8sXHJcbiAgICAgICAgICAgIG51bWVyb0NhcnRhbywgbm9tZUNhcnRhbywgbWVzQ2FydGFvLCBhbm9DYXJ0YW8sIHBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEsIENWVkNhcnRhbyxcclxuICAgICAgICAgICAgY3JlZGl0X2NhcmRfdG9rZW5cclxuICAgICAgICB9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgICAgIGNvbnN0IHsgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgdGVtRXJybyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZighbm9tZSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIUNQRiB8fCBDUEYubGVuZ3RoICE9PSAxNCkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoQ1BGICYmIENQRi5sZW5ndGggPT09IDE0ICYmICF2YWxpZGF0ZUNQRihDUEYpKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighZGF0YURlTmFzY2ltZW50byB8fCBkYXRhRGVOYXNjaW1lbnRvLmxlbmd0aCAhPT0gMTApIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCF0ZWxlZm9uZSB8fCB0ZWxlZm9uZS5sZW5ndGggPCAxMSkgdGVtRXJybyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmKCFsb2NhbCkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIW51bWVybykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIWJhaXJybykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIWNpZGFkZSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIWVzdGFkbykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIUNFUCB8fCBDRVAubGVuZ3RoICE9PSA5KSB0ZW1FcnJvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYoIWRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSl7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLmxvY2FsKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIWRhZG9zQ29icmFuY2EubnVtZXJvKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIWRhZG9zQ29icmFuY2EuYmFpcnJvKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIWRhZG9zQ29icmFuY2EuY2lkYWRlKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIWRhZG9zQ29icmFuY2EuZXN0YWRvKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIWRhZG9zQ29icmFuY2EuQ0VQIHx8IGRhZG9zQ29icmFuY2EuQ0VQLmxlbmd0aCAhPT0gOSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gPT09IFwiYm9sZXRvXCIpe1xyXG4gICAgICAgICAgICBpZighQ1BGYm9sZXRvICYmICFDUEYpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZihDUEZib2xldG8gJiYgQ1BGYm9sZXRvLmxlbmd0aCAhPT0gMTQgJiYgIXZhbGlkYXRlQ1BGKENQRmJvbGV0bykpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKCFudW1lcm9DYXJ0YW8gfHwgbnVtZXJvQ2FydGFvLmxlbmd0aCAhPT0gMTkpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighbm9tZUNhcnRhbykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFtZXNDYXJ0YW8gfHwgbWVzQ2FydGFvLmxlbmd0aCAhPT0gMikgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFhbm9DYXJ0YW8gfHwgYW5vQ2FydGFvLmxlbmd0aCAhPT0gNCkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFwYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIWNyZWRpdF9jYXJkX3Rva2VuKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIUNWVkNhcnRhbyB8fCBDVlZDYXJ0YW8ubGVuZ3RoICE9PSAzKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgY29uc29sZS5sb2coJ3RlbSBlcnJvOiAnLCB0ZW1FcnJvKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICF0ZW1FcnJvO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKCl7XHJcbiAgICAgICAgY29uc3QgeyBmcmV0ZVNlbGVjaW9uYWRvLCB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhckZvcm11bGFyaW8gPSB0aGlzLnZhbGlkYXJGb3JtdWxhcmlvKCk7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXJGb3JtdWxhcmlvICYmIGZyZXRlU2VsZWNpb25hZG8gJiYgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdCgpe1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgZm9ybSwgZnJldGVTZWxlY2lvbmFkbywgdG9rZW4sIHNlbmRlckhhc2gsIHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkb1xyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsZXN1Ym1pdC1mcmV0ZSBzZWxlY2lvbmFkbzogJywgZnJldGVTZWxlY2lvbmFkbyk7XHJcbiAgICAgICAgY29uc3QgY2FycmluaG8gPSBnZXRDYXJ0KCk7XHJcbiAgICAgICAgY29uc3QgdmFsb3JUb3RhbCA9IHRoaXMuY2FsY3VsYXJWYWxvclRvdGFsKGNhcnJpbmhvLCBmcmV0ZVNlbGVjaW9uYWRvKTtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKCd2YWxvciB0b3RhbDogJywgdmFsb3JUb3RhbCk7XHJcbiAgICAgICAgaWYoIXRoaXMudmFsaWRhdGUoKSkgcmV0dXJuIG51bGw7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZygncGFzc291IDMnKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZURpc2FibGVkKCk7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZygncGFzc291IDQnKTtcclxuICAgICAgICB0aGlzLnByb3BzLm5vdm9QZWRpZG8oXHJcbiAgICAgICAgICAgIGZvcm0sIGZyZXRlU2VsZWNpb25hZG8sIHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbywgXHJcbiAgICAgICAgICAgIHZhbG9yVG90YWwsIHRva2VuLCBzZW5kZXJIYXNoLCBjYXJyaW5obywgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihlcnJvcil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGF2aXNvOiB7IHN0YXR1czpmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9IH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZURpc2FibGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZygnaGVuZGVyLWZyZXRlIHNlbGVjaW9uYWRvOiAnLCB0aGlzLnByb3BzLmZyZXRlU2VsZWNpb25hZG8pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8QWxlcnRHZXJhbCBhdmlzbz17dGhpcy5zdGF0ZS5hdmlzb30gLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jdGEgYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3VibWl0KCl9ID5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRpc2FibGVkID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRU5WSUFORE8uLi5cIiA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNPTkNMVUlSIFBFRElET1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBjYXJyaW5obzogc3RhdGUuY2FycmluaG8uY2FycmluaG8sXHJcbiAgICB1c3VhcmlvOiBzdGF0ZS5hdXRoLnVzdWFyaW8sXHJcbiAgICBjbGllbnRlOiBzdGF0ZS5jbGllbnRlLmNsaWVudGUsXHJcbiAgICBmcmV0ZVNlbGVjaW9uYWRvOiBzdGF0ZS5jYXJyaW5oby5mcmV0ZVNlbGVjaW9uYWRvLFxyXG4gICAgZm9ybTogc3RhdGUuY2hlY2tvdXQuZm9ybSxcclxuICAgIHRva2VuOiBzdGF0ZS5hdXRoLnRva2VuLFxyXG4gICAgc2VuZGVySGFzaDogc3RhdGUuY2hlY2tvdXQuc2VuZGVySGFzaCxcclxuICAgIHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbzogc3RhdGUuY2hlY2tvdXQudGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbnMpKENoZWNrb3V0QnV0dG9uKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IERhZG9zQ2xpZW50ZUNvbnRhaW5lciBmcm9tICcuLi9DbGllbnRlL0RhZG9zQ2xpZW50ZSc7XHJcbmltcG9ydCBDbGllbnRlTG9naW4gZnJvbSAnLi4vQ2xpZW50ZS9DbGllbnRlTG9naW4nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuXHJcbmNsYXNzIERhZG9zQ2xpZW50ZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZmV0Y2hDbGllbnRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5mZXRjaENsaWVudGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaENsaWVudGUoKXtcclxuICAgICAgICBjb25zdCB7IHVzdWFyaW8sIHRva2VuLCBjbGllbnRlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmKHVzdWFyaW8gJiYgdG9rZW4gJiYgIWNsaWVudGUpe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoQ2xpZW50ZSh1c3VhcmlvLl9pZCwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IHVzdWFyaW8sIHBlcm1pc3Nhb0luaWNpYWwsIHBlcm1pdGlyIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiB1c3VhcmlvIHx8IHBlcm1pc3Nhb0luaWNpYWwgPyBcclxuICAgICAgICAgICAgPERhZG9zQ2xpZW50ZUNvbnRhaW5lciAvPiA6IFxyXG4gICAgICAgICAgICA8Q2xpZW50ZUxvZ2luIHBlcm1pdGlyPXtwZXJtaXRpcn0gLz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICB1c3VhcmlvOiBzdGF0ZS5hdXRoLnVzdWFyaW8sXHJcbiAgICB0b2tlbjogc3RhdGUuYXV0aC50b2tlbixcclxuICAgIGNsaWVudGU6IHN0YXRlLmNsaWVudGUuY2xpZW50ZVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25zKShEYWRvc0NsaWVudGUpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtU2ltcGxlcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lucHV0cy9Gb3JtU2ltcGxlcyc7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHsgRVNUQURPUyB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgZm9ybWF0TnVtYmVyLCBmb3JtYXRDRVAgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQnO1xyXG5cclxuY2xhc3MgRGFkb3NFbnRyZWdhQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBlcnJvczogeyBkYWRvc0NvYnJhbmNhOiB7fSB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmZldGNoQ2xpZW50ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpe1xyXG4gICAgICAgIGlmKCFwcmV2UHJvcHMuY2xpZW50ZSAmJiB0aGlzLnByb3BzLmNsaWVudGUpe1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoQ2xpZW50ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmZXRjaENsaWVudGUoKXtcclxuICAgICAgICBjb25zdCB7IGNsaWVudGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRGb3JtKHtcclxuICAgICAgICAgICAgZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2NhbDogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28ubG9jYWwgOiBcIlwiLFxyXG4gICAgICAgICAgICBudW1lcm86IGNsaWVudGUgPyBjbGllbnRlLmVuZGVyZWNvLm51bWVybyA6IFwiXCIsXHJcbiAgICAgICAgICAgIGJhaXJybzogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uYmFpcnJvIDogXCJcIixcclxuICAgICAgICAgICAgY29tcGxlbWVudG86IGNsaWVudGUgPyBjbGllbnRlLmVuZGVyZWNvLmNvbXBsZW1lbnRvIDogXCJcIixcclxuICAgICAgICAgICAgY2lkYWRlOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5jaWRhZGUgOiBcIlwiLFxyXG4gICAgICAgICAgICBlc3RhZG86IGNsaWVudGUgPyBjbGllbnRlLmVuZGVyZWNvLmVzdGFkbyA6IFwiXCIsXHJcbiAgICAgICAgICAgIENFUDogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uQ0VQIDogXCJcIixcclxuICAgICAgICAgICAgZGFkb3NDb2JyYW5jYToge1xyXG4gICAgICAgICAgICAgICAgbG9jYWw6IGNsaWVudGUgPyBjbGllbnRlLmVuZGVyZWNvLmxvY2FsIDogXCJcIixcclxuICAgICAgICAgICAgICAgIG51bWVybzogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28ubnVtZXJvIDogXCJcIixcclxuICAgICAgICAgICAgICAgIGJhaXJybzogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uYmFpcnJvIDogXCJcIixcclxuICAgICAgICAgICAgICAgIGNvbXBsZW1lbnRvOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5jb21wbGVtZW50byA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjaWRhZGU6IGNsaWVudGUgPyBjbGllbnRlLmVuZGVyZWNvLmNpZGFkZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlc3RhZG86IGNsaWVudGUgPyBjbGllbnRlLmVuZGVyZWNvLmVzdGFkbyA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBDRVA6IGNsaWVudGUgPyBjbGllbnRlLmVuZGVyZWNvLkNFUCA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YWxpZGF0ZSgpe1xyXG4gICAgICAgIGNvbnN0IHsgXHJcbiAgICAgICAgICAgIGRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSxcclxuICAgICAgICAgICAgbG9jYWwsIG51bWVybywgYmFpcnJvLCBjaWRhZGUsIGVzdGFkbywgQ0VQLFxyXG4gICAgICAgICAgICBkYWRvc0NvYnJhbmNhIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgY29uc3QgZXJyb3MgPSB7IGRhZG9zQ29icmFuY2E6IHt9IH07XHJcblxyXG4gICAgICAgIGlmKCFsb2NhbCkgZXJyb3MubG9jYWwgPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IGVuZGVyZcOnb1wiO1xyXG4gICAgICAgIGlmKCFudW1lcm8pIGVycm9zLm51bWVybyA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgbsO6bWVyb1wiO1xyXG4gICAgICAgIGlmKCFiYWlycm8pIGVycm9zLmJhaXJybyA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgYmFpcnJvXCI7XHJcbiAgICAgICAgaWYoIWNpZGFkZSkgZXJyb3MuY2lkYWRlID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBhIHN1YSBjaWRhZGVcIjtcclxuICAgICAgICBpZighZXN0YWRvKSBlcnJvcy5lc3RhZG8gPSBcIlNlbGVjaW9uZSBvIHNldSBlc3RhZG9cIjtcclxuICAgICAgICBpZighQ0VQIHx8IENFUC5sZW5ndGggIT09IDkpIGVycm9zLkNFUCA9IFwiRGlnaXRlIGFxdWkgc2V1IENFUFwiO1xyXG5cclxuICAgICAgICBpZighZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhKXtcclxuICAgICAgICAgICAgaWYoIWRhZG9zQ29icmFuY2EubG9jYWwpIGVycm9zLmRhZG9zQ29icmFuY2EubG9jYWwgPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IGVuZGVyZcOnb1wiO1xyXG4gICAgICAgICAgICBpZighZGFkb3NDb2JyYW5jYS5udW1lcm8pIGVycm9zLmRhZG9zQ29icmFuY2EubnVtZXJvID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIHNldSBuw7ptZXJvXCI7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLmJhaXJybykgZXJyb3MuZGFkb3NDb2JyYW5jYS5iYWlycm8gPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IGJhaXJyb1wiO1xyXG4gICAgICAgICAgICBpZighZGFkb3NDb2JyYW5jYS5jaWRhZGUpIGVycm9zLmRhZG9zQ29icmFuY2EuY2lkYWRlID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBhIHN1YSBjaWRhZGVcIjtcclxuICAgICAgICAgICAgaWYoIWRhZG9zQ29icmFuY2EuZXN0YWRvKSBlcnJvcy5kYWRvc0NvYnJhbmNhLmVzdGFkbyA9IFwiU2VsZWNpb25lIG8gc2V1IGVzdGFkb1wiO1xyXG4gICAgICAgICAgICBpZighZGFkb3NDb2JyYW5jYS5DRVAgfHwgZGFkb3NDb2JyYW5jYS5DRVAubGVuZ3RoICE9PSA5KSBlcnJvcy5kYWRvc0NvYnJhbmNhLkNFUCA9IFwiRGlnaXRlIGFxdWkgc2V1IENFUFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9zIH0pO1xyXG4gICAgICAgIHJldHVybiAoIE9iamVjdC5rZXlzKGVycm9zKS5sZW5ndGggPT09IDEgJiYgT2JqZWN0LmtleXMoZXJyb3MuZGFkb3NDb2JyYW5jYSkubGVuZ3RoID09PSAwICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UgPSAoZmllbGQsIHZhbHVlLCBwcmVmaXgpID0+IFxyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0Rm9ybSh7IFtmaWVsZF06IHZhbHVlIH0sIHByZWZpeCkudGhlbigoKSA9PiB0aGlzLnZhbGlkYXRlKCkpO1xyXG5cclxuICAgIG9uQ2hhbmdlQ0VQID0gKGZpZWxkLCB2YWx1ZSwgcHJlZml4KSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRGb3JtKHsgW2ZpZWxkXTogdmFsdWUgfSwgcHJlZml4KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDkpe1xyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL3ZpYWNlcC5jb20uYnIvd3MvJHt2YWx1ZS5yZXBsYWNlKCctJywnJyl9L2pzb24vdW5pY29kZWApXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRGb3JtKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsb2NhbFwiOiByZXNwb25zZS5kYXRhW1wibG9ncmFkb3Vyb1wiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWlycm9cIjogcmVzcG9uc2UuZGF0YVtcImJhaXJyb1wiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjaWRhZGVcIjogcmVzcG9uc2UuZGF0YVtcImxvY2FsaWRhZGVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCI6IHJlc3BvbnNlLmRhdGFbXCJ1ZlwiXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHByZWZpeCkudGhlbigoKSA9PiB0aGlzLnZhbGlkYXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXJEYWRvc0RlRW50cmVnYSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLmZvcm0pIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHsgXHJcbiAgICAgICAgICAgIGRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSxcclxuICAgICAgICAgICAgbG9jYWwsXHJcbiAgICAgICAgICAgIG51bWVybyxcclxuICAgICAgICAgICAgYmFpcnJvLFxyXG4gICAgICAgICAgICBjb21wbGVtZW50byxcclxuICAgICAgICAgICAgY2lkYWRlLFxyXG4gICAgICAgICAgICBlc3RhZG8sXHJcbiAgICAgICAgICAgIENFUFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgY29uc3QgeyBlcnJvcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IHZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5EQURPUyBERSBFTlRSRUdBPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtDRVAgfHwgXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLkNFUH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkNFUFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEyMzQ1LTc4OVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNFUFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2VDRVAoXCJDRVBcIiwgZm9ybWF0Q0VQKGUudGFyZ2V0LnZhbHVlKSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xvY2FsIHx8IFwiXCJ9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmxvY2FsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvY2FsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJ1YSwgQXZlbmlkYSwgLi4uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVuZGVyZcOnbyAoUnVhLCBBdmVuaWRhLC4uKVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwibG9jYWxcIiwgZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtudW1lcm8gfHwgXCJcIn0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJybz17ZXJyb3MubnVtZXJvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm51bWVyb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCI5OTk5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk7Dum1lcm9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcIm51bWVyb1wiLCBmb3JtYXROdW1iZXIoZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhaXJybyB8fCBcIlwifSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJybz17ZXJyb3MuYmFpcnJvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhaXJyb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCYWlycm9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQmFpcnJvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJiYWlycm9cIiwgZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wbGVtZW50byB8fCBcIlwifSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5jb21wbGVtZW50b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21wbGVtZW50b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21wbGVtZW50b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb21wbGVtZW50b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiY29tcGxlbWVudG9cIiwgZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2lkYWRlIHx8IFwiXCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJybz17ZXJyb3MuY2lkYWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNpZGFkZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaWRhZGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2lkYWRlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJjaWRhZGVcIiwgZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IHZlcnRpY2FsIGZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVzdGFkbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2VzdGFkb30gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiZXN0YWRvXCIsIGUudGFyZ2V0LnZhbHVlKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TZWxlY2lvbmUuLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgT2JqZWN0LmtleXMoRVNUQURPUykubWFwKChhYmJyKSA9PiAoPG9wdGlvbiBrZXk9e2FiYnJ9IHZhbHVlPXthYmJyfT57RVNUQURPU1thYmJyXX08L29wdGlvbj4pKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVycm9zLmVzdGFkbyAmJiAoPHNtYWxsIGNsYXNzTmFtZT1cImVycm9cIj57ZXJyb3MuZXN0YWRvfTwvc21hbGw+KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2RhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSB8fCB0cnVlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMucHJvcHMuc2V0Rm9ybSh7IFwiZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhXCI6ICFkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiZuYnNwO09zIGRhZG9zIGRlIGVudHJlZ2Egc8OjbyBpZ3VhaXMgYW9zIGRhZG9zIGRlIGNvYnJhbsOnYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEYWRvc0RlQ29icmFuY2EoKXtcclxuICAgICAgICBpZighdGhpcy5wcm9wcy5mb3JtIHx8ICF0aGlzLnByb3BzLmZvcm0uZGFkb3NDb2JyYW5jYSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgbG9jYWwsXHJcbiAgICAgICAgICAgIG51bWVybyxcclxuICAgICAgICAgICAgYmFpcnJvLFxyXG4gICAgICAgICAgICBjb21wbGVtZW50byxcclxuICAgICAgICAgICAgY2lkYWRlLFxyXG4gICAgICAgICAgICBlc3RhZG8sXHJcbiAgICAgICAgICAgIENFUFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzLmZvcm0uZGFkb3NDb2JyYW5jYTtcclxuICAgICAgICBjb25zdCB7IGVycm9zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkRBRE9TIERFIENPQlJBTsOHQTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Q0VQIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmRhZG9zQ29icmFuY2EuQ0VQfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkNFUFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEyMzQ1LTc4OVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNFUFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2VDRVAoXCJDRVBcIiwgZm9ybWF0Q0VQKGUudGFyZ2V0LnZhbHVlKSwgJ2RhZG9zQ29icmFuY2EnKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9jYWwgfHwgXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5kYWRvc0NvYnJhbmNhLmxvY2FsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2NhbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSdWEsIEF2ZW5pZGEsIC4uLlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbmRlcmXDp28gKFJ1YSwgQXZlbmlkYSwuLilcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImxvY2FsXCIsIGUudGFyZ2V0LnZhbHVlLCAnZGFkb3NDb2JyYW5jYScpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtudW1lcm8gfHwgXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5kYWRvc0NvYnJhbmNhLm51bWVyb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibnVtZXJvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjk5OTlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTsO6bWVyb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwibnVtZXJvXCIsIGZvcm1hdE51bWJlcihlLnRhcmdldC52YWx1ZSksICdkYWRvc0NvYnJhbmNhJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYWlycm8gfHwgXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5kYWRvc0NvYnJhbmNhLmJhaXJyb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFpcnJvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJhaXJyb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCYWlycm9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImJhaXJyb1wiLCBlLnRhcmdldC52YWx1ZSwgJ2RhZG9zQ29icmFuY2EnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGxlbWVudG8gfHwgXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5kYWRvc0NvYnJhbmNhLmNvbXBsZW1lbnRvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21wbGVtZW50b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21wbGVtZW50b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb21wbGVtZW50b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiY29tcGxlbWVudG9cIiwgZS50YXJnZXQudmFsdWUsICdkYWRvc0NvYnJhbmNhJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaWRhZGUgfHwgXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5kYWRvc0NvYnJhbmNhLmNpZGFkZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2lkYWRlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNpZGFkZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaWRhZGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImNpZGFkZVwiLCBlLnRhcmdldC52YWx1ZSwgJ2RhZG9zQ29icmFuY2EnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCB2ZXJ0aWNhbCBmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Fc3RhZG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtlc3RhZG99IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImVzdGFkb1wiLCBlLnRhcmdldC52YWx1ZSwgJ2RhZG9zQ29icmFuY2EnKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TZWxlY2lvbmUuLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgT2JqZWN0LmtleXMoRVNUQURPUykubWFwKChhYmJyKSA9PiAoPG9wdGlvbiBrZXk9e2FiYnJ9IHZhbHVlPXthYmJyfT57RVNUQURPU1thYmJyXX08L29wdGlvbj4pKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVycm9zLmRhZG9zQ29icmFuY2EuZXN0YWRvICYmICg8c21hbGwgY2xhc3NOYW1lPVwiZXJyb1wiPntlcnJvcy5kYWRvc0NvYnJhbmNhLmVzdGFkb308L3NtYWxsPikgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgeyBkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyRGFkb3NEZUVudHJlZ2EoKSB9XHJcbiAgICAgICAgICAgICAgICB7ICFkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgJiYgdGhpcy5yZW5kZXJEYWRvc0RlQ29icmFuY2EoKSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICB1c3VhcmlvOiBzdGF0ZS5hdXRoLnVzdWFyaW8sXHJcbiAgICBjbGllbnRlOiBzdGF0ZS5jbGllbnRlLmNsaWVudGUsXHJcbiAgICBmb3JtOiBzdGF0ZS5jaGVja291dC5mb3JtXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbnMpKERhZG9zRW50cmVnYUNvbnRhaW5lcik7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBGb3JtUmFkaW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbnB1dHMvRm9ybVJhZGlvJztcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDYXJ0IH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FydCc7XHJcbmltcG9ydCB7IGZvcm1hdE1vbmV5LCBjb2RpZ29zQ29ycmVpb3MgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG5jbGFzcyBEYWRvc0ZyZXRlIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZihmb3JtKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jYWxjdWxhckZyZXRlKGZvcm0uQ0VQLCBnZXRDYXJ0KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKXtcclxuICAgICAgICBpZihwcmV2UHJvcHMuZm9ybS5DRVAgIT09IHRoaXMucHJvcHMuZm9ybS5DRVAgJiYgdGhpcy5wcm9wcy5mb3JtLkNFUC5sZW5ndGggPT09IDkpe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNhbGN1bGFyRnJldGUodGhpcy5wcm9wcy5mb3JtLkNFUCwgZ2V0Q2FydCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWNpb25hckZyZXRlKGZyZXRlKXtcclxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjaW9uYXJGcmV0ZShmcmV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgeyBmcmV0ZXMsIGZyZXRlU2VsZWNpb25hZG8gfSA9IHRoaXMucHJvcHM7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZygnZnJldGVzOiAnLCBmcmV0ZXMpO1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coJ2RhZG9zIGZyZXRlLWZyZXRlIHNlbGVjaW9uYWRvOiAnLCBmcmV0ZVNlbGVjaW9uYWRvKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRhZG9zLUZyZXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+TcOJVE9ET1MgREUgRU5UUkVHQTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZnJldGVzIHx8IFtdKS5tYXAoKGZyZXRlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVJhZGlvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnJldGVfc2VsZWNpb25hZG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZnJldGVTZWxlY2lvbmFkbyA/IGZyZXRlU2VsZWNpb25hZG8uQ29kaWdvID09PSBmcmV0ZS5Db2RpZ28gOiBmYWxzZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKT0+IHRoaXMuc2VsZWNpb25hckZyZXRlKGZyZXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y29kaWdvc0NvcnJlaW9zW2ZyZXRlLkNvZGlnb119IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCR7ZnJldGUuUHJhem9FbnRyZWdhfSBkaWFzIMO6dGVpcykgLSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9ybWF0TW9uZXkoZnJldGUuVmFsb3IucmVwbGFjZSgnLCcsJy4nKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+KHtcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5oby5jYXJyaW5obyxcclxuICAgIGNsaWVudGU6IHN0YXRlLmNsaWVudGUuY2xpZW50ZSxcclxuICAgIGZvcm06IHN0YXRlLmNoZWNrb3V0LmZvcm0sXHJcbiAgICBmcmV0ZXM6IHN0YXRlLmNhcnJpbmhvLmZyZXRlcyxcclxuICAgIGZyZXRlU2VsZWNpb25hZG86IHN0YXRlLmNhcnJpbmhvLmZyZXRlU2VsZWNpb25hZG9cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykoRGFkb3NGcmV0ZSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRm9ybVJhZGlvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXRzL0Zvcm1SYWRpbyc7XHJcbmltcG9ydCBGb3JtU2ltcGxlcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lucHV0cy9Gb3JtU2ltcGxlcyc7XHJcblxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcbmltcG9ydCB7Zm9ybWF0Q1BGLCBmb3JtYXRDYXJ0YW8sIGZvcm1hdE51bWJlcn0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0JztcclxuaW1wb3J0IHtmb3JtYXRNb25leX0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQge3ZhbGlkYXRlQ1BGfSBmcm9tICcuLi8uLi91dGlscy92YWxpZGF0ZSc7XHJcblxyXG5jbGFzcyBEYWRvc1BhZ2FtZW50byBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7ZXJyb3M6IHt9fVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0U2Vzc2lvblBhZ2FtZW50bygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIG51bWVyb0NhcnRhbyxcclxuICAgICAgICAgICAgbWVzQ2FydGFvLFxyXG4gICAgICAgICAgICBhbm9DYXJ0YW8sXHJcbiAgICAgICAgICAgIENWVkNhcnRhbyxcclxuICAgICAgICAgICAgY3JlZGl0X2NhcmRfdG9rZW4sXHJcbiAgICAgICAgICAgIGJhbmRlaXJhX2NhcnRhbyxcclxuICAgICAgICAgICAgcGFyY2VsYXNDYXJ0YW9cclxuICAgICAgICB9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG5cclxuICAgICAgICBpZighYmFuZGVpcmFfY2FydGFvICYmIG51bWVyb0NhcnRhbyAmJiBudW1lcm9DYXJ0YW8uc3BsaXQoJyAnKS5qb2luKCcnKS5sZW5ndGggPiA3KXtcclxuICAgICAgICAgICAgdGhpcy5nZXRCcmFuZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAgICFjcmVkaXRfY2FyZF90b2tlbiAmJlxyXG4gICAgICAgICAgICBudW1lcm9DYXJ0YW8gJiYgbnVtZXJvQ2FydGFvLnNwbGl0KCcgJykuam9pbignJykubGVuZ3RoID09PSAxNiAmJlxyXG4gICAgICAgICAgICBtZXNDYXJ0YW8gJiYgbWVzQ2FydGFvLmxlbmd0aCA9PT0gMiAmJlxyXG4gICAgICAgICAgICBhbm9DYXJ0YW8gJiYgYW5vQ2FydGFvLmxlbmd0aCA9PT0gNCAmJlxyXG4gICAgICAgICAgICBDVlZDYXJ0YW8gJiYgQ1ZWQ2FydGFvLmxlbmd0aCA9PT0gMyAmJlxyXG4gICAgICAgICAgICBiYW5kZWlyYV9jYXJ0YW8gXHJcbiAgICAgICAgKSB0aGlzLnN1Ym1pdENhcnRhb0hhc2goKTtcclxuXHJcbiAgICAgICAgaWYgKCghcGFyY2VsYXNDYXJ0YW8gJiYgYmFuZGVpcmFfY2FydGFvKSB8fFxyXG4gICAgICAgICAgICAocGFyY2VsYXNDYXJ0YW8gJiYgYmFuZGVpcmFfY2FydGFvICYmIHByZXZQcm9wcy5mcmV0ZVNlbGVjaW9uYWRvICE9PSB0aGlzLnByb3BzLmZyZXRlU2VsZWNpb25hZG8pXHJcbiAgICAgICAgKSB0aGlzLmdldFBhcmNlbGFzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnJhbmQoKXtcclxuICAgICAgICBjb25zdCB7IG51bWVyb0NhcnRhbyB9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgICAgIFBhZ1NlZ3Vyb0RpcmVjdFBheW1lbnQuZ2V0QnJhbmQoe1xyXG4gICAgICAgICAgICBjYXJkQmluOiBudW1lcm9DYXJ0YW8uc3BsaXQoJyAnKS5qb2luKCcnKS5zbGljZSgwLDYpLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocikgPT50aGlzLnByb3BzLnNldEZvcm0oeyBiYW5kZWlyYV9jYXJ0YW86IHIuYnJhbmQgfSksXHJcbiAgICAgICAgICAgIGVycm9yOiAocikgPT4gY29uc29sZS5sb2cocilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXRDYXJ0YW9IYXNoKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbnVtZXJvQ2FydGFvLFxyXG4gICAgICAgICAgICBtZXNDYXJ0YW8sXHJcbiAgICAgICAgICAgIGFub0NhcnRhbyxcclxuICAgICAgICAgICAgQ1ZWQ2FydGFvLFxyXG4gICAgICAgICAgICBiYW5kZWlyYV9jYXJ0YW9cclxuICAgICAgICB9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG5cclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGNhcmROdW1iZXI6IG51bWVyb0NhcnRhby5zcGxpdCgnICcpLmpvaW4oJycpLFxyXG4gICAgICAgICAgICBicmFuZDogYmFuZGVpcmFfY2FydGFvLm5hbWUsXHJcbiAgICAgICAgICAgIGN2djogQ1ZWQ2FydGFvLFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uTW9udGg6IG1lc0NhcnRhbyxcclxuICAgICAgICAgICAgZXhwaXJhdGlvblllYXI6IGFub0NhcnRhbyxcclxuICAgICAgICAgICAgc3VjY2VzczogKHIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0Rm9ybSh7Y3JlZGl0X2NhcmRfdG9rZW46IHIuY2FyZC50b2tlbn0pXHJcbiAgICAgICAgICAgIH0sICAgIFxyXG4gICAgICAgICAgICBlcnJvcjogKHIpID0+IGNvbnNvbGUubG9nKHIpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBQYWdTZWd1cm9EaXJlY3RQYXltZW50LmNyZWF0ZUNhcmRUb2tlbihwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmNlbGFzKCkge1xyXG4gICAgICAgIGNvbnN0IHtmcmV0ZVNlbGVjaW9uYWRvLCBjYXJyaW5ob30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtiYW5kZWlyYV9jYXJ0YW99ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG5cclxuICAgICAgICBsZXQgdmFsb3JUb3RhbCA9IGNhcnJpbmhvLnJlZHVjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhbGwsIGl0ZW0pID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsICsgKE51bWJlcihpdGVtLnByZWNvVW5pdGFyaW8pICogTnVtYmVyKGl0ZW0ucXVhbnRpZGFkZSkpLCAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgbGV0IGZyZXRlVmFsb3IgPSBOdW1iZXIoZnJldGVTZWxlY2lvbmFkby5WYWxvci5yZXBsYWNlKCcsJywgJy4nKSk7XHJcblxyXG4gICAgICAgIFBhZ1NlZ3Vyb0RpcmVjdFBheW1lbnQuZ2V0SW5zdGFsbG1lbnRzKHtcclxuICAgICAgICAgICAgYW1vdW50OiB2YWxvclRvdGFsICsgZnJldGVWYWxvcixcclxuICAgICAgICAgICAgbWF4SW5zdGFsbG1lbnROb0ludGVyZXN0OiA2LFxyXG4gICAgICAgICAgICBtYXhJbnN0YWxsbWVudDogNixcclxuICAgICAgICAgICAgYnJhbmQ6IGJhbmRlaXJhX2NhcnRhby5uYW1lLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRGb3JtKHtwYXJjZWxhc0NhcnRhbzogZGF0YS5pbnN0YWxsbWVudHN9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0Rm9ybSh7cGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYTogZGF0YS5pbnN0YWxsbWVudHNbYmFuZGVpcmFfY2FydGFvLm5hbWVdWzBdfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiAocikgPT4gY29uc29sZS5sb2cocilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJPcGNvZXNQYWdhbWVudG8oKSB7XHJcbiAgICAgICAgY29uc3Qge3RpcG9QYWdhbWVudG9TZWxlY2lvbmFkb30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVJhZGlvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJ0aXBvX3BhZ2FtZW50b19zZWxlY2lvbmFkb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkID0ge3RpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyA9PT0gJ2JvbGV0byd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoKSA9PiB0aGlzLnByb3BzLnNldFRpcG9QYWdhbWVudG8oXCJib2xldG9cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJCb2xldG8gQmFuY8OhcmlvXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtUmFkaW8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInRpcG9fcGFnYW1lbnRvX3NlbGVjaW9uYWRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgPSB7dGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSAnY2FydGFvJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geygpID0+IHRoaXMucHJvcHMuc2V0VGlwb1BhZ2FtZW50byhcImNhcnRhb1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIkNhcnTDo28gZGUgQ3LDqWRpdG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZSgpIHtcclxuICAgICAgICBjb25zdCB7dGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgQ1BGLCBDUEZib2xldG8sXHJcbiAgICAgICAgICAgIG51bWVyb0NhcnRhbywgbm9tZUNhcnRhbywgbWVzQ2FydGFvLCBhbm9DYXJ0YW8sIHBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEsIENWVkNhcnRhb1xyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgY29uc3QgZXJyb3MgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyA9PT0gXCJib2xldG9cIikge1xyXG4gICAgICAgICAgICBpZiAoIUNQRmJvbGV0byAmJiAhQ1BGKSBlcnJvcy5DUEZib2xldG8gPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IENQRlwiO1xyXG4gICAgICAgICAgICBpZiAoQ1BGYm9sZXRvICYmIENQRmJvbGV0by5sZW5ndGggIT09IDE0ICYmICF2YWxpZGF0ZUNQRihDUEZib2xldG8pKVxyXG4gICAgICAgICAgICAgICAgZXJyb3MuQ1BGYm9sZXRvID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIHNldSBDUEYgY29ycmV0YW1lbnRlXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSBcImNhcnRhb1wiKSB7XHJcbiAgICAgICAgICAgIGlmICghbnVtZXJvQ2FydGFvIHx8IG51bWVyb0NhcnRhby5sZW5ndGggIT09IDE5KSBlcnJvcy5udW1lcm9DYXJ0YW8gPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gbsO6bWVybyBkbyBzZXUgY2FydMOjb1wiO1xyXG4gICAgICAgICAgICBpZiAoIW5vbWVDYXJ0YW8pIGVycm9zLm5vbWVDYXJ0YW8gPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gbm9tZSBxdWUgZXN0w6Egbm8gY2FydMOjb1wiO1xyXG4gICAgICAgICAgICBpZiAoIW1lc0NhcnRhbyB8fCBtZXNDYXJ0YW8ubGVuZ3RoICE9PSAyKSBlcnJvcy5tZXNDYXJ0YW8gPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gbcOqcyBkZSB2ZW5jaW1lbnRvIGRvIGNhcnTDo29cIjtcclxuICAgICAgICAgICAgaWYgKCFhbm9DYXJ0YW8gfHwgYW5vQ2FydGFvLmxlbmd0aCAhPT0gNCkgZXJyb3MuYW5vQ2FydGFvID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIGFubyBkZSB2ZW5jaW1lbnRvIGRvIGNhcnTDo29cIjtcclxuICAgICAgICAgICAgaWYgKCFwYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhKSBlcnJvcy5wYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhID0gXCJTZWxlY2lvbmUgdW1hIGZvcm1hIGRlIHBhZ2FtZW50b1wiO1xyXG4gICAgICAgICAgICBpZiAoIUNWVkNhcnRhbyB8fCBDVlZDYXJ0YW8ubGVuZ3RoICE9PSAzKSBlcnJvcy5DVlZDYXJ0YW8gPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gY8OzZGlnbyBkZSBzZWd1cmFuw6dhIGRvIGNhcnTDo29cIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9zfSk7XHJcbiAgICAgICAgcmV0dXJuICEoT2JqZWN0LmtleXMoZXJyb3MpLmxlbmd0aCA+IDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlID0gKGZpZWxkLCB2YWx1ZSkgPT4gdGhpcy5wcm9wcy5zZXRGb3JtKHtbZmllbGRdOiB2YWx1ZX0pLnRoZW4oKCkgPT4gdGhpcy52YWxpZGF0ZSgpKTtcclxuXHJcbiAgICByZW5kZXJQYWdhbWVudG9Db21Cb2xldG8oKSB7XHJcbiAgICAgICAgY29uc3Qge0NQRiwgQ1BGYm9sZXRvfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7ZXJyb3N9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiRGFkb3MtUGFnYW1lbnRvXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Q1BGYm9sZXRvIHx8IENQRn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJDUEZcIiBcclxuICAgICAgICAgICAgICAgICAgICBlcnJvID0ge2Vycm9zLkNQRmJvbGV0b31cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiQ1BGXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIkNQRlwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiQ1BGYm9sZXRvXCIsIGZvcm1hdENQRihlLnRhcmdldC52YWx1ZSkpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUGFnYW1lbnRvQ29tQ2FydGFvKCkge1xyXG4gICAgICAgIGNvbnN0IHsgXHJcbiAgICAgICAgICAgIG5vbWVDYXJ0YW8sIFxyXG4gICAgICAgICAgICBudW1lcm9DYXJ0YW8sIFxyXG4gICAgICAgICAgICBDVlZDYXJ0YW8sIFxyXG4gICAgICAgICAgICBtZXNDYXJ0YW8sIFxyXG4gICAgICAgICAgICBhbm9DYXJ0YW8sIFxyXG4gICAgICAgICAgICBwYXJjZWxhc0NhcnRhbywgXHJcbiAgICAgICAgICAgIHBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEsXHJcbiAgICAgICAgICAgIGJhbmRlaXJhX2NhcnRhb1xyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgY29uc3Qge2Vycm9zfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIkRhZG9zLVBhZ2FtZW50b1wiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge25vbWVDYXJ0YW99IFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm8gPSB7ZXJyb3Mubm9tZUNhcnRhb31cclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJub21lQ2FydGFvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIk5vbWUgY29tbyBlc2NyaXRvIG5vIGNhcnTDo29cIiBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiTm9tZSBDb21wbGV0byBubyBDYXJ0w6NvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHRoaXMub25DaGFuZ2UoXCJub21lQ2FydGFvXCIsIGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge251bWVyb0NhcnRhb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvID0ge2Vycm9zLm51bWVyb0NhcnRhb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcIm51bWVyb0NhcnRhb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlhYWFggWFhYWCBYWFhYIFhYWFhcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJOw7ptZXJvIGRvIENhcnTDo29cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwibnVtZXJvQ2FydGFvXCIsIGZvcm1hdENhcnRhbyhlLnRhcmdldC52YWx1ZSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Q1ZWQ2FydGFvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm8gPSB7ZXJyb3MuQ1ZWQ2FydGFvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiQ1ZWQ2FydGFvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiWFhYXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiQ8OzZGlnbyBkZSBTZWd1cmFuw6dhIGRvIENhcnTDo29cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiQ1ZWQ2FydGFvXCIsIGZvcm1hdE51bWJlcihlLnRhcmdldC52YWx1ZSwgMykpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gRGF0YSBkZSBWYWxpZGFkZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7bWVzQ2FydGFvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJybyA9IHtlcnJvcy5tZXNDYXJ0YW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcIm1lc0NhcnRhb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiTU1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIk3DqnNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHRoaXMub25DaGFuZ2UoXCJtZXNDYXJ0YW9cIiwgZm9ybWF0TnVtYmVyKGUudGFyZ2V0LnZhbHVlLCAyKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0gXCJzbGFzaC1wYWdhbWVudG9cIj4gJm5ic3A7IC8gJm5ic3A7IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2Fub0NhcnRhb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm8gPSB7ZXJyb3MuYW5vQ2FydGFvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJhbm9DYXJ0YW9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIkFBQUFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIkFub1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImFub0NhcnRhb1wiLCBmb3JtYXROdW1iZXIoZS50YXJnZXQudmFsdWUsIDQpKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gUGFyY2VsYXMgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmNlbGFzQ2FydGFvICYmIHBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJwYXJjZWxhXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7cGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYS5xdWFudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4gdGhpcy5vbkNoYW5nZShcInBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGFcIiwgcGFyY2VsYXNDYXJ0YW9bYmFuZGVpcmFfY2FydGFvLm5hbWVdW2UudGFyZ2V0LnZhbHVlIC0gMV0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBTZWxlY2lvbmUgYSBxdWFudGlkYWRlIGRlIHBhcmNlbGFzIHBhcmEgcGFnYW1lbnRvIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmNlbGFzQ2FydGFvW2JhbmRlaXJhX2NhcnRhby5uYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCw2KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9IHtpbmRleH0gdmFsdWU9e2l0ZW0ucXVhbnRpdHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnF1YW50aXR5fSB4IGRlIHtmb3JtYXRNb25leShpdGVtLnRvdGFsQW1vdW50IC8gaXRlbS5xdWFudGl0eSl9IHNlbSBqdXJvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcy5wYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lID0gXCJlcnJvXCI+IHtlcnJvcy5wYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhfSA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCB7dGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIkRhZG9zLVBhZ2FtZW50by1Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMj4gREFET1MgREUgUEFHQU1FTlRPIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck9wY29lc1BhZ2FtZW50bygpfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHt0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gPT09ICdib2xldG8nICYmIHRoaXMucmVuZGVyUGFnYW1lbnRvQ29tQm9sZXRvKCl9XHJcbiAgICAgICAgICAgICAgICB7dGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSAnY2FydGFvJyAmJiB0aGlzLnJlbmRlclBhZ2FtZW50b0NvbUNhcnRhbygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICB1c3VhcmlvOiBzdGF0ZS5hdXRoLnVzdWFyaW8sXHJcbiAgICBjYXJyaW5obzogc3RhdGUuY2FycmluaG8uY2FycmluaG8sXHJcbiAgICBjbGllbnRlOiBzdGF0ZS5jbGllbnRlLmNsaWVudGUsXHJcbiAgICBmb3JtOiBzdGF0ZS5jaGVja291dC5mb3JtLFxyXG4gICAgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvOiBzdGF0ZS5jaGVja291dC50aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8sXHJcbiAgICBzZXNzaW9uSWQ6IHN0YXRlLmNoZWNrb3V0LnNlc3Npb25JZCxcclxuICAgIHNlbmRlckhhc2g6IHN0YXRlLmNoZWNrb3V0LnNlbmRlckhhc2gsXHJcbiAgICBmcmV0ZVNlbGVjaW9uYWRvOiBzdGF0ZS5jYXJyaW5oby5mcmV0ZVNlbGVjaW9uYWRvXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbnMpIChEYWRvc1BhZ2FtZW50byk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMaXN0YURlUHJvZHV0b3MgZnJvbSAnLi4vQ2FycmluaG8vTGlzdGFEZVByb2R1dG9zJztcclxuXHJcbmNsYXNzIERhZG9zUGVkaWRvIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEYWRvcy1QZWRpZG8tQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+REFET1MgRE8gUEVESURPPC9oMj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RhRGVQcm9kdXRvcyBzZW1BbHRlcmFjb2VzIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYWRvc1BlZGlkbzsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEFsZXJ0R2VyYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BbGVydC9HZXJhbCc7XHJcbmltcG9ydCB7IHZhbGlkYXRlQ1BGIH0gZnJvbSAnLi4vLi4vdXRpbHMvdmFsaWRhdGUnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuXHJcbmNsYXNzIFN1Ym1pdERhZG9zQ2xpZW50ZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgYXZpc286IG51bGwgfVxyXG5cclxuICAgIGNhbGxiYWNrID0gKGVycm9yKSA9PiB7XHJcbiAgICAgICAgaWYoIWVycm9yKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5wZXJtaXRpcigpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYXZpc286IG51bGwgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYXZpc286IHsgc3RhdHVzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7ICBcclxuICAgICAgICAgICAgZW1haWwsIHNlbmhhLCBub21lLCBDUEYsIGRhdGFEZU5hc2NpbWVudG8sIHRlbGVmb25lLFxyXG4gICAgICAgICAgICBsb2NhbCwgbnVtZXJvLCBiYWlycm8sIGNpZGFkZSwgZXN0YWRvLCBDRVBcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgICAgIGNvbnN0IHsgdXN1YXJpbyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IHRlbUVycm8gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYoIXVzdWFyaW8gJiYgIWVtYWlsKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighdXN1YXJpbyAmJiAhc2VuaGEpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFub21lKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighQ1BGIHx8IENQRi5sZW5ndGggIT09IDE0KSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZihDUEYgJiYgQ1BGLmxlbmd0aCA9PT0gMTQgJiYgIXZhbGlkYXRlQ1BGKENQRikpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFkYXRhRGVOYXNjaW1lbnRvIHx8IGRhdGFEZU5hc2NpbWVudG8ubGVuZ3RoICE9PSAxMCkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIXRlbGVmb25lIHx8IHRlbGVmb25lLmxlbmd0aCA8IDExKSB0ZW1FcnJvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYoIWxvY2FsKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighbnVtZXJvKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighYmFpcnJvKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighY2lkYWRlKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighZXN0YWRvKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighQ0VQIHx8IENFUC5sZW5ndGggIT09IDkpIHRlbUVycm8gPSB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gIXRlbUVycm87XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMudmFsaWRhdGUoKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgeyB0b2tlbiwgZm9ybSwgY2xpZW50ZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZighdG9rZW4pIHRoaXMucHJvcHMubmV3Q2xpZW50ZShmb3JtLCB0aGlzLmNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIChcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVDbGllbnRlKGZvcm0sIGNsaWVudGUuX2lkLCB0b2tlbiwgdGhpcy5jYWxsYmFjaykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxBbGVydEdlcmFsIGF2aXNvPXt0aGlzLnN0YXRlLmF2aXNvfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWN0YVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ09OVElOVUFSIFBFRElET1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIHRva2VuOiBzdGF0ZS5hdXRoLnRva2VuLFxyXG4gICAgY2xpZW50ZTogc3RhdGUuY2xpZW50ZS5jbGllbnRlLFxyXG4gICAgZm9ybTogc3RhdGUuY2hlY2tvdXQuZm9ybVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25zKShTdWJtaXREYWRvc0NsaWVudGUpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRGFkb3NDbGllbnRlIGZyb20gJy4vRGFkb3NDbGllbnRlJztcclxuaW1wb3J0IERhZG9zRW50cmVnYSBmcm9tICcuL0RhZG9zRW50cmVnYSc7XHJcbmltcG9ydCBTdWJtaXREYWRvc0NsaWVudGUgZnJvbSAnLi9TdWJtaXREYWRvc0NsaWVudGUnO1xyXG5pbXBvcnQgRGFkb3NGcmV0ZSBmcm9tICcuL0RhZG9zRnJldGUnO1xyXG5pbXBvcnQgRGFkb3NQYWdhbWVudG8gZnJvbSAnLi9EYWRvc1BhZ2FtZW50byc7XHJcbmltcG9ydCBEYWRvc1BlZGlkbyBmcm9tICcuL0RhZG9zUGVkaWRvJztcclxuaW1wb3J0IENoZWNrb3V0QnV0dG9uIGZyb20gJy4vQ2hlY2tvdXRCdXR0b24nO1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcblxyXG5jbGFzcyBDaGVja291dENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBwZXJtaXNzYW9JbmljaWFsOiBmYWxzZSxcclxuICAgICAgICBwZXJtaXNzYW9DaGVja291dDogZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IHBlcm1pc3Nhb0luaWNpYWwsIHBlcm1pc3Nhb0NoZWNrb3V0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHsgdXN1YXJpbywgZnJldGVTZWxlY2lvbmFkbyB9ID0gdGhpcy5wcm9wcztcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKCdmcmV0ZSBzZWxlY2lvbmFkbzogJywgZnJldGVTZWxlY2lvbmFkbyk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGVja291dCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICBDT05DTFVJTkRPIFNFVSBQRURJRE9cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxEYWRvc0NsaWVudGUgXHJcbiAgICAgICAgICAgICAgICAgICAgdXN1YXJpbz17dXN1YXJpb30gXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2FvSW5pY2lhbD17cGVybWlzc2FvSW5pY2lhbH1cclxuICAgICAgICAgICAgICAgICAgICBwZXJtaXRpcj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHBlcm1pc3Nhb0luaWNpYWw6IHRydWUgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICB7ICggcGVybWlzc2FvSW5pY2lhbCB8fCB1c3VhcmlvICkgJiYgPERhZG9zRW50cmVnYSAvPn1cclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgKCBwZXJtaXNzYW9JbmljaWFsIHx8IHVzdWFyaW8gKSAmJiBcclxuICAgICAgICAgICAgICAgICAgICA8U3VibWl0RGFkb3NDbGllbnRlIHBlcm1pdGlyPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcGVybWlzc2FvQ2hlY2tvdXQ6IHRydWUgfSl9Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgcGVybWlzc2FvQ2hlY2tvdXQgJiYgPERhZG9zRnJldGUgLz59XHJcbiAgICAgICAgICAgICAgICB7IHBlcm1pc3Nhb0NoZWNrb3V0ICYmIDxEYWRvc1BhZ2FtZW50byAvPn1cclxuICAgICAgICAgICAgICAgIHsgcGVybWlzc2FvQ2hlY2tvdXQgJiYgPERhZG9zUGVkaWRvIC8+fVxyXG4gICAgICAgICAgICAgICAgeyBwZXJtaXNzYW9DaGVja291dCAmJiA8Q2hlY2tvdXRCdXR0b24gLz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIGZyZXRlU2VsZWNpb25hZG86IHN0YXRlLmNhcnJpbmhvLmZyZXRlU2VsZWNpb25hZG9cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25zKShDaGVja291dENvbnRhaW5lcik7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbnB1dHMvRm9ybVNpbXBsZXMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuaW1wb3J0IEFsZXJ0R2VyYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BbGVydC9HZXJhbCc7XHJcblxyXG5jbGFzcyBDbGllbnRlTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgc2VuaGE6IFwiXCIsXHJcbiAgICAgICAgYXZpc286IG51bGwsXHJcbiAgICAgICAgZXJyb3M6IHt9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQXZpc29EZVJlZ2lzdHJvKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Db21wcmFyIGNvbW8gVmlzaXRhbnRlL1JlYWxpemFyIFJlZ2lzdHJvPC9oMj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnBlcm1pdGlyKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkNPTlRJTlVBUjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoKXtcclxuICAgICAgICBjb25zdCB7IGVtYWlsLCBzZW5oYSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBlcnJvcyA9IHt9O1xyXG5cclxuICAgICAgICBpZighZW1haWwpIGVycm9zLmVtYWlsID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIHNldSBlbWFpbFwiO1xyXG4gICAgICAgIGlmKCFzZW5oYSkgZXJyb3Muc2VuaGEgPSBcIlByZWVuY2hhIGFxdWkgY29tIGEgc3VhIHNlbmhhXCI7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcywgYXZpc286IG51bGwgfSk7XHJcbiAgICAgICAgcmV0dXJuICEoT2JqZWN0LmtleXMoZXJyb3MpLmxlbmd0aCA+IDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlID0gKGZpZWxkLCBlKSA9PiB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogZS50YXJnZXQudmFsdWUgfSwgKCkgPT4gdGhpcy52YWxpZGF0ZSgpKTtcclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoKXtcclxuICAgICAgICBpZighdGhpcy52YWxpZGF0ZSgpKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCB7IGVtYWlsLCBzZW5oYSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICB0aGlzLnByb3BzLmF1dGVudGljYXIoeyBlbWFpbCwgcGFzc3dvcmQ6IHNlbmhhIH0sIGZhbHNlLCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgaWYoZXJyb3IpIHRoaXMuc2V0U3RhdGUoeyBhdmlzbzogeyBzdGF0dXM6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0gfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRm9ybUxvZ2luKCl7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgc2VuaGEsIGVycm9zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+RmF6ZXIgTG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0R2VyYWwgYXZpc289e3RoaXMuc3RhdGUuYXZpc299IC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtSW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtcImVtYWlsXCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRS1tYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgZXJybz17ZXJyb3MuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJlbWFpbFwiLCBlKX0gLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1JbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VuaGF9IFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e1wic2VuaGFcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgZXJybz17ZXJyb3Muc2VuaGF9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZW5oYVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZW5oYVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcInNlbmhhXCIsIGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkVOVFJBUjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDbGllbnRlLUxvZ2luIGZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckF2aXNvRGVSZWdpc3RybygpIH1cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJGb3JtTG9naW4oKSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBhY3Rpb25zKShDbGllbnRlTG9naW4pOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRm9ybVNpbXBsZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbnB1dHMvRm9ybVNpbXBsZXMnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmltcG9ydCB7dmFsaWRhdGVDUEZ9IGZyb20gJy4uLy4uL3V0aWxzL3ZhbGlkYXRlJztcclxuaW1wb3J0IHtmb3JtYXREYXRhRGVOYXNjaW1lbnRvLCBmb3JtYXRUZWxlZm9uZSwgZm9ybWF0Q1BGfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQnO1xyXG5cclxuY2xhc3MgRGFkb3NDbGllbnRlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBlcnJvczoge31cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRGb3JtKHtcclxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIHNlbmhhOiBcIlwiLFxyXG4gICAgICAgICAgICBub21lOiB0aGlzLnByb3BzLmNsaWVudGUgPyB0aGlzLnByb3BzLmNsaWVudGUubm9tZSA6IFwiXCIsXHJcbiAgICAgICAgICAgIENQRjogdGhpcy5wcm9wcy5jbGllbnRlID8gdGhpcy5wcm9wcy5jbGllbnRlLmNwZiA6IFwiXCIsXHJcbiAgICAgICAgICAgIHRlbGVmb25lOiB0aGlzLnByb3BzLmNsaWVudGUgJiYgdGhpcy5wcm9wcy5jbGllbnRlLnRlbGVmb25lcyA/IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGllbnRlLnRlbGVmb25lc1swXSA6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGFEZU5hc2NpbWVudG86IHRoaXMucHJvcHMuY2xpZW50ZSA/IFxyXG4gICAgICAgICAgICAgICAgbW9tZW50KHRoaXMucHJvcHMuY2xpZW50ZS5kYXRhRGVOYXNjaW1lbnRvKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpIDogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAoIXByZXZQcm9wcy5jbGllbnRlICYmIHRoaXMucHJvcHMuY2xpZW50ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB7bm9tZSwgY3BmLCB0ZWxlZm9uZXMsIGRhdGFEZU5hc2NpbWVudG99ID0gdGhpcy5wcm9wcy5jbGllbnRlO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oe1xyXG4gICAgICAgICAgICAgICAgbm9tZSwgQ1BGOiBjcGYsIHRlbGVmb25lOiB0ZWxlZm9uZXNbMF0sIFxyXG4gICAgICAgICAgICAgICAgZGF0YURlTmFzY2ltZW50bzogbW9tZW50KGRhdGFEZU5hc2NpbWVudG8pLmZvcm1hdChcIkREL01NL1lZWVlcIilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKCl7XHJcbiAgICAgICAgY29uc3Qge2VtYWlsLCBzZW5oYSwgbm9tZSwgQ1BGLCBkYXRhRGVOYXNjaW1lbnRvLCB0ZWxlZm9uZX0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgY29uc3Qge3VzdWFyaW99ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBlcnJvcyA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoIXVzdWFyaW8gJiYhIGVtYWlsKSBlcnJvcy5lbWFpbCA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgZW1haWxcIjtcclxuICAgICAgICBpZiAoIXVzdWFyaW8gJiYhIHNlbmhhKSBlcnJvcy5zZW5oYSA9IFwiUHJlZW5jaGEgYXF1aSBjb20gYSBzdWEgc2VuaGFcIjtcclxuXHJcbiAgICAgICAgaWYgKCFub21lKSBlcnJvcy5ub21lID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIHNldSBub21lXCI7XHJcbiAgICAgICAgaWYgKCFDUEYgfHwgQ1BGLmxlbmd0aCAhPT0gMTQpIGVycm9zLkNQRiA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgQ1BGXCI7XHJcbiAgICAgICAgaWYgKENQRiAmJiBDUEYubGVuZ3RoID09PSAxNCAmJiAhdmFsaWRhdGVDUEYoQ1BGKSkgXHJcbiAgICAgICAgICAgIGVycm9zLkNQRiA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgQ1BGIGNvcnJldGFtZW50ZVwiO1xyXG4gICAgICAgIGlmICghZGF0YURlTmFzY2ltZW50byB8fCBkYXRhRGVOYXNjaW1lbnRvLmxlbmd0aCAhPT0gMTApXHJcbiAgICAgICAgICAgIGVycm9zLmRhdGFEZU5hc2NpbWVudG8gPSBcIlByZWVuY2hhIGFxdWkgY29tIGEgc3VhIGRhdGEgZGUgbmFzY2ltZW50b1wiO1xyXG4gICAgICAgIGlmICghdGVsZWZvbmUgfHwgdGVsZWZvbmUubGVuZ3RoIDwgMTEpXHJcbiAgICAgICAgICAgIGVycm9zLnRlbGVmb25lID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIHNldSB0ZWxlZm9uZVwiO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlICh7ZXJyb3N9KTtcclxuICAgICAgICByZXR1cm4gIShPYmplY3Qua2V5cyhlcnJvcykubGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UgPSAoZmllbGQsIGUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRGb3JtKHtbZmllbGRdOiB2YWx1ZSB8fCBlLnRhcmdldC52YWx1ZX0sIG51bGwpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy52YWxpZGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEYWRvc1JlZ2lzdHJvICgpIHtcclxuICAgICAgICBjb25zdCB7ZW1haWwsIHNlbmhhfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7ZXJyb3N9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleC0xIGZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7ZW1haWwgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIkUtbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiRS1tYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm8gPSB7ZXJyb3MuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiZW1haWxcIiwgZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3NlbmhhIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInNlbmhhXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJTZW5oYVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiU2VuaGFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwic2VuaGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvID0ge2Vycm9zLnNlbmhhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4gdGhpcy5vbkNoYW5nZShcInNlbmhhXCIsIGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRGFkb3NVc3VhcmlvKCkge1xyXG4gICAgICAgIGNvbnN0IHtub21lLCBDUEYsIGRhdGFEZU5hc2NpbWVudG8sIHRlbGVmb25lfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7ZXJyb3N9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleC0xIGZsZXggdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge25vbWUgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwibm9tZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiTm9tZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiTm9tZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvID0ge2Vycm9zLm5vbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwibm9tZVwiLCBlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Q1BGIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcIkNQRlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiQ1BGXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJDUEZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvID0ge2Vycm9zLkNQRn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiQ1BGXCIsIGUsIGZvcm1hdENQRihlLnRhcmdldC52YWx1ZSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMSBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2RhdGFEZU5hc2NpbWVudG8gfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm8gPSB7ZXJyb3MuZGF0YURlTmFzY2ltZW50b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImRhdGFEZU5hc2NpbWVudG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJERC9NTS9BQUFBXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiRGF0YSBkZSBOYXNjaW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImRhdGFEZU5hc2NpbWVudG9cIiwgZSwgZm9ybWF0RGF0YURlTmFzY2ltZW50byhlLnRhcmdldC52YWx1ZSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7dGVsZWZvbmUgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm8gPSB7ZXJyb3MudGVsZWZvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJ0ZWxlZm9uZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIigzNCkgMTIzNC01Njc4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiVGVsZWZvbmUvQ2VsdWxhclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHRoaXMub25DaGFuZ2UoXCJ0ZWxlZm9uZVwiLCBlLCBmb3JtYXRUZWxlZm9uZShlLnRhcmdldC52YWx1ZSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+IERBRE9TIERPIENMSUVOVEUgPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLnVzdWFyaW8gJiYgdGhpcy5yZW5kZXJEYWRvc1JlZ2lzdHJvKCl9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJEYWRvc1VzdWFyaW8oKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIHRva2VuOiBzdGF0ZS5hdXRoLnRva2VuLFxyXG4gICAgY2xpZW50ZTogc3RhdGUuY2xpZW50ZS5jbGllbnRlLFxyXG4gICAgZm9ybTogc3RhdGUuY2hlY2tvdXQuZm9ybVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25zKSAoRGFkb3NDbGllbnRlQ29udGFpbmVyKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFBhZ2luYXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaXN0YXMvUGFnaW5hcyc7XHJcbmltcG9ydCBSZWRlc1NvY2lhaXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaXN0YXMvUmVkZXNTb2NpYWlzJztcclxuaW1wb3J0IERhZG9zRGFMb2phIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSXRlbS9EYWRvc0RhTG9qYSc7XHJcblxyXG5jbGFzcyBSb2RhcGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSb2RhcGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdpbmFzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlZGVzU29jaWFpcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYWRvc0RhTG9qYSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9kYXBlOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuaW1wb3J0IENhYmVjYWxobyBmcm9tICcuLi9jb250YWluZXJzL0NhYmVjYWxobyc7XHJcbmltcG9ydCBDaGVja291dENvbnRhaW5lciBmcm9tICcuLi9jb250YWluZXJzL0NoZWNrb3V0JztcclxuaW1wb3J0IFJvZGFwZSBmcm9tICcuLi9jb250YWluZXJzL1JvZGFwZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja291dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtyZXN9KSB7XHJcbiAgICAgICAgaWYocmVzKSB7XHJcbiAgICAgICAgICAgIHJlcy53cml0ZUhlYWQoMzAyLCB7TG9jYXRpb246IFwiL2NhcnJpbmhvXCJ9KTtcclxuICAgICAgICAgICAgcmVzLmVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxMYXlvdXQgXHJcbiAgICAgICAgICAgICAgICB0aXRsZSA9IFwiQ2hlY2stb3V0IHwgTE9KQSBJVCAtIE1lbGhvcmVzIHByb2R1dG9zIGRlIHRlY25vbG9naWFcIlxyXG4gICAgICAgICAgICAgICAgcGFnU2VndXJvPlxyXG4gICAgICAgICAgICAgICAgPENhYmVjYWxobyBzaW1wbGVzIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tvdXRDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgIDxSb2RhcGUgLz5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgXHJcbiAgICBBVVRFTlRJQ0FSX1RPS0VOLFxyXG4gICAgQVVURU5USUNBUixcclxuICAgIFVTRVIsXHJcbiAgICBERVNBVVRFTlRJQ0FSXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUEksIHZlcnNhbyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IGZldGNoQ2xpZW50ZSB9IGZyb20gJy4vY2xpZW50ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBzZXRDb29raWUsIHJlbW92ZUNvb2tpZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Nvb2tpZSc7XHJcbmltcG9ydCB7IGdldEhlYWRlcnMgfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBlcnJvckhhbmRsaW5nIGZyb20gJy4vZXJyb3JIYW5kbGluZyc7XHJcblxyXG5leHBvcnQgY29uc3QgcmVhdXRoZW50aWNhdGUgPSB0b2tlbiA9PiAoeyB0eXBlOiBBVVRFTlRJQ0FSX1RPS0VOLCBwYXlsb2FkOiB0b2tlbiB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKHsgdG9rZW4gfSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3VzdWFyaW9zYCwgZ2V0SGVhZGVycyh0b2tlbikpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGRpc3BhdGNoKHsgdHlwZTogVVNFUiwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YS51c3VhcmlvIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGVudGljYXIgPSAoeyBlbWFpbCwgcGFzc3dvcmQgfSwgZ29UbyA9IGZhbHNlLCBjYikgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MucG9zdChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvdXN1YXJpb3MvbG9naW5gLCB7ZW1haWwsIHBhc3N3b3JkfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldENvb2tpZSgndG9rZW4nLCByZXNwb25zZS5kYXRhLnVzdWFyaW8udG9rZW4pO1xyXG4gICAgICAgIGlmKGdvVG8pIFJvdXRlci5wdXNoKGdvVG8pO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQVVURU5USUNBUiwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KTtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaENsaWVudGUocmVzcG9uc2UuZGF0YS51c3VhcmlvLl9pZCwgcmVzcG9uc2UuZGF0YS51c3VhcmlvLnRva2VuKSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGUgPT4gY2IoZXJyb3JIYW5kbGluZyhlKSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVzYXV0ZW50aWNhciA9ICgpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIHJlbW92ZUNvb2tpZSgndG9rZW4nKTtcclxuICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IERFU0FVVEVOVElDQVIgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTZW5oYSA9IChkYXRhLCB0b2tlbiwgY2IpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLnB1dChcclxuICAgICAgICBgJHtBUEl9LyR7dmVyc2FvfS9hcGkvdXN1YXJpb3NgLCBcclxuICAgICAgICB7IHBhc3N3b3JkOiBkYXRhLm5vdmFTZW5oYSB9LCBcclxuICAgICAgICBnZXRIZWFkZXJzKHRva2VuKVxyXG4gICAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBVU0VSLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLnVzdWFyaW8gfSk7XHJcbiAgICAgICAgY2IobnVsbCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGUgPT4gY2IoZXJyb3JIYW5kbGluZyhlKSkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICByZWF1dGhlbnRpY2F0ZSxcclxuICAgIGdldFVzZXIsXHJcbiAgICBhdXRlbnRpY2FyLFxyXG4gICAgZGVzYXV0ZW50aWNhcixcclxuICAgIHVwZGF0ZVNlbmhhXHJcbn07IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtBUEksIHZlcnNhbywgbG9qYX0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHtnZXRDYXJ0LCByZW1vdmVDYXJ0LCBjbGVhbkNhcnR9IGZyb20gJy4uLy4uL3V0aWxzL2NhcnQnO1xyXG5pbXBvcnQge1xyXG4gICAgU0VUX0NBUlJJTkhPLFxyXG4gICAgQ0xFQU5fQ0FSUklOSE8sXHJcbiAgICBGRVRDSF9QUk9EVVRPX0NBUlJJTkhPLFxyXG4gICAgRkVUQ0hfVkFSSUFDQU9fQ0FSUklOSE8sXHJcbiAgICBGRVRDSF9WQUxPUl9FTlRSRUdBLFxyXG4gICAgVVBEQVRFX1FURF9DQVJULFxyXG4gICAgVVBEQVRFX0ZSRVRFX0NBUlQsXHJcbiAgICBSRU1PVkVfUFJPRF9DQVJULFxyXG4gICAgQ0xFQU5fRlJFVEVTXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldENhcnJpbmhvID0gKCkgPT4gKHt0eXBlOiBTRVRfQ0FSUklOSE8sIGNhcnJpbmhvOiBnZXRDYXJ0KCl9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhbkNhcnJpbmhvID0gKCkgPT4ge1xyXG4vLyAgICBjb25zb2xlLmxvZygnbGltcGFyIGNhcnJpbmhvJyk7XHJcbiAgICBjbGVhbkNhcnQoKTtcclxuICAgIHJldHVybiB7dHlwZTogQ0xFQU5fQ0FSUklOSE99O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHV0b0NhcnJpbmhvID0gKGlkLCBpZHhDYXJyaW5obykgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wcm9kdXRvcy8ke2lkfT9sb2phPSR7bG9qYX1gKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goeyBcclxuICAgICAgICAgICAgdHlwZTogRkVUQ0hfUFJPRFVUT19DQVJSSU5ITywgXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEsIFxyXG4gICAgICAgICAgICBpZHhDYXJyaW5obyBcclxuICAgIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVmFyaWFjb2VzQ2FycmluaG8gPSAoaWQsIHByb2R1dG8sIGlkeENhcnJpbmhvKSA9PiBkaXNwYXRjaCA9PiB7XHJcbi8vICAgIGNvbnNvbGUubG9nKGlkLCBwcm9kdXRvLCBpZHhDYXJyaW5obywgbG9qYSlcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvdmFyaWFjb2VzLyR7aWR9P3Byb2R1dG89JHtwcm9kdXRvfSZsb2phPSR7bG9qYX1gKVxyXG4gICAgLnRoZW4gKHJlc3BvbnNlID0+IGRpc3BhdGNoKHsgXHJcbiAgICAgICAgICAgIHR5cGU6IEZFVENIX1ZBUklBQ0FPX0NBUlJJTkhPLCBcclxuICAgICAgICAgICAgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSwgXHJcbiAgICAgICAgICAgIGlkeENhcnJpbmhvIFxyXG4gICAgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FsY3VsYXJGcmV0ZSA9IChjZXAsIGNhcnJpbmhvKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5wb3N0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9lbnRyZWdhcy9jYWxjdWxhcmAsIHtjZXAsIGNhcnJpbmhvfSlcclxuICAgIC50aGVuIChyZXNwb25zZSA9PiBkaXNwYXRjaCh7IFxyXG4gICAgICAgICAgICB0eXBlOiBGRVRDSF9WQUxPUl9FTlRSRUdBLCBcclxuICAgICAgICAgICAgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSwgXHJcbiAgICAgICAgICAgIGNlcFxyXG4gICAgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlclByb2R1dG8gPSAoaW5kZXgpID0+IHtcclxuICAgIHJlbW92ZUNhcnQoaW5kZXgpO1xyXG4gICAgcmV0dXJuIHt0eXBlOiBSRU1PVkVfUFJPRF9DQVJULCBpZHhDYXJyaW5obzogaW5kZXh9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVF1YW50aWRhZGUgPSAoY2hhbmdlLCBpbmRleCkgPT4gKHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFVQREFURV9RVERfQ0FSVCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeENhcnJpbmhvOiBpbmRleCBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY2lvbmFyRnJldGUgPSAoZnJldGVTZWxlY2lvbmFkbykgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBVUERBVEVfRlJFVEVfQ0FSVCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmV0ZVNlbGVjaW9uYWRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5leHBvcnQgY29uc3QgY2xlYW5GcmV0ZXMgPSAoKSA9PiAoe3R5cGU6IENMRUFOX0ZSRVRFU30pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2V0Q2FycmluaG8sXHJcbiAgICBjbGVhbkNhcnJpbmhvLFxyXG4gICAgZmV0Y2hQcm9kdXRvQ2FycmluaG8sXHJcbiAgICBmZXRjaFZhcmlhY29lc0NhcnJpbmhvLFxyXG4gICAgY2FsY3VsYXJGcmV0ZSxcclxuICAgIHVwZGF0ZVF1YW50aWRhZGUsXHJcbiAgICBzZWxlY2lvbmFyRnJldGUsXHJcbiAgICByZW1vdmVyUHJvZHV0byxcclxuICAgIGNsZWFuRnJldGVzXHJcbn07IiwiaW1wb3J0IHtcclxuICAgIEZFVENIX0NBVEVHT1JJQVMsXHJcbiAgICBGRVRDSF9DQVRFR09SSUEsXHJcbiAgICBGRVRDSF9DQVRFR09SSUFfUFJPRFVUT1NcclxufSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSSwgdmVyc2FvLCBsb2phIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaENhdGVnb3JpYXMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvY2F0ZWdvcmlhcy9kaXNwb25pdmVpcz9sb2phPSR7bG9qYX1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX0NBVEVHT1JJQVMsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaENhdGVnb3JpYSA9IChpZCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9jYXRlZ29yaWFzLyR7aWR9P2xvamE9JHtsb2phfWApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX0NBVEVHT1JJQSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHV0b3NDYXRlZ29yaWEgPSAoaWQsIGF0dWFsID0gMCwgbGltaXQgPSAyMCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9jYXRlZ29yaWFzLyR7aWR9L3Byb2R1dG9zP2xvamE9JHtsb2phfSZvZmZzZXQ9JHthdHVhbH0mbGltaXQ9JHtsaW1pdH1gKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9DQVRFR09SSUFfUFJPRFVUT1MsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGZldGNoQ2F0ZWdvcmlhcyxcclxuICAgIGZldGNoQ2F0ZWdvcmlhLFxyXG4gICAgZmV0Y2hQcm9kdXRvc0NhdGVnb3JpYVxyXG59OyIsImltcG9ydCB7XHJcbiAgICBTRVRfRk9STSxcclxuICAgIENMRUFOX0ZPUk0sXHJcbiAgICBTRVRfVElQT19QQUdBTUVOVE8sXHJcbiAgICBGRVRDSF9TRVNTSU9OX0lELFxyXG4gICAgRkVUQ0hfU0VOREVSX0hBU0gsXHJcbiAgICBOT1ZPX1BFRElETyxcclxuICAgIFBBR0FSX1BFRElET1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtBUEksIHZlcnNhbywgbG9qYX0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHtnZXRDYXJ0fSBmcm9tICcuLi8uLi91dGlscy9jYXJ0JztcclxuaW1wb3J0IHtnZXRIZWFkZXJzfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5pbXBvcnQgZXJyb3JIYW5kbGluZyBmcm9tICcuL2Vycm9ySGFuZGxpbmcnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtjbGVhbkNhcnJpbmhvfSBmcm9tICcuL2NhcnJpbmhvQWN0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Rm9ybSA9IChwYXlsb2FkLCBwcmVmaXgpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKHt0eXBlOiBTRVRfRk9STSwgcGF5bG9hZCwgcHJlZml4fSk7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhbkZvcm0gPSAoKSA9PiAoe3R5cGU6IENMRUFOX0ZPUk19KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRUaXBvUGFnYW1lbnRvID0gKHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbykgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh7dHlwZTogU0VUX1RJUE9fUEFHQU1FTlRPLCB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG99KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uUGFnYW1lbnRvID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3BhZ2FtZW50b3Mvc2Vzc2lvbmApLnRoZW4gKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBGRVRDSF9TRVNTSU9OX0lELCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSk7XHJcblxyXG4gICAgICAgIFBhZ1NlZ3Vyb0RpcmVjdFBheW1lbnQuc2V0U2Vzc2lvbklkKHJlc3BvbnNlLmRhdGEuc2Vzc2lvbklkKTtcclxuICAgICAgICBsZXQgc2VuZGVySGFzaCA9IFBhZ1NlZ3Vyb0RpcmVjdFBheW1lbnQuZ2V0U2VuZGVySGFzaCgpO1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBGRVRDSF9TRU5ERVJfSEFTSCwgc2VuZGVySGFzaH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vdm9QZWRpZG8gPSAoXHJcbiAgICBmb3JtLCBmcmV0ZVNlbGVjaW9uYWRvLCB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8sIFxyXG4gICAgdmFsb3JUb3RhbCwgdG9rZW4sIHNlbmRlckhhc2gsIGNhcnJpbmhvID0gZ2V0Q2FydCgpLCBjYiA9IG51bGxcclxuKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5wb3N0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wZWRpZG9zP2xvamE9JHtsb2phfWAsIHtcclxuICAgICAgICBjYXJyaW5obyxcclxuICAgICAgICBlbnRyZWdhOiB7XHJcbiAgICAgICAgICAgIGN1c3RvOiBmcmV0ZVNlbGVjaW9uYWRvLlZhbG9yLnJlcGxhY2UoJywnLCAnLicpLFxyXG4gICAgICAgICAgICB0aXBvOiAoZnJldGVTZWxlY2lvbmFkby5Db2RpZ28pLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIHByYXpvOiBmcmV0ZVNlbGVjaW9uYWRvLlByYXpvRW50cmVnYSxcclxuICAgICAgICAgICAgZW5kZXJlY286IHtcclxuICAgICAgICAgICAgICAgIGxvY2FsOiBmb3JtLmxvY2FsLFxyXG4gICAgICAgICAgICAgICAgbnVtZXJvOiBmb3JtLm51bWVybyxcclxuICAgICAgICAgICAgICAgIGNvbXBsZW1lbnRvOiBmb3JtLmNvbXBsZW1lbnRvLFxyXG4gICAgICAgICAgICAgICAgYmFpcnJvOiBmb3JtLmJhaXJybyxcclxuICAgICAgICAgICAgICAgIGNpZGFkZTogZm9ybS5jaWRhZGUsXHJcbiAgICAgICAgICAgICAgICBlc3RhZG86IGZvcm0uZXN0YWRvLFxyXG4gICAgICAgICAgICAgICAgQ0VQOiBmb3JtLkNFUFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYWdhbWVudG86IHtcclxuICAgICAgICAgICAgdmFsb3I6IHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyA9PT0gXCJjYXJ0YW9cIiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEudG90YWxBbW91bnQgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxvclRvdGFsLFxyXG4gICAgICAgICAgICBmb3JtYTogdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSBcImNhcnRhb1wiID8gXCJjcmVkaXRDYXJkXCIgOiBcImJvbGV0b1wiLFxyXG4gICAgICAgICAgICBwYXJjZWxhczogdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSBcImNhcnRhb1wiID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYS5xdWFudGl0eSA6IDEsXHJcbiAgICAgICAgICAgIGVuZGVyZWNvRW50cmVnYUlndWFsQ29icmFuY2E6IGZvcm0uZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhLFxyXG4gICAgICAgICAgICBlbmRlcmVjbzoge1xyXG4gICAgICAgICAgICAgICAgbG9jYWw6ICFmb3JtLmRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSA/IGZvcm0uZGFkb3NDb2JyYW5jYS5sb2NhbCA6IGZvcm0ubG9jYWwsXHJcbiAgICAgICAgICAgICAgICBudW1lcm86ICFmb3JtLmRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSA/IGZvcm0uZGFkb3NDb2JyYW5jYS5udW1lcm8gOiBmb3JtLm51bWVybyxcclxuICAgICAgICAgICAgICAgIGNvbXBsZW1lbnRvOiAhZm9ybS5kYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgPyBmb3JtLmRhZG9zQ29icmFuY2EuY29tcGxlbWVudG8gOiBmb3JtLmNvbXBsZW1lbnRvLFxyXG4gICAgICAgICAgICAgICAgYmFpcnJvOiAhZm9ybS5kYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgPyBmb3JtLmRhZG9zQ29icmFuY2EuYmFpcnJvIDogZm9ybS5iYWlycm8sXHJcbiAgICAgICAgICAgICAgICBjaWRhZGU6ICFmb3JtLmRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSA/IGZvcm0uZGFkb3NDb2JyYW5jYS5jaWRhZGUgOiBmb3JtLmNpZGFkZSxcclxuICAgICAgICAgICAgICAgIGVzdGFkbzogIWZvcm0uZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhID8gZm9ybS5kYWRvc0NvYnJhbmNhLmVzdGFkbyA6IGZvcm0uZXN0YWRvLFxyXG4gICAgICAgICAgICAgICAgQ0VQOiAhZm9ybS5kYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgPyBmb3JtLmRhZG9zQ29icmFuY2EuQ0VQIDogZm9ybS5DRVBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FydGFvOiB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gPT09IFwiY2FydGFvXCIgPyB7XHJcbiAgICAgICAgICAgICAgICBub21lQ29tcGxldG86IGZvcm0ubm9tZUNhcnRhby50cmltKCksXHJcbiAgICAgICAgICAgICAgICBjb2RpZ29BcmVhOiBmb3JtLnRlbGVmb25lLnNsaWNlKDAsMiksXHJcbiAgICAgICAgICAgICAgICB0ZWxlZm9uZTogZm9ybS50ZWxlZm9uZS5zbGljZSgyKS50cmltKCksXHJcbiAgICAgICAgICAgICAgICBkYXRhRGVOYXNjaW1lbnRvOiBmb3JtLmRhdGFEZU5hc2NpbWVudG8sXHJcbiAgICAgICAgICAgICAgICBjcmVkaXRfY2FyZF90b2tlbjogZm9ybS5jcmVkaXRfY2FyZF90b2tlbixcclxuICAgICAgICAgICAgICAgIGNwZjogZm9ybS5DUEYgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gOiB1bmRlZmluZWQgXHJcbiAgICAgICAgfVxyXG4gICAgfSwgZ2V0SGVhZGVycyh0b2tlbikpXHJcbiAgICAudGhlbiAocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBOT1ZPX1BFRElETywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHBhZ2FyUGVkaWRvKHJlc3BvbnNlLmRhdGEucGVkaWRvLnBhZ2FtZW50by5faWQsIHRva2VuLCBzZW5kZXJIYXNoLCBjYikpOyBcclxufSlcclxuICAgIC5jYXRjaChlID0+IGNiIChlcnJvckhhbmRsaW5nKGUpKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcGFnYXJQZWRpZG8gPSAoaWQsIHRva2VuLCBzZW5kZXJIYXNoLCBjYiA9IG51bGwpID0+IGRpc3BhdGNoID0+IHtcclxuICAgICAgICBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICBgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcGFnYW1lbnRvcy9wYWdhci8ke2lkfT9sb2phPSR7bG9qYX1gLCBcclxuICAgICAgICAgICAge3NlbmRlckhhc2h9LCBcclxuICAgICAgICAgICAgZ2V0SGVhZGVycyh0b2tlbilcclxuKVxyXG4udGhlbiAocmVzcG9uc2UgPT4ge1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6IFBBR0FSX1BFRElETywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pO1xyXG4gICAgY2IobnVsbCk7XHJcbiAgICBSb3V0ZXIucHVzaCgnL3N1Y2Vzc28nKTtcclxuICAgIGRpc3BhdGNoKGNsZWFuQ2FycmluaG8oKSk7ICAgICAgICBcclxufSlcclxuLmNhdGNoKGUgPT4gY2IgKGVycm9ySGFuZGxpbmcoZSkpKTtcclxufVxyXG4vKlxyXG5leHBvcnQgY29uc3QgcGFnYXJQZWRpZG89IChpZCwgdG9rZW4sIHNlbmRlckhhc2gsIGNiID0gbnVsbCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgY2IobnVsbCk7XHJcbiAgICBSb3V0ZXIucHVzaCgnL3N1Y2Vzc28nKTtcclxuICAgIGRpc3BhdGNoKGNsZWFuQ2FycmluaG8oKSk7ICAgICAgICBcclxufTtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2V0Rm9ybSxcclxuICAgIGNsZWFuRm9ybSxcclxuICAgIHNldFRpcG9QYWdhbWVudG8sXHJcbiAgICBnZXRTZXNzaW9uUGFnYW1lbnRvLFxyXG4gICAgbm92b1BlZGlkbyxcclxuICAgIHBhZ2FyUGVkaWRvXHJcbn07IiwiaW1wb3J0IHsgXHJcbiAgICBGRVRDSF9DTElFTlRFLFxyXG4gICAgTE9HT1VUX0NMSUVOVEVcclxufSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7QVBJLCB2ZXJzYW8sIGxvamF9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7c2V0Q29va2llfSBmcm9tICcuLi8uLi91dGlscy9jb29raWUnO1xyXG5pbXBvcnQge2dldEhlYWRlcnN9IGZyb20gJy4vaGVscGVycyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge2F1dGVudGljYXIsIGRlc2F1dGVudGljYXJ9IGZyb20gJy4vYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgZXJyb3JIYW5kbGluZyBmcm9tICcuL2Vycm9ySGFuZGxpbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJhd0RhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgbGV0IF9kYXRhID0gZGF0YS5zcGxpdCgnLycpO1xyXG4gICAgbGV0IGFubyA9IF9kYXRhWzJdO1xyXG4gICAgbGV0IF9tZXMgPSBOdW1iZXIoX2RhdGFbMV0pO1xyXG4gICAgbGV0IG1lcyA9IF9tZXMgPCAxMCA/IFwiMFwiICsgX21lcyA6IF9tZXM7XHJcbiAgICBsZXQgX2RpYSA9IE51bWJlcihfZGF0YVswXSk7XHJcbiAgICBsZXQgZGlhID0gX2RpYSA8IDEwID8gXCIwXCIgKyBfZGlhOiBfZGlhO1xyXG4gICAgcmV0dXJuIGAke2Fub30tJHttZXN9LSR7ZGlhfWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDbGllbnRlID0gKGlkLCB0b2tlbikgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9jbGllbnRlcy8ke2lkfT9sb2phPSR7bG9qYX1gLCBnZXRIZWFkZXJzKHRva2VuKSlcclxuICAgIC50aGVuICgocmVzcG9zdGEpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogRkVUQ0hfQ0xJRU5URSwgcGF5bG9hZDogcmVzcG9zdGEuZGF0YX0pXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoIChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld0NsaWVudGUgPSAoZm9ybSwgY2IpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLnBvc3QoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL2NsaWVudGVzP2xvamE9JHtsb2phfWAsIHtcclxuICAgICAgICBub21lOiBmb3JtLm5vbWUsXHJcbiAgICAgICAgc2VuaGE6IGZvcm0uc2VuaGEsXHJcbiAgICAgICAgY3BmOiBmb3JtLkNQRixcclxuICAgICAgICBlbWFpbDogZm9ybS5lbWFpbCxcclxuICAgICAgICB0ZWxlZm9uZXM6IFtmb3JtLnRlbGVmb25lXSxcclxuICAgICAgICBlbmRlcmVjbzoge1xyXG4gICAgICAgICAgICBsb2NhbDogZm9ybS5sb2NhbCxcclxuICAgICAgICAgICAgbnVtZXJvOiBmb3JtLm51bWVybyxcclxuICAgICAgICAgICAgY29tcGxlbWVudG86IGZvcm0uY29tcGxlbWVudG8sXHJcbiAgICAgICAgICAgIGJhaXJybzogZm9ybS5iYWlycm8sXHJcbiAgICAgICAgICAgIGNpZGFkZTogZm9ybS5jaWRhZGUsXHJcbiAgICAgICAgICAgIGVzdGFkbzogZm9ybS5lc3RhZG8sXHJcbiAgICAgICAgICAgIENFUDogZm9ybS5DRVBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFEZU5hc2NpbWVudG86IGdldFJhd0RhdGEoZm9ybS5kYXRhRGVOYXNjaW1lbnRvKVxyXG4gICAgfSlcclxuICAgIC50aGVuICgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogRkVUQ0hfQ0xJRU5URSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pO1xyXG4gICAgICAgIGRpc3BhdGNoKGF1dGVudGljYXIoe2VtYWlsOiBmb3JtLmVtYWlsLCBzZW5oYTogZm9ybS5zZW5oYX0sIG51bGwsIGNiKSk7XHJcbiAgICAgICAgY2IobnVsbCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoIChlID0+IGNiKGVycm9ySGFuZGxpbmcoZSkpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVDbGllbnRlID0gKGZvcm0sIGlkLCB0b2tlbiwgY2IpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLnB1dChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvY2xpZW50ZXMvJHtpZH0/bG9qYT0ke2xvamF9YCwge1xyXG4gICAgICAgIG5vbWU6IGZvcm0ubm9tZSxcclxuICAgICAgICBjcGY6IGZvcm0uQ1BGLFxyXG4gICAgICAgIHRlbGVmb25lczogW2Zvcm0udGVsZWZvbmVdLFxyXG4gICAgICAgIGVuZGVyZWNvOiB7XHJcbiAgICAgICAgICAgIGxvY2FsOiBmb3JtLmxvY2FsLFxyXG4gICAgICAgICAgICBudW1lcm86IGZvcm0ubnVtZXJvLFxyXG4gICAgICAgICAgICBjb21wbGVtZW50bzogZm9ybS5jb21wbGVtZW50byxcclxuICAgICAgICAgICAgYmFpcnJvOiBmb3JtLmJhaXJybyxcclxuICAgICAgICAgICAgY2lkYWRlOiBmb3JtLmNpZGFkZSxcclxuICAgICAgICAgICAgZXN0YWRvOiBmb3JtLmVzdGFkbyxcclxuICAgICAgICAgICAgQ0VQOiBmb3JtLkNFUFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YURlTmFzY2ltZW50bzogZ2V0UmF3RGF0YShmb3JtLmRhdGFEZU5hc2NpbWVudG8pXHJcbiAgICB9LCBnZXRIZWFkZXJzKHRva2VuKSlcclxuICAgIC50aGVuICgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogRkVUQ0hfQ0xJRU5URSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pO1xyXG4gICAgICAgIGNiKG51bGwpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCAoZSA9PiBjYihlcnJvckhhbmRsaW5nKGUpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRDbGllbnRlID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goZGVzYXV0ZW50aWNhcigpKTtcclxuICAgIGRpc3BhdGNoKHt0eXBlOiBMT0dPVVRfQ0xJRU5URX0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGZldGNoQ2xpZW50ZSxcclxuICAgIG5ld0NsaWVudGUsXHJcbiAgICB1cGRhdGVDbGllbnRlLFxyXG4gICAgbG9nb3V0Q2xpZW50ZVxyXG59OyIsImNvbnN0IGVycm9ySGFuZGxpbmcgPSAoZXJyb3IpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEgOiBudWxsKTtcclxuICAgIGlmKCFlcnJvci5yZXNwb25zZSB8fCAhZXJyb3IucmVzcG9uc2UuZGF0YSl7XHJcbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiA1MDAsIG1lc3NhZ2U6IFwiT2NvcnJldSB1bSBlcnJvIG5vIHNlcnZpZG9yLiBUZW50ZSBub3ZhbWVudGUuXCIgfTtcclxuICAgIH1cclxuICAgIGlmKGVycm9yLnJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSA0MDEpe1xyXG4gICAgICAgIHJldHVybiB7IHN0YXR1czogNDAxLCBtZXNzYWdlOiBcIlZvY8OqIG7Do28gdGVtIGF1dG9yaXphw6fDo28gcGFyYSBhY2Vzc2FyIGVzc2VzIGRhZG9zLlwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2Vycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzIHx8IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3I7XHJcbiAgICBpZihfZXJyb3JzICYmIHR5cGVvZiBfZXJyb3JzID09PSBcInN0cmluZ1wiKSByZXR1cm4geyBzdGF0dXM6IDQwMCwgbWVzc2FnZTogX2Vycm9ycyB9O1xyXG5cclxuICAgIGxldCBtc2cgPSAnRXJybzogJztcclxuICAgIGlmKCFBcnJheS5pc0FycmF5KF9lcnJvcnMpKXtcclxuICAgICAgICBPYmplY3Qua2V5cyhfZXJyb3JzKS5mb3JFYWNoKChlcnJvLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBtc2cgKz0gYCR7ZXJyb30gJHsgX2Vycm9yc1tlcnJvXS5tZXNzYWdlIHx8IChfZXJyb3JzW2Vycm9dLnByb3BlcnRpZXMgPyBfZXJyb3JzW2Vycm9dLnByb3BlcnRpZXMubWVzc2FnZSA6IFwiXCIpIHx8IF9lcnJvcnNbZXJyb10gfVxcbmA7ICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgbXNnICs9IGAke2Vycm99ICR7X2Vycm9yc1tlcnJvXS5tZXNzYWdlIHx8IF9lcnJvcnNbZXJyb119XFxuYDtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbXNnICs9IGBQcmVlbmNoYSBjb3JyZXRhbWVudGUgJHsgX2Vycm9ycy5sZW5ndGggPiAxID8gXCJvcyBjYW1wb3MgXCIgOiBcIm8gY2FtcG8gXCIgfSBkZTpgO1xyXG4gICAgICAgIF9lcnJvcnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBpdGVtLmZpZWxkW2l0ZW0uZmllbGQubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIG1zZyArPSBgICR7ZmllbGR9JHtpbmRleCA9PT0gX2Vycm9ycy5sZW5ndGggLSAxID8gXCIuXCIgOiBcIixcIn1gO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBzdGF0dXM6IDQwMCwgbWVzc2FnZTogbXNnIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVycm9ySGFuZGxpbmc7IiwiZXhwb3J0IGNvbnN0IGdldEhlYWRlcnMgPSAodG9rZW4pID0+ICh7IGhlYWRlcnM6IHsgXCJBdXRob3JpemF0aW9uXCI6IGBFY29tbWVyY2UgJHt0b2tlbn1gIH0gfSk7IiwiaW1wb3J0IGF1dGhBY3Rpb25zIGZyb20gJy4vYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgY2F0ZWdvcmlhQWN0aW9ucyBmcm9tICcuL2NhdGVnb3JpYUFjdGlvbnMnO1xyXG5pbXBvcnQgbG9qYUFjdGlvbnMgZnJvbSAnLi9sb2phQWN0aW9ucyc7XHJcbmltcG9ydCBwcm9kdXRvQWN0aW9ucyBmcm9tICcuL3Byb2R1dG9BY3Rpb25zJztcclxuaW1wb3J0IGNhcnJpbmhvQWN0aW9ucyBmcm9tICcuL2NhcnJpbmhvQWN0aW9ucyc7XHJcbmltcG9ydCBjbGllbnRlQWN0aW9ucyBmcm9tICcuL2NsaWVudGVBY3Rpb25zJztcclxuaW1wb3J0IGNoZWNrb3V0QWN0aW9ucyBmcm9tICcuL2NoZWNrb3V0QWN0aW9ucyc7XHJcbmltcG9ydCBwZWRpZG9BY3Rpb25zIGZyb20gJy4vcGVkaWRvQWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAuLi5hdXRoQWN0aW9ucyxcclxuICAgIC4uLmNhdGVnb3JpYUFjdGlvbnMsXHJcbiAgICAuLi5sb2phQWN0aW9ucyxcclxuICAgIC4uLnByb2R1dG9BY3Rpb25zLFxyXG4gICAgLi4uY2FycmluaG9BY3Rpb25zLFxyXG4gICAgLi4uY2xpZW50ZUFjdGlvbnMsXHJcbiAgICAuLi5jaGVja291dEFjdGlvbnMsXHJcbiAgICAuLi5wZWRpZG9BY3Rpb25zXHJcbn07IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICAgIEZFVENIX0RBRE9TXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBBUEksIHZlcnNhbywgbG9qYSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hEYWRvc0xvamEgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvbG9qYXMvJHtsb2phfT9sb2phPSR7bG9qYX1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX0RBRE9TLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBmZXRjaERhZG9zTG9qYVxyXG59OyIsImltcG9ydCB7XHJcbiAgICBGRVRDSF9QRURJRE9TLFxyXG4gICAgRkVUQ0hfUEVESURPLFxyXG4gICAgQ0xFQU5fUEVESURPLFxyXG4gICAgQ0FOQ0VMQVJfUEVESURPXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtBUEksIHZlcnNhbywgbG9qYX0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IGVycm9ySGFuZGxpbmcgZnJvbSAnLi9lcnJvckhhbmRsaW5nJztcclxuaW1wb3J0IHtnZXRIZWFkZXJzfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUGVkaWRvcyA9ICh7b2Zmc2V0LCBsaW1pdCwgdG9rZW59KSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5nZXQoXHJcbiAgICAgICAgYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3BlZGlkb3M/bG9qYT0ke2xvamF9Jm9mZnNldD0ke29mZnNldH0mbGltaXQ9JHtsaW1pdH1gLFxyXG4gICAgICAgIGdldEhlYWRlcnModG9rZW4pXHJcbiAgICApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaCh7dHlwZTogRkVUQ0hfUEVESURPUywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUGVkaWRvID0gKGlkLCB0b2tlbikgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wZWRpZG9zLyR7aWR9P2xvamE9JHtsb2phfWAsIGdldEhlYWRlcnModG9rZW4pKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goe3R5cGU6IEZFVENIX1BFRElETywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbmNlbGFyUGVkaWRvID0gKGlkLCB0b2tlbiwgY2IpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmRlbGV0ZShgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcGVkaWRvcy8ke2lkfT9sb2phPSR7bG9qYX1gLCBnZXRIZWFkZXJzKHRva2VuKSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBkaXNwYXRjaCAoe3R5cGU6IENBTkNFTEFSX1BFRElETywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pO1xyXG4gICAgICAgIGNiKG51bGwpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlID0+IGNiIChlcnJvckhhbmRsaW5nKGUpKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYW5QZWRpZG8gPSAoKSA9PiAoe3R5cGU6IENMRUFOX1BFRElET30pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZmV0Y2hQZWRpZG9zLFxyXG4gICAgZmV0Y2hQZWRpZG8sXHJcbiAgICBjYW5jZWxhclBlZGlkbyxcclxuICAgIGNsZWFuUGVkaWRvXHJcbn07IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICAgIEZFVENIX1BST0RVVE9TLFxyXG4gICAgRkVUQ0hfUEVTUVVJU0EsXHJcbiAgICBGRVRDSF9QUk9EVVRPU19QRVNRVUlTQSxcclxuICAgIEZFVENIX1BST0RVVE8sXHJcbiAgICBGRVRDSF9QUk9EVVRPX0FWQUxJQUNPRVMsXHJcbiAgICBGRVRDSF9QUk9EVVRPX1ZBUklBQ09FUyxcclxuICAgIE5PVkFfQVZBTElBQ0FPXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBBUEksIHZlcnNhbywgbG9qYSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcblxyXG5pbXBvcnQgeyBnZXRIZWFkZXJzIH0gZnJvbSAnLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1dG9zUGFnaW5hSW5pY2lhbCA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wcm9kdXRvcy9kaXNwb25pdmVpcz9sb2phPSR7bG9qYX0mb2Zmc2V0PSR7MH0mbGltaXQ9JHs0fSZzb3J0VHlwZT0ke1wicHJlY28tY3Jlc2NlbnRlXCJ9YClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9QUk9EVVRPUywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVGVybW8gPSAodGVybW8pID0+ICh7IHR5cGU6IEZFVENIX1BFU1FVSVNBLCB0ZXJtbyB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1dG9zUGVzcXVpc2EgPSAodGVybW8sIGF0dWFsID0gMCwgbGltaXQgPSAyMCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wcm9kdXRvcy9zZWFyY2gvJHt0ZXJtb30/bG9qYT0ke2xvamF9Jm9mZnNldD0ke2F0dWFsfSZsaW1pdD0ke2xpbWl0fWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfUFJPRFVUT1NfUEVTUVVJU0EsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEsIHRlcm1vIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdXRvID0gKGlkKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3Byb2R1dG9zLyR7aWR9P2xvamE9JHtsb2phfWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfUFJPRFVUTywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQXZhbGlhY29lcyA9IChpZCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wcm9kdXRvcy8ke2lkfS9hdmFsaWFjb2VzP2xvamE9JHtsb2phfSZpZD0ke2lkfWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfUFJPRFVUT19BVkFMSUFDT0VTLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hWYXJpYWNvZXMgPSAoaWQpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcHJvZHV0b3MvJHtpZH0vdmFyaWFjb2VzP2xvamE9JHtsb2phfSZpZD0ke2lkfWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfUFJPRFVUT19WQVJJQUNPRVMsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBub3ZhQXZhbGlhY2FvID0gKHsgbm9tZSwgdG9rZW4sIHByb2R1dG8sIHRleHRvLCBwb250dWFjYW8gfSwgY2IpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYCR7QVBJfS8ke3ZlcnNhb30vYXBpL2F2YWxpYWNvZXM/bG9qYT0ke2xvamF9JnByb2R1dG89JHtwcm9kdXRvfWAsXHJcbiAgICAgICAgeyBub21lLCB0ZXh0bywgcG9udHVhY2FvIH0sXHJcbiAgICAgICAgZ2V0SGVhZGVycyh0b2tlbilcclxuICAgICkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBOT1ZBX0FWQUxJQUNBTywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KTtcclxuICAgICAgICBjYihudWxsKTtcclxuICAgIH0pLmNhdGNoKGUgPT4gY2IoZSkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBmZXRjaFByb2R1dG9zUGFnaW5hSW5pY2lhbCxcclxuICAgIGZldGNoVGVybW8sXHJcbiAgICBmZXRjaFByb2R1dG9zUGVzcXVpc2EsXHJcbiAgICBmZXRjaFByb2R1dG8sXHJcbiAgICBmZXRjaEF2YWxpYWNvZXMsXHJcbiAgICBmZXRjaFZhcmlhY29lcyxcclxuICAgIG5vdmFBdmFsaWFjYW9cclxufTsiLCJleHBvcnQgY29uc3QgUkVHSVNURVIgPSBcInJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICBBVVRFTlRJQ0FSX1RPS0VOID0gXCJBVVRFTlRJQ0FSX1RPS0VOXCIsXHJcbiAgICAgICAgICAgICBVU0VSID0gXCJ1c2VyXCIsXHJcbiAgICAgICAgICAgICBBVVRFTlRJQ0FSID0gJ0FVVEVOVElDQVInLFxyXG4gICAgICAgICAgICAgRkVUQ0hfQ0FURUdPUklBUyA9IFwiZmV0Y2hfY2F0ZWdvcmlhc1wiLFxyXG4gICAgICAgICAgICAgRkVUQ0hfREFET1MgPSAnZmV0Y2hfZGFkb3MnLFxyXG4gICAgICAgICAgICAgRkVUQ0hfUFJPRFVUT1MgPSBcIkZFVENIX1BST0RVVE9TXCIsXHJcbiAgICAgICAgICAgICBGRVRDSF9DQVRFR09SSUEgPSAnRkVUQ0hfQ0FURUdPUklBJyxcclxuICAgICAgICAgICAgIEZFVENIX0NBVEVHT1JJQV9QUk9EVVRPUyA9ICdGRVRDSF9DQVRFR09SSUFfUFJPRFVUT1MnLFxyXG4gICAgICAgICAgICAgRkVUQ0hfUEVTUVVJU0EgPSAnRkVUQ0hfUEVTUVVJU0EnLFxyXG4gICAgICAgICAgICAgRkVUQ0hfUFJPRFVUT1NfUEVTUVVJU0EgPSAnRkVUQ0hfUFJPRFVUT1NfUEVTUVVJU0EnLFxyXG4gICAgICAgICAgICAgRkVUQ0hfUFJPRFVUTyA9ICdGRVRDSF9QUk9EVVRPJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE9fQVZBTElBQ09FUyA9ICdGRVRDSF9QUk9EVVRPX0FWQUxJQUNPRVMnLFxyXG4gICAgICAgICAgICAgRkVUQ0hfUFJPRFVUT19WQVJJQUNPRVMgPSAnRkVUQ0hfUFJPRFVUT19WQVJJQUNPRVMnLFxyXG4gICAgICAgICAgICAgTk9WQV9BVkFMSUFDQU8gPSAnTk9WQV9BVkFMSUFDQU8nLFxyXG4gICAgICAgICAgICAgU0VUX0NBUlJJTkhPID0gJ1NFVF9DQVJSSU5ITycsXHJcbiAgICAgICAgICAgICBDTEVBTl9DQVJSSU5ITyA9ICdDTEVBTl9DQVJSSU5ITycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPX0NBUlJJTkhPID0gJ0ZFVENIX1BST0RVVE9fQ0FSUklOSE8nLFxyXG4gICAgICAgICAgICAgRkVUQ0hfVkFSSUFDQU9fQ0FSUklOSE8gPSAnRkVUQ0hfVkFSSUFDQU9fQ0FSUklOSE8nLFxyXG4gICAgICAgICAgICAgRkVUQ0hfVkFMT1JfRU5UUkVHQSA9ICdGRVRDSF9WQUxPUl9FTlRSRUdBJyxcclxuICAgICAgICAgICAgIFVQREFURV9RVERfQ0FSVCA9ICdVUERBVEVfUVREX0NBUlQnLFxyXG4gICAgICAgICAgICAgVVBEQVRFX0ZSRVRFX0NBUlQgPSAnVVBEQVRFX0ZSRVRFX0NBUlQnLFxyXG4gICAgICAgICAgICAgUkVNT1ZFX1BST0RfQ0FSVCA9ICdSRU1PVkVfUFJPRF9DQVJUJyxcclxuICAgICAgICAgICAgIENMRUFOX0ZSRVRFUyA9ICdDTEVBTl9GUkVURVMnLFxyXG4gICAgICAgICAgICAgRkVUQ0hfQ0xJRU5URSA9ICdGRVRDSF9DTElFTlRFJyxcclxuICAgICAgICAgICAgIFNFVF9GT1JNID0gJ1NFVF9GT1JNJyxcclxuICAgICAgICAgICAgIENMRUFOX0ZPUk0gPSAnQ0xFQU5fRk9STScsXHJcbiAgICAgICAgICAgICBTRVRfVElQT19QQUdBTUVOVE8gPSAnU0VUX1RJUE9fUEFHQU1FTlRPJyxcclxuICAgICAgICAgICAgIEZFVENIX1NFU1NJT05fSUQgPSAnRkVUQ0hfU0VTU0lPTl9JRCcsXHJcbiAgICAgICAgICAgICBGRVRDSF9TRU5ERVJfSEFTSCA9ICdGRVRDSF9TRU5ERVJfSEFTSCcsXHJcbiAgICAgICAgICAgICBOT1ZPX1BFRElETyA9ICdOT1ZPX1BFRElETycsXHJcbiAgICAgICAgICAgICBQQUdBUl9QRURJRE8gPSAnUEFHQVJfUEVESURPJyxcclxuICAgICAgICAgICAgIExPR09VVF9DTElFTlRFID0gJ0xPR09VVF9DTElFTlRFJyxcclxuICAgICAgICAgICAgIERFU0FVVEVOVElDQVIgPSAnREVTQVVURU5USUNBUicsXHJcbiAgICAgICAgICAgICBGRVRDSF9QRURJRE9TID0gJ0ZFVENIX1BFRElET1MnLFxyXG4gICAgICAgICAgICAgRkVUQ0hfUEVESURPID0gJ0ZFVENIX1BFRElETycsXHJcbiAgICAgICAgICAgICBDTEVBTl9QRURJRE8gPSAnQ0xFQU5fUEVESURPJyxcclxuICAgICAgICAgICAgIENBTkNFTEFSX1BFRElETyA9ICdDQU5DRUxBUl9QRURJRE8nOyIsImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBfc2F2ZUNhcnQgPSAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IGNhcnQgPSBnZXRDYXJ0KCk7XHJcblxyXG4gICAgbGV0IGZvdW5kO1xyXG4gICAgY2FydCA9IGNhcnQubWFwKChfaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmKFxyXG4gICAgICAgICAgICBfaXRlbS5wcm9kdXRvID09PSBpdGVtLnByb2R1dG8gJiZcclxuICAgICAgICAgICAgX2l0ZW0udmFyaWFjYW8gPT09IGl0ZW0udmFyaWFjYW8gXHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5faXRlbSwgcXVhbnRpZGFkZTogTnVtYmVyKF9pdGVtLnF1YW50aWRhZGUpICsgTnVtYmVyKGl0ZW0ucXVhbnRpZGFkZSkgfVxyXG4gICAgICAgIH0gZWxzZSByZXR1cm4gX2l0ZW07XHJcbiAgICB9KTtcclxuICAgIGlmKCFmb3VuZCkgY2FydC5wdXNoKGl0ZW0pO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQGNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2FydCA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJAY2FydFwiKSB8fCBcIltdXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFuQ2FydCA9ICgpID0+IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiQGNhcnRcIik7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2FydCA9IChpdGVtLCBnb1RvQ2FydCA9IHRydWUpID0+IHtcclxuICAgIF9zYXZlQ2FydChpdGVtKTtcclxuICAgIGlmKGdvVG9DYXJ0KSBSb3V0ZXIucHVzaChcIi9jYXJyaW5ob1wiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb3VudEl0ZW1zQ2FydCA9ICgpID0+IFxyXG4gICAgICAgICAgICBnZXRDYXJ0KCkucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgKGMsIHsgcXVhbnRpZGFkZSB9KSA9PiBcclxuICAgICAgICAgICAgICAgIGMgKyAoTnVtYmVyKHF1YW50aWRhZGUpIHx8IDEpICwgMCk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2FydCA9IChpbmRleCkgPT4ge1xyXG4gICAgbGV0IGNhcnQgPSBnZXRDYXJ0KCk7XHJcbiAgICBjYXJ0ID0gY2FydC5yZWR1Y2UoXHJcbiAgICAgICAgKGFsbCwgaXRlbSwgX2luZGV4KSA9PlxyXG4gICAgICAgIGluZGV4ICE9PSBfaW5kZXggPyBhbGwuY29uY2F0KFtpdGVtXSkgOiBhbGwsIFtdXHJcbiAgICApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJAY2FydFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGdldENhcnQsXHJcbiAgICBhZGRDYXJ0LFxyXG4gICAgY2xlYW5DYXJ0LFxyXG4gICAgZ2V0Q291bnRJdGVtc0NhcnQsXHJcbiAgICByZW1vdmVDYXJ0XHJcbn07IiwiaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICBpZihwcm9jZXNzLmJyb3dzZXIpIGNvb2tpZS5zZXQoa2V5LCB2YWx1ZSwgeyBleHBpcmVzOiAxLCBwYXRoOiBcIi9cIiB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IChrZXkpID0+IHtcclxuICAgIGlmKHByb2Nlc3MuYnJvd3NlcikgY29va2llLnJlbW92ZShrZXksIHsgZXhwaXJlczogMSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChrZXksIHJlcSkgPT4ge1xyXG4gICAgcmV0dXJuIHByb2Nlc3MuYnJvd3NlciA/IFxyXG4gICAgICAgICAgICBnZXRDb29raWVGcm9tQnJvd3NlcihrZXkpIDpcclxuICAgICAgICAgICAgZ2V0Q29va2llRnJvbVNlcnZlcihrZXksIHJlcSlcclxufVxyXG5cclxuY29uc3QgZ2V0Q29va2llRnJvbUJyb3dzZXIgPSBrZXkgPT4gY29va2llLmdldChrZXkpO1xyXG5cclxuY29uc3QgZ2V0Q29va2llRnJvbVNlcnZlciA9IChrZXksIHJlcSkgPT4ge1xyXG4gICAgaWYoIXJlcS5oZWFkZXJzLmNvb2tpZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IF9jb29raWUgPSByZXEuaGVhZGVycy5jb29raWUuc3BsaXQoXCI7XCIpLmZpbmQoYyA9PiBjLnRyaW0oKS5zdGFydHNXaXRoKGAke2tleX09YCkpO1xyXG4gICAgcmV0dXJuIF9jb29raWUgPyBfY29va2llLnNwbGl0KFwiPVwiKVsxXSA6IHVuZGVmaW5lZDtcclxufSIsImV4cG9ydCBjb25zdCBudW1iZXJQYXR0ZXJuID0gL1xcZCsvZztcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRDRVAgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGF1eENlcCA9ICh2YWx1ZSB8fCBcIlwiKS5tYXRjaChudW1iZXJQYXR0ZXJuKTtcclxuICAgIGNvbnN0IF9jZXAgPSAoYXV4Q2VwIHx8IFtdKS5qb2luKCcnKTtcclxuICAgIHJldHVybiBfY2VwLmxlbmd0aCA+IDUgPyBfY2VwLnNsaWNlKDAsNSkrJy0nK19jZXAuc2xpY2UoNSw4KSA6IF9jZXA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0Q1BGID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBhdXhDUEYgPSAodmFsdWUgfHwgXCJcIikubWF0Y2gobnVtYmVyUGF0dGVybik7XHJcbiAgICBjb25zdCBfQ1BGID0gKGF1eENQRiB8fCBbXSkuam9pbignJyk7IFxyXG4gICAgaWYoX0NQRi5sZW5ndGggPiA5KSByZXR1cm4gX0NQRi5zbGljZSgwLDMpICsgJy4nICsgX0NQRi5zbGljZSgzLDYpICsgJy4nICsgX0NQRi5zbGljZSg2LDkpICsgJy0nICsgX0NQRi5zbGljZSg5LDExKTtcclxuICAgIGlmKF9DUEYubGVuZ3RoID4gNikgcmV0dXJuIF9DUEYuc2xpY2UoMCwzKSArICcuJyArIF9DUEYuc2xpY2UoMyw2KSArICcuJyArIF9DUEYuc2xpY2UoNiw5KTtcclxuICAgIGlmKF9DUEYubGVuZ3RoID4gMykgcmV0dXJuIF9DUEYuc2xpY2UoMCwzKSArICcuJyArIF9DUEYuc2xpY2UoMyw2KTtcclxuICAgIHJldHVybiBfQ1BGO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGFEZU5hc2NpbWVudG8gPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGF1eERhdGEgPSAodmFsdWUgfHwgXCJcIikubWF0Y2gobnVtYmVyUGF0dGVybik7XHJcbiAgICBjb25zdCBfZGF0YSA9IChhdXhEYXRhIHx8IFtdKS5qb2luKCcnKTsgXHJcbiAgICBpZihfZGF0YS5sZW5ndGggPiA0KSByZXR1cm4gX2RhdGEuc2xpY2UoMCwyKSArICcvJyArIF9kYXRhLnNsaWNlKDIsNCkgKyAnLycgKyBfZGF0YS5zbGljZSg0LDgpO1xyXG4gICAgaWYoX2RhdGEubGVuZ3RoID4gMikgcmV0dXJuIF9kYXRhLnNsaWNlKDAsMikgKyAnLycgKyBfZGF0YS5zbGljZSgyLDQpO1xyXG4gICAgcmV0dXJuIF9kYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdFRlbGVmb25lID0gICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgYXV4VGVsZWZvbmUgPSAodmFsdWUgfHwgXCJcIikubWF0Y2gobnVtYmVyUGF0dGVybik7XHJcbiAgICBjb25zdCBfdGVsZWZvbmUgPSAoYXV4VGVsZWZvbmUgfHwgW10pLmpvaW4oJycpOyAgICAgXHJcbiAgICByZXR1cm4gX3RlbGVmb25lLmxlbmd0aCA+IDIgPyBfdGVsZWZvbmUuc2xpY2UoMCwyKSArICcgJyArIF90ZWxlZm9uZS5zbGljZSgyLDEyKSA6IF90ZWxlZm9uZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXROdW1iZXIgPSAgKHZhbHVlLCBsaW1pdCkgPT4ge1xyXG4gICAgY29uc3QgYXV4TiA9ICh2YWx1ZSB8fCBcIlwiKS5tYXRjaChudW1iZXJQYXR0ZXJuKTtcclxuICAgIGNvbnN0IF9uID0gKGF1eE4gfHwgW10pLmpvaW4oJycpOyAgICAgXHJcbiAgICByZXR1cm4gbGltaXQgPyBfbi5zbGljZSgwLGxpbWl0KSA6IF9uO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdENhcnRhbyA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgYXV4Q2FydGFvID0gKHZhbHVlIHx8IFwiXCIpLm1hdGNoKG51bWJlclBhdHRlcm4pO1xyXG4gICAgY29uc3QgX2NhcnRhbyA9IChhdXhDYXJ0YW8gfHwgW10pLmpvaW4oJycpOyBcclxuICAgIGlmKF9jYXJ0YW8ubGVuZ3RoID4gMTIpIFxyXG4gICAgICAgIHJldHVybiBfY2FydGFvLnNsaWNlKDAsNCkgKyAnICcgKyBfY2FydGFvLnNsaWNlKDQsOCkgKyAnICcgKyBfY2FydGFvLnNsaWNlKDgsMTIpICsgJyAnICsgX2NhcnRhby5zbGljZSgxMiwxNik7XHJcbiAgICBpZihfY2FydGFvLmxlbmd0aCA+IDgpIFxyXG4gICAgICAgIHJldHVybiBfY2FydGFvLnNsaWNlKDAsNCkgKyAnICcgKyBfY2FydGFvLnNsaWNlKDQsOCkgKyAnICcgKyBfY2FydGFvLnNsaWNlKDgsMTIpO1xyXG4gICAgaWYoX2NhcnRhby5sZW5ndGggPiA0KSBcclxuICAgICAgICByZXR1cm4gX2NhcnRhby5zbGljZSgwLDQpICsgJyAnICsgX2NhcnRhby5zbGljZSg0LDgpO1xyXG4gICAgcmV0dXJuIF9jYXJ0YW87XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBudW1iZXJQYXR0ZXJuLFxyXG4gICAgZm9ybWF0Q0VQLFxyXG4gICAgZm9ybWF0Q1BGLFxyXG4gICAgZm9ybWF0RGF0YURlTmFzY2ltZW50byxcclxuICAgIGZvcm1hdFRlbGVmb25lLFxyXG4gICAgZm9ybWF0TnVtYmVyLFxyXG4gICAgZm9ybWF0Q2FydGFvXHJcbn07IiwiZXhwb3J0IGNvbnN0IGZvcm1hdE1vbmV5ID0gKHZhbHVlKSA9PiBcIlIkIFwiICsgTnVtYmVyKHZhbHVlIHx8IDApLnRvRml4ZWQoMikucmVwbGFjZShcIi5cIixcIixcIik7XHJcblxyXG5leHBvcnQgY29uc3QgY29kaWdvc0NvcnJlaW9zID0ge1xyXG4gICAgXCI0MDAxMFwiOiBcIlNlZGV4XCIsXHJcbiAgICBcIjQxMTA2XCI6IFwiUEFDXCJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBFU1RBRE9TID0ge1xyXG4gICAgXCJBQ1wiOiBcIkFjcmVcIixcclxuICAgIFwiQUxcIjogXCJBbGFnb2FzXCIsXHJcbiAgICBcIkFQXCI6IFwiQW1hcMOhXCIsXHJcbiAgICBcIkFNXCI6IFwiQW1hem9uYXNcIixcclxuICAgIFwiQkFcIjogXCJCYWhpYVwiLFxyXG4gICAgXCJDRVwiOiBcIkNlYXLDoVwiLFxyXG4gICAgXCJERlwiOiBcIkRpc3RyaXRvIEZlZGVyYWxcIixcclxuICAgIFwiRVNcIjogXCJFc3DDrXJpdG8gU2FudG9cIixcclxuICAgIFwiR09cIjogXCJHb2nDoXNcIixcclxuICAgIFwiTUFcIjogXCJNYXJhbmjDo29cIixcclxuICAgIFwiTVRcIjogXCJNYXRvIEdyb3Nzb1wiLFxyXG4gICAgXCJNU1wiOiBcIk1hdG8gR3Jvc3NvIGRvIFN1bFwiLFxyXG4gICAgXCJNR1wiOiBcIk1pbmFzIEdlcmFpc1wiLFxyXG4gICAgXCJQQVwiOiBcIlBhcsOhXCIsXHJcbiAgICBcIlBCXCI6IFwiUGFyYcOtYmFcIixcclxuICAgIFwiUFJcIjogXCJQYXJhbsOhXCIsXHJcbiAgICBcIlBFXCI6IFwiUGVybmFtYnVjb1wiLFxyXG4gICAgXCJQSVwiOiBcIlBpYXXDrVwiLFxyXG4gICAgXCJSSlwiOiBcIlJpbyBkZSBKYW5laXJvXCIsXHJcbiAgICBcIlJOXCI6IFwiUmlvIEdyYW5kZSBkbyBOb3J0ZVwiLFxyXG4gICAgXCJSU1wiOiBcIlJpbyBHcmFuZGUgZG8gU3VsXCIsXHJcbiAgICBcIlJPXCI6IFwiUm9uZMO0bmlhXCIsXHJcbiAgICBcIlJSXCI6IFwiUm9yYWltYVwiLFxyXG4gICAgXCJTQ1wiOiBcIlNhbnRhIENhdGFyaW5hXCIsXHJcbiAgICBcIlNQXCI6IFwiU8OjbyBQYXVsb1wiLFxyXG4gICAgXCJTRVwiOiBcIlNlcmdpcGVcIixcclxuICAgIFwiVE9cIjogXCJUb2NhbnRpbnNcIlxyXG59OyIsImltcG9ydCB7bnVtYmVyUGF0dGVybn0gZnJvbSAnLi9mb3JtYXQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9ubHlOdW1iZXJzID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBhdXhDZXAgPSAodmFsdWUgfHwgXCJcIikubWF0Y2gobnVtYmVyUGF0dGVybik7XHJcbiAgICByZXR1cm4gKGF1eENlcCB8fCBbXSkuam9pbihcIlwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUNQRiA9IChfc3RyQ1BGKSA9PiB7XHJcbiAgICBjb25zdCBzdHJDUEYgPSBvbmx5TnVtYmVycyhfc3RyQ1BGKTtcclxuICAgIGlmIChzdHJDUEYubGVuZ3RoICE9PSAxMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgbGV0IHNvbWE7XHJcbiAgICBsZXQgcmVzdG87XHJcbiAgICBzb21hID0gMDtcclxuICAgIGlmIChzdHJDUEYgPT0gXCIwMDAwMDAwMDAwMFwiKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICBmb3IgKHZhciBpPTE7IGk8PTk7IGkrKykge1xyXG4gICAgICAgICAgICBzb21hID0gc29tYSArIHBhcnNlSW50KHN0ckNQRi5zdWJzdHJpbmcoaS0xLCBpKSkgKiAoMTEgLSBpKTtcclxuICAgIH1cclxuICAgIHJlc3RvID0gKHNvbWEgKiAxMCkgJSAxMTtcclxuICAgXHJcbiAgICBpZiAoKHJlc3RvID09IDEwKSB8fCAocmVzdG8gPT0gMTEpKSByZXN0byA9IDA7XHJcbiAgICBpZiAocmVzdG8gIT0gcGFyc2VJbnQoc3RyQ1BGLnN1YnN0cmluZyg5LCAxMCkpKSByZXR1cm4gZmFsc2U7XHJcbiAgIFxyXG4gICAgc29tYSA9IDA7XHJcbiAgICBmb3IgKHZhciBqID0gMTsgaiA8PSAxMDsgaiArKykge1xyXG4gICAgICAgIHNvbWEgPSBzb21hICsgcGFyc2VJbnQoc3RyQ1BGLnN1YnN0cmluZyhqLTEsIGopKSAqICgxMiAtIGopO1xyXG4gICAgfVxyXG4gICAgcmVzdG8gPSAoc29tYSAqIDEwKSUgMTE7XHJcbiAgIFxyXG4gICAgaWYgKChyZXN0byA9PSAxMCkgfHwgKHJlc3RvID09IDExKSkgcmVzdG8gPSAwO1xyXG4gICAgaWYgKHJlc3RvICE9IHBhcnNlSW50KHN0ckNQRi5zdWJzdHJpbmcoMTAsIDExKSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHZhbGlkYXRlQ1BGLFxyXG4gICAgb25seU51bWJlcnNcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==