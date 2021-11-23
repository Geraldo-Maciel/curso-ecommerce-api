webpackHotUpdate_N_E("pages/checkout",{

/***/ "./containers/Checkout/CheckoutButton.js":
/*!***********************************************!*\
  !*** ./containers/Checkout/CheckoutButton.js ***!
  \***********************************************/
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
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
/* harmony import */ var _components_Alert_Geral__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Alert/Geral */ "./components/Alert/Geral.js");







var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\CheckoutButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var CheckoutButton = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CheckoutButton, _Component);

  var _super = _createSuper(CheckoutButton);

  function CheckoutButton() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CheckoutButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      disabled: false,
      aviso: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "toggleDisabled", function () {
      return _this.setState({
        disabled: !_this.state.disabled
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CheckoutButton, [{
    key: "calcularValorTotal",
    value: function calcularValorTotal(carrinho, freteSelecionado) {
      //        console.log('calcvltotal-frete selecionado: ', freteSelecionado);
      var valorProdutos = carrinho.reduce(function (all, item) {
        return all + Number(item.precoUnitario) * Number(item.quantidade);
      }, 0); //        const valorFrete = Number(freteSelecionado.Valor.replace(',','.'));

      var valorFrete = freteSelecionado ? Number(freteSelecionado.Valor.replace(',', '.')) : 0;
      return valorProdutos + valorFrete;
    }
  }, {
    key: "validarFormulario",
    value: function validarFormulario() {
      var _this$props$form = this.props.form,
          nome = _this$props$form.nome,
          CPF = _this$props$form.CPF,
          dataDeNascimento = _this$props$form.dataDeNascimento,
          telefone = _this$props$form.telefone,
          local = _this$props$form.local,
          numero = _this$props$form.numero,
          bairro = _this$props$form.bairro,
          cidade = _this$props$form.cidade,
          estado = _this$props$form.estado,
          CEP = _this$props$form.CEP,
          dadosCobranca = _this$props$form.dadosCobranca,
          dadosEntregaIgualDadosCobranca = _this$props$form.dadosEntregaIgualDadosCobranca,
          CPFboleto = _this$props$form.CPFboleto,
          numeroCartao = _this$props$form.numeroCartao,
          nomeCartao = _this$props$form.nomeCartao,
          mesCartao = _this$props$form.mesCartao,
          anoCartao = _this$props$form.anoCartao,
          parcelasCartaoSelecionada = _this$props$form.parcelasCartaoSelecionada,
          CVVCartao = _this$props$form.CVVCartao,
          credit_card_token = _this$props$form.credit_card_token;
      var tipoPagamentoSelecionado = this.props.tipoPagamentoSelecionado;
      var temErro = false;
      if (!nome) temErro = true;
      if (!CPF || CPF.length !== 14) temErro = true;
      if (CPF && CPF.length === 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_11__["validateCPF"])(CPF)) temErro = true;
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
        if (CPFboleto && CPFboleto.length !== 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_11__["validateCPF"])(CPFboleto)) temErro = true;
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
  }, {
    key: "validate",
    value: function validate() {
      var _this$props = this.props,
          freteSelecionado = _this$props.freteSelecionado,
          tipoPagamentoSelecionado = _this$props.tipoPagamentoSelecionado;
      var validarFormulario = this.validarFormulario();
      return validarFormulario && freteSelecionado && tipoPagamentoSelecionado;
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      var _this2 = this;

      var _this$props2 = this.props,
          form = _this$props2.form,
          freteSelecionado = _this$props2.freteSelecionado,
          token = _this$props2.token,
          senderHash = _this$props2.senderHash,
          tipoPagamentoSelecionado = _this$props2.tipoPagamentoSelecionado; //        console.log('handlesubmit-frete selecionado: ', freteSelecionado);

      var carrinho = Object(_utils_cart__WEBPACK_IMPORTED_MODULE_10__["getCart"])();
      var valorTotal = this.calcularValorTotal(carrinho, freteSelecionado); //        console.log('valor total: ', valorTotal);

      if (!this.validate()) return null; //        console.log('passou 3');

      this.toggleDisabled(); //        console.log('passou 4');

      this.props.novoPedido(form, freteSelecionado, tipoPagamentoSelecionado, valorTotal, token, senderHash, carrinho, function (error) {
        if (error) {
          _this2.setState({
            aviso: {
              status: false,
              message: error.message
            }
          });
        }

        _this2.toggleDisabled();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      //        console.log('hender-frete selecionado: ', this.props.freteSelecionado);
      return __jsx("div", {
        className: "flex flex-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }
      }, __jsx(_components_Alert_Geral__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
        onClick: function onClick() {
          return _this3.handleSubmit();
        },
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
  }]);

  return CheckoutButton;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    carrinho: state.carrinho.carrinho,
    usuario: state.auth.usuario,
    cliente: state.cliente.cliente,
    freteSelecionado: state.carrinho.freteSelecionado,
    form: state.checkout.form,
    token: state.auth.token,
    senderHash: state.checkout.senderHash,
    tipoPagamentoSelecionado: state.checkout.tipoPagamentoSelecionado
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_9__["default"])(CheckoutButton));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9DaGVja291dC9DaGVja291dEJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJDaGVja291dEJ1dHRvbiIsImRpc2FibGVkIiwiYXZpc28iLCJzZXRTdGF0ZSIsInN0YXRlIiwiY2FycmluaG8iLCJmcmV0ZVNlbGVjaW9uYWRvIiwidmFsb3JQcm9kdXRvcyIsInJlZHVjZSIsImFsbCIsIml0ZW0iLCJOdW1iZXIiLCJwcmVjb1VuaXRhcmlvIiwicXVhbnRpZGFkZSIsInZhbG9yRnJldGUiLCJWYWxvciIsInJlcGxhY2UiLCJwcm9wcyIsImZvcm0iLCJub21lIiwiQ1BGIiwiZGF0YURlTmFzY2ltZW50byIsInRlbGVmb25lIiwibG9jYWwiLCJudW1lcm8iLCJiYWlycm8iLCJjaWRhZGUiLCJlc3RhZG8iLCJDRVAiLCJkYWRvc0NvYnJhbmNhIiwiZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhIiwiQ1BGYm9sZXRvIiwibnVtZXJvQ2FydGFvIiwibm9tZUNhcnRhbyIsIm1lc0NhcnRhbyIsImFub0NhcnRhbyIsInBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEiLCJDVlZDYXJ0YW8iLCJjcmVkaXRfY2FyZF90b2tlbiIsInRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyIsInRlbUVycm8iLCJsZW5ndGgiLCJ2YWxpZGF0ZUNQRiIsInZhbGlkYXJGb3JtdWxhcmlvIiwidG9rZW4iLCJzZW5kZXJIYXNoIiwiZ2V0Q2FydCIsInZhbG9yVG90YWwiLCJjYWxjdWxhclZhbG9yVG90YWwiLCJ2YWxpZGF0ZSIsInRvZ2dsZURpc2FibGVkIiwibm92b1BlZGlkbyIsImVycm9yIiwic3RhdHVzIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInVzdWFyaW8iLCJhdXRoIiwiY2xpZW50ZSIsImNoZWNrb3V0IiwiY29ubmVjdCIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsYzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDTTtBQUNKQyxjQUFRLEVBQUUsS0FETjtBQUVKQyxXQUFLLEVBQUU7QUFGSCxLOzt5TkFLUztBQUFBLGFBQU0sTUFBS0MsUUFBTCxDQUFjO0FBQUVGLGdCQUFRLEVBQUUsQ0FBQyxNQUFLRyxLQUFMLENBQVdIO0FBQXhCLE9BQWQsQ0FBTjtBQUFBLEs7Ozs7Ozs7V0FFakIsNEJBQW1CSSxRQUFuQixFQUE2QkMsZ0JBQTdCLEVBQThDO0FBQ2xEO0FBQ1EsVUFBTUMsYUFBYSxHQUFHRixRQUFRLENBQUNHLE1BQVQsQ0FDRixVQUFDQyxHQUFELEVBQU1DLElBQU47QUFBQSxlQUNBRCxHQUFHLEdBQUlFLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxhQUFOLENBQU4sR0FBNkJELE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRyxVQUFOLENBRDFDO0FBQUEsT0FERSxFQUU2RCxDQUY3RCxDQUF0QixDQUYwQyxDQU1sRDs7QUFDUSxVQUFNQyxVQUFVLEdBQUdSLGdCQUFnQixHQUFHSyxNQUFNLENBQUNMLGdCQUFnQixDQUFDUyxLQUFqQixDQUF1QkMsT0FBdkIsQ0FBK0IsR0FBL0IsRUFBbUMsR0FBbkMsQ0FBRCxDQUFULEdBQXFELENBQXhGO0FBQ0EsYUFBT1QsYUFBYSxHQUFHTyxVQUF2QjtBQUNIOzs7V0FFRCw2QkFBbUI7QUFDZiw2QkFPSSxLQUFLRyxLQUFMLENBQVdDLElBUGY7QUFBQSxVQUNJQyxJQURKLG9CQUNJQSxJQURKO0FBQUEsVUFDVUMsR0FEVixvQkFDVUEsR0FEVjtBQUFBLFVBQ2VDLGdCQURmLG9CQUNlQSxnQkFEZjtBQUFBLFVBQ2lDQyxRQURqQyxvQkFDaUNBLFFBRGpDO0FBQUEsVUFFSUMsS0FGSixvQkFFSUEsS0FGSjtBQUFBLFVBRVdDLE1BRlgsb0JBRVdBLE1BRlg7QUFBQSxVQUVtQkMsTUFGbkIsb0JBRW1CQSxNQUZuQjtBQUFBLFVBRTJCQyxNQUYzQixvQkFFMkJBLE1BRjNCO0FBQUEsVUFFbUNDLE1BRm5DLG9CQUVtQ0EsTUFGbkM7QUFBQSxVQUUyQ0MsR0FGM0Msb0JBRTJDQSxHQUYzQztBQUFBLFVBR0lDLGFBSEosb0JBR0lBLGFBSEo7QUFBQSxVQUdtQkMsOEJBSG5CLG9CQUdtQkEsOEJBSG5CO0FBQUEsVUFJSUMsU0FKSixvQkFJSUEsU0FKSjtBQUFBLFVBS0lDLFlBTEosb0JBS0lBLFlBTEo7QUFBQSxVQUtrQkMsVUFMbEIsb0JBS2tCQSxVQUxsQjtBQUFBLFVBSzhCQyxTQUw5QixvQkFLOEJBLFNBTDlCO0FBQUEsVUFLeUNDLFNBTHpDLG9CQUt5Q0EsU0FMekM7QUFBQSxVQUtvREMseUJBTHBELG9CQUtvREEseUJBTHBEO0FBQUEsVUFLK0VDLFNBTC9FLG9CQUsrRUEsU0FML0U7QUFBQSxVQU1JQyxpQkFOSixvQkFNSUEsaUJBTko7QUFRQSxVQUFRQyx3QkFBUixHQUFxQyxLQUFLdEIsS0FBMUMsQ0FBUXNCLHdCQUFSO0FBRUEsVUFBSUMsT0FBTyxHQUFHLEtBQWQ7QUFFQSxVQUFHLENBQUNyQixJQUFKLEVBQVVxQixPQUFPLEdBQUcsSUFBVjtBQUNWLFVBQUcsQ0FBQ3BCLEdBQUQsSUFBUUEsR0FBRyxDQUFDcUIsTUFBSixLQUFlLEVBQTFCLEVBQThCRCxPQUFPLEdBQUcsSUFBVjtBQUM5QixVQUFHcEIsR0FBRyxJQUFJQSxHQUFHLENBQUNxQixNQUFKLEtBQWUsRUFBdEIsSUFBNEIsQ0FBQ0Msb0VBQVcsQ0FBQ3RCLEdBQUQsQ0FBM0MsRUFBa0RvQixPQUFPLEdBQUcsSUFBVjtBQUNsRCxVQUFHLENBQUNuQixnQkFBRCxJQUFxQkEsZ0JBQWdCLENBQUNvQixNQUFqQixLQUE0QixFQUFwRCxFQUF3REQsT0FBTyxHQUFHLElBQVY7QUFDeEQsVUFBRyxDQUFDbEIsUUFBRCxJQUFhQSxRQUFRLENBQUNtQixNQUFULEdBQWtCLEVBQWxDLEVBQXNDRCxPQUFPLEdBQUcsSUFBVjtBQUV0QyxVQUFHLENBQUNqQixLQUFKLEVBQVdpQixPQUFPLEdBQUcsSUFBVjtBQUNYLFVBQUcsQ0FBQ2hCLE1BQUosRUFBWWdCLE9BQU8sR0FBRyxJQUFWO0FBQ1osVUFBRyxDQUFDZixNQUFKLEVBQVllLE9BQU8sR0FBRyxJQUFWO0FBQ1osVUFBRyxDQUFDZCxNQUFKLEVBQVljLE9BQU8sR0FBRyxJQUFWO0FBQ1osVUFBRyxDQUFDYixNQUFKLEVBQVlhLE9BQU8sR0FBRyxJQUFWO0FBQ1osVUFBRyxDQUFDWixHQUFELElBQVFBLEdBQUcsQ0FBQ2EsTUFBSixLQUFlLENBQTFCLEVBQTZCRCxPQUFPLEdBQUcsSUFBVjs7QUFFN0IsVUFBRyxDQUFDViw4QkFBSixFQUFtQztBQUMvQixZQUFHLENBQUNELGFBQWEsQ0FBQ04sS0FBbEIsRUFBeUJpQixPQUFPLEdBQUcsSUFBVjtBQUN6QixZQUFHLENBQUNYLGFBQWEsQ0FBQ0wsTUFBbEIsRUFBMEJnQixPQUFPLEdBQUcsSUFBVjtBQUMxQixZQUFHLENBQUNYLGFBQWEsQ0FBQ0osTUFBbEIsRUFBMEJlLE9BQU8sR0FBRyxJQUFWO0FBQzFCLFlBQUcsQ0FBQ1gsYUFBYSxDQUFDSCxNQUFsQixFQUEwQmMsT0FBTyxHQUFHLElBQVY7QUFDMUIsWUFBRyxDQUFDWCxhQUFhLENBQUNGLE1BQWxCLEVBQTBCYSxPQUFPLEdBQUcsSUFBVjtBQUMxQixZQUFHLENBQUNYLGFBQWEsQ0FBQ0QsR0FBZixJQUFzQkMsYUFBYSxDQUFDRCxHQUFkLENBQWtCYSxNQUFsQixLQUE2QixDQUF0RCxFQUF5REQsT0FBTyxHQUFHLElBQVY7QUFDNUQ7O0FBRUQsVUFBR0Qsd0JBQXdCLEtBQUssUUFBaEMsRUFBeUM7QUFDckMsWUFBRyxDQUFDUixTQUFELElBQWMsQ0FBQ1gsR0FBbEIsRUFBdUJvQixPQUFPLEdBQUcsSUFBVjtBQUN2QixZQUFHVCxTQUFTLElBQUlBLFNBQVMsQ0FBQ1UsTUFBVixLQUFxQixFQUFsQyxJQUF3QyxDQUFDQyxvRUFBVyxDQUFDWCxTQUFELENBQXZELEVBQW9FUyxPQUFPLEdBQUcsSUFBVjtBQUN2RSxPQUhELE1BR087QUFDSCxZQUFHLENBQUNSLFlBQUQsSUFBaUJBLFlBQVksQ0FBQ1MsTUFBYixLQUF3QixFQUE1QyxFQUFnREQsT0FBTyxHQUFHLElBQVY7QUFDaEQsWUFBRyxDQUFDUCxVQUFKLEVBQWdCTyxPQUFPLEdBQUcsSUFBVjtBQUNoQixZQUFHLENBQUNOLFNBQUQsSUFBY0EsU0FBUyxDQUFDTyxNQUFWLEtBQXFCLENBQXRDLEVBQXlDRCxPQUFPLEdBQUcsSUFBVjtBQUN6QyxZQUFHLENBQUNMLFNBQUQsSUFBY0EsU0FBUyxDQUFDTSxNQUFWLEtBQXFCLENBQXRDLEVBQXlDRCxPQUFPLEdBQUcsSUFBVjtBQUN6QyxZQUFHLENBQUNKLHlCQUFKLEVBQStCSSxPQUFPLEdBQUcsSUFBVjtBQUMvQixZQUFHLENBQUNGLGlCQUFKLEVBQXVCRSxPQUFPLEdBQUcsSUFBVjtBQUN2QixZQUFHLENBQUNILFNBQUQsSUFBY0EsU0FBUyxDQUFDSSxNQUFWLEtBQXFCLENBQXRDLEVBQXlDRCxPQUFPLEdBQUcsSUFBVjtBQUM1QyxPQTlDYyxDQWdEdkI7OztBQUVRLGFBQU8sQ0FBQ0EsT0FBUjtBQUNIOzs7V0FFRCxvQkFBVTtBQUNOLHdCQUF1RCxLQUFLdkIsS0FBNUQ7QUFBQSxVQUFRWCxnQkFBUixlQUFRQSxnQkFBUjtBQUFBLFVBQTBCaUMsd0JBQTFCLGVBQTBCQSx3QkFBMUI7QUFDQSxVQUFNSSxpQkFBaUIsR0FBRyxLQUFLQSxpQkFBTCxFQUExQjtBQUNBLGFBQU9BLGlCQUFpQixJQUFJckMsZ0JBQXJCLElBQXlDaUMsd0JBQWhEO0FBQ0g7OztXQUVELHdCQUFjO0FBQUE7O0FBQ1YseUJBRUksS0FBS3RCLEtBRlQ7QUFBQSxVQUNJQyxJQURKLGdCQUNJQSxJQURKO0FBQUEsVUFDVVosZ0JBRFYsZ0JBQ1VBLGdCQURWO0FBQUEsVUFDNEJzQyxLQUQ1QixnQkFDNEJBLEtBRDVCO0FBQUEsVUFDbUNDLFVBRG5DLGdCQUNtQ0EsVUFEbkM7QUFBQSxVQUMrQ04sd0JBRC9DLGdCQUMrQ0Esd0JBRC9DLENBRFUsQ0FJbEI7O0FBQ1EsVUFBTWxDLFFBQVEsR0FBR3lDLDREQUFPLEVBQXhCO0FBQ0EsVUFBTUMsVUFBVSxHQUFHLEtBQUtDLGtCQUFMLENBQXdCM0MsUUFBeEIsRUFBa0NDLGdCQUFsQyxDQUFuQixDQU5VLENBT2xCOztBQUNRLFVBQUcsQ0FBQyxLQUFLMkMsUUFBTCxFQUFKLEVBQXFCLE9BQU8sSUFBUCxDQVJYLENBU2xCOztBQUNRLFdBQUtDLGNBQUwsR0FWVSxDQVdsQjs7QUFDUSxXQUFLakMsS0FBTCxDQUFXa0MsVUFBWCxDQUNJakMsSUFESixFQUNVWixnQkFEVixFQUM0QmlDLHdCQUQ1QixFQUVJUSxVQUZKLEVBRWdCSCxLQUZoQixFQUV1QkMsVUFGdkIsRUFFbUN4QyxRQUZuQyxFQUU2QyxVQUFDK0MsS0FBRCxFQUFXO0FBQ2hELFlBQUdBLEtBQUgsRUFBUztBQUNMLGdCQUFJLENBQUNqRCxRQUFMLENBQWM7QUFBRUQsaUJBQUssRUFBRTtBQUFFbUQsb0JBQU0sRUFBQyxLQUFUO0FBQWdCQyxxQkFBTyxFQUFFRixLQUFLLENBQUNFO0FBQS9CO0FBQVQsV0FBZDtBQUNIOztBQUNELGNBQUksQ0FBQ0osY0FBTDtBQUNILE9BUEw7QUFTSDs7O1dBRUQsa0JBQVE7QUFBQTs7QUFDWjtBQUNRLGFBQ0k7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLGdFQUFEO0FBQVksYUFBSyxFQUFFLEtBQUs5QyxLQUFMLENBQVdGLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUVJO0FBQ0ksaUJBQVMsRUFBQyx5QkFEZDtBQUVJLGdCQUFRLEVBQUUsS0FBS0UsS0FBTCxDQUFXSCxRQUZ6QjtBQUdJLGVBQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ3NELFlBQUwsRUFBTjtBQUFBLFNBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxLQUFLbkQsS0FBTCxDQUFXSCxRQUFYLEdBQ0EsYUFEQSxHQUVBLGlCQUhKLENBSkosQ0FGSixDQURKO0FBZUg7Ozs7RUF0SHdCdUQsK0M7O0FBeUg3QixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFyRCxLQUFLO0FBQUEsU0FBSztBQUM5QkMsWUFBUSxFQUFFRCxLQUFLLENBQUNDLFFBQU4sQ0FBZUEsUUFESztBQUU5QnFELFdBQU8sRUFBRXRELEtBQUssQ0FBQ3VELElBQU4sQ0FBV0QsT0FGVTtBQUc5QkUsV0FBTyxFQUFFeEQsS0FBSyxDQUFDd0QsT0FBTixDQUFjQSxPQUhPO0FBSTlCdEQsb0JBQWdCLEVBQUVGLEtBQUssQ0FBQ0MsUUFBTixDQUFlQyxnQkFKSDtBQUs5QlksUUFBSSxFQUFFZCxLQUFLLENBQUN5RCxRQUFOLENBQWUzQyxJQUxTO0FBTTlCMEIsU0FBSyxFQUFFeEMsS0FBSyxDQUFDdUQsSUFBTixDQUFXZixLQU5ZO0FBTzlCQyxjQUFVLEVBQUV6QyxLQUFLLENBQUN5RCxRQUFOLENBQWVoQixVQVBHO0FBUTlCTiw0QkFBd0IsRUFBRW5DLEtBQUssQ0FBQ3lELFFBQU4sQ0FBZXRCO0FBUlgsR0FBTDtBQUFBLENBQTdCOztBQVdldUIsMEhBQU8sQ0FBQ0wsZUFBRCxFQUFrQk0sc0RBQWxCLENBQVAsQ0FBa0MvRCxjQUFsQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LmFiOWNhZWJiODViMmE4N2MxYjdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q2FydCB9IGZyb20gJy4uLy4uL3V0aWxzL2NhcnQnO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUNQRiB9IGZyb20gJy4uLy4uL3V0aWxzL3ZhbGlkYXRlJztcclxuaW1wb3J0IEFsZXJ0R2VyYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BbGVydC9HZXJhbCc7XHJcblxyXG5jbGFzcyBDaGVja291dEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLCBcclxuICAgICAgICBhdmlzbzogbnVsbCBcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVEaXNhYmxlZCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBkaXNhYmxlZDogIXRoaXMuc3RhdGUuZGlzYWJsZWQgfSk7XHJcblxyXG4gICAgY2FsY3VsYXJWYWxvclRvdGFsKGNhcnJpbmhvLCBmcmV0ZVNlbGVjaW9uYWRvKXtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKCdjYWxjdmx0b3RhbC1mcmV0ZSBzZWxlY2lvbmFkbzogJywgZnJldGVTZWxlY2lvbmFkbyk7XHJcbiAgICAgICAgY29uc3QgdmFsb3JQcm9kdXRvcyA9IGNhcnJpbmhvLnJlZHVjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhbGwsIGl0ZW0pID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsICsgKE51bWJlcihpdGVtLnByZWNvVW5pdGFyaW8pICogTnVtYmVyKGl0ZW0ucXVhbnRpZGFkZSkpICwgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgY29uc3QgdmFsb3JGcmV0ZSA9IE51bWJlcihmcmV0ZVNlbGVjaW9uYWRvLlZhbG9yLnJlcGxhY2UoJywnLCcuJykpO1xyXG4gICAgICAgIGNvbnN0IHZhbG9yRnJldGUgPSBmcmV0ZVNlbGVjaW9uYWRvID8gTnVtYmVyKGZyZXRlU2VsZWNpb25hZG8uVmFsb3IucmVwbGFjZSgnLCcsJy4nKSkgOiAwO1xyXG4gICAgICAgIHJldHVybiB2YWxvclByb2R1dG9zICsgdmFsb3JGcmV0ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGFyRm9ybXVsYXJpbygpe1xyXG4gICAgICAgIGNvbnN0IHsgIFxyXG4gICAgICAgICAgICBub21lLCBDUEYsIGRhdGFEZU5hc2NpbWVudG8sIHRlbGVmb25lLFxyXG4gICAgICAgICAgICBsb2NhbCwgbnVtZXJvLCBiYWlycm8sIGNpZGFkZSwgZXN0YWRvLCBDRVAsXHJcbiAgICAgICAgICAgIGRhZG9zQ29icmFuY2EsIGRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSxcclxuICAgICAgICAgICAgQ1BGYm9sZXRvLFxyXG4gICAgICAgICAgICBudW1lcm9DYXJ0YW8sIG5vbWVDYXJ0YW8sIG1lc0NhcnRhbywgYW5vQ2FydGFvLCBwYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhLCBDVlZDYXJ0YW8sXHJcbiAgICAgICAgICAgIGNyZWRpdF9jYXJkX3Rva2VuXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7IHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IHRlbUVycm8gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYoIW5vbWUpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFDUEYgfHwgQ1BGLmxlbmd0aCAhPT0gMTQpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKENQRiAmJiBDUEYubGVuZ3RoID09PSAxNCAmJiAhdmFsaWRhdGVDUEYoQ1BGKSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIWRhdGFEZU5hc2NpbWVudG8gfHwgZGF0YURlTmFzY2ltZW50by5sZW5ndGggIT09IDEwKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighdGVsZWZvbmUgfHwgdGVsZWZvbmUubGVuZ3RoIDwgMTEpIHRlbUVycm8gPSB0cnVlO1xyXG5cclxuICAgICAgICBpZighbG9jYWwpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFudW1lcm8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFiYWlycm8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFjaWRhZGUpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFlc3RhZG8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFDRVAgfHwgQ0VQLmxlbmd0aCAhPT0gOSkgdGVtRXJybyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmKCFkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2Epe1xyXG4gICAgICAgICAgICBpZighZGFkb3NDb2JyYW5jYS5sb2NhbCkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLm51bWVybykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLmJhaXJybykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLmNpZGFkZSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLmVzdGFkbykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLkNFUCB8fCBkYWRvc0NvYnJhbmNhLkNFUC5sZW5ndGggIT09IDkpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSBcImJvbGV0b1wiKXtcclxuICAgICAgICAgICAgaWYoIUNQRmJvbGV0byAmJiAhQ1BGKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoQ1BGYm9sZXRvICYmIENQRmJvbGV0by5sZW5ndGggIT09IDE0ICYmICF2YWxpZGF0ZUNQRihDUEZib2xldG8pKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZighbnVtZXJvQ2FydGFvIHx8IG51bWVyb0NhcnRhby5sZW5ndGggIT09IDE5KSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIW5vbWVDYXJ0YW8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighbWVzQ2FydGFvIHx8IG1lc0NhcnRhby5sZW5ndGggIT09IDIpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighYW5vQ2FydGFvIHx8IGFub0NhcnRhby5sZW5ndGggIT09IDQpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighcGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFjcmVkaXRfY2FyZF90b2tlbikgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFDVlZDYXJ0YW8gfHwgQ1ZWQ2FydGFvLmxlbmd0aCAhPT0gMykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuLy8gICAgICAgIGNvbnNvbGUubG9nKCd0ZW0gZXJybzogJywgdGVtRXJybyk7XHJcblxyXG4gICAgICAgIHJldHVybiAhdGVtRXJybztcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZSgpe1xyXG4gICAgICAgIGNvbnN0IHsgZnJldGVTZWxlY2lvbmFkbywgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXJGb3JtdWxhcmlvID0gdGhpcy52YWxpZGFyRm9ybXVsYXJpbygpO1xyXG4gICAgICAgIHJldHVybiB2YWxpZGFyRm9ybXVsYXJpbyAmJiBmcmV0ZVNlbGVjaW9uYWRvICYmIHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbztcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoKXtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGZvcm0sIGZyZXRlU2VsZWNpb25hZG8sIHRva2VuLCBzZW5kZXJIYXNoLCB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG9cclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVzdWJtaXQtZnJldGUgc2VsZWNpb25hZG86ICcsIGZyZXRlU2VsZWNpb25hZG8pO1xyXG4gICAgICAgIGNvbnN0IGNhcnJpbmhvID0gZ2V0Q2FydCgpO1xyXG4gICAgICAgIGNvbnN0IHZhbG9yVG90YWwgPSB0aGlzLmNhbGN1bGFyVmFsb3JUb3RhbChjYXJyaW5obywgZnJldGVTZWxlY2lvbmFkbyk7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZygndmFsb3IgdG90YWw6ICcsIHZhbG9yVG90YWwpO1xyXG4gICAgICAgIGlmKCF0aGlzLnZhbGlkYXRlKCkpIHJldHVybiBudWxsO1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coJ3Bhc3NvdSAzJyk7XHJcbiAgICAgICAgdGhpcy50b2dnbGVEaXNhYmxlZCgpO1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coJ3Bhc3NvdSA0Jyk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5ub3ZvUGVkaWRvKFxyXG4gICAgICAgICAgICBmb3JtLCBmcmV0ZVNlbGVjaW9uYWRvLCB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8sIFxyXG4gICAgICAgICAgICB2YWxvclRvdGFsLCB0b2tlbiwgc2VuZGVySGFzaCwgY2FycmluaG8sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhdmlzbzogeyBzdGF0dXM6ZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVEaXNhYmxlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coJ2hlbmRlci1mcmV0ZSBzZWxlY2lvbmFkbzogJywgdGhpcy5wcm9wcy5mcmV0ZVNlbGVjaW9uYWRvKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0R2VyYWwgYXZpc289e3RoaXMuc3RhdGUuYXZpc299IC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tY3RhIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdCgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+eyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kaXNhYmxlZCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkVOVklBTkRPLi4uXCIgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJDT05DTFVJUiBQRURJRE9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgY2FycmluaG86IHN0YXRlLmNhcnJpbmhvLmNhcnJpbmhvLFxyXG4gICAgdXN1YXJpbzogc3RhdGUuYXV0aC51c3VhcmlvLFxyXG4gICAgY2xpZW50ZTogc3RhdGUuY2xpZW50ZS5jbGllbnRlLFxyXG4gICAgZnJldGVTZWxlY2lvbmFkbzogc3RhdGUuY2FycmluaG8uZnJldGVTZWxlY2lvbmFkbyxcclxuICAgIGZvcm06IHN0YXRlLmNoZWNrb3V0LmZvcm0sXHJcbiAgICB0b2tlbjogc3RhdGUuYXV0aC50b2tlbixcclxuICAgIHNlbmRlckhhc2g6IHN0YXRlLmNoZWNrb3V0LnNlbmRlckhhc2gsXHJcbiAgICB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG86IHN0YXRlLmNoZWNrb3V0LnRpcG9QYWdhbWVudG9TZWxlY2lvbmFkb1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25zKShDaGVja291dEJ1dHRvbik7Il0sInNvdXJjZVJvb3QiOiIifQ==