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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n/* harmony import */ var _material_ui_icons_Brightness3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Brightness3 */ \"./node_modules/@material-ui/icons/Brightness3.js\");\n/* harmony import */ var _material_ui_icons_WbSunny__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/WbSunny */ \"./node_modules/@material-ui/icons/WbSunny.js\");\n/* harmony import */ var _material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/ToggleButton */ \"./node_modules/@material-ui/lab/esm/ToggleButton/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/michaelcooper/Desktop/CSC2541HF-2021.github.io/components/theme-switch.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ThemeSwitch = function ThemeSwitch() {\n  _s();\n\n  var _useTheme = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)(),\n      theme = _useTheme.theme,\n      setTheme = _useTheme.setTheme;\n\n  var dark = theme === 'dark' ? true : false;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dark),\n      checked = _useState[0],\n      setChecked = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      mounted = _useState2[0],\n      setMounted = _useState2[1];\n\n  var handleChange = function handleChange(nextChecked) {\n    setChecked(nextChecked);\n    console.log(nextChecked);\n  }; // When mounted on client, now we can show the UI\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    return setMounted(true);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setTheme(checked ? 'dark' : 'light');\n  }, [checked, setTheme]);\n  if (!mounted) return null;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__.default, {\n    style: {\n      maxWidth: '25px',\n      maxHeight: '25px',\n      minWidth: '25px',\n      minHeight: '25px',\n      paddingBottom: '5px'\n    },\n    value: \"check\",\n    selected: checked,\n    onChange: function onChange() {\n      setChecked(!checked);\n    },\n    children: checked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_WbSunny__WEBPACK_IMPORTED_MODULE_4__.default, {\n      style: {\n        height: '15px',\n        fill: \"white\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 16\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Brightness3__WEBPACK_IMPORTED_MODULE_5__.default, {\n      style: {\n        height: '15px',\n        fill: \"black\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 73\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ThemeSwitch, \"QdmYzj5DcAVu0o5w+zVqpirU37U=\", false, function () {\n  return [next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme];\n});\n\n_c = ThemeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeSwitch);\n\nvar _c;\n\n$RefreshReg$(_c, \"ThemeSwitch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aGVtZS1zd2l0Y2guanM/MDA1NyJdLCJuYW1lcyI6WyJUaGVtZVN3aXRjaCIsInVzZVRoZW1lIiwidGhlbWUiLCJzZXRUaGVtZSIsImRhcmsiLCJ1c2VTdGF0ZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJoYW5kbGVDaGFuZ2UiLCJuZXh0Q2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwicGFkZGluZ0JvdHRvbSIsImhlaWdodCIsImZpbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMscURBQVEsRUFEWjtBQUFBLE1BQ2hCQyxLQURnQixhQUNoQkEsS0FEZ0I7QUFBQSxNQUNUQyxRQURTLGFBQ1RBLFFBRFM7O0FBR3hCLE1BQU1DLElBQUksR0FBR0YsS0FBSyxLQUFLLE1BQVYsR0FBbUIsSUFBbkIsR0FBMEIsS0FBdkM7O0FBSHdCLGtCQUtNRywrQ0FBUSxDQUFDRCxJQUFELENBTGQ7QUFBQSxNQUtqQkUsT0FMaUI7QUFBQSxNQUtSQyxVQUxROztBQUFBLG1CQU1NRiwrQ0FBUSxDQUFDLEtBQUQsQ0FOZDtBQUFBLE1BTWpCRyxPQU5pQjtBQUFBLE1BTVJDLFVBTlE7O0FBUXhCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFdBQUQsRUFBaUI7QUFDcENKLGNBQVUsQ0FBQ0ksV0FBRCxDQUFWO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFaO0FBQ0QsR0FIRCxDQVJ3QixDQWF4Qjs7O0FBQ0FHLGtEQUFTLENBQUM7QUFBQSxXQUFNTCxVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLEdBQUQsRUFBeUIsRUFBekIsQ0FBVDtBQUVBSyxrREFBUyxDQUFDLFlBQU07QUFDZFgsWUFBUSxDQUFDRyxPQUFPLEdBQUcsTUFBSCxHQUFZLE9BQXBCLENBQVI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsT0FBRCxFQUFVSCxRQUFWLENBRk0sQ0FBVDtBQUlBLE1BQUksQ0FBQ0ssT0FBTCxFQUFjLE9BQU8sSUFBUDtBQUVkLHNCQUNFLDhEQUFDLGtFQUFEO0FBQ0EsU0FBSyxFQUFFO0FBQUNPLGNBQVEsRUFBRSxNQUFYO0FBQW1CQyxlQUFTLEVBQUUsTUFBOUI7QUFBc0NDLGNBQVEsRUFBRSxNQUFoRDtBQUF3REMsZUFBUyxFQUFFLE1BQW5FO0FBQTJFQyxtQkFBYSxFQUFFO0FBQTFGLEtBRFA7QUFFQSxTQUFLLEVBQUMsT0FGTjtBQUdBLFlBQVEsRUFBRWIsT0FIVjtBQUlBLFlBQVEsRUFBRSxvQkFBTTtBQUNkQyxnQkFBVSxDQUFDLENBQUNELE9BQUYsQ0FBVjtBQUNELEtBTkQ7QUFBQSxjQVFDQSxPQUFPLGdCQUFHLDhEQUFDLCtEQUFEO0FBQWEsV0FBSyxFQUFFO0FBQUNjLGNBQU0sRUFBRSxNQUFUO0FBQWlCQyxZQUFJLEVBQUU7QUFBdkI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILGdCQUE0RCw4REFBQyxtRUFBRDtBQUFpQixXQUFLLEVBQUU7QUFBQ0QsY0FBTSxFQUFFLE1BQVQ7QUFBaUJDLFlBQUksRUFBRTtBQUF2QjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUnBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBbENEOztHQUFNckIsVztVQUN3QkMsaUQ7OztLQUR4QkQsVztBQW9DTiwrREFBZUEsV0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdGhlbWUtc3dpdGNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnO1xuaW1wb3J0IEJyaWdodG5lc3MzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczMnO1xuaW1wb3J0IFdiU3VubnlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XYlN1bm55JztcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9Ub2dnbGVCdXR0b24nO1xuXG5jb25zdCBUaGVtZVN3aXRjaCA9ICgpID0+IHtcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XG5cbiAgY29uc3QgZGFyayA9IHRoZW1lID09PSAnZGFyaycgPyB0cnVlIDogZmFsc2U7XG5cbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoZGFyayk7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmV4dENoZWNrZWQpID0+IHtcbiAgICBzZXRDaGVja2VkKG5leHRDaGVja2VkKTtcbiAgICBjb25zb2xlLmxvZyhuZXh0Q2hlY2tlZClcbiAgfTtcblxuICAvLyBXaGVuIG1vdW50ZWQgb24gY2xpZW50LCBub3cgd2UgY2FuIHNob3cgdGhlIFVJXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRNb3VudGVkKHRydWUpLCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaGVtZShjaGVja2VkID8gJ2RhcmsnIDogJ2xpZ2h0Jyk7XG4gIH0sIFtjaGVja2VkLCBzZXRUaGVtZV0pO1xuXG4gIGlmICghbW91bnRlZCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8VG9nZ2xlQnV0dG9uXG4gICAgc3R5bGU9e3ttYXhXaWR0aDogJzI1cHgnLCBtYXhIZWlnaHQ6ICcyNXB4JywgbWluV2lkdGg6ICcyNXB4JywgbWluSGVpZ2h0OiAnMjVweCcsIHBhZGRpbmdCb3R0b206ICc1cHgnfX1cbiAgICB2YWx1ZT1cImNoZWNrXCJcbiAgICBzZWxlY3RlZD17Y2hlY2tlZH1cbiAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgc2V0Q2hlY2tlZCghY2hlY2tlZCk7XG4gICAgfX1cbiAgPlxuICAgIHtjaGVja2VkID8gPFdiU3VubnlJY29uIHN0eWxlPXt7aGVpZ2h0OiAnMTVweCcsIGZpbGw6IFwid2hpdGVcIn19Lz4gOiA8QnJpZ2h0bmVzczNJY29uIHN0eWxlPXt7aGVpZ2h0OiAnMTVweCcsIGZpbGw6IFwiYmxhY2tcIn19Lz59XG4gIDwvVG9nZ2xlQnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVTd2l0Y2g7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/theme-switch.js\n");

/***/ })

});