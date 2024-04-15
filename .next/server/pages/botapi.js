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
exports.id = "pages/botapi";
exports.ids = ["pages/botapi"];
exports.modules = {

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fbotapi&absolutePagePath=.%2Fpages%5Cbotapi.js&preferredRegion=!":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fbotapi&absolutePagePath=.%2Fpages%5Cbotapi.js&preferredRegion=! ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _pages_botapi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _pages_botapi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages\\botapi.js */ \"./pages/botapi.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _pages_botapi_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _pages_botapi_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n        // Next.js Route Loader\n        \n        \n    //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci5qcz9wYWdlPSUyRmJvdGFwaSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyU1Q2JvdGFwaS5qcyZwcmVmZXJyZWRSZWdpb249IS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQUNBLFFBQTBDO0FBQzFDLFFBQW9EO0FBQ3BEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFyZC1hcGkvPzNhNDAiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIC8vIE5leHQuanMgUm91dGUgTG9hZGVyXG4gICAgICAgIGV4cG9ydCAqIGZyb20gXCIuL3BhZ2VzXFxcXGJvdGFwaS5qc1wiXG4gICAgICAgIGV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9wYWdlc1xcXFxib3RhcGkuanNcIlxuICAgICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fbotapi&absolutePagePath=.%2Fpages%5Cbotapi.js&preferredRegion=!\n");

/***/ }),

/***/ "./pages/botapi.js":
/*!*************************!*\
  !*** ./pages/botapi.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { DiscussServiceClient  } = __webpack_require__(/*! @google-ai/generativelanguage */ \"@google-ai/generativelanguage\");\nconst { GoogleAuth  } = __webpack_require__(/*! google-auth-library */ \"google-auth-library\");\nconst MODEL_NAME = \"models/chat-bison-001\";\nconst API_KEY = \"AIzaSyAt2CPCMZ975OzkDTVc2Qhxqp9FOWJVpgs\";\nconst client = new DiscussServiceClient({\n    authClient: new GoogleAuth().fromAPIKey(API_KEY)\n});\nfunction handler(req, res) {\n    let messages = [\n        {\n            content: req.query.ques\n        }\n    ];\n    client.generateMessage({\n        // required, which model to use to generate the result\n        model: MODEL_NAME,\n        // optional, 0.0 always uses the highest-probability result\n        temperature: 0.5,\n        // optional, how many candidate results to generate\n        candidateCount: 1,\n        // optional, number of most probable tokens to consider for generation\n        top_k: 10,\n        // optional, for nucleus sampling decoding strategy\n        top_p: 0.95,\n        prompt: {\n            messages: messages\n        }\n    }).then((result)=>{\n        console.log(\"First Response:\", result[0].candidates[0]?.content);\n        messages.push({\n            content: result[0].candidates[0]?.content\n        });\n        // console.log(JSON.stringify(result, null, 2));\n        res.status(200).json({\n            resp: messages\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib3RhcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sRUFBRUEscUJBQW9CLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsb0VBQStCO0FBQ3hFLE1BQU0sRUFBRUMsV0FBVSxFQUFFLEdBQUdELG1CQUFPQSxDQUFDLGdEQUFxQjtBQUVwRCxNQUFNRSxhQUFhO0FBQ25CLE1BQU1DLFVBQVU7QUFFaEIsTUFBTUMsU0FBUyxJQUFJTCxxQkFBcUI7SUFDdENNLFlBQVksSUFBSUosYUFBYUssV0FBV0g7QUFDMUM7QUFFZSxTQUFTSSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDcEMsSUFBSUMsV0FBVztRQUFDO1lBQUVDLFNBQVNILElBQUlJLE1BQU1DO1FBQUs7S0FBRTtJQUVoRFQsT0FBT1UsZ0JBQWdCO1FBQ3JCLHNEQUFzRDtRQUN0REMsT0FBT2I7UUFDUCwyREFBMkQ7UUFDM0RjLGFBQWE7UUFDYixtREFBbUQ7UUFDbkRDLGdCQUFnQjtRQUNoQixzRUFBc0U7UUFDdEVDLE9BQU87UUFDUCxtREFBbUQ7UUFDbkRDLE9BQU87UUFDUEMsUUFBUTtZQUNOVixVQUFVQTtRQUNaO0lBQ0YsR0FBR1csS0FBS0MsQ0FBQUE7UUFDSkMsUUFBUUMsSUFBSSxtQkFBbUJGLE1BQU0sQ0FBQyxFQUFFLENBQUNHLFVBQVUsQ0FBQyxFQUFFLEVBQUVkO1FBRXhERCxTQUFTZ0IsS0FBSztZQUFFZixTQUFTVyxNQUFNLENBQUMsRUFBRSxDQUFDRyxVQUFVLENBQUMsRUFBRSxFQUFFZDtRQUFRO1FBQzNELGdEQUFnRDtRQUMvQ0YsSUFBSWtCLE9BQU8sS0FBS0MsS0FBSztZQUFFQyxNQUFNbkI7UUFBUztJQUMxQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFyZC1hcGkvLi9wYWdlcy9ib3RhcGkuanM/NTNmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IERpc2N1c3NTZXJ2aWNlQ2xpZW50IH0gPSByZXF1aXJlKFwiQGdvb2dsZS1haS9nZW5lcmF0aXZlbGFuZ3VhZ2VcIik7XHJcbmNvbnN0IHsgR29vZ2xlQXV0aCB9ID0gcmVxdWlyZShcImdvb2dsZS1hdXRoLWxpYnJhcnlcIik7XHJcblxyXG5jb25zdCBNT0RFTF9OQU1FID0gXCJtb2RlbHMvY2hhdC1iaXNvbi0wMDFcIjtcclxuY29uc3QgQVBJX0tFWSA9IFwiQUl6YVN5QXQyQ1BDTVo5NzVPemtEVFZjMlFoeHFwOUZPV0pWcGdzXCJcclxuXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBEaXNjdXNzU2VydmljZUNsaWVudCh7XHJcbiAgYXV0aENsaWVudDogbmV3IEdvb2dsZUF1dGgoKS5mcm9tQVBJS2V5KEFQSV9LRVkpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGxldCBtZXNzYWdlcyA9IFt7IGNvbnRlbnQ6IHJlcS5xdWVyeS5xdWVzIH1dO1xyXG4gIFxyXG5jbGllbnQuZ2VuZXJhdGVNZXNzYWdlKHtcclxuICAvLyByZXF1aXJlZCwgd2hpY2ggbW9kZWwgdG8gdXNlIHRvIGdlbmVyYXRlIHRoZSByZXN1bHRcclxuICBtb2RlbDogTU9ERUxfTkFNRSxcclxuICAvLyBvcHRpb25hbCwgMC4wIGFsd2F5cyB1c2VzIHRoZSBoaWdoZXN0LXByb2JhYmlsaXR5IHJlc3VsdFxyXG4gIHRlbXBlcmF0dXJlOiAwLjUsXHJcbiAgLy8gb3B0aW9uYWwsIGhvdyBtYW55IGNhbmRpZGF0ZSByZXN1bHRzIHRvIGdlbmVyYXRlXHJcbiAgY2FuZGlkYXRlQ291bnQ6IDEsXHJcbiAgLy8gb3B0aW9uYWwsIG51bWJlciBvZiBtb3N0IHByb2JhYmxlIHRva2VucyB0byBjb25zaWRlciBmb3IgZ2VuZXJhdGlvblxyXG4gIHRvcF9rOiAxMCxcclxuICAvLyBvcHRpb25hbCwgZm9yIG51Y2xldXMgc2FtcGxpbmcgZGVjb2Rpbmcgc3RyYXRlZ3lcclxuICB0b3BfcDogMC45NSxcclxuICBwcm9tcHQ6IHtcclxuICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcclxuICB9LFxyXG59KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZpcnN0IFJlc3BvbnNlOlwiLCByZXN1bHRbMF0uY2FuZGlkYXRlc1swXT8uY29udGVudCk7XHJcblxyXG4gICAgbWVzc2FnZXMucHVzaCh7IGNvbnRlbnQ6IHJlc3VsdFswXS5jYW5kaWRhdGVzWzBdPy5jb250ZW50IH0pO1xyXG4gICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzcDogbWVzc2FnZXMgfSlcclxufSk7XHJcbn0iXSwibmFtZXMiOlsiRGlzY3Vzc1NlcnZpY2VDbGllbnQiLCJyZXF1aXJlIiwiR29vZ2xlQXV0aCIsIk1PREVMX05BTUUiLCJBUElfS0VZIiwiY2xpZW50IiwiYXV0aENsaWVudCIsImZyb21BUElLZXkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWVzc2FnZXMiLCJjb250ZW50IiwicXVlcnkiLCJxdWVzIiwiZ2VuZXJhdGVNZXNzYWdlIiwibW9kZWwiLCJ0ZW1wZXJhdHVyZSIsImNhbmRpZGF0ZUNvdW50IiwidG9wX2siLCJ0b3BfcCIsInByb21wdCIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiY2FuZGlkYXRlcyIsInB1c2giLCJzdGF0dXMiLCJqc29uIiwicmVzcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/botapi.js\n");

/***/ }),

/***/ "@google-ai/generativelanguage":
/*!************************************************!*\
  !*** external "@google-ai/generativelanguage" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@google-ai/generativelanguage");

/***/ }),

/***/ "google-auth-library":
/*!**************************************!*\
  !*** external "google-auth-library" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("google-auth-library");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fbotapi&absolutePagePath=.%2Fpages%5Cbotapi.js&preferredRegion=!"));
module.exports = __webpack_exports__;

})();