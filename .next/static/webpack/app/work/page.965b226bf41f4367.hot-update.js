"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/work/page",{

/***/ "(app-pages-browser)/./app/components/Work/Index.js":
/*!**************************************!*\
  !*** ./app/components/Work/Index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ \"(app-pages-browser)/./app/components/Work/animations.js\");\n/* harmony import */ var _Work_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Work.module.scss */ \"(app-pages-browser)/./app/components/Work/Work.module.scss\");\n/* harmony import */ var _Work_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Work_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Nav/Nav */ \"(app-pages-browser)/./app/components/Nav/Nav.js\");\n/* harmony import */ var _workCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workCard */ \"(app-pages-browser)/./app/components/Work/workCard.js\");\n/* harmony import */ var _Footer_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Footer/footer */ \"(app-pages-browser)/./app/components/Footer/footer.js\");\n/* harmony import */ var _Hero_blob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Hero/blob */ \"(app-pages-browser)/./app/components/Hero/blob.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Work = ()=>{\n    _s();\n    const timeline = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.timeline());\n    const heroRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const context = gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.context(()=>{\n            const tl = timeline.current;\n            tl.add((0,_animations__WEBPACK_IMPORTED_MODULE_2__.animateTitle)()).add((0,_animations__WEBPACK_IMPORTED_MODULE_2__.revealMenu)(), 0).add((0,_animations__WEBPACK_IMPORTED_MODULE_2__.animateImage)(), 0);\n        }, heroRef);\n        return ()=>context.revert();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hero_blob__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/abdullah/Developer/pinochio/app/components/Work/Index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_Work_module_scss__WEBPACK_IMPORTED_MODULE_8___default().hero),\n                ref: heroRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-center md:flex-row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-20 flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-8xl font-semi-bold\",\n                                children: [\n                                    \"Our Work Has Generated Over\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent\",\n                                        children: \"400\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abdullah/Developer/pinochio/app/components/Work/Index.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \" \",\n                                    \"Million Views\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abdullah/Developer/pinochio/app/components/Work/Index.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-5xl text-center mt-8\",\n                                children: \"View some of our Work\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abdullah/Developer/pinochio/app/components/Work/Index.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abdullah/Developer/pinochio/app/components/Work/Index.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/abdullah/Developer/pinochio/app/components/Work/Index.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/abdullah/Developer/pinochio/app/components/Work/Index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_workCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/abdullah/Developer/pinochio/app/components/Work/Index.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/abdullah/Developer/pinochio/app/components/Work/Index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/abdullah/Developer/pinochio/app/components/Work/Index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/abdullah/Developer/pinochio/app/components/Work/Index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abdullah/Developer/pinochio/app/components/Work/Index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Work, \"zW/Cn9zBdUEZZsbbVZ9Ifab2svE=\");\n_c = Work;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\nvar _c;\n$RefreshReg$(_c, \"Work\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1dvcmsvSW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDZDtBQUMwQztBQUM5QjtBQUNYO0FBQ0s7QUFDSTtBQUNKO0FBRWxDLE1BQU1XLE9BQU87O0lBQ1gsTUFBTUMsV0FBV1gsNkNBQU1BLENBQUNDLHNDQUFJQSxDQUFDVSxRQUFRO0lBQ3JDLE1BQU1DLFVBQVVaLDZDQUFNQSxDQUFDO0lBRXZCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1jLFVBQVVaLHNDQUFJQSxDQUFDWSxPQUFPLENBQUM7WUFDM0IsTUFBTUMsS0FBS0gsU0FBU0ksT0FBTztZQUUzQkQsR0FBR0UsR0FBRyxDQUFDZCx5REFBWUEsSUFBSWMsR0FBRyxDQUFDWix1REFBVUEsSUFBSSxHQUFHWSxHQUFHLENBQUNiLHlEQUFZQSxJQUFJO1FBQ2xFLEdBQUdTO1FBRUgsT0FBTyxJQUFNQyxRQUFRSSxNQUFNO0lBQzdCLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNULGtEQUFNQTs7Ozs7MEJBQ1AsOERBQUNVO2dCQUFRQyxXQUFXZiwrREFBVztnQkFBRWlCLEtBQUtWOzBCQUNwQyw0RUFBQ007b0JBQUlFLFdBQVU7OEJBQ2IsNEVBQUNGO3dCQUFJRSxXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQUVILFdBQVU7O29DQUEwQjtrREFFckMsOERBQUNJO3dDQUFLSixXQUFVO2tEQUE2RTs7Ozs7O29DQUVyRjtvQ0FBSTs7Ozs7OzswQ0FHZCw4REFBQ0c7Z0NBQUVILFdBQVU7MENBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkvQyw4REFBQ0Y7MEJBQ0MsNEVBQUNYLGlEQUFRQTs7Ozs7Ozs7OzswQkFFWCw4REFBQ0QsZ0RBQUdBOzs7OzswQkFDSiw4REFBQ0Usc0RBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBdENNRTtLQUFBQTtBQXdDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Xb3JrL0luZGV4LmpzPzY5ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcCc7XG5pbXBvcnQgeyBhbmltYXRlVGl0bGUsIGFuaW1hdGVJbWFnZSwgcmV2ZWFsTWVudSB9IGZyb20gJy4vYW5pbWF0aW9ucyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vV29yay5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL05hdi9OYXYnO1xuaW1wb3J0IFdvcmtDYXJkIGZyb20gJy4vd29ya0NhcmQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXIvZm9vdGVyJztcbmltcG9ydCBNeUJsb2IgZnJvbSAnLi4vSGVyby9ibG9iJztcblxuY29uc3QgV29yayA9ICgpID0+IHtcbiAgY29uc3QgdGltZWxpbmUgPSB1c2VSZWYoZ3NhcC50aW1lbGluZSgpKTtcbiAgY29uc3QgaGVyb1JlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBnc2FwLmNvbnRleHQoKCkgPT4ge1xuICAgICAgY29uc3QgdGwgPSB0aW1lbGluZS5jdXJyZW50O1xuXG4gICAgICB0bC5hZGQoYW5pbWF0ZVRpdGxlKCkpLmFkZChyZXZlYWxNZW51KCksIDApLmFkZChhbmltYXRlSW1hZ2UoKSwgMCk7XG4gICAgfSwgaGVyb1JlZik7XG5cbiAgICByZXR1cm4gKCkgPT4gY29udGV4dC5yZXZlcnQoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxNeUJsb2IgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlcm99IHJlZj17aGVyb1JlZn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWQ6ZmxleC1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTIwIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtOHhsIGZvbnQtc2VtaS1ib2xkXCI+XG4gICAgICAgICAgICAgIE91ciBXb3JrIEhhcyBHZW5lcmF0ZWQgT3ZlclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tcHVycGxlLTcwMCB0by1waW5rLTUwMCBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgIDQwMFxuICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgTWlsbGlvbiBWaWV3c1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1jZW50ZXIgbXQtOFwiPlZpZXcgc29tZSBvZiBvdXIgV29yazwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8ZGl2PlxuICAgICAgICA8V29ya0NhcmQgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPE5hdiAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV29yaztcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJnc2FwIiwiYW5pbWF0ZVRpdGxlIiwiYW5pbWF0ZUltYWdlIiwicmV2ZWFsTWVudSIsInN0eWxlcyIsIk5hdiIsIldvcmtDYXJkIiwiRm9vdGVyIiwiTXlCbG9iIiwiV29yayIsInRpbWVsaW5lIiwiaGVyb1JlZiIsImNvbnRleHQiLCJ0bCIsImN1cnJlbnQiLCJhZGQiLCJyZXZlcnQiLCJkaXYiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaGVybyIsInJlZiIsInAiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Work/Index.js\n"));

/***/ })

});