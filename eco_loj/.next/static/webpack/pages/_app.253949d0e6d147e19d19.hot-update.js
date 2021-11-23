webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/carrinhoReducers.js":
/*!********************************************!*\
  !*** ./redux/reducers/carrinhoReducers.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  carrinho: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["SET_CARRINHO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: action.carrinho
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["CLEAN_CARRINHO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: null,
        freteSelecionado: null,
        fretes: null,
        cep: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO_CARRINHO"]:
      if (!action.payload.produto) return state;
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: state.carrinho ? state.carrinho.map(function (item, index) {
          return action.idxCarrinho == index ? _objectSpread(_objectSpread({}, item), {}, {
            produto: action.payload.produto
          }) : item;
        }) : []
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_VARIACAO_CARRINHO"]:
      if (!action.payload.variacao) return state;
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: state.carrinho ? state.carrinho.map(function (item, index) {
          return action.idxCarrinho == index ? _objectSpread(_objectSpread({}, item), {}, {
            variacao: action.payload.variacao
          }) : item;
        }) : []
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_VALOR_ENTREGA"]:
      //            console.log('fetch-valor-entrega-payload: ', action.payload);
      //            console.log('fetch-valor-entrega-fretes: ', action.payload.resultados);
      //            console.log('fetch-valor-entrega-freteselecionadao: ', action.payload.resultados[0]);
      //            console.log('fetch-valor-entrega-freteselecionadao: cep: ', action.cep);
      return _objectSpread(_objectSpread({}, state), {}, {
        fretes: action.payload.resultados,
        freteSelecionado: action.payload.resultados[0],
        cep: action.cep
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_QTD_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: state.carrinho ? state.carrinho.map(function (item, index) {
          return action.idxCarrinho == index ? _objectSpread(_objectSpread({}, item), {}, {
            quantidade: Number(item.quantidade) + Number(action.change)
          }) : item;
        }) : []
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["REMOVE_PROD_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: state.carrinho.reduce(function (all, item, index) {
          return index !== action.idxCarrinho ? all.concat([item]) : all;
        }, [])
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_FRETE_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        freteSelecionado: action.freteSelecionado
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["CLEAN_FRETES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        freteSelecionado: null,
        fretes: null,
        cep: null
      });

    default:
      return state;
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvY2FycmluaG9SZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJjYXJyaW5obyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNFVF9DQVJSSU5ITyIsIkNMRUFOX0NBUlJJTkhPIiwiZnJldGVTZWxlY2lvbmFkbyIsImZyZXRlcyIsImNlcCIsIkZFVENIX1BST0RVVE9fQ0FSUklOSE8iLCJwYXlsb2FkIiwicHJvZHV0byIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImlkeENhcnJpbmhvIiwiRkVUQ0hfVkFSSUFDQU9fQ0FSUklOSE8iLCJ2YXJpYWNhbyIsIkZFVENIX1ZBTE9SX0VOVFJFR0EiLCJyZXN1bHRhZG9zIiwiVVBEQVRFX1FURF9DQVJUIiwicXVhbnRpZGFkZSIsIk51bWJlciIsImNoYW5nZSIsIlJFTU9WRV9QUk9EX0NBUlQiLCJyZWR1Y2UiLCJhbGwiLCJjb25jYXQiLCJVUERBVEVfRlJFVEVfQ0FSVCIsIkNMRUFOX0ZSRVRFUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBWUEsSUFBTUEsWUFBWSxHQUFHO0FBQUVDLFVBQVEsRUFBRTtBQUFaLENBQXJCO0FBRWUsMkVBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QkYsWUFBeUI7QUFBQSxNQUFYRyxNQUFXOztBQUM3QyxVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLQyxtREFBTDtBQUNJLDZDQUNPSCxLQURQO0FBRUlELGdCQUFRLEVBQUVFLE1BQU0sQ0FBQ0Y7QUFGckI7O0FBSUosU0FBS0sscURBQUw7QUFDSSw2Q0FDT0osS0FEUDtBQUVJRCxnQkFBUSxFQUFFLElBRmQ7QUFHSU0sd0JBQWdCLEVBQUUsSUFIdEI7QUFJSUMsY0FBTSxFQUFFLElBSlo7QUFLSUMsV0FBRyxFQUFFO0FBTFQ7O0FBT0osU0FBS0MsNkRBQUw7QUFDSSxVQUFHLENBQUNQLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlQyxPQUFuQixFQUE0QixPQUFPVixLQUFQO0FBQzVCLDZDQUNPQSxLQURQO0FBRUlELGdCQUFRLEVBQUVDLEtBQUssQ0FBQ0QsUUFBTixHQUFpQkMsS0FBSyxDQUFDRCxRQUFOLENBQWVZLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzNELGlCQUFTWixNQUFNLENBQUNhLFdBQVAsSUFBc0JELEtBQXhCLG1DQUNFRCxJQURGO0FBQ1FGLG1CQUFPLEVBQUVULE1BQU0sQ0FBQ1EsT0FBUCxDQUFlQztBQURoQyxlQUVIRSxJQUZKO0FBR0gsU0FKMEIsQ0FBakIsR0FJTDtBQU5UOztBQVFKLFNBQUtHLDhEQUFMO0FBQ0ksVUFBRyxDQUFDZCxNQUFNLENBQUNRLE9BQVAsQ0FBZU8sUUFBbkIsRUFBNkIsT0FBT2hCLEtBQVA7QUFDN0IsNkNBQ09BLEtBRFA7QUFFSUQsZ0JBQVEsRUFBRUMsS0FBSyxDQUFDRCxRQUFOLEdBQWlCQyxLQUFLLENBQUNELFFBQU4sQ0FBZVksR0FBZixDQUFtQixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDM0QsaUJBQVNaLE1BQU0sQ0FBQ2EsV0FBUCxJQUFzQkQsS0FBeEIsbUNBQ0VELElBREY7QUFDUUksb0JBQVEsRUFBRWYsTUFBTSxDQUFDUSxPQUFQLENBQWVPO0FBRGpDLGVBRUhKLElBRko7QUFHSCxTQUowQixDQUFqQixHQUlMO0FBTlQ7O0FBUUosU0FBS0ssMERBQUw7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNZLDZDQUNPakIsS0FEUDtBQUVJTSxjQUFNLEVBQUVMLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlUyxVQUYzQjtBQUdJYix3QkFBZ0IsRUFBRUosTUFBTSxDQUFDUSxPQUFQLENBQWVTLFVBQWYsQ0FBMEIsQ0FBMUIsQ0FIdEI7QUFJSVgsV0FBRyxFQUFFTixNQUFNLENBQUNNO0FBSmhCOztBQU1KLFNBQUtZLHNEQUFMO0FBQ0ksNkNBQ09uQixLQURQO0FBRUlELGdCQUFRLEVBQUVDLEtBQUssQ0FBQ0QsUUFBTixHQUFpQkMsS0FBSyxDQUFDRCxRQUFOLENBQWVZLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzNELGlCQUFTWixNQUFNLENBQUNhLFdBQVAsSUFBc0JELEtBQXhCLG1DQUVJRCxJQUZKO0FBR0NRLHNCQUFVLEVBQUVDLE1BQU0sQ0FBQ1QsSUFBSSxDQUFDUSxVQUFOLENBQU4sR0FBMEJDLE1BQU0sQ0FBQ3BCLE1BQU0sQ0FBQ3FCLE1BQVI7QUFIN0MsZUFLSFYsSUFMSjtBQU1ILFNBUDBCLENBQWpCLEdBT0w7QUFUVDs7QUFXSixTQUFLVyx1REFBTDtBQUNJLDZDQUNPdkIsS0FEUDtBQUVJRCxnQkFBUSxFQUFFQyxLQUFLLENBQUNELFFBQU4sQ0FBZXlCLE1BQWYsQ0FDRixVQUFDQyxHQUFELEVBQU1iLElBQU4sRUFBWUMsS0FBWjtBQUFBLGlCQUNBQSxLQUFLLEtBQUtaLE1BQU0sQ0FBQ2EsV0FBakIsR0FBK0JXLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLENBQUNkLElBQUQsQ0FBWCxDQUEvQixHQUFvRGEsR0FEcEQ7QUFBQSxTQURFLEVBRXVELEVBRnZEO0FBRmQ7O0FBT0osU0FBS0Usd0RBQUw7QUFDSSw2Q0FDTzNCLEtBRFA7QUFFSUssd0JBQWdCLEVBQUVKLE1BQU0sQ0FBQ0k7QUFGN0I7O0FBSUosU0FBS3VCLG1EQUFMO0FBQ0ksNkNBQ081QixLQURQO0FBRUlLLHdCQUFnQixFQUFFLElBRnRCO0FBR0lDLGNBQU0sRUFBRSxJQUhaO0FBSUlDLFdBQUcsRUFBRTtBQUpUOztBQU1KO0FBQ0ksYUFBT1AsS0FBUDtBQTlFUjtBQWdGSCxDQWpGRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjI1Mzk0OWQwZTZkMTQ3ZTE5ZDE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgU0VUX0NBUlJJTkhPLFxyXG4gICAgQ0xFQU5fQ0FSUklOSE8sXHJcbiAgICBGRVRDSF9QUk9EVVRPX0NBUlJJTkhPLFxyXG4gICAgRkVUQ0hfVkFSSUFDQU9fQ0FSUklOSE8sXHJcbiAgICBGRVRDSF9WQUxPUl9FTlRSRUdBLFxyXG4gICAgVVBEQVRFX1FURF9DQVJULFxyXG4gICAgVVBEQVRFX0ZSRVRFX0NBUlQsXHJcbiAgICBSRU1PVkVfUFJPRF9DQVJULFxyXG4gICAgQ0xFQU5fRlJFVEVTXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBjYXJyaW5obzogbnVsbCB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBTRVRfQ0FSUklOSE86XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnJpbmhvOiBhY3Rpb24uY2FycmluaG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ0xFQU5fQ0FSUklOSE86XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnJpbmhvOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZnJldGVTZWxlY2lvbmFkbzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGZyZXRlczogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNlcDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGRVRDSF9QUk9EVVRPX0NBUlJJTkhPOlxyXG4gICAgICAgICAgICBpZighYWN0aW9uLnBheWxvYWQucHJvZHV0bykgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJyaW5obzogc3RhdGUuY2FycmluaG8gPyBzdGF0ZS5jYXJyaW5oby5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggYWN0aW9uLmlkeENhcnJpbmhvID09IGluZGV4ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IC4uLml0ZW0sIHByb2R1dG86IGFjdGlvbi5wYXlsb2FkLnByb2R1dG8gfSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgIH0pIDogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfVkFSSUFDQU9fQ0FSUklOSE86XHJcbiAgICAgICAgICAgIGlmKCFhY3Rpb24ucGF5bG9hZC52YXJpYWNhbykgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJyaW5obzogc3RhdGUuY2FycmluaG8gPyBzdGF0ZS5jYXJyaW5oby5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggYWN0aW9uLmlkeENhcnJpbmhvID09IGluZGV4ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IC4uLml0ZW0sIHZhcmlhY2FvOiBhY3Rpb24ucGF5bG9hZC52YXJpYWNhbyB9IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgfSkgOiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGRVRDSF9WQUxPUl9FTlRSRUdBOlxyXG4vLyAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaC12YWxvci1lbnRyZWdhLXBheWxvYWQ6ICcsIGFjdGlvbi5wYXlsb2FkKTtcclxuLy8gICAgICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2gtdmFsb3ItZW50cmVnYS1mcmV0ZXM6ICcsIGFjdGlvbi5wYXlsb2FkLnJlc3VsdGFkb3MpO1xyXG4vLyAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaC12YWxvci1lbnRyZWdhLWZyZXRlc2VsZWNpb25hZGFvOiAnLCBhY3Rpb24ucGF5bG9hZC5yZXN1bHRhZG9zWzBdKTtcclxuLy8gICAgICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2gtdmFsb3ItZW50cmVnYS1mcmV0ZXNlbGVjaW9uYWRhbzogY2VwOiAnLCBhY3Rpb24uY2VwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZnJldGVzOiBhY3Rpb24ucGF5bG9hZC5yZXN1bHRhZG9zLFxyXG4gICAgICAgICAgICAgICAgZnJldGVTZWxlY2lvbmFkbzogYWN0aW9uLnBheWxvYWQucmVzdWx0YWRvc1swXSxcclxuICAgICAgICAgICAgICAgIGNlcDogYWN0aW9uLmNlcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVUERBVEVfUVREX0NBUlQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5obyA/IHN0YXRlLmNhcnJpbmhvLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCBhY3Rpb24uaWR4Q2FycmluaG8gPT0gaW5kZXggKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aWRhZGU6IE51bWJlcihpdGVtLnF1YW50aWRhZGUpICsgTnVtYmVyKGFjdGlvbi5jaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICB9KSA6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTU9WRV9QUk9EX0NBUlQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5oby5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhbGwsIGl0ZW0sIGluZGV4KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggIT09IGFjdGlvbi5pZHhDYXJyaW5obyA/IGFsbC5jb25jYXQoW2l0ZW1dKSA6IGFsbCwgW11cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFVQREFURV9GUkVURV9DQVJUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBmcmV0ZVNlbGVjaW9uYWRvOiBhY3Rpb24uZnJldGVTZWxlY2lvbmFkb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDTEVBTl9GUkVURVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGZyZXRlU2VsZWNpb25hZG86IG51bGwsXHJcbiAgICAgICAgICAgICAgICBmcmV0ZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjZXA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=