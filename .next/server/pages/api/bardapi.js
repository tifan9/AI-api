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
exports.id = "pages/api/bardapi";
exports.ids = ["pages/api/bardapi"];
exports.modules = {

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

/***/ }),

/***/ "(api)/./pages/api/bardapi.js":
/*!******************************!*\
  !*** ./pages/api/bardapi.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { DiscussServiceClient  } = __webpack_require__(/*! @google-ai/generativelanguage */ \"@google-ai/generativelanguage\");\nconst { GoogleAuth  } = __webpack_require__(/*! google-auth-library */ \"google-auth-library\");\nconst MODEL_NAME = \"models/chat-bison-001\";\nconst API_KEY = \"AIzaSyAt2CPCMZ975OzkDTVc2Qhxqp9FOWJVpgs\";\nconst client = new DiscussServiceClient({\n    authClient: new GoogleAuth().fromAPIKey(API_KEY)\n});\nfunction handler(req, res) {\n    let messages = [\n        {\n            content: req.query.ques\n        }\n    ];\n    client.generateMessage({\n        // required, which model to use to generate the result\n        model: MODEL_NAME,\n        // optional, 0.0 always uses the highest-probability result\n        temperature: 0.25,\n        // optional, how many candidate results to generate\n        candidateCount: 1,\n        // optional, number of most probable tokens to consider for generation\n        top_k: 40,\n        // optional, for nucleus sampling decoding strategy\n        top_p: 0.95,\n        prompt: {\n            messages: messages\n        }\n    }).then((result)=>{\n        console.log(\"First Response:\", result[0].candidates[0]?.content);\n        messages.push({\n            content: result[0].candidates[0]?.content\n        });\n        // console.log(JSON.stringify(result, null, 2));\n        res.status(200).json({\n            resp: messages\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmFyZGFwaS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxxQkFBb0IsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxvRUFBK0I7QUFDeEUsTUFBTSxFQUFFQyxXQUFVLEVBQUUsR0FBR0QsbUJBQU9BLENBQUMsZ0RBQXFCO0FBRXBELE1BQU1FLGFBQWE7QUFDbkIsTUFBTUMsVUFBVTtBQUVoQixNQUFNQyxTQUFTLElBQUlMLHFCQUFxQjtJQUN0Q00sWUFBWSxJQUFJSixhQUFhSyxXQUFXSDtBQUMxQztBQUllLFNBQVNJLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUNwQyxJQUFJQyxXQUFXO1FBQUM7WUFBRUMsU0FBU0gsSUFBSUksTUFBTUM7UUFBSztLQUFFO0lBRWhEVCxPQUFPVSxnQkFBZ0I7UUFDckIsc0RBQXNEO1FBQ3REQyxPQUFPYjtRQUNQLDJEQUEyRDtRQUMzRGMsYUFBYTtRQUNiLG1EQUFtRDtRQUNuREMsZ0JBQWdCO1FBQ2hCLHNFQUFzRTtRQUN0RUMsT0FBTztRQUNQLG1EQUFtRDtRQUNuREMsT0FBTztRQUNQQyxRQUFRO1lBQ05WLFVBQVVBO1FBQ1o7SUFDRixHQUFHVyxLQUFLQyxDQUFBQTtRQUNKQyxRQUFRQyxJQUFJLG1CQUFtQkYsTUFBTSxDQUFDLEVBQUUsQ0FBQ0csVUFBVSxDQUFDLEVBQUUsRUFBRWQ7UUFFeERELFNBQVNnQixLQUFLO1lBQUVmLFNBQVNXLE1BQU0sQ0FBQyxFQUFFLENBQUNHLFVBQVUsQ0FBQyxFQUFFLEVBQUVkO1FBQVE7UUFDM0QsZ0RBQWdEO1FBQy9DRixJQUFJa0IsT0FBTyxLQUFLQyxLQUFLO1lBQUVDLE1BQU1uQjtRQUFTO0lBQzFDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXJkLWFwaS8uL3BhZ2VzL2FwaS9iYXJkYXBpLmpzP2RjODgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBEaXNjdXNzU2VydmljZUNsaWVudCB9ID0gcmVxdWlyZShcIkBnb29nbGUtYWkvZ2VuZXJhdGl2ZWxhbmd1YWdlXCIpO1xuY29uc3QgeyBHb29nbGVBdXRoIH0gPSByZXF1aXJlKFwiZ29vZ2xlLWF1dGgtbGlicmFyeVwiKTtcblxuY29uc3QgTU9ERUxfTkFNRSA9IFwibW9kZWxzL2NoYXQtYmlzb24tMDAxXCI7XG5jb25zdCBBUElfS0VZID0gXCJBSXphU3lBdDJDUENNWjk3NU96a0RUVmMyUWh4cXA5Rk9XSlZwZ3NcIlxuXG5jb25zdCBjbGllbnQgPSBuZXcgRGlzY3Vzc1NlcnZpY2VDbGllbnQoe1xuICBhdXRoQ2xpZW50OiBuZXcgR29vZ2xlQXV0aCgpLmZyb21BUElLZXkoQVBJX0tFWSksXG59KTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBsZXQgbWVzc2FnZXMgPSBbeyBjb250ZW50OiByZXEucXVlcnkucXVlcyB9XTtcbiAgXG5jbGllbnQuZ2VuZXJhdGVNZXNzYWdlKHtcbiAgLy8gcmVxdWlyZWQsIHdoaWNoIG1vZGVsIHRvIHVzZSB0byBnZW5lcmF0ZSB0aGUgcmVzdWx0XG4gIG1vZGVsOiBNT0RFTF9OQU1FLFxuICAvLyBvcHRpb25hbCwgMC4wIGFsd2F5cyB1c2VzIHRoZSBoaWdoZXN0LXByb2JhYmlsaXR5IHJlc3VsdFxuICB0ZW1wZXJhdHVyZTogMC4yNSxcbiAgLy8gb3B0aW9uYWwsIGhvdyBtYW55IGNhbmRpZGF0ZSByZXN1bHRzIHRvIGdlbmVyYXRlXG4gIGNhbmRpZGF0ZUNvdW50OiAxLFxuICAvLyBvcHRpb25hbCwgbnVtYmVyIG9mIG1vc3QgcHJvYmFibGUgdG9rZW5zIHRvIGNvbnNpZGVyIGZvciBnZW5lcmF0aW9uXG4gIHRvcF9rOiA0MCxcbiAgLy8gb3B0aW9uYWwsIGZvciBudWNsZXVzIHNhbXBsaW5nIGRlY29kaW5nIHN0cmF0ZWd5XG4gIHRvcF9wOiAwLjk1LFxuICBwcm9tcHQ6IHtcbiAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gIH0sXG59KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgY29uc29sZS5sb2coXCJGaXJzdCBSZXNwb25zZTpcIiwgcmVzdWx0WzBdLmNhbmRpZGF0ZXNbMF0/LmNvbnRlbnQpO1xuXG4gICAgbWVzc2FnZXMucHVzaCh7IGNvbnRlbnQ6IHJlc3VsdFswXS5jYW5kaWRhdGVzWzBdPy5jb250ZW50IH0pO1xuICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXNwOiBtZXNzYWdlcyB9KVxufSk7XG59Il0sIm5hbWVzIjpbIkRpc2N1c3NTZXJ2aWNlQ2xpZW50IiwicmVxdWlyZSIsIkdvb2dsZUF1dGgiLCJNT0RFTF9OQU1FIiwiQVBJX0tFWSIsImNsaWVudCIsImF1dGhDbGllbnQiLCJmcm9tQVBJS2V5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1lc3NhZ2VzIiwiY29udGVudCIsInF1ZXJ5IiwicXVlcyIsImdlbmVyYXRlTWVzc2FnZSIsIm1vZGVsIiwidGVtcGVyYXR1cmUiLCJjYW5kaWRhdGVDb3VudCIsInRvcF9rIiwidG9wX3AiLCJwcm9tcHQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNhbmRpZGF0ZXMiLCJwdXNoIiwic3RhdHVzIiwianNvbiIsInJlc3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/bardapi.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/bardapi.js"));
module.exports = __webpack_exports__;

})();