"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user",{

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tokens */ \"./pages/tokens.json\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction User(param) {\n    var user = param.user, balance = param.balance;\n    var changeToToken = function changeToToken(e) {\n        setToToken(e.target.value);\n        setValueExchanged(\"\");\n    };\n    var changeValue = function changeValue(e) {\n        setValue(e.target.value * 1e18);\n        setValueExchanged(\"\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE\"), fromToken = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48\"), toToken = ref1[0], setToToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_tokens__WEBPACK_IMPORTED_MODULE_5__[0]), inputToken = ref2[0], setInputToken = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_tokens__WEBPACK_IMPORTED_MODULE_5__[1]), outputToken = ref3[0], setOutputToken = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"1000000000000000\"), value = ref4[0], setValue = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), valueExchanged = ref5[0], setValueExchanged = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1e18), valueExchangedDecimals = ref6[0], setValueExchangedDecimals = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), to = ref7[0], setTo = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), txData = ref8[0], setTxData = ref8[1];\n    var ref9 = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useSendTransaction)({\n        request: {\n            from: user.address,\n            to: String(to),\n            data: String(txData),\n            value: String(value)\n        }\n    }), data = ref9.data, isLoading = ref9.isLoading, isSuccess = ref9.isSuccess, sendTransaction = ref9.sendTransaction;\n    function get1inchSwap() {\n        return _get1inchSwap.apply(this, arguments);\n    }\n    function _get1inchSwap() {\n        _get1inchSwap = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tx;\n            return _Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"https://api.1inch.io/v4.0/1/swap?fromTokenAddress=\".concat(fromToken, \"&toTokenAddress=\").concat(toToken, \"&amount=\").concat(value, \"&fromAddress=\").concat(user.address, \"&slippage=1\"));\n                    case 2:\n                        tx = _ctx.sent;\n                        console.log(tx.data);\n                        setTo(tx.data.tx.to);\n                        setTxData(tx.data.tx.data);\n                        setValueExchangedDecimals(Number(\"1E\".concat(tx.data.toToken.decimals)));\n                        setValueExchanged(tx.data.toTokenAmount);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _get1inchSwap.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"User: \",\n                    user.address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Ethereum Balance: \",\n                    (balance.balance / 1e18).toFixed(4)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                    value: \"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE\",\n                    children: \"ETH\"\n                }, void 0, false, {\n                    fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                onChange: function(e) {\n                    return changeValue(e);\n                },\n                value: value / 1e18,\n                type: \"number\",\n                min: 0,\n                max: balance.balance / 1e18\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                name: _tokens__WEBPACK_IMPORTED_MODULE_5__.symbol,\n                value: _tokens__WEBPACK_IMPORTED_MODULE_5__.address,\n                onChange: function(e) {\n                    return changeToToken(e);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: _tokens__WEBPACK_IMPORTED_MODULE_5__[0].address,\n                        children: _tokens__WEBPACK_IMPORTED_MODULE_5__[0].symbol\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: _tokens__WEBPACK_IMPORTED_MODULE_5__[1].address,\n                        children: _tokens__WEBPACK_IMPORTED_MODULE_5__[1].symbol\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: _tokens__WEBPACK_IMPORTED_MODULE_5__[2].address,\n                        children: _tokens__WEBPACK_IMPORTED_MODULE_5__[2].symbol\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: _tokens__WEBPACK_IMPORTED_MODULE_5__[3].address,\n                        children: _tokens__WEBPACK_IMPORTED_MODULE_5__[3].symbol\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                value: !valueExchanged ? \"\" : (valueExchanged / valueExchangedDecimals).toFixed(4),\n                disabled: true\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: get1inchSwap,\n                children: \"Get Conversion\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                disabled: !valueExchanged,\n                onClick: sendTransaction,\n                children: \"Swap Tokens\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: \"Check Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 88,\n                columnNumber: 21\n            }, this),\n            isSuccess && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Transaction: \",\n                    JSON.stringify(data)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 89,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)({\n                        redirect: \"/signin\"\n                    });\n                },\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(User, \"RBiDkMZSuxqE5ck9ogWVl5Zkvmw=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useSendTransaction\n    ];\n});\n_c = User;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxFQUFFLEdBQUcsQ0FBQ0EsY0FBYyxHQUFHQyxzQkFBc0IsQ0FBQyxDQUFDd0IsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFBRVUsUUFBUSxFQUFFLElBQUk7Ozs7O29CQUFVOzBCQUNuSCw4REFBQ1gsSUFBRTs7OztvQkFBRzswQkFDTiw4REFBQ0EsSUFBRTs7OztvQkFBRzswQkFDTiw4REFBQ1ksUUFBTTtnQkFBQ0MsT0FBTyxFQUFFdEIsWUFBWTswQkFBRSxnQkFBYzs7Ozs7b0JBQVM7MEJBQ3RELDhEQUFDcUIsUUFBTTtnQkFBQ0QsUUFBUSxFQUFFLENBQUNuQyxjQUFjO2dCQUFFcUMsT0FBTyxFQUFFdkIsZUFBZTswQkFBRSxhQUU3RDs7Ozs7b0JBQVM7WUFDUkYsU0FBUyxrQkFBSSw4REFBQ1csS0FBRzswQkFBQyxjQUFZOzs7OztvQkFBTTtZQUNwQ1YsU0FBUyxrQkFBSSw4REFBQ1UsS0FBRzs7b0JBQUMsZUFBYTtvQkFBQ2UsSUFBSSxDQUFDQyxTQUFTLENBQUM1QixJQUFJLENBQUM7Ozs7OztvQkFBTzswQkFDNUQsOERBQUNhLElBQUU7Ozs7b0JBQUc7MEJBQ04sOERBQUNBLElBQUU7Ozs7b0JBQUc7MEJBQ04sOERBQUNZLFFBQU07Z0JBQUNDLE9BQU8sRUFBRTsyQkFBTTNELHdEQUFPLENBQUM7d0JBQUU4RCxRQUFRLEVBQUUsU0FBUztxQkFBRSxDQUFDO2lCQUFBOzBCQUFFLFVBQVE7Ozs7O29CQUFTOzs7Ozs7WUFDdEUsQ0FDTjtDQUNIO0dBdkZRekQsSUFBSTs7UUFXNkNGLHFEQUFrQjs7O0FBWG5FRSxLQUFBQSxJQUFJOztBQWlIYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIuanM/YWEzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IE1vcmFsaXMgZnJvbSBcIm1vcmFsaXNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTZW5kVHJhbnNhY3Rpb24gfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB0b2tlbnNKc29uIGZyb20gXCIuL3Rva2Vuc1wiO1xuXG5mdW5jdGlvbiBVc2VyKHsgdXNlciwgYmFsYW5jZSB9KSB7XG4gIGNvbnN0IFtmcm9tVG9rZW5dID0gdXNlU3RhdGUoXCIweEVlZWVlRWVlZUVlRWVlRWVFZUVlZUVFRWVlZWVFZWVlZWVlZUVFZUVcIik7XG4gIGNvbnN0IFt0b1Rva2VuLCBzZXRUb1Rva2VuXSA9IHVzZVN0YXRlKFwiMHhBMGI4Njk5MWM2MjE4YjM2YzFkMTlENGEyZTlFYjBjRTM2MDZlQjQ4XCIpO1xuICBjb25zdCBbaW5wdXRUb2tlbiwgc2V0SW5wdXRUb2tlbl0gPSB1c2VTdGF0ZSh0b2tlbnNKc29uWzBdKTtcbiAgY29uc3QgW291dHB1dFRva2VuLCBzZXRPdXRwdXRUb2tlbl0gPSB1c2VTdGF0ZSh0b2tlbnNKc29uWzFdKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIjEwMDAwMDAwMDAwMDAwMDBcIik7XG4gIGNvbnN0IFt2YWx1ZUV4Y2hhbmdlZCwgc2V0VmFsdWVFeGNoYW5nZWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt2YWx1ZUV4Y2hhbmdlZERlY2ltYWxzLCBzZXRWYWx1ZUV4Y2hhbmdlZERlY2ltYWxzXSA9IHVzZVN0YXRlKDFlMTgpO1xuICBjb25zdCBbdG8sIHNldFRvXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdHhEYXRhLCBzZXRUeERhdGFdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzU3VjY2Vzcywgc2VuZFRyYW5zYWN0aW9uIH0gPSB1c2VTZW5kVHJhbnNhY3Rpb24oe1xuICAgIHJlcXVlc3Q6IHtcbiAgICAgIGZyb206IHVzZXIuYWRkcmVzcyxcbiAgICAgIHRvOiBTdHJpbmcodG8pLFxuICAgICAgZGF0YTogU3RyaW5nKHR4RGF0YSksXG4gICAgICB2YWx1ZTogU3RyaW5nKHZhbHVlKSxcbiAgICB9LFxuICB9KTtcblxuICBmdW5jdGlvbiBjaGFuZ2VUb1Rva2VuKGUpIHtcbiAgICBzZXRUb1Rva2VuKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRWYWx1ZUV4Y2hhbmdlZChcIlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZVZhbHVlKGUpIHtcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSAqIDFlMTgpO1xuICAgIHNldFZhbHVlRXhjaGFuZ2VkKFwiXCIpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0MWluY2hTd2FwKCkge1xuICAgIGNvbnN0IHR4ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYGh0dHBzOi8vYXBpLjFpbmNoLmlvL3Y0LjAvMS9zd2FwP2Zyb21Ub2tlbkFkZHJlc3M9JHtmcm9tVG9rZW59JnRvVG9rZW5BZGRyZXNzPSR7dG9Ub2tlbn0mYW1vdW50PSR7dmFsdWV9JmZyb21BZGRyZXNzPSR7dXNlci5hZGRyZXNzfSZzbGlwcGFnZT0xYFxuICAgICk7XG4gICAgY29uc29sZS5sb2codHguZGF0YSk7XG4gICAgc2V0VG8odHguZGF0YS50eC50byk7XG4gICAgc2V0VHhEYXRhKHR4LmRhdGEudHguZGF0YSk7XG4gICAgc2V0VmFsdWVFeGNoYW5nZWREZWNpbWFscyhOdW1iZXIoYDFFJHt0eC5kYXRhLnRvVG9rZW4uZGVjaW1hbHN9YCkpO1xuICAgIHNldFZhbHVlRXhjaGFuZ2VkKHR4LmRhdGEudG9Ub2tlbkFtb3VudCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlVzZXI6IHt1c2VyLmFkZHJlc3N9PC9kaXY+XG4gICAgICA8YnIgLz5cbiAgICAgIDxkaXY+RXRoZXJldW0gQmFsYW5jZTogeyhiYWxhbmNlLmJhbGFuY2UgLyAxZTE4KS50b0ZpeGVkKDQpfTwvZGl2PlxuICAgICAgPGJyIC8+XG4gICAgICA8c2VsZWN0PlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMHhFZWVlZUVlZWVFZUVlZUVlRWVFZWVFRUVlZWVlRWVlZWVlZWVFRWVFXCI+RVRIPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZVZhbHVlKGUpfVxuICAgICAgICB2YWx1ZT17dmFsdWUgLyAxZTE4fVxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgbWluPXswfVxuICAgICAgICBtYXg9e2JhbGFuY2UuYmFsYW5jZSAvIDFlMTh9XG4gICAgICA+PC9pbnB1dD5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8c2VsZWN0IG5hbWU9e3Rva2Vuc0pzb24uc3ltYm9sfSB2YWx1ZT17dG9rZW5zSnNvbi5hZGRyZXNzfSBvbkNoYW5nZT17KGUpID0+IGNoYW5nZVRvVG9rZW4oZSl9PlxuICAgICAgICA8b3B0aW9uIHZhbHVlPXt0b2tlbnNKc29uWzBdLmFkZHJlc3N9Pnt0b2tlbnNKc29uWzBdLnN5bWJvbH08L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT17dG9rZW5zSnNvblsxXS5hZGRyZXNzfT57dG9rZW5zSnNvblsxXS5zeW1ib2x9PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9e3Rva2Vuc0pzb25bMl0uYWRkcmVzc30+e3Rva2Vuc0pzb25bMl0uc3ltYm9sfTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPXt0b2tlbnNKc29uWzNdLmFkZHJlc3N9Pnt0b2tlbnNKc29uWzNdLnN5bWJvbH08L29wdGlvbj5cbiAgICAgICAgey8qIDxvcHRpb24gdmFsdWU9XCIweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzJcIj5XRVRIPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDhcIj5VU0RDPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIweGRhYzE3Zjk1OGQyZWU1MjNhMjIwNjIwNjk5NDU5N2MxM2Q4MzFlYzdcIj5VU0RUPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIweDdkMWFmYTdiNzE4ZmI4OTNkYjMwYTNhYmMwY2ZjNjA4YWFjZmViYjBcIj5NQVRJQzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMHg1MTQ5MTA3NzFhZjljYTY1NmFmODQwZGZmODNlODI2NGVjZjk4NmNhXCI+TElOSzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMHg2YjM1OTUwNjg3NzhkZDU5MmUzOWExMjJmNGY1YTVjZjA5YzkwZmUyXCI+U1VTSEk8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjB4N2ZjNjY1MDBjODRhNzZhZDdlOWM5MzQzN2JmYzVhYzMzZTJkZGFlOVwiPkFBVkU8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjB4MTExMTExMTExMTE3ZGMwYWE3OGI3NzBmYTZhNzM4MDM0MTIwYzMwMlwiPjFJTkNIPC9vcHRpb24+ICovfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8aW5wdXQgdmFsdWU9eyF2YWx1ZUV4Y2hhbmdlZCA/IFwiXCIgOiAodmFsdWVFeGNoYW5nZWQgLyB2YWx1ZUV4Y2hhbmdlZERlY2ltYWxzKS50b0ZpeGVkKDQpfSBkaXNhYmxlZD17dHJ1ZX0+PC9pbnB1dD5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldDFpbmNoU3dhcH0+R2V0IENvbnZlcnNpb248L2J1dHRvbj5cbiAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyF2YWx1ZUV4Y2hhbmdlZH0gb25DbGljaz17c2VuZFRyYW5zYWN0aW9ufT5cbiAgICAgICAgU3dhcCBUb2tlbnNcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge2lzTG9hZGluZyAmJiA8ZGl2PkNoZWNrIFdhbGxldDwvZGl2Pn1cbiAgICAgIHtpc1N1Y2Nlc3MgJiYgPGRpdj5UcmFuc2FjdGlvbjoge0pTT04uc3RyaW5naWZ5KGRhdGEpfTwvZGl2Pn1cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoeyByZWRpcmVjdDogXCIvc2lnbmluXCIgfSl9PlNpZ24gb3V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcblxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246IFwiL3NpZ25pblwiLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgYXdhaXQgTW9yYWxpcy5zdGFydCh7IGFwaUtleTogcHJvY2Vzcy5lbnYuTU9SQUxJU19BUElfS0VZIH0pO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgTW9yYWxpcy5Fdm1BcGkuYWNjb3VudC5nZXROYXRpdmVCYWxhbmNlKHtcbiAgICBhZGRyZXNzOiBzZXNzaW9uLnVzZXIuYWRkcmVzcyxcbiAgICBjaGFpbjogMHgxLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHVzZXI6IHNlc3Npb24udXNlciwgYmFsYW5jZTogcmVzcG9uc2UucmF3IH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwibmFtZXMiOlsic2lnbk91dCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VTZW5kVHJhbnNhY3Rpb24iLCJ0b2tlbnNKc29uIiwiVXNlciIsInVzZXIiLCJiYWxhbmNlIiwiY2hhbmdlVG9Ub2tlbiIsImUiLCJzZXRUb1Rva2VuIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRWYWx1ZUV4Y2hhbmdlZCIsImNoYW5nZVZhbHVlIiwic2V0VmFsdWUiLCJmcm9tVG9rZW4iLCJ0b1Rva2VuIiwiaW5wdXRUb2tlbiIsInNldElucHV0VG9rZW4iLCJvdXRwdXRUb2tlbiIsInNldE91dHB1dFRva2VuIiwidmFsdWVFeGNoYW5nZWQiLCJ2YWx1ZUV4Y2hhbmdlZERlY2ltYWxzIiwic2V0VmFsdWVFeGNoYW5nZWREZWNpbWFscyIsInRvIiwic2V0VG8iLCJ0eERhdGEiLCJzZXRUeERhdGEiLCJyZXF1ZXN0IiwiZnJvbSIsImFkZHJlc3MiLCJTdHJpbmciLCJkYXRhIiwiaXNMb2FkaW5nIiwiaXNTdWNjZXNzIiwic2VuZFRyYW5zYWN0aW9uIiwiZ2V0MWluY2hTd2FwIiwidHgiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiTnVtYmVyIiwiZGVjaW1hbHMiLCJ0b1Rva2VuQW1vdW50IiwiZGl2IiwiYnIiLCJ0b0ZpeGVkIiwic2VsZWN0Iiwib3B0aW9uIiwiaW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiLCJtaW4iLCJtYXgiLCJuYW1lIiwic3ltYm9sIiwiZGlzYWJsZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user.js\n"));

/***/ })

});