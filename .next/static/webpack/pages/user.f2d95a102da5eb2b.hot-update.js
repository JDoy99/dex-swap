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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction User(param) {\n    var user = param.user, balance = param.balance;\n    var changeToToken = function changeToToken(e) {\n        setToToken(e.target.value);\n        setValueExchanged(\"\");\n    };\n    var changeValue = function changeValue(e) {\n        setValue(e.target.value * 1e18);\n        setValueExchanged(\"\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE\"), fromToken = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2\"), toToken = ref1[0], setToToken = ref1[1]; //\n    // const [toToken, setToToken] = useState(\"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48\"); //USDC ERC20 Contract\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"1000000000000000\"), value = ref2[0], setValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), valueExchanged = ref3[0], setValueExchanged = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1e18), valueExchangedDecimals = ref4[0], setValueExchangedDecimals = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), to = ref5[0], setTo = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), txData = ref6[0], setTxData = ref6[1];\n    var ref7 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useSendTransaction)({\n        request: {\n            from: user.address,\n            to: String(to),\n            data: String(txData),\n            value: String(value)\n        }\n    }), data = ref7.data, isLoading = ref7.isLoading, isSuccess = ref7.isSuccess, sendTransaction = ref7.sendTransaction;\n    function get1inchSwap() {\n        return _get1inchSwap.apply(this, arguments);\n    }\n    function _get1inchSwap() {\n        _get1inchSwap = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tx;\n            return _Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"https://api.1inch.io/v4.0/1/swap?fromTokenAddress=\".concat(fromToken, \"&toTokenAddress=\").concat(toToken, \"&amount=\").concat(value, \"&fromAddress=\").concat(user.address, \"&slippage=1\"));\n                    case 2:\n                        tx = _ctx.sent;\n                        console.log(tx.data);\n                        setTo(tx.data.tx.to);\n                        setTxData(tx.data.tx.data);\n                        setValueExchangedDecimals(Number(\"1E\".concat(tx.data.toToken.decimals)));\n                        setValueExchanged(tx.data.toTokenAmount);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _get1inchSwap.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"User: \",\n                    user.address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Your Eth Balance: \",\n                    (balance.balance / 1e18).toFixed(3)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                    value: \"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE\",\n                    children: \"ETH\"\n                }, void 0, false, {\n                    fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                onChange: function(e) {\n                    return changeValue(e);\n                },\n                value: value / 1e18,\n                type: \"number\",\n                min: 0,\n                max: balance.balance / 1e18\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                name: \"toToken\",\n                value: toToken,\n                onChange: function(e) {\n                    return changeToToken(e);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2\",\n                        children: \"WETH\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48\",\n                        children: \"USDC\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                value: !valueExchanged ? \"\" : (valueExchanged / valueExchangedDecimals).toFixed(5),\n                disabled: true\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: get1inchSwap,\n                children: \"Get Conversion\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                disabled: !valueExchanged,\n                onClick: sendTransaction,\n                children: \"Swap Tokens\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: \"Check Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 75,\n                columnNumber: 21\n            }, this),\n            isSuccess && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Transaction: \",\n                    JSON.stringify(data)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 76,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)({\n                        redirect: \"/signin\"\n                    });\n                },\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(User, \"GfB0tTB2QUCfvpQoBs4v7OpTniw=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useSendTransaction\n    ];\n});\n_c = User;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDQyxTQUFTLENBQUMzQixJQUFJLENBQUM7Ozs7OztvQkFBTzswQkFDNUQsOERBQUNxQixJQUFFOzs7O29CQUFHOzBCQUNOLDhEQUFDQSxJQUFFOzs7O29CQUFHOzBCQUNOLDhEQUFDRyxRQUFNO2dCQUFDQyxPQUFPLEVBQUU7MkJBQU1yRCx3REFBTyxDQUFDO3dCQUFFd0QsUUFBUSxFQUFFLFNBQVM7cUJBQUUsQ0FBQztpQkFBQTswQkFBRSxVQUFROzs7OztvQkFBUzs7Ozs7O1lBQ3RFLENBQ047Q0FDSDtHQTNFUXBELElBQUk7O1FBVTZDRCxxREFBa0I7OztBQVZuRUMsS0FBQUEsSUFBSTs7QUFxR2IsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyLmpzP2FhM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBNb3JhbGlzIGZyb20gXCJtb3JhbGlzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlU2VuZFRyYW5zYWN0aW9uIH0gZnJvbSBcIndhZ21pXCI7XG5cbmZ1bmN0aW9uIFVzZXIoeyB1c2VyLCBiYWxhbmNlIH0pIHtcbiAgY29uc3QgW2Zyb21Ub2tlbl0gPSB1c2VTdGF0ZShcIjB4RWVlZWVFZWVlRWVFZWVFZUVlRWVlRUVFZWVlZUVlZWVlZWVlRUVlRVwiKTtcbiAgY29uc3QgW3RvVG9rZW4sIHNldFRvVG9rZW5dID0gdXNlU3RhdGUoXCIweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzJcIik7IC8vXG4gIC8vIGNvbnN0IFt0b1Rva2VuLCBzZXRUb1Rva2VuXSA9IHVzZVN0YXRlKFwiMHhBMGI4Njk5MWM2MjE4YjM2YzFkMTlENGEyZTlFYjBjRTM2MDZlQjQ4XCIpOyAvL1VTREMgRVJDMjAgQ29udHJhY3RcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIjEwMDAwMDAwMDAwMDAwMDBcIik7XG4gIGNvbnN0IFt2YWx1ZUV4Y2hhbmdlZCwgc2V0VmFsdWVFeGNoYW5nZWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt2YWx1ZUV4Y2hhbmdlZERlY2ltYWxzLCBzZXRWYWx1ZUV4Y2hhbmdlZERlY2ltYWxzXSA9IHVzZVN0YXRlKDFlMTgpO1xuICBjb25zdCBbdG8sIHNldFRvXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdHhEYXRhLCBzZXRUeERhdGFdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzU3VjY2Vzcywgc2VuZFRyYW5zYWN0aW9uIH0gPSB1c2VTZW5kVHJhbnNhY3Rpb24oe1xuICAgIHJlcXVlc3Q6IHtcbiAgICAgIGZyb206IHVzZXIuYWRkcmVzcyxcbiAgICAgIHRvOiBTdHJpbmcodG8pLFxuICAgICAgZGF0YTogU3RyaW5nKHR4RGF0YSksXG4gICAgICB2YWx1ZTogU3RyaW5nKHZhbHVlKSxcbiAgICB9LFxuICB9KTtcblxuICBmdW5jdGlvbiBjaGFuZ2VUb1Rva2VuKGUpIHtcbiAgICBzZXRUb1Rva2VuKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRWYWx1ZUV4Y2hhbmdlZChcIlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZVZhbHVlKGUpIHtcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSAqIDFlMTgpO1xuICAgIHNldFZhbHVlRXhjaGFuZ2VkKFwiXCIpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0MWluY2hTd2FwKCkge1xuICAgIGNvbnN0IHR4ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYGh0dHBzOi8vYXBpLjFpbmNoLmlvL3Y0LjAvMS9zd2FwP2Zyb21Ub2tlbkFkZHJlc3M9JHtmcm9tVG9rZW59JnRvVG9rZW5BZGRyZXNzPSR7dG9Ub2tlbn0mYW1vdW50PSR7dmFsdWV9JmZyb21BZGRyZXNzPSR7dXNlci5hZGRyZXNzfSZzbGlwcGFnZT0xYFxuICAgICAgLy8gYGh0dHBzOi8vYXBpLjFpbmNoLmlvL3Y0LjAvMS9zd2FwP2Zyb21Ub2tlbkFkZHJlc3M9MHhFZWVlZUVlZWVFZUVlZUVlRWVFZWVFRUVlZWVlRWVlZWVlZWVFRWVFJnRvVG9rZW5BZGRyZXNzPTB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMiZhbW91bnQ9MTAwMDAwMDAwMDAwMDAwMCZmcm9tQWRkcmVzcz0weDA3Y2Q0NzA2NzM1NzYwMDUwZjJmQzM5MmRiN0Q4MDJlNGUwMkZkRjEmc2xpcHBhZ2U9MWBcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKHR4LmRhdGEpO1xuICAgIHNldFRvKHR4LmRhdGEudHgudG8pO1xuICAgIHNldFR4RGF0YSh0eC5kYXRhLnR4LmRhdGEpO1xuICAgIHNldFZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMoTnVtYmVyKGAxRSR7dHguZGF0YS50b1Rva2VuLmRlY2ltYWxzfWApKTtcbiAgICBzZXRWYWx1ZUV4Y2hhbmdlZCh0eC5kYXRhLnRvVG9rZW5BbW91bnQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5Vc2VyOiB7dXNlci5hZGRyZXNzfTwvZGl2PlxuICAgICAgPGRpdj5Zb3VyIEV0aCBCYWxhbmNlOiB7KGJhbGFuY2UuYmFsYW5jZSAvIDFlMTgpLnRvRml4ZWQoMyl9PC9kaXY+XG4gICAgICA8c2VsZWN0PlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMHhFZWVlZUVlZWVFZUVlZUVlRWVFZWVFRUVlZWVlRWVlZWVlZWVFRWVFXCI+RVRIPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZVZhbHVlKGUpfVxuICAgICAgICB2YWx1ZT17dmFsdWUgLyAxZTE4fVxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgbWluPXswfVxuICAgICAgICBtYXg9e2JhbGFuY2UuYmFsYW5jZSAvIDFlMTh9XG4gICAgICA+PC9pbnB1dD5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8c2VsZWN0IG5hbWU9XCJ0b1Rva2VuXCIgdmFsdWU9e3RvVG9rZW59IG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlVG9Ub2tlbihlKX0+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzJcIj5XRVRIPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDhcIj5VU0RDPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxpbnB1dCB2YWx1ZT17IXZhbHVlRXhjaGFuZ2VkID8gXCJcIiA6ICh2YWx1ZUV4Y2hhbmdlZCAvIHZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMpLnRvRml4ZWQoNSl9IGRpc2FibGVkPXt0cnVlfT48L2lucHV0PlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17Z2V0MWluY2hTd2FwfT5HZXQgQ29udmVyc2lvbjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IXZhbHVlRXhjaGFuZ2VkfSBvbkNsaWNrPXtzZW5kVHJhbnNhY3Rpb259PlxuICAgICAgICBTd2FwIFRva2Vuc1xuICAgICAgPC9idXR0b24+XG4gICAgICB7aXNMb2FkaW5nICYmIDxkaXY+Q2hlY2sgV2FsbGV0PC9kaXY+fVxuICAgICAge2lzU3VjY2VzcyAmJiA8ZGl2PlRyYW5zYWN0aW9uOiB7SlNPTi5zdHJpbmdpZnkoZGF0YSl9PC9kaXY+fVxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCh7IHJlZGlyZWN0OiBcIi9zaWduaW5cIiB9KX0+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpO1xuXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICBkZXN0aW5hdGlvbjogXCIvc2lnbmluXCIsXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVkgfSk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBNb3JhbGlzLkV2bUFwaS5hY2NvdW50LmdldE5hdGl2ZUJhbGFuY2Uoe1xuICAgIGFkZHJlc3M6IHNlc3Npb24udXNlci5hZGRyZXNzLFxuICAgIGNoYWluOiAweDEsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgdXNlcjogc2Vzc2lvbi51c2VyLCBiYWxhbmNlOiByZXNwb25zZS5yYXcgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdLCJuYW1lcyI6WyJzaWduT3V0IiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVNlbmRUcmFuc2FjdGlvbiIsIlVzZXIiLCJ1c2VyIiwiYmFsYW5jZSIsImNoYW5nZVRvVG9rZW4iLCJlIiwic2V0VG9Ub2tlbiIsInRhcmdldCIsInZhbHVlIiwic2V0VmFsdWVFeGNoYW5nZWQiLCJjaGFuZ2VWYWx1ZSIsInNldFZhbHVlIiwiZnJvbVRva2VuIiwidG9Ub2tlbiIsInZhbHVlRXhjaGFuZ2VkIiwidmFsdWVFeGNoYW5nZWREZWNpbWFscyIsInNldFZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMiLCJ0byIsInNldFRvIiwidHhEYXRhIiwic2V0VHhEYXRhIiwicmVxdWVzdCIsImZyb20iLCJhZGRyZXNzIiwiU3RyaW5nIiwiZGF0YSIsImlzTG9hZGluZyIsImlzU3VjY2VzcyIsInNlbmRUcmFuc2FjdGlvbiIsImdldDFpbmNoU3dhcCIsInR4IiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsImRlY2ltYWxzIiwidG9Ub2tlbkFtb3VudCIsImRpdiIsInRvRml4ZWQiLCJzZWxlY3QiLCJvcHRpb24iLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsIm1pbiIsIm1heCIsImJyIiwibmFtZSIsImRpc2FibGVkIiwiYnV0dG9uIiwib25DbGljayIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWRpcmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user.js\n"));

/***/ })

});