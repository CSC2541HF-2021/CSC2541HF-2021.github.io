/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/theme-switch.js":
/*!************************************!*\
  !*** ./components/theme-switch.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n/* harmony import */ var _material_ui_icons_Brightness3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Brightness3 */ \"./node_modules/@material-ui/icons/Brightness3.js\");\n/* harmony import */ var _material_ui_icons_WbSunny__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/WbSunny */ \"./node_modules/@material-ui/icons/WbSunny.js\");\n/* harmony import */ var _material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/ToggleButton */ \"./node_modules/@material-ui/lab/esm/ToggleButton/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/michaelcooper/Desktop/CSC2541HF-2021.github.io/components/theme-switch.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ThemeSwitch = function ThemeSwitch() {\n  _s();\n\n  var _useTheme = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)(),\n      theme = _useTheme.theme,\n      setTheme = _useTheme.setTheme;\n\n  var dark = theme === 'dark' ? true : false;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dark),\n      checked = _useState[0],\n      setChecked = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      mounted = _useState2[0],\n      setMounted = _useState2[1];\n\n  var handleChange = function handleChange(nextChecked) {\n    setChecked(nextChecked);\n    console.log(nextChecked);\n  }; // When mounted on client, now we can show the UI\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    return setMounted(true);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setTheme(checked ? 'dark' : 'light');\n  }, [checked, setTheme]);\n  if (!mounted) return null;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__.default, {\n    style: {\n      maxWidth: '25px',\n      maxHeight: '25px',\n      minWidth: '25px',\n      minHeight: '25px'\n    },\n    value: \"check\",\n    selected: checked,\n    onChange: function onChange() {\n      setChecked(!checked);\n    },\n    children: checked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_WbSunny__WEBPACK_IMPORTED_MODULE_4__.default, {\n      style: {\n        height: '15px',\n        fill: \"white\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 16\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Brightness3__WEBPACK_IMPORTED_MODULE_5__.default, {\n      style: {\n        height: '15px',\n        fill: \"black\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 73\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ThemeSwitch, \"QdmYzj5DcAVu0o5w+zVqpirU37U=\", false, function () {\n  return [next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme];\n});\n\n_c = ThemeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeSwitch);\n\nvar _c;\n\n$RefreshReg$(_c, \"ThemeSwitch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aGVtZS1zd2l0Y2guanM/MDA1NyJdLCJuYW1lcyI6WyJUaGVtZVN3aXRjaCIsInVzZVRoZW1lIiwidGhlbWUiLCJzZXRUaGVtZSIsImRhcmsiLCJ1c2VTdGF0ZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJoYW5kbGVDaGFuZ2UiLCJuZXh0Q2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiaGVpZ2h0IiwiZmlsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNJQyxxREFBUSxFQURaO0FBQUEsTUFDaEJDLEtBRGdCLGFBQ2hCQSxLQURnQjtBQUFBLE1BQ1RDLFFBRFMsYUFDVEEsUUFEUzs7QUFHeEIsTUFBTUMsSUFBSSxHQUFHRixLQUFLLEtBQUssTUFBVixHQUFtQixJQUFuQixHQUEwQixLQUF2Qzs7QUFId0Isa0JBS01HLCtDQUFRLENBQUNELElBQUQsQ0FMZDtBQUFBLE1BS2pCRSxPQUxpQjtBQUFBLE1BS1JDLFVBTFE7O0FBQUEsbUJBTU1GLCtDQUFRLENBQUMsS0FBRCxDQU5kO0FBQUEsTUFNakJHLE9BTmlCO0FBQUEsTUFNUkMsVUFOUTs7QUFReEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsV0FBRCxFQUFpQjtBQUNwQ0osY0FBVSxDQUFDSSxXQUFELENBQVY7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVo7QUFDRCxHQUhELENBUndCLENBYXhCOzs7QUFDQUcsa0RBQVMsQ0FBQztBQUFBLFdBQU1MLFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUEsR0FBRCxFQUF5QixFQUF6QixDQUFUO0FBRUFLLGtEQUFTLENBQUMsWUFBTTtBQUNkWCxZQUFRLENBQUNHLE9BQU8sR0FBRyxNQUFILEdBQVksT0FBcEIsQ0FBUjtBQUNELEdBRlEsRUFFTixDQUFDQSxPQUFELEVBQVVILFFBQVYsQ0FGTSxDQUFUO0FBSUEsTUFBSSxDQUFDSyxPQUFMLEVBQWMsT0FBTyxJQUFQO0FBRWQsc0JBQ0UsOERBQUMsa0VBQUQ7QUFDQSxTQUFLLEVBQUU7QUFBQ08sY0FBUSxFQUFFLE1BQVg7QUFBbUJDLGVBQVMsRUFBRSxNQUE5QjtBQUFzQ0MsY0FBUSxFQUFFLE1BQWhEO0FBQXdEQyxlQUFTLEVBQUU7QUFBbkUsS0FEUDtBQUVBLFNBQUssRUFBQyxPQUZOO0FBR0EsWUFBUSxFQUFFWixPQUhWO0FBSUEsWUFBUSxFQUFFLG9CQUFNO0FBQ2RDLGdCQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFWO0FBQ0QsS0FORDtBQUFBLGNBUUNBLE9BQU8sZ0JBQUcsOERBQUMsK0RBQUQ7QUFBYSxXQUFLLEVBQUU7QUFBQ2EsY0FBTSxFQUFFLE1BQVQ7QUFBaUJDLFlBQUksRUFBRTtBQUF2QjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUgsZ0JBQTRELDhEQUFDLG1FQUFEO0FBQWlCLFdBQUssRUFBRTtBQUFDRCxjQUFNLEVBQUUsTUFBVDtBQUFpQkMsWUFBSSxFQUFFO0FBQXZCO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFScEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FsQ0Q7O0dBQU1wQixXO1VBQ3dCQyxpRDs7O0tBRHhCRCxXO0FBb0NOLCtEQUFlQSxXQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy90aGVtZS1zd2l0Y2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcyc7XG5pbXBvcnQgQnJpZ2h0bmVzczNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CcmlnaHRuZXNzMyc7XG5pbXBvcnQgV2JTdW5ueUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1diU3VubnknO1xuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RvZ2dsZUJ1dHRvbic7XG5cbmNvbnN0IFRoZW1lU3dpdGNoID0gKCkgPT4ge1xuICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcblxuICBjb25zdCBkYXJrID0gdGhlbWUgPT09ICdkYXJrJyA/IHRydWUgOiBmYWxzZTtcblxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShkYXJrKTtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuZXh0Q2hlY2tlZCkgPT4ge1xuICAgIHNldENoZWNrZWQobmV4dENoZWNrZWQpO1xuICAgIGNvbnNvbGUubG9nKG5leHRDaGVja2VkKVxuICB9O1xuXG4gIC8vIFdoZW4gbW91bnRlZCBvbiBjbGllbnQsIG5vdyB3ZSBjYW4gc2hvdyB0aGUgVUlcbiAgdXNlRWZmZWN0KCgpID0+IHNldE1vdW50ZWQodHJ1ZSksIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRoZW1lKGNoZWNrZWQgPyAnZGFyaycgOiAnbGlnaHQnKTtcbiAgfSwgW2NoZWNrZWQsIHNldFRoZW1lXSk7XG5cbiAgaWYgKCFtb3VudGVkKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxUb2dnbGVCdXR0b25cbiAgICBzdHlsZT17e21heFdpZHRoOiAnMjVweCcsIG1heEhlaWdodDogJzI1cHgnLCBtaW5XaWR0aDogJzI1cHgnLCBtaW5IZWlnaHQ6ICcyNXB4J319XG4gICAgdmFsdWU9XCJjaGVja1wiXG4gICAgc2VsZWN0ZWQ9e2NoZWNrZWR9XG4gICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgIHNldENoZWNrZWQoIWNoZWNrZWQpO1xuICAgIH19XG4gID5cbiAgICB7Y2hlY2tlZCA/IDxXYlN1bm55SWNvbiBzdHlsZT17e2hlaWdodDogJzE1cHgnLCBmaWxsOiBcIndoaXRlXCJ9fS8+IDogPEJyaWdodG5lc3MzSWNvbiBzdHlsZT17e2hlaWdodDogJzE1cHgnLCBmaWxsOiBcImJsYWNrXCJ9fS8+fVxuICA8L1RvZ2dsZUJ1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lU3dpdGNoOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/theme-switch.js\n");

/***/ })

});