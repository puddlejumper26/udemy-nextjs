"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/feedback";
exports.ids = ["pages/api/feedback"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/feedback.js":
/*!*******************************!*\
  !*** ./pages/api/feedback.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        const email = req.body.email;\n        const feedbackText = req.body.text;\n        const newFeedback = {\n            id: new Date().toISOString(),\n            email: email,\n            text: feedbackText\n        };\n        // store that in a database or in a file\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"feedback.json\");\n        // 记住，要在 feedback.json 的文件中初始设置 [] 不然会报错\n        const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath);\n        console.log(\"fileData is -\", fileData);\n        const data = JSON.parse(fileData);\n        data.push(newFeedback);\n        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, JSON.stringify(data));\n        res.status(201).json({\n            message: \"success\",\n            feedback: newFeedback\n        });\n    } else {\n        res.status(200).json({\n            message: \"This works!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmVlZGJhY2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0I7QUFDSTtBQUV4QixTQUFTRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN6QixJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNQyxRQUFRSCxJQUFJSSxJQUFJLENBQUNELEtBQUs7UUFDNUIsTUFBTUUsZUFBZUwsSUFBSUksSUFBSSxDQUFDRSxJQUFJO1FBQ2xDLE1BQU1DLGNBQWM7WUFDbEJDLElBQUksSUFBSUMsT0FBT0MsV0FBVztZQUMxQlAsT0FBT0E7WUFDUEcsTUFBTUQ7UUFDUjtRQUVBLHdDQUF3QztRQUN4QyxNQUFNTSxXQUFXYixnREFBUyxDQUFDZSxRQUFRQyxHQUFHLElBQUksUUFBUTtRQUNsRCx3Q0FBd0M7UUFDeEMsTUFBTUMsV0FBV2xCLHNEQUFlLENBQUNjO1FBQ2pDTSxRQUFRQyxHQUFHLENBQUMsaUJBQWlCSDtRQUM3QixNQUFNSSxPQUFPQyxLQUFLQyxLQUFLLENBQUNOO1FBQ3hCSSxLQUFLRyxJQUFJLENBQUNmO1FBQ1ZWLHVEQUFnQixDQUFDYyxVQUFVUyxLQUFLSSxTQUFTLENBQUNMO1FBRTFDbEIsSUFBSXdCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUFXQyxVQUFVckI7UUFBWTtJQUNuRSxPQUFPO1FBQ0xOLElBQUl3QixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBYztJQUNoRCxDQUFDO0FBQ0g7QUFFQSxpRUFBZTVCLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL2ZlZWRiYWNrLmpzP2Y3YzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCBlbWFpbCA9IHJlcS5ib2R5LmVtYWlsO1xuICAgIGNvbnN0IGZlZWRiYWNrVGV4dCA9IHJlcS5ib2R5LnRleHQ7XG4gICAgY29uc3QgbmV3RmVlZGJhY2sgPSB7XG4gICAgICBpZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgdGV4dDogZmVlZGJhY2tUZXh0LFxuICAgIH07XG5cbiAgICAvLyBzdG9yZSB0aGF0IGluIGEgZGF0YWJhc2Ugb3IgaW4gYSBmaWxlXG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJkYXRhXCIsIFwiZmVlZGJhY2suanNvblwiKTtcbiAgICAvLyDorrDkvY/vvIzopoHlnKggZmVlZGJhY2suanNvbiDnmoTmlofku7bkuK3liJ3lp4vorr7nva4gW10g5LiN54S25Lya5oql6ZSZXG4gICAgY29uc3QgZmlsZURhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpO1xuICAgIGNvbnNvbGUubG9nKFwiZmlsZURhdGEgaXMgLVwiLCBmaWxlRGF0YSk7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZmlsZURhdGEpO1xuICAgIGRhdGEucHVzaChuZXdGZWVkYmFjayk7XG4gICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcInN1Y2Nlc3NcIiwgZmVlZGJhY2s6IG5ld0ZlZWRiYWNrIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJUaGlzIHdvcmtzIVwiIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwiYm9keSIsImZlZWRiYWNrVGV4dCIsInRleHQiLCJuZXdGZWVkYmFjayIsImlkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiZmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImZpbGVEYXRhIiwicmVhZEZpbGVTeW5jIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJwdXNoIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZmVlZGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/feedback.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/feedback.js"));
module.exports = __webpack_exports__;

})();