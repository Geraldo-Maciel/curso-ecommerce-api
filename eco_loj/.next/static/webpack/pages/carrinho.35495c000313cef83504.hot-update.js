webpackHotUpdate_N_E("pages/carrinho",{

/***/ "./components/Item/Frete.js":
/*!**********************************!*\
  !*** ./components/Item/Frete.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");







var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Item\\Frete.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var Frete = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Frete, _Component);

  var _super = _createSuper(Frete);

  function Frete(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Frete);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onChangeCEP", function (e) {
      _this.setState({
        cep: Object(_utils_format__WEBPACK_IMPORTED_MODULE_12__["formatCEP"])(e.target.value)
      });
    });

    _this.state = {
      cep: props.cep || ""
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Frete, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.fretes && this.props.fretes && !this.props.freteSelecionado) {
        this.props.selecionarFrete(this.props.fretes[0]);
      }
    }
  }, {
    key: "selectFrete",
    value: function selectFrete(codigo, fretes) {
      var frete = fretes.reduce(function (all, frete) {
        return frete.Codigo.toString() === codigo ? frete : all;
      }, {});
      this.props.selecionarFrete(frete); //        console.log('selectfrete-frete: ', frete);
    }
  }, {
    key: "renderOpcoesFrete",
    value: function renderOpcoesFrete() {
      var _this2 = this;

      var _this$props = this.props,
          fretes = _this$props.fretes,
          freteSelecionado = _this$props.freteSelecionado;
      if (!fretes || !freteSelecionado) return null; //        console.log('renderopcoesfrete-fretes: ', fretes);
      //        console.log('renderopcoesfrete-freteSelecionado: ', freteSelecionado);

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }
      }, __jsx("select", {
        value: freteSelecionado.Codigo,
        onChange: function onChange(e) {
          return _this2.selectFrete(e.target.value, fretes);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }
      }, fretes.map(function (frete, index) {
        return __jsx("option", {
          value: frete.Codigo,
          key: frete.Codigo,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 29
          }
        }, _utils__WEBPACK_IMPORTED_MODULE_11__["codigosCorreios"][frete.Codigo], " \xA0 (", frete.PrazoEntrega, " dias \xFAteis) -\xA0", Object(_utils__WEBPACK_IMPORTED_MODULE_11__["formatMoney"])(frete.Valor.replace(",", ".")));
      })));
    }
  }, {
    key: "renderOpcaoSelecionada",
    value: function renderOpcaoSelecionada() {
      var _this$props2 = this.props,
          freteSelecionado = _this$props2.freteSelecionado,
          cleanFretes = _this$props2.cleanFretes;
      if (!freteSelecionado || !freteSelecionado.Valor) return null;
      return __jsx("div", {
        className: "flex vertical flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }
      }, __jsx("h4", {
        className: "valor-frete",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_11__["formatMoney"])(freteSelecionado.Valor.replace(",", "."))), __jsx("span", {
        className: "limpar-CEP",
        onClick: function onClick() {
          return cleanFretes();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }
      }, "Limpar CEP"));
    }
  }, {
    key: "calcularFrete",
    value: function calcularFrete() {
      var cep = this.state.cep;
      if (!cep || cep.length !== 9) return alert("Digite o CEP corretamente.");
      this.props.calcularFrete(cep, Object(_utils_cart__WEBPACK_IMPORTED_MODULE_10__["getCart"])());
    }
  }, {
    key: "renderFormularioCEP",
    value: function renderFormularioCEP() {
      var _this3 = this;

      return __jsx("div", {
        className: "flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "flex-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }
      }, __jsx("input", {
        value: this.state.cep,
        name: "CEP",
        className: "campo-frete",
        onChange: this.onChangeCEP,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }
      }, __jsx("button", {
        className: "btn btn-primary btn-sm",
        onClick: function onClick() {
          return _this3.calcularFrete();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }
      }, "CALCULAR")));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "dados-do-carrinho-item flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "flex-1 flex vertical",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "headline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }
      }, " Frete "), this.props.freteSelecionado && this.renderOpcoesFrete()), __jsx("div", {
        className: "flex-1 flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }
      }, this.props.freteSelecionado ? this.renderOpcaoSelecionada() : this.renderFormularioCEP()));
    }
  }]);

  return Frete;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    carrinho: state.carrinho.carrinho,
    freteSelecionado: state.carrinho.freteSelecionado,
    fretes: state.carrinho.fretes,
    cep: state.carrinho.cep
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_9__["default"])(Frete));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JdGVtL0ZyZXRlLmpzIl0sIm5hbWVzIjpbIkZyZXRlIiwicHJvcHMiLCJlIiwic2V0U3RhdGUiLCJjZXAiLCJmb3JtYXRDRVAiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0YXRlIiwicHJldlByb3BzIiwiZnJldGVzIiwiZnJldGVTZWxlY2lvbmFkbyIsInNlbGVjaW9uYXJGcmV0ZSIsImNvZGlnbyIsImZyZXRlIiwicmVkdWNlIiwiYWxsIiwiQ29kaWdvIiwidG9TdHJpbmciLCJzZWxlY3RGcmV0ZSIsIm1hcCIsImluZGV4IiwiY29kaWdvc0NvcnJlaW9zIiwiUHJhem9FbnRyZWdhIiwiZm9ybWF0TW9uZXkiLCJWYWxvciIsInJlcGxhY2UiLCJjbGVhbkZyZXRlcyIsImxlbmd0aCIsImFsZXJ0IiwiY2FsY3VsYXJGcmV0ZSIsImdldENhcnQiLCJvbkNoYW5nZUNFUCIsInJlbmRlck9wY29lc0ZyZXRlIiwicmVuZGVyT3BjYW9TZWxlY2lvbmFkYSIsInJlbmRlckZvcm11bGFyaW9DRVAiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjYXJyaW5obyIsImNvbm5lY3QiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEs7Ozs7O0FBRUYsaUJBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFDaEI7O0FBRGdCLHNOQXNFTixVQUFDQyxDQUFELEVBQU87QUFDakIsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLFdBQUcsRUFBRUMsZ0VBQVMsQ0FBQ0gsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVY7QUFBZixPQUFkO0FBQ0gsS0F4RW1COztBQUVoQixVQUFLQyxLQUFMLEdBQWE7QUFDVEosU0FBRyxFQUFFSCxLQUFLLENBQUNHLEdBQU4sSUFBYTtBQURULEtBQWI7QUFGZ0I7QUFL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RUFFSyxLQUFLN0IsS0FBTCxDQUFXVSxnQkFBWCxJQUErQixLQUFLc0IsaUJBQUwsRUFGcEMsQ0FESixFQUtJO0FBQUssaUJBQVMsRUFBRyxvQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLEtBQUtoQyxLQUFMLENBQVdVLGdCQUFYLEdBQ0csS0FBS3VCLHNCQUFMLEVBREgsR0FFRyxLQUFLQyxtQkFBTCxFQUhSLENBTEosQ0FESjtBQWNIOzs7O0VBaEhlQywrQzs7QUFtSHBCLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQTdCLEtBQUs7QUFBQSxTQUFLO0FBQzlCOEIsWUFBUSxFQUFFOUIsS0FBSyxDQUFDOEIsUUFBTixDQUFlQSxRQURLO0FBRTlCM0Isb0JBQWdCLEVBQUVILEtBQUssQ0FBQzhCLFFBQU4sQ0FBZTNCLGdCQUZIO0FBRzlCRCxVQUFNLEVBQUVGLEtBQUssQ0FBQzhCLFFBQU4sQ0FBZTVCLE1BSE87QUFJOUJOLE9BQUcsRUFBRUksS0FBSyxDQUFDOEIsUUFBTixDQUFlbEM7QUFKVSxHQUFMO0FBQUEsQ0FBN0I7O0FBT2VtQywwSEFBTyxDQUFDRixlQUFELEVBQWtCRyxzREFBbEIsQ0FBUCxDQUFtQ3hDLEtBQW5DLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FycmluaG8uMzU0OTVjMDAwMzEzY2VmODM1MDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQge2dldENhcnR9IGZyb20gJy4uLy4uL3V0aWxzL2NhcnQnO1xyXG5pbXBvcnQge2Zvcm1hdE1vbmV5LCBjb2RpZ29zQ29ycmVpb3N9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHtmb3JtYXRDRVB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdCc7XHJcblxyXG5jbGFzcyBGcmV0ZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0geyBcclxuICAgICAgICAgICAgY2VwOiBwcm9wcy5jZXAgfHwgXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmICggIXByZXZQcm9wcy5mcmV0ZXMgJiYgdGhpcy5wcm9wcy5mcmV0ZXMgJiYgIXRoaXMucHJvcHMuZnJldGVTZWxlY2lvbmFkbykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjaW9uYXJGcmV0ZSh0aGlzLnByb3BzLmZyZXRlc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdEZyZXRlKGNvZGlnbywgZnJldGVzKSB7XHJcbiAgICAgICAgY29uc3QgZnJldGUgPSBmcmV0ZXMucmVkdWNlKFxyXG4gICAgICAgICAgICAoYWxsLCBmcmV0ZSkgPT4gZnJldGUuQ29kaWdvLnRvU3RyaW5nKCkgPT09IGNvZGlnbyA/IGZyZXRlIDogYWxsLCB7fVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY2lvbmFyRnJldGUoZnJldGUpO1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdGZyZXRlLWZyZXRlOiAnLCBmcmV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyT3Bjb2VzRnJldGUgKCkge1xyXG4gICAgICAgIGNvbnN0IHtmcmV0ZXMsIGZyZXRlU2VsZWNpb25hZG99ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoICFmcmV0ZXMgfHwgIWZyZXRlU2VsZWNpb25hZG8pIHJldHVybiBudWxsO1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coJ3JlbmRlcm9wY29lc2ZyZXRlLWZyZXRlczogJywgZnJldGVzKTtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJvcGNvZXNmcmV0ZS1mcmV0ZVNlbGVjaW9uYWRvOiAnLCBmcmV0ZVNlbGVjaW9uYWRvKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtmcmV0ZVNlbGVjaW9uYWRvLkNvZGlnb31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4gdGhpcy5zZWxlY3RGcmV0ZShlLnRhcmdldC52YWx1ZSwgZnJldGVzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmV0ZXMubWFwKChmcmV0ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2ZyZXRlLkNvZGlnb30ga2V5PXtmcmV0ZS5Db2RpZ299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2RpZ29zQ29ycmVpb3NbZnJldGUuQ29kaWdvXX0gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHtmcmV0ZS5QcmF6b0VudHJlZ2F9IGRpYXMgw7p0ZWlzKSAtJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdE1vbmV5KGZyZXRlLlZhbG9yLnJlcGxhY2UoXCIsXCIsIFwiLlwiKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck9wY2FvU2VsZWNpb25hZGEgKCkge1xyXG4gICAgICAgIGNvbnN0IHtmcmV0ZVNlbGVjaW9uYWRvLCBjbGVhbkZyZXRlc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmICggIWZyZXRlU2VsZWNpb25hZG8gfHwgIWZyZXRlU2VsZWNpb25hZG8uVmFsb3IpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4IHZlcnRpY2FsIGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lID0gXCJ2YWxvci1mcmV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0TW9uZXkoZnJldGVTZWxlY2lvbmFkby5WYWxvci5yZXBsYWNlKFwiLFwiLCBcIi5cIikpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwibGltcGFyLUNFUFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiBjbGVhbkZyZXRlcygpfT5cclxuICAgICAgICAgICAgICAgICAgICBMaW1wYXIgQ0VQXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhckZyZXRlICgpIHtcclxuICAgICAgICBjb25zdCB7Y2VwfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgaWYgKCFjZXAgfHwgY2VwLmxlbmd0aCAhPT0gOSkgcmV0dXJuIGFsZXJ0KFwiRGlnaXRlIG8gQ0VQIGNvcnJldGFtZW50ZS5cIik7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jYWxjdWxhckZyZXRlKGNlcCwgZ2V0Q2FydCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZUNFUCA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2VwOiBmb3JtYXRDRVAoZS50YXJnZXQudmFsdWUpfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGb3JtdWxhcmlvQ0VQICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3RoaXMuc3RhdGUuY2VwfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiQ0VQXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiY2FtcG8tZnJldGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHt0aGlzLm9uQ2hhbmdlQ0VQfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB0aGlzLmNhbGN1bGFyRnJldGUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENBTENVTEFSXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImRhZG9zLWRvLWNhcnJpbmhvLWl0ZW0gZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMSBmbGV4IHZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJoZWFkbGluZVwiPiBGcmV0ZSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZnJldGVTZWxlY2lvbmFkbyAmJiB0aGlzLnJlbmRlck9wY29lc0ZyZXRlKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTEgZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mcmV0ZVNlbGVjaW9uYWRvID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyT3BjYW9TZWxlY2lvbmFkYSgpIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRm9ybXVsYXJpb0NFUCgpIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBjYXJyaW5obzogc3RhdGUuY2FycmluaG8uY2FycmluaG8sXHJcbiAgICBmcmV0ZVNlbGVjaW9uYWRvOiBzdGF0ZS5jYXJyaW5oby5mcmV0ZVNlbGVjaW9uYWRvLFxyXG4gICAgZnJldGVzOiBzdGF0ZS5jYXJyaW5oby5mcmV0ZXMsXHJcbiAgICBjZXA6IHN0YXRlLmNhcnJpbmhvLmNlcFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25zKSAoRnJldGUpOyJdLCJzb3VyY2VSb290IjoiIn0=