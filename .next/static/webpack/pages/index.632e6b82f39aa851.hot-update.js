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

/***/ "./src/components/layouts/OutsideClick.tsx":
/*!*************************************************!*\
  !*** ./src/components/layouts/OutsideClick.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar OutsideClick = function(param) {\n    var opened = param.opened, onClose = param.onClose;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var checkIfOutsideClick = function(e) {\n            if (opened && ref.current && !ref.current.contains(e.target)) {\n                onClose();\n            }\n        };\n        document.addEventListener(\"mousedown\", checkIfOutsideClick);\n        return function() {\n            document.removeEventListener(\"mousedown\", checkIfOutsideClick);\n        };\n    }, [\n        opened,\n        onClose\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\EE-LT-11234\\\\Desktop\\\\rad\\\\src\\\\components\\\\layouts\\\\OutsideClick.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, _this);\n};\n_s(OutsideClick, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\n_c = OutsideClick;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OutsideClick);\nvar _c;\n$RefreshReg$(_c, \"OutsideClick\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXRzL091dHNpZGVDbGljay50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBeUM7O0FBT3pDLElBQU1FLFlBQVksR0FBZ0MsZ0JBQXVCO1FBQXJCQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsT0FBTyxTQUFQQSxPQUFPOztJQUMvRCxJQUFNQyxHQUFHLEdBQUdKLDZDQUFNLENBQWlCLElBQUksQ0FBQztJQUN4Q0QsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1osSUFBTU0sbUJBQW1CLEdBQUcsU0FBQ0MsQ0FBSyxFQUFJO1lBQ2xDLElBQUdKLE1BQU0sSUFBSUUsR0FBRyxDQUFDRyxPQUFPLElBQUksQ0FBQ0gsR0FBRyxDQUFDRyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDRyxNQUFNLENBQUMsRUFBQztnQkFDeEROLE9BQU8sRUFBRSxDQUFDO2FBQ2I7U0FDSjtRQUNETyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsRUFBRU4sbUJBQW1CLENBQUMsQ0FBQztRQUM1RCxPQUFPLFdBQU07WUFDVEssUUFBUSxDQUFDRSxtQkFBbUIsQ0FBQyxXQUFXLEVBQUVQLG1CQUFtQixDQUFDLENBQUM7U0FDbEU7S0FDSixFQUFFO1FBQUNILE1BQU07UUFBRUMsT0FBTztLQUFDLENBQUMsQ0FBQztJQUV0QixxQkFDSSw4REFBQ1UsS0FBRztRQUFDVCxHQUFHLEVBQUVBLEdBQUc7a0JBQ1JVLFFBQVE7Ozs7O2FBQ1AsQ0FDVDtDQUNKO0dBbkJLYixZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUFxQmxCLCtEQUFlQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xheW91dHMvT3V0c2lkZUNsaWNrLnRzeD9jZWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbnRlcmZhY2UgT3V0c2lkZUNsaWNrUHJvcHMge1xyXG4gICAgb3BlbmVkOiBib29sZWFuO1xyXG4gICAgb25DbG9zZTogKCk9PnZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IE91dHNpZGVDbGljazogUmVhY3QuRkM8T3V0c2lkZUNsaWNrUHJvcHM+ID0gKHtvcGVuZWQsIG9uQ2xvc2V9KSA9PiB7XHJcbiAgICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjaGVja0lmT3V0c2lkZUNsaWNrID0gKGU6YW55KSA9PntcclxuICAgICAgICAgICAgaWYob3BlbmVkICYmIHJlZi5jdXJyZW50ICYmICFyZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCkpe1xyXG4gICAgICAgICAgICAgICAgb25DbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja0lmT3V0c2lkZUNsaWNrKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja0lmT3V0c2lkZUNsaWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbb3BlbmVkLCBvbkNsb3NlXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHJlZj17cmVmfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXRzaWRlQ2xpY2tcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIk91dHNpZGVDbGljayIsIm9wZW5lZCIsIm9uQ2xvc2UiLCJyZWYiLCJjaGVja0lmT3V0c2lkZUNsaWNrIiwiZSIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layouts/OutsideClick.tsx\n");

/***/ })

});