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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction User(param) {\n    var user = param.user, balance = param.balance;\n    var changeToToken = function changeToToken(e) {\n        setToToken(e.target.value);\n        setValueExchanged(\"\");\n    };\n    var changeValue = function changeValue(e) {\n        setValue(e.target.value * 1e18);\n        setValueExchanged(\"\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE\"), fromToken = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48\"), toToken = ref1[0], setToToken = ref1[1]; //USDC ERC20 Contract\n    // const [toToken, setToToken] = useState(\"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2\"); // wETH Contract\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"1000000000000000\"), value = ref2[0], setValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), valueExchanged = ref3[0], setValueExchanged = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1e18), valueExchangedDecimals = ref4[0], setValueExchangedDecimals = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), to = ref5[0], setTo = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), txData = ref6[0], setTxData = ref6[1];\n    var ref7 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useSendTransaction)({\n        request: {\n            from: user.address,\n            to: String(to),\n            data: String(txData),\n            value: String(value)\n        }\n    }), data = ref7.data, isLoading = ref7.isLoading, isSuccess = ref7.isSuccess, sendTransaction = ref7.sendTransaction;\n    function get1inchSwap() {\n        return _get1inchSwap.apply(this, arguments);\n    }\n    function _get1inchSwap() {\n        _get1inchSwap = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tx;\n            return _Users_jackdoy_projects_1inch_token_swap_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"https://api.1inch.io/v4.0/1/swap?fromTokenAddress=\".concat(fromToken, \"&toTokenAddress=\").concat(toToken, \"&amount=\").concat(value, \"&fromAddress=\").concat(user.address, \"&slippage=1\"));\n                    case 2:\n                        tx = _ctx.sent;\n                        console.log(tx.data);\n                        setTo(tx.data.tx.to);\n                        setTxData(tx.data.tx.data);\n                        setValueExchangedDecimals(Number(\"1E\".concat(tx.data.toToken.decimals)));\n                        setValueExchanged(tx.data.toTokenAmount);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _get1inchSwap.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"User: \",\n                    user.address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Your Eth Balance: \",\n                    (balance.balance / 1e18).toFixed(4)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                    value: \"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE\",\n                    children: \"ETH\"\n                }, void 0, false, {\n                    fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                onChange: function(e) {\n                    return changeValue(e);\n                },\n                value: value / 1e18,\n                type: \"number\",\n                min: 0,\n                max: balance.balance / 1e18\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                name: \"toToken\",\n                value: toToken,\n                onChange: function(e) {\n                    return changeToToken(e);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2\",\n                        children: \"WETH\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48\",\n                        children: \"USDC\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984\",\n                        style: \"background-image:url(./tokenimg/uni.png)\",\n                        children: \"UNI\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                value: !valueExchanged ? \"\" : (valueExchanged / valueExchangedDecimals).toFixed(4),\n                disabled: true\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: get1inchSwap,\n                children: \"Get Conversion\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                disabled: !valueExchanged,\n                onClick: sendTransaction,\n                children: \"Swap Tokens\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: \"Check Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 77,\n                columnNumber: 21\n            }, this),\n            isSuccess && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Transaction: \",\n                    JSON.stringify(data)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 78,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)({\n                        redirect: \"/signin\"\n                    });\n                },\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jackdoy/projects/1inch-token-swap/SimpleSwap/pages/user.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(User, \"xBHapqP44YMRO+0iWFE9dKRGIr0=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useSendTransaction\n    ];\n});\n_c = User;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtCQUFJLDhEQUFDVyxLQUFHOzBCQUFDLGNBQVk7Ozs7O29CQUFNO1lBQ3BDVixTQUFTLGtCQUFJLDhEQUFDVSxLQUFHOztvQkFBQyxlQUFhO29CQUFDZSxJQUFJLENBQUNDLFNBQVMsQ0FBQzVCLElBQUksQ0FBQzs7Ozs7O29CQUFPOzBCQUM1RCw4REFBQ3FCLElBQUU7Ozs7b0JBQUc7MEJBQ04sOERBQUNBLElBQUU7Ozs7b0JBQUc7MEJBQ04sOERBQUNJLFFBQU07Z0JBQUNDLE9BQU8sRUFBRTsyQkFBTXRELHdEQUFPLENBQUM7d0JBQUV5RCxRQUFRLEVBQUUsU0FBUztxQkFBRSxDQUFDO2lCQUFBOzBCQUFFLFVBQVE7Ozs7O29CQUFTOzs7Ozs7WUFDdEUsQ0FDTjtDQUNIO0dBN0VRckQsSUFBSTs7UUFVNkNELHFEQUFrQjs7O0FBVm5FQyxLQUFBQSxJQUFJOztBQXVHYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIuanM/YWEzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IE1vcmFsaXMgZnJvbSBcIm1vcmFsaXNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTZW5kVHJhbnNhY3Rpb24gfSBmcm9tIFwid2FnbWlcIjtcblxuZnVuY3Rpb24gVXNlcih7IHVzZXIsIGJhbGFuY2UgfSkge1xuICBjb25zdCBbZnJvbVRva2VuXSA9IHVzZVN0YXRlKFwiMHhFZWVlZUVlZWVFZUVlZUVlRWVFZWVFRUVlZWVlRWVlZWVlZWVFRWVFXCIpO1xuICBjb25zdCBbdG9Ub2tlbiwgc2V0VG9Ub2tlbl0gPSB1c2VTdGF0ZShcIjB4QTBiODY5OTFjNjIxOGIzNmMxZDE5RDRhMmU5RWIwY0UzNjA2ZUI0OFwiKTsgLy9VU0RDIEVSQzIwIENvbnRyYWN0XG4gIC8vIGNvbnN0IFt0b1Rva2VuLCBzZXRUb1Rva2VuXSA9IHVzZVN0YXRlKFwiMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyXCIpOyAvLyB3RVRIIENvbnRyYWN0XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCIxMDAwMDAwMDAwMDAwMDAwXCIpO1xuICBjb25zdCBbdmFsdWVFeGNoYW5nZWQsIHNldFZhbHVlRXhjaGFuZ2VkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdmFsdWVFeGNoYW5nZWREZWNpbWFscywgc2V0VmFsdWVFeGNoYW5nZWREZWNpbWFsc10gPSB1c2VTdGF0ZSgxZTE4KTtcbiAgY29uc3QgW3RvLCBzZXRUb10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3R4RGF0YSwgc2V0VHhEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MsIHNlbmRUcmFuc2FjdGlvbiB9ID0gdXNlU2VuZFRyYW5zYWN0aW9uKHtcbiAgICByZXF1ZXN0OiB7XG4gICAgICBmcm9tOiB1c2VyLmFkZHJlc3MsXG4gICAgICB0bzogU3RyaW5nKHRvKSxcbiAgICAgIGRhdGE6IFN0cmluZyh0eERhdGEpLFxuICAgICAgdmFsdWU6IFN0cmluZyh2YWx1ZSksXG4gICAgfSxcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2hhbmdlVG9Ub2tlbihlKSB7XG4gICAgc2V0VG9Ub2tlbihlLnRhcmdldC52YWx1ZSk7XG4gICAgc2V0VmFsdWVFeGNoYW5nZWQoXCJcIik7XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VWYWx1ZShlKSB7XG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUgKiAxZTE4KTtcbiAgICBzZXRWYWx1ZUV4Y2hhbmdlZChcIlwiKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldDFpbmNoU3dhcCgpIHtcbiAgICBjb25zdCB0eCA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGBodHRwczovL2FwaS4xaW5jaC5pby92NC4wLzEvc3dhcD9mcm9tVG9rZW5BZGRyZXNzPSR7ZnJvbVRva2VufSZ0b1Rva2VuQWRkcmVzcz0ke3RvVG9rZW59JmFtb3VudD0ke3ZhbHVlfSZmcm9tQWRkcmVzcz0ke3VzZXIuYWRkcmVzc30mc2xpcHBhZ2U9MWBcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKHR4LmRhdGEpO1xuICAgIHNldFRvKHR4LmRhdGEudHgudG8pO1xuICAgIHNldFR4RGF0YSh0eC5kYXRhLnR4LmRhdGEpO1xuICAgIHNldFZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMoTnVtYmVyKGAxRSR7dHguZGF0YS50b1Rva2VuLmRlY2ltYWxzfWApKTtcbiAgICBzZXRWYWx1ZUV4Y2hhbmdlZCh0eC5kYXRhLnRvVG9rZW5BbW91bnQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5Vc2VyOiB7dXNlci5hZGRyZXNzfTwvZGl2PlxuICAgICAgPGRpdj5Zb3VyIEV0aCBCYWxhbmNlOiB7KGJhbGFuY2UuYmFsYW5jZSAvIDFlMTgpLnRvRml4ZWQoNCl9PC9kaXY+XG4gICAgICA8c2VsZWN0PlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMHhFZWVlZUVlZWVFZUVlZUVlRWVFZWVFRUVlZWVlRWVlZWVlZWVFRWVFXCI+RVRIPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZVZhbHVlKGUpfVxuICAgICAgICB2YWx1ZT17dmFsdWUgLyAxZTE4fVxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgbWluPXswfVxuICAgICAgICBtYXg9e2JhbGFuY2UuYmFsYW5jZSAvIDFlMTh9XG4gICAgICA+PC9pbnB1dD5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8c2VsZWN0IG5hbWU9XCJ0b1Rva2VuXCIgdmFsdWU9e3RvVG9rZW59IG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlVG9Ub2tlbihlKX0+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzJcIj5XRVRIPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDhcIj5VU0RDPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIweDFmOTg0MGE4NWQ1YWY1YmYxZDE3NjJmOTI1YmRhZGRjNDIwMWY5ODRcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKC4vdG9rZW5pbWcvdW5pLnBuZylcIj5cbiAgICAgICAgICBVTklcbiAgICAgICAgPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxpbnB1dCB2YWx1ZT17IXZhbHVlRXhjaGFuZ2VkID8gXCJcIiA6ICh2YWx1ZUV4Y2hhbmdlZCAvIHZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMpLnRvRml4ZWQoNCl9IGRpc2FibGVkPXt0cnVlfT48L2lucHV0PlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17Z2V0MWluY2hTd2FwfT5HZXQgQ29udmVyc2lvbjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IXZhbHVlRXhjaGFuZ2VkfSBvbkNsaWNrPXtzZW5kVHJhbnNhY3Rpb259PlxuICAgICAgICBTd2FwIFRva2Vuc1xuICAgICAgPC9idXR0b24+XG4gICAgICB7aXNMb2FkaW5nICYmIDxkaXY+Q2hlY2sgV2FsbGV0PC9kaXY+fVxuICAgICAge2lzU3VjY2VzcyAmJiA8ZGl2PlRyYW5zYWN0aW9uOiB7SlNPTi5zdHJpbmdpZnkoZGF0YSl9PC9kaXY+fVxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCh7IHJlZGlyZWN0OiBcIi9zaWduaW5cIiB9KX0+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpO1xuXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICBkZXN0aW5hdGlvbjogXCIvc2lnbmluXCIsXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVkgfSk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBNb3JhbGlzLkV2bUFwaS5hY2NvdW50LmdldE5hdGl2ZUJhbGFuY2Uoe1xuICAgIGFkZHJlc3M6IHNlc3Npb24udXNlci5hZGRyZXNzLFxuICAgIGNoYWluOiAweDEsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgdXNlcjogc2Vzc2lvbi51c2VyLCBiYWxhbmNlOiByZXNwb25zZS5yYXcgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdLCJuYW1lcyI6WyJzaWduT3V0IiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVNlbmRUcmFuc2FjdGlvbiIsIlVzZXIiLCJ1c2VyIiwiYmFsYW5jZSIsImNoYW5nZVRvVG9rZW4iLCJlIiwic2V0VG9Ub2tlbiIsInRhcmdldCIsInZhbHVlIiwic2V0VmFsdWVFeGNoYW5nZWQiLCJjaGFuZ2VWYWx1ZSIsInNldFZhbHVlIiwiZnJvbVRva2VuIiwidG9Ub2tlbiIsInZhbHVlRXhjaGFuZ2VkIiwidmFsdWVFeGNoYW5nZWREZWNpbWFscyIsInNldFZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMiLCJ0byIsInNldFRvIiwidHhEYXRhIiwic2V0VHhEYXRhIiwicmVxdWVzdCIsImZyb20iLCJhZGRyZXNzIiwiU3RyaW5nIiwiZGF0YSIsImlzTG9hZGluZyIsImlzU3VjY2VzcyIsInNlbmRUcmFuc2FjdGlvbiIsImdldDFpbmNoU3dhcCIsInR4IiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsImRlY2ltYWxzIiwidG9Ub2tlbkFtb3VudCIsImRpdiIsInRvRml4ZWQiLCJzZWxlY3QiLCJvcHRpb24iLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsIm1pbiIsIm1heCIsImJyIiwibmFtZSIsInN0eWxlIiwiZGlzYWJsZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user.js\n"));

/***/ })

});