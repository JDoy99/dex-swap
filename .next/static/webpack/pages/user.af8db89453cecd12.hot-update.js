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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tokens */ \"./pages/tokens.js\");\n/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tokens__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction User(param) {\n    var user = param.user, balance = param.balance;\n    var changeToToken = function changeToToken(e) {\n        setToToken(e.target.value);\n        setValueExchanged(\"\");\n    };\n    var changeValue = function changeValue(e) {\n        setValue(e.target.value * 1e18);\n        setValueExchanged(\"\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE\"), fromToken = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48\"), toToken = ref1[0], setToToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}), tokenList = ref2[0], setTokenList = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"1000000000000000\"), value = ref3[0], setValue = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), valueExchanged = ref4[0], setValueExchanged = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1e18), valueExchangedDecimals = ref5[0], setValueExchangedDecimals = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), to = ref6[0], setTo = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), txData = ref7[0], setTxData = ref7[1];\n    console.log((_tokens__WEBPACK_IMPORTED_MODULE_5___default()));\n    var ref8 = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useSendTransaction)({\n        request: {\n            from: user.address,\n            to: String(to),\n            data: String(txData),\n            value: String(value)\n        }\n    }), data = ref8.data, isLoading = ref8.isLoading, isSuccess = ref8.isSuccess, sendTransaction = ref8.sendTransaction;\n    function get1inchSwap() {\n        return _get1inchSwap.apply(this, arguments);\n    }\n    function _get1inchSwap() {\n        _get1inchSwap = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tx;\n            return _Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"https://api.1inch.io/v4.0/1/swap?fromTokenAddress=\".concat(fromToken, \"&toTokenAddress=\").concat(toToken, \"&amount=\").concat(value, \"&fromAddress=\").concat(user.address, \"&slippage=1\"));\n                    case 2:\n                        tx = _ctx.sent;\n                        console.log(tx.data);\n                        setTo(tx.data.tx.to);\n                        setTxData(tx.data.tx.data);\n                        setValueExchangedDecimals(Number(\"1E\".concat(tx.data.toToken.decimals)));\n                        setValueExchanged(tx.data.toTokenAmount);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _get1inchSwap.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"User: \",\n                    user.address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Ethereum Balance: \",\n                    (balance.balance / 1e18).toFixed(4)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                    value: \"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE\",\n                    children: \"ETH\"\n                }, void 0, false, {\n                    fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                onChange: function(e) {\n                    return changeValue(e);\n                },\n                value: value / 1e18,\n                type: \"number\",\n                min: 0,\n                max: balance.balance / 1e18\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                name: \"toToken\",\n                value: toToken,\n                onChange: function(e) {\n                    return changeToToken(e);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2\",\n                        children: \"WETH\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48\",\n                        children: \"USDC\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"0xdac17f958d2ee523a2206206994597c13d831ec7\",\n                        children: \"USDT\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0\",\n                        children: \"MATIC\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"0x514910771af9ca656af840dff83e8264ecf986ca\",\n                        children: \"LINK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"0x6b3595068778dd592e39a122f4f5a5cf09c90fe2\",\n                        children: \"SUSHI\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9\",\n                        children: \"AAVE\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"0x111111111117dc0aa78b770fa6a738034120c302\",\n                        children: \"1INCH\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                value: !valueExchanged ? \"\" : (valueExchanged / valueExchangedDecimals).toFixed(4),\n                disabled: true\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: get1inchSwap,\n                children: \"Get Conversion\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                disabled: !valueExchanged,\n                onClick: sendTransaction,\n                children: \"Swap Tokens\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: \"Check Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 85,\n                columnNumber: 21\n            }, this),\n            isSuccess && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Transaction: \",\n                    JSON.stringify(data)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 86,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)({\n                        redirect: \"/signin\"\n                    });\n                },\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(User, \"tfdiiMRhk+0K7K0ejvcRcLyzdew=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useSendTransaction\n    ];\n});\n_c = User;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci5qcz9hYTNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgTW9yYWxpcyBmcm9tIFwibW9yYWxpc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVNlbmRUcmFuc2FjdGlvbiB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHRva2Vuc0pzb24gZnJvbSBcIi4vdG9rZW5zXCI7XG5cbmZ1bmN0aW9uIFVzZXIoeyB1c2VyLCBiYWxhbmNlIH0pIHtcbiAgY29uc3QgW2Zyb21Ub2tlbl0gPSB1c2VTdGF0ZShcIjB4RWVlZWVFZWVlRWVFZWVFZUVlRWVlRUVFZWVlZUVlZWVlZWVlRUVlRVwiKTtcbiAgY29uc3QgW3RvVG9rZW4sIHNldFRvVG9rZW5dID0gdXNlU3RhdGUoXCIweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDhcIik7XG4gIGNvbnN0IFt0b2tlbkxpc3QsIHNldFRva2VuTGlzdF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCIxMDAwMDAwMDAwMDAwMDAwXCIpO1xuICBjb25zdCBbdmFsdWVFeGNoYW5nZWQsIHNldFZhbHVlRXhjaGFuZ2VkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdmFsdWVFeGNoYW5nZWREZWNpbWFscywgc2V0VmFsdWVFeGNoYW5nZWREZWNpbWFsc10gPSB1c2VTdGF0ZSgxZTE4KTtcbiAgY29uc3QgW3RvLCBzZXRUb10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3R4RGF0YSwgc2V0VHhEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnNvbGUubG9nKHRva2Vuc0pzb24pO1xuXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MsIHNlbmRUcmFuc2FjdGlvbiB9ID0gdXNlU2VuZFRyYW5zYWN0aW9uKHtcbiAgICByZXF1ZXN0OiB7XG4gICAgICBmcm9tOiB1c2VyLmFkZHJlc3MsXG4gICAgICB0bzogU3RyaW5nKHRvKSxcbiAgICAgIGRhdGE6IFN0cmluZyh0eERhdGEpLFxuICAgICAgdmFsdWU6IFN0cmluZyh2YWx1ZSksXG4gICAgfSxcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2hhbmdlVG9Ub2tlbihlKSB7XG4gICAgc2V0VG9Ub2tlbihlLnRhcmdldC52YWx1ZSk7XG4gICAgc2V0VmFsdWVFeGNoYW5nZWQoXCJcIik7XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VWYWx1ZShlKSB7XG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUgKiAxZTE4KTtcbiAgICBzZXRWYWx1ZUV4Y2hhbmdlZChcIlwiKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldDFpbmNoU3dhcCgpIHtcbiAgICBjb25zdCB0eCA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGBodHRwczovL2FwaS4xaW5jaC5pby92NC4wLzEvc3dhcD9mcm9tVG9rZW5BZGRyZXNzPSR7ZnJvbVRva2VufSZ0b1Rva2VuQWRkcmVzcz0ke3RvVG9rZW59JmFtb3VudD0ke3ZhbHVlfSZmcm9tQWRkcmVzcz0ke3VzZXIuYWRkcmVzc30mc2xpcHBhZ2U9MWBcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKHR4LmRhdGEpO1xuICAgIHNldFRvKHR4LmRhdGEudHgudG8pO1xuICAgIHNldFR4RGF0YSh0eC5kYXRhLnR4LmRhdGEpO1xuICAgIHNldFZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMoTnVtYmVyKGAxRSR7dHguZGF0YS50b1Rva2VuLmRlY2ltYWxzfWApKTtcbiAgICBzZXRWYWx1ZUV4Y2hhbmdlZCh0eC5kYXRhLnRvVG9rZW5BbW91bnQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5Vc2VyOiB7dXNlci5hZGRyZXNzfTwvZGl2PlxuICAgICAgPGJyIC8+XG4gICAgICA8ZGl2PkV0aGVyZXVtIEJhbGFuY2U6IHsoYmFsYW5jZS5iYWxhbmNlIC8gMWUxOCkudG9GaXhlZCg0KX08L2Rpdj5cbiAgICAgIDxiciAvPlxuICAgICAgPHNlbGVjdD5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjB4RWVlZWVFZWVlRWVFZWVFZUVlRWVlRUVFZWVlZUVlZWVlZWVlRUVlRVwiPkVUSDwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8aW5wdXRcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VWYWx1ZShlKX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlIC8gMWUxOH1cbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIG1pbj17MH1cbiAgICAgICAgbWF4PXtiYWxhbmNlLmJhbGFuY2UgLyAxZTE4fVxuICAgICAgPjwvaW5wdXQ+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPHNlbGVjdCBuYW1lPVwidG9Ub2tlblwiIHZhbHVlPXt0b1Rva2VufSBvbkNoYW5nZT17KGUpID0+IGNoYW5nZVRvVG9rZW4oZSl9PlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyXCI+V0VUSDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMHhBMGI4Njk5MWM2MjE4YjM2YzFkMTlENGEyZTlFYjBjRTM2MDZlQjQ4XCI+VVNEQzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMHhkYWMxN2Y5NThkMmVlNTIzYTIyMDYyMDY5OTQ1OTdjMTNkODMxZWM3XCI+VVNEVDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMHg3ZDFhZmE3YjcxOGZiODkzZGIzMGEzYWJjMGNmYzYwOGFhY2ZlYmIwXCI+TUFUSUM8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjB4NTE0OTEwNzcxYWY5Y2E2NTZhZjg0MGRmZjgzZTgyNjRlY2Y5ODZjYVwiPkxJTks8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjB4NmIzNTk1MDY4Nzc4ZGQ1OTJlMzlhMTIyZjRmNWE1Y2YwOWM5MGZlMlwiPlNVU0hJPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIweDdmYzY2NTAwYzg0YTc2YWQ3ZTljOTM0MzdiZmM1YWMzM2UyZGRhZTlcIj5BQVZFPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIweDExMTExMTExMTExN2RjMGFhNzhiNzcwZmE2YTczODAzNDEyMGMzMDJcIj4xSU5DSDwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8aW5wdXQgdmFsdWU9eyF2YWx1ZUV4Y2hhbmdlZCA/IFwiXCIgOiAodmFsdWVFeGNoYW5nZWQgLyB2YWx1ZUV4Y2hhbmdlZERlY2ltYWxzKS50b0ZpeGVkKDQpfSBkaXNhYmxlZD17dHJ1ZX0+PC9pbnB1dD5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldDFpbmNoU3dhcH0+R2V0IENvbnZlcnNpb248L2J1dHRvbj5cbiAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyF2YWx1ZUV4Y2hhbmdlZH0gb25DbGljaz17c2VuZFRyYW5zYWN0aW9ufT5cbiAgICAgICAgU3dhcCBUb2tlbnNcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge2lzTG9hZGluZyAmJiA8ZGl2PkNoZWNrIFdhbGxldDwvZGl2Pn1cbiAgICAgIHtpc1N1Y2Nlc3MgJiYgPGRpdj5UcmFuc2FjdGlvbjoge0pTT04uc3RyaW5naWZ5KGRhdGEpfTwvZGl2Pn1cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoeyByZWRpcmVjdDogXCIvc2lnbmluXCIgfSl9PlNpZ24gb3V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcblxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246IFwiL3NpZ25pblwiLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgYXdhaXQgTW9yYWxpcy5zdGFydCh7IGFwaUtleTogcHJvY2Vzcy5lbnYuTU9SQUxJU19BUElfS0VZIH0pO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgTW9yYWxpcy5Fdm1BcGkuYWNjb3VudC5nZXROYXRpdmVCYWxhbmNlKHtcbiAgICBhZGRyZXNzOiBzZXNzaW9uLnVzZXIuYWRkcmVzcyxcbiAgICBjaGFpbjogMHgxLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHVzZXI6IHNlc3Npb24udXNlciwgYmFsYW5jZTogcmVzcG9uc2UucmF3IH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwibmFtZXMiOlsic2lnbk91dCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VTZW5kVHJhbnNhY3Rpb24iLCJ0b2tlbnNKc29uIiwiVXNlciIsInVzZXIiLCJiYWxhbmNlIiwiY2hhbmdlVG9Ub2tlbiIsImUiLCJzZXRUb1Rva2VuIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRWYWx1ZUV4Y2hhbmdlZCIsImNoYW5nZVZhbHVlIiwic2V0VmFsdWUiLCJmcm9tVG9rZW4iLCJ0b1Rva2VuIiwidG9rZW5MaXN0Iiwic2V0VG9rZW5MaXN0IiwidmFsdWVFeGNoYW5nZWQiLCJ2YWx1ZUV4Y2hhbmdlZERlY2ltYWxzIiwic2V0VmFsdWVFeGNoYW5nZWREZWNpbWFscyIsInRvIiwic2V0VG8iLCJ0eERhdGEiLCJzZXRUeERhdGEiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsImZyb20iLCJhZGRyZXNzIiwiU3RyaW5nIiwiZGF0YSIsImlzTG9hZGluZyIsImlzU3VjY2VzcyIsInNlbmRUcmFuc2FjdGlvbiIsImdldDFpbmNoU3dhcCIsInR4IiwiZ2V0IiwiTnVtYmVyIiwiZGVjaW1hbHMiLCJ0b1Rva2VuQW1vdW50IiwiZGl2IiwiYnIiLCJ0b0ZpeGVkIiwic2VsZWN0Iiwib3B0aW9uIiwiaW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiLCJtaW4iLCJtYXgiLCJuYW1lIiwiZGlzYWJsZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user.js\n"));

/***/ })

});