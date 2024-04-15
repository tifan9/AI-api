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
exports.id = "pages/api/botapi";
exports.ids = ["pages/api/botapi"];
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

/***/ "(api)/./pages/api/botapi.js":
/*!*****************************!*\
  !*** ./pages/api/botapi.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { DiscussServiceClient  } = __webpack_require__(/*! @google-ai/generativelanguage */ \"@google-ai/generativelanguage\");\nconst { GoogleAuth  } = __webpack_require__(/*! google-auth-library */ \"google-auth-library\");\nconst MODEL_NAME = \"models/chat-bison-001\";\nconst API_KEY = \"AIzaSyAt2CPCMZ975OzkDTVc2Qhxqp9FOWJVpgs\";\nconst client = new DiscussServiceClient({\n    authClient: new GoogleAuth().fromAPIKey(API_KEY)\n});\nfunction handler(req, res) {\n    let messages = [\n        {\n            content: req.query.ques\n        }\n    ];\n    client.generateMessage({\n        // required, which model to use to generate the result\n        model: MODEL_NAME,\n        // optional, 0.0 always uses the highest-probability result\n        temperature: 0.5,\n        // optional, how many candidate results to generate\n        candidateCount: 1,\n        // optional, number of most probable tokens to consider for generation\n        top_k: 10,\n        // optional, for nucleus sampling decoding strategy\n        top_p: 0.95,\n        prompt: {\n            messages: messages\n        }\n    }).then((result)=>{\n        console.log(\"First Response:\", result[0].candidates[0]?.content);\n        messages.push({\n            content: result[0].candidates[0]?.content\n        });\n        // console.log(JSON.stringify(result, null, 2));\n        res.status(200).json({\n            resp: messages\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYm90YXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLEVBQUVBLHFCQUFvQixFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLG9FQUErQjtBQUN4RSxNQUFNLEVBQUVDLFdBQVUsRUFBRSxHQUFHRCxtQkFBT0EsQ0FBQyxnREFBcUI7QUFFcEQsTUFBTUUsYUFBYTtBQUNuQixNQUFNQyxVQUFVO0FBRWhCLE1BQU1DLFNBQVMsSUFBSUwscUJBQXFCO0lBQ3RDTSxZQUFZLElBQUlKLGFBQWFLLFdBQVdIO0FBQzFDO0FBRWUsU0FBU0ksUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQ3BDLElBQUlDLFdBQVc7UUFBQztZQUFFQyxTQUFTSCxJQUFJSSxNQUFNQztRQUFLO0tBQUU7SUFFaERULE9BQU9VLGdCQUFnQjtRQUNyQixzREFBc0Q7UUFDdERDLE9BQU9iO1FBQ1AsMkRBQTJEO1FBQzNEYyxhQUFhO1FBQ2IsbURBQW1EO1FBQ25EQyxnQkFBZ0I7UUFDaEIsc0VBQXNFO1FBQ3RFQyxPQUFPO1FBQ1AsbURBQW1EO1FBQ25EQyxPQUFPO1FBQ1BDLFFBQVE7WUFDTlYsVUFBVUE7UUFDWjtJQUNGLEdBQUdXLEtBQUtDLENBQUFBO1FBQ0pDLFFBQVFDLElBQUksbUJBQW1CRixNQUFNLENBQUMsRUFBRSxDQUFDRyxVQUFVLENBQUMsRUFBRSxFQUFFZDtRQUV4REQsU0FBU2dCLEtBQUs7WUFBRWYsU0FBU1csTUFBTSxDQUFDLEVBQUUsQ0FBQ0csVUFBVSxDQUFDLEVBQUUsRUFBRWQ7UUFBUTtRQUMzRCxnREFBZ0Q7UUFDL0NGLElBQUlrQixPQUFPLEtBQUtDLEtBQUs7WUFBRUMsTUFBTW5CO1FBQVM7SUFDMUM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhcmQtYXBpLy4vcGFnZXMvYXBpL2JvdGFwaS5qcz84MmIxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgRGlzY3Vzc1NlcnZpY2VDbGllbnQgfSA9IHJlcXVpcmUoXCJAZ29vZ2xlLWFpL2dlbmVyYXRpdmVsYW5ndWFnZVwiKTtcclxuY29uc3QgeyBHb29nbGVBdXRoIH0gPSByZXF1aXJlKFwiZ29vZ2xlLWF1dGgtbGlicmFyeVwiKTtcclxuXHJcbmNvbnN0IE1PREVMX05BTUUgPSBcIm1vZGVscy9jaGF0LWJpc29uLTAwMVwiO1xyXG5jb25zdCBBUElfS0VZID0gXCJBSXphU3lBdDJDUENNWjk3NU96a0RUVmMyUWh4cXA5Rk9XSlZwZ3NcIlxyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IERpc2N1c3NTZXJ2aWNlQ2xpZW50KHtcclxuICBhdXRoQ2xpZW50OiBuZXcgR29vZ2xlQXV0aCgpLmZyb21BUElLZXkoQVBJX0tFWSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgbGV0IG1lc3NhZ2VzID0gW3sgY29udGVudDogcmVxLnF1ZXJ5LnF1ZXMgfV07XHJcbiAgXHJcbmNsaWVudC5nZW5lcmF0ZU1lc3NhZ2Uoe1xyXG4gIC8vIHJlcXVpcmVkLCB3aGljaCBtb2RlbCB0byB1c2UgdG8gZ2VuZXJhdGUgdGhlIHJlc3VsdFxyXG4gIG1vZGVsOiBNT0RFTF9OQU1FLFxyXG4gIC8vIG9wdGlvbmFsLCAwLjAgYWx3YXlzIHVzZXMgdGhlIGhpZ2hlc3QtcHJvYmFiaWxpdHkgcmVzdWx0XHJcbiAgdGVtcGVyYXR1cmU6IDAuNSxcclxuICAvLyBvcHRpb25hbCwgaG93IG1hbnkgY2FuZGlkYXRlIHJlc3VsdHMgdG8gZ2VuZXJhdGVcclxuICBjYW5kaWRhdGVDb3VudDogMSxcclxuICAvLyBvcHRpb25hbCwgbnVtYmVyIG9mIG1vc3QgcHJvYmFibGUgdG9rZW5zIHRvIGNvbnNpZGVyIGZvciBnZW5lcmF0aW9uXHJcbiAgdG9wX2s6IDEwLFxyXG4gIC8vIG9wdGlvbmFsLCBmb3IgbnVjbGV1cyBzYW1wbGluZyBkZWNvZGluZyBzdHJhdGVneVxyXG4gIHRvcF9wOiAwLjk1LFxyXG4gIHByb21wdDoge1xyXG4gICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxyXG4gIH0sXHJcbn0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiRmlyc3QgUmVzcG9uc2U6XCIsIHJlc3VsdFswXS5jYW5kaWRhdGVzWzBdPy5jb250ZW50KTtcclxuXHJcbiAgICBtZXNzYWdlcy5wdXNoKHsgY29udGVudDogcmVzdWx0WzBdLmNhbmRpZGF0ZXNbMF0/LmNvbnRlbnQgfSk7XHJcbiAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXNwOiBtZXNzYWdlcyB9KVxyXG59KTtcclxufSJdLCJuYW1lcyI6WyJEaXNjdXNzU2VydmljZUNsaWVudCIsInJlcXVpcmUiLCJHb29nbGVBdXRoIiwiTU9ERUxfTkFNRSIsIkFQSV9LRVkiLCJjbGllbnQiLCJhdXRoQ2xpZW50IiwiZnJvbUFQSUtleSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXNzYWdlcyIsImNvbnRlbnQiLCJxdWVyeSIsInF1ZXMiLCJnZW5lcmF0ZU1lc3NhZ2UiLCJtb2RlbCIsInRlbXBlcmF0dXJlIiwiY2FuZGlkYXRlQ291bnQiLCJ0b3BfayIsInRvcF9wIiwicHJvbXB0IiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjYW5kaWRhdGVzIiwicHVzaCIsInN0YXR1cyIsImpzb24iLCJyZXNwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/botapi.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/botapi.js"));
module.exports = __webpack_exports__;

})();