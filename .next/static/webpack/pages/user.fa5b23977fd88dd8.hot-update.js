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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction User(param) {\n    var user = param.user, balance = param.balance;\n    var changeToToken = function changeToToken(e) {\n        setToToken(e.target.value);\n        setValueExchanged(\"\");\n    };\n    var changeValue = function changeValue(e) {\n        setValue(e.target.value * 1e18);\n        setValueExchanged(\"\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE\"), fromToken = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2\"), toToken = ref1[0], setToToken = ref1[1]; //\n    // const [toToken, setToToken] = useState(\"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48\"); //USDC ERC20 Contract\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"10000000000000\"), value = ref2[0], setValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), valueExchanged = ref3[0], setValueExchanged = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1e18), valueExchangedDecimals = ref4[0], setValueExchangedDecimals = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), to = ref5[0], setTo = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), txData = ref6[0], setTxData = ref6[1];\n    var ref7 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useSendTransaction)({\n        request: {\n            from: user.address,\n            to: String(to),\n            data: String(txData),\n            value: String(value)\n        }\n    }), data = ref7.data, isLoading = ref7.isLoading, isSuccess = ref7.isSuccess, sendTransaction = ref7.sendTransaction;\n    function get1inchSwap() {\n        return _get1inchSwap.apply(this, arguments);\n    }\n    function _get1inchSwap() {\n        _get1inchSwap = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tx;\n            return _Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"https://api.1inch.io/v4.0/1/swap?fromTokenAddress=\".concat(fromToken, \"&toTokenAddress=\").concat(toToken, \"&amount=\").concat(value, \"&fromAddress=\").concat(user.address, \"&slippage=1\"));\n                    case 2:\n                        tx = _ctx.sent;\n                        console.log(tx.data);\n                        setTo(tx.data.tx.to);\n                        setTxData(tx.data.tx.data);\n                        setValueExchangedDecimals(Number(\"1E\".concat(tx.data.toToken.decimals)));\n                        setValueExchanged(tx.data.toTokenAmount);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _get1inchSwap.apply(this, arguments);\n    }\n    // console.log(fromToken);\n    // console.log(toToken);\n    // console.log(value);\n    // console.log(balance);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"User: \",\n                    user.address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Your Eth Balance: \",\n                    (balance.balance / 1e18).toFixed(3)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                    value: \"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE\",\n                    children: \"ETH\"\n                }, void 0, false, {\n                    fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                onChange: function(e) {\n                    return changeValue(e);\n                },\n                value: value / 1e18,\n                type: \"number\",\n                min: 0,\n                max: balance.balance / 1e18\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                name: \"toToken\",\n                value: toToken,\n                onChange: function(e) {\n                    return changeToToken(e);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                    value: \"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2\",\n                    children: \"WETH\"\n                }, void 0, false, {\n                    fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                value: !valueExchanged ? \"\" : (valueExchanged / valueExchangedDecimals).toFixed(5),\n                disabled: true\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: get1inchSwap,\n                children: \"Get Conversion\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                disabled: !valueExchanged,\n                onClick: sendTransaction,\n                children: \"Swap Tokens\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: \"Check Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 80,\n                columnNumber: 21\n            }, this),\n            isSuccess && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Transaction: \",\n                    JSON.stringify(data)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 81,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)({\n                        redirect: \"/signin\"\n                    });\n                },\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(User, \"j6duPlTQn0d3hzeqRlHfvD/QzIo=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useSendTransaction\n    ];\n});\n_c = User;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzNCLElBQUksQ0FBQzs7Ozs7O29CQUFPOzBCQUM1RCw4REFBQ3FCLElBQUU7Ozs7b0JBQUc7MEJBQ04sOERBQUNBLElBQUU7Ozs7b0JBQUc7MEJBQ04sOERBQUNHLFFBQU07Z0JBQUNDLE9BQU8sRUFBRTsyQkFBTXJELHdEQUFPLENBQUM7d0JBQUV3RCxRQUFRLEVBQUUsU0FBUztxQkFBRSxDQUFDO2lCQUFBOzBCQUFFLFVBQVE7Ozs7O29CQUFTOzs7Ozs7WUFDdEUsQ0FDTjtDQUNIO0dBaEZRcEQsSUFBSTs7UUFVNkNELHFEQUFrQjs7O0FBVm5FQyxLQUFBQSxJQUFJOztBQTBHYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIuanM/YWEzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IE1vcmFsaXMgZnJvbSBcIm1vcmFsaXNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTZW5kVHJhbnNhY3Rpb24gfSBmcm9tIFwid2FnbWlcIjtcblxuZnVuY3Rpb24gVXNlcih7IHVzZXIsIGJhbGFuY2UgfSkge1xuICBjb25zdCBbZnJvbVRva2VuXSA9IHVzZVN0YXRlKFwiMHhFZWVlZUVlZWVFZUVlZUVlRWVFZWVFRUVlZWVlRWVlZWVlZWVFRWVFXCIpO1xuICBjb25zdCBbdG9Ub2tlbiwgc2V0VG9Ub2tlbl0gPSB1c2VTdGF0ZShcIjB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMlwiKTsgLy9cbiAgLy8gY29uc3QgW3RvVG9rZW4sIHNldFRvVG9rZW5dID0gdXNlU3RhdGUoXCIweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDhcIik7IC8vVVNEQyBFUkMyMCBDb250cmFjdFxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiMTAwMDAwMDAwMDAwMDBcIik7XG4gIGNvbnN0IFt2YWx1ZUV4Y2hhbmdlZCwgc2V0VmFsdWVFeGNoYW5nZWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt2YWx1ZUV4Y2hhbmdlZERlY2ltYWxzLCBzZXRWYWx1ZUV4Y2hhbmdlZERlY2ltYWxzXSA9IHVzZVN0YXRlKDFlMTgpO1xuICBjb25zdCBbdG8sIHNldFRvXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdHhEYXRhLCBzZXRUeERhdGFdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzU3VjY2Vzcywgc2VuZFRyYW5zYWN0aW9uIH0gPSB1c2VTZW5kVHJhbnNhY3Rpb24oe1xuICAgIHJlcXVlc3Q6IHtcbiAgICAgIGZyb206IHVzZXIuYWRkcmVzcyxcbiAgICAgIHRvOiBTdHJpbmcodG8pLFxuICAgICAgZGF0YTogU3RyaW5nKHR4RGF0YSksXG4gICAgICB2YWx1ZTogU3RyaW5nKHZhbHVlKSxcbiAgICB9LFxuICB9KTtcblxuICBmdW5jdGlvbiBjaGFuZ2VUb1Rva2VuKGUpIHtcbiAgICBzZXRUb1Rva2VuKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRWYWx1ZUV4Y2hhbmdlZChcIlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZVZhbHVlKGUpIHtcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSAqIDFlMTgpO1xuICAgIHNldFZhbHVlRXhjaGFuZ2VkKFwiXCIpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0MWluY2hTd2FwKCkge1xuICAgIGNvbnN0IHR4ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYGh0dHBzOi8vYXBpLjFpbmNoLmlvL3Y0LjAvMS9zd2FwP2Zyb21Ub2tlbkFkZHJlc3M9JHtmcm9tVG9rZW59JnRvVG9rZW5BZGRyZXNzPSR7dG9Ub2tlbn0mYW1vdW50PSR7dmFsdWV9JmZyb21BZGRyZXNzPSR7dXNlci5hZGRyZXNzfSZzbGlwcGFnZT0xYFxuICAgICAgLy8gYGh0dHBzOi8vYXBpLjFpbmNoLmlvL3Y0LjAvMS9zd2FwP2Zyb21Ub2tlbkFkZHJlc3M9MHhFZWVlZUVlZWVFZUVlZUVlRWVFZWVFRUVlZWVlRWVlZWVlZWVFRWVFJnRvVG9rZW5BZGRyZXNzPTB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMiZhbW91bnQ9MTAwMDAwMDAwMDAwMDAwMCZmcm9tQWRkcmVzcz0weDA3Y2Q0NzA2NzM1NzYwMDUwZjJmQzM5MmRiN0Q4MDJlNGUwMkZkRjEmc2xpcHBhZ2U9MWBcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKHR4LmRhdGEpO1xuICAgIHNldFRvKHR4LmRhdGEudHgudG8pO1xuICAgIHNldFR4RGF0YSh0eC5kYXRhLnR4LmRhdGEpO1xuICAgIHNldFZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMoTnVtYmVyKGAxRSR7dHguZGF0YS50b1Rva2VuLmRlY2ltYWxzfWApKTtcbiAgICBzZXRWYWx1ZUV4Y2hhbmdlZCh0eC5kYXRhLnRvVG9rZW5BbW91bnQpO1xuICB9XG5cbiAgLy8gY29uc29sZS5sb2coZnJvbVRva2VuKTtcbiAgLy8gY29uc29sZS5sb2codG9Ub2tlbik7XG4gIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgLy8gY29uc29sZS5sb2coYmFsYW5jZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5Vc2VyOiB7dXNlci5hZGRyZXNzfTwvZGl2PlxuICAgICAgPGRpdj5Zb3VyIEV0aCBCYWxhbmNlOiB7KGJhbGFuY2UuYmFsYW5jZSAvIDFlMTgpLnRvRml4ZWQoMyl9PC9kaXY+XG4gICAgICA8c2VsZWN0PlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMHhFZWVlZUVlZWVFZUVlZUVlRWVFZWVFRUVlZWVlRWVlZWVlZWVFRWVFXCI+RVRIPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZVZhbHVlKGUpfVxuICAgICAgICB2YWx1ZT17dmFsdWUgLyAxZTE4fVxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgbWluPXswfVxuICAgICAgICBtYXg9e2JhbGFuY2UuYmFsYW5jZSAvIDFlMTh9XG4gICAgICA+PC9pbnB1dD5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8c2VsZWN0IG5hbWU9XCJ0b1Rva2VuXCIgdmFsdWU9e3RvVG9rZW59IG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlVG9Ub2tlbihlKX0+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzJcIj5XRVRIPC9vcHRpb24+XG4gICAgICAgIHsvKiA8b3B0aW9uIHZhbHVlPVwiMHhBMGI4Njk5MWM2MjE4YjM2YzFkMTlENGEyZTlFYjBjRTM2MDZlQjQ4XCI+VVNEQzwvb3B0aW9uPiAqL31cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGlucHV0IHZhbHVlPXshdmFsdWVFeGNoYW5nZWQgPyBcIlwiIDogKHZhbHVlRXhjaGFuZ2VkIC8gdmFsdWVFeGNoYW5nZWREZWNpbWFscykudG9GaXhlZCg1KX0gZGlzYWJsZWQ9e3RydWV9PjwvaW5wdXQ+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXQxaW5jaFN3YXB9PkdldCBDb252ZXJzaW9uPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXshdmFsdWVFeGNoYW5nZWR9IG9uQ2xpY2s9e3NlbmRUcmFuc2FjdGlvbn0+XG4gICAgICAgIFN3YXAgVG9rZW5zXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtpc0xvYWRpbmcgJiYgPGRpdj5DaGVjayBXYWxsZXQ8L2Rpdj59XG4gICAgICB7aXNTdWNjZXNzICYmIDxkaXY+VHJhbnNhY3Rpb246IHtKU09OLnN0cmluZ2lmeShkYXRhKX08L2Rpdj59XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KHsgcmVkaXJlY3Q6IFwiL3NpZ25pblwiIH0pfT5TaWduIG91dDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dCk7XG5cbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9zaWduaW5cIixcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGF3YWl0IE1vcmFsaXMuc3RhcnQoeyBhcGlLZXk6IHByb2Nlc3MuZW52Lk1PUkFMSVNfQVBJX0tFWSB9KTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IE1vcmFsaXMuRXZtQXBpLmFjY291bnQuZ2V0TmF0aXZlQmFsYW5jZSh7XG4gICAgYWRkcmVzczogc2Vzc2lvbi51c2VyLmFkZHJlc3MsXG4gICAgY2hhaW46IDB4MSxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyB1c2VyOiBzZXNzaW9uLnVzZXIsIGJhbGFuY2U6IHJlc3BvbnNlLnJhdyB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl0sIm5hbWVzIjpbInNpZ25PdXQiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlU2VuZFRyYW5zYWN0aW9uIiwiVXNlciIsInVzZXIiLCJiYWxhbmNlIiwiY2hhbmdlVG9Ub2tlbiIsImUiLCJzZXRUb1Rva2VuIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRWYWx1ZUV4Y2hhbmdlZCIsImNoYW5nZVZhbHVlIiwic2V0VmFsdWUiLCJmcm9tVG9rZW4iLCJ0b1Rva2VuIiwidmFsdWVFeGNoYW5nZWQiLCJ2YWx1ZUV4Y2hhbmdlZERlY2ltYWxzIiwic2V0VmFsdWVFeGNoYW5nZWREZWNpbWFscyIsInRvIiwic2V0VG8iLCJ0eERhdGEiLCJzZXRUeERhdGEiLCJyZXF1ZXN0IiwiZnJvbSIsImFkZHJlc3MiLCJTdHJpbmciLCJkYXRhIiwiaXNMb2FkaW5nIiwiaXNTdWNjZXNzIiwic2VuZFRyYW5zYWN0aW9uIiwiZ2V0MWluY2hTd2FwIiwidHgiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiTnVtYmVyIiwiZGVjaW1hbHMiLCJ0b1Rva2VuQW1vdW50IiwiZGl2IiwidG9GaXhlZCIsInNlbGVjdCIsIm9wdGlvbiIsImlucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwibWluIiwibWF4IiwiYnIiLCJuYW1lIiwiZGlzYWJsZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user.js\n"));

/***/ })

});