"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction HomePage() {\n    _s();\n    const emailInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const feedbackInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    function submitFormHandler(event) {\n        event.preventDefault();\n        const enteredEmail = emailInputRef.current.value;\n        const enteredFeedback = feedbackInputRef.current.value;\n        const reqBody = {\n            email: enteredEmail,\n            text: enteredFeedback\n        };\n        fetch(\"/api/feedback\", {\n            method: \"POST\",\n            body: JSON.stringify(reqBody)\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"The Home Page\"\n            }, void 0, false, {\n                fileName: \"/Users/xiangWu/Documents/Work/01_Code/udemy-nextjs/max-api-routes/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/xiangWu/Documents/Work/01_Code/udemy-nextjs/max-api-routes/pages/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        htmlFor: \"email\",\n                        type: \"email\",\n                        id: \"email\",\n                        ref: emailInputRef\n                    }, void 0, false, {\n                        fileName: \"/Users/xiangWu/Documents/Work/01_Code/udemy-nextjs/max-api-routes/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"feedback\"\n                    }, void 0, false, {\n                        fileName: \"/Users/xiangWu/Documents/Work/01_Code/udemy-nextjs/max-api-routes/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        htmlFor: \"feedback\",\n                        type: \"feedback\",\n                        if: \"feedback\",\n                        ref: feedbackInputRef\n                    }, void 0, false, {\n                        fileName: \"/Users/xiangWu/Documents/Work/01_Code/udemy-nextjs/max-api-routes/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/xiangWu/Documents/Work/01_Code/udemy-nextjs/max-api-routes/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/xiangWu/Documents/Work/01_Code/udemy-nextjs/max-api-routes/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/xiangWu/Documents/Work/01_Code/udemy-nextjs/max-api-routes/pages/index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"auT82clE8KqX1s0Oj68b66LL32Y=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStCO0FBRS9CLFNBQVNDLFdBQVc7O0lBQ2xCLE1BQU1DLGdCQUFnQkYsNkNBQU1BO0lBQzVCLE1BQU1HLG1CQUFtQkgsNkNBQU1BO0lBRS9CLFNBQVNJLGtCQUFrQkMsS0FBSyxFQUFFO1FBQ2hDQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLGVBQWVMLGNBQWNNLE9BQU8sQ0FBQ0MsS0FBSztRQUNoRCxNQUFNQyxrQkFBa0JQLGlCQUFpQkssT0FBTyxDQUFDQyxLQUFLO1FBRXRELE1BQU1FLFVBQVU7WUFBRUMsT0FBT0w7WUFBY00sTUFBTUg7UUFBZ0I7UUFFN0RJLE1BQU0saUJBQWlCO1lBQ3JCQyxRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1A7UUFDdkI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztrQ0FDQyw4REFBQ0M7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQU1DLFNBQVE7d0JBQVFDLE1BQUs7d0JBQVFDLElBQUc7d0JBQVFDLEtBQUt6Qjs7Ozs7O2tDQUNwRCw4REFBQ29CO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNNO3dCQUNDSixTQUFRO3dCQUNSQyxNQUFLO3dCQUNMSSxJQUFHO3dCQUNIRixLQUFLeEI7Ozs7OztrQ0FFUCw4REFBQzJCO2tDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEI7R0FuQ1M3QjtLQUFBQTtBQXFDVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgZW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBmZWVkYmFja0lucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgZnVuY3Rpb24gc3VibWl0Rm9ybUhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gZW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRGZWVkYmFjayA9IGZlZWRiYWNrSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIGNvbnN0IHJlcUJvZHkgPSB7IGVtYWlsOiBlbnRlcmVkRW1haWwsIHRleHQ6IGVudGVyZWRGZWVkYmFjayB9O1xuXG4gICAgZmV0Y2goXCIvYXBpL2ZlZWRiYWNrXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXFCb2R5KSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5UaGUgSG9tZSBQYWdlPC9oMT5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaHRtbEZvcj1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHJlZj17ZW1haWxJbnB1dFJlZn0gLz5cbiAgICAgICAgPGxhYmVsPmZlZWRiYWNrPC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgaHRtbEZvcj1cImZlZWRiYWNrXCJcbiAgICAgICAgICB0eXBlPVwiZmVlZGJhY2tcIlxuICAgICAgICAgIGlmPVwiZmVlZGJhY2tcIlxuICAgICAgICAgIHJlZj17ZmVlZGJhY2tJbnB1dFJlZn1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsidXNlUmVmIiwiSG9tZVBhZ2UiLCJlbWFpbElucHV0UmVmIiwiZmVlZGJhY2tJbnB1dFJlZiIsInN1Ym1pdEZvcm1IYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRGZWVkYmFjayIsInJlcUJvZHkiLCJlbWFpbCIsInRleHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGl2IiwiaDEiLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsImh0bWxGb3IiLCJ0eXBlIiwiaWQiLCJyZWYiLCJ0ZXh0YXJlYSIsImlmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});