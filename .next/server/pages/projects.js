/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/projects";
exports.ids = ["pages/projects"];
exports.modules = {

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/page */ \"./components/page.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"@fortawesome/free-brands-svg-icons\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers */ \"./helpers.js\");\n\n\nvar _jsxFileName = \"/Users/michaelcooper/Desktop/CSC2541HF-2021.github.io/pages/projects.js\";\n\n\n\n\n\n\n\n\n\n\n\nfunction makeLink(type, dest) {\n  if (type === \"pdf\") {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n      className: \"d-flex justify-content-center\",\n      children: (0,_helpers__WEBPACK_IMPORTED_MODULE_8__.bottomTooltip)( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: dest,\n        target: \"_blank\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faFilePdf,\n          size: \"lg\"\n        }, dest, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 5\n        }, this)\n      }, dest, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 20\n      }, this), \"PDF\")\n    }, dest, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }, this);\n  } else if (type === \"code\") {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n      className: \"d-flex justify-content-center\",\n      children: (0,_helpers__WEBPACK_IMPORTED_MODULE_8__.bottomTooltip)( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: dest,\n        target: \"_blank\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCode,\n          size: \"lg\"\n        }, dest, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 5\n        }, this)\n      }, dest, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 20\n      }, this), \"Code\")\n    }, dest, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }, this);\n  } else if (type === \"blog\") {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n      className: \"d-flex justify-content-center\",\n      children: (0,_helpers__WEBPACK_IMPORTED_MODULE_8__.bottomTooltip)( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: dest,\n        target: \"_blank\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPencilAlt,\n          size: \"lg\"\n        }, dest, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 5\n        }, this)\n      }, dest, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 20\n      }, this), \"Blog Post\")\n    }, dest, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }, this);\n  } else if (type === \"arxiv\") {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n      className: \"d-flex justify-content-center\",\n      children: (0,_helpers__WEBPACK_IMPORTED_MODULE_8__.bottomTooltip)( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: dest,\n        target: \"_blank\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n          className: \"ai ai-arxiv ai-2x\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 5\n        }, this)\n      }, dest, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 20\n      }, this), \"arXiv\")\n    }, dest, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }, this);\n  } else if (type === \"genericLink\") {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n      className: \"d-flex justify-content-center\",\n      children: (0,_helpers__WEBPACK_IMPORTED_MODULE_8__.bottomTooltip)( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: dest.linkDest,\n        target: \"_blank\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faExternalLinkAlt,\n          size: \"lg\"\n        }, dest, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 5\n        }, this)\n      }, dest, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 20\n      }, this), dest.linkLabel)\n    }, dest, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }, this);\n  }\n}\n\nfunction makeCard(title, authors, description, linksData, idx, dark) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n      rel: \"stylesheet\",\n      href: \"https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n      src: \"https://kit.fontawesome.com/9d05fccfe0.js\",\n      crossOrigin: \"anonymous\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card, {\n      style: {\n        width: '100%',\n        border: \"2px solid\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Body, {\n        style: dark ? {\n          backgroundColor: 'black'\n        } : {},\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Title, {\n          children: title\n        }, idx, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 7\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Subtitle, {\n          className: \"mb-2 text-muted\",\n          children: authors\n        }, idx, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 7\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Text, {\n          children: description\n        }, idx, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 7\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {}, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 7\n          }, this), Object.entries(linksData).map(([link_type, link_dest]) => {\n            return makeLink(link_type, link_dest);\n          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {}, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 7\n          }, this)]\n        }, idx, true, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 7\n        }, this)]\n      }, idx, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 5\n      }, this)\n    }, idx, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true);\n}\n\nfunction Home() {\n  const {\n    theme,\n    _\n  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme)();\n  const dark = theme === 'dark' ? true : false; // return (\n  //   <div className=\"container\">\n  //     <Head>\n  //       <title>Michael Cooper</title>\n  //       <link rel=\"icon\" href=\"/favicon.ico\" />\n  //     </Head>\n  //     <main>\n  //       <Page>\n  //       <h3>Projects</h3>\n  //       <p>Projects page coming soon!</p>\n  //       </Page>\n  //       </main>\n  //     </div>\n  // )\n  // Pull the projects from res/projects.json\n\n  let projectsData = __webpack_require__(/*! ../res/projects.json */ \"./res/projects.json\");\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Michael Cooper\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_page__WEBPACK_IMPORTED_MODULE_2__.default, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          children: \"Projects\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 9\n        }, this), projectsData.map((projectsData, idx) => makeCard(projectsData.title, projectsData.authors, projectsData.description, projectsData.links, idx, dark))]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 136,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvcHJvamVjdHMuanM/NDQ3MSJdLCJuYW1lcyI6WyJtYWtlTGluayIsInR5cGUiLCJkZXN0IiwiYm90dG9tVG9vbHRpcCIsImZhRmlsZVBkZiIsImZhQ29kZSIsImZhUGVuY2lsQWx0IiwibGlua0Rlc3QiLCJmYUV4dGVybmFsTGlua0FsdCIsImxpbmtMYWJlbCIsIm1ha2VDYXJkIiwidGl0bGUiLCJhdXRob3JzIiwiZGVzY3JpcHRpb24iLCJsaW5rc0RhdGEiLCJpZHgiLCJkYXJrIiwid2lkdGgiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwibGlua190eXBlIiwibGlua19kZXN0IiwiSG9tZSIsInRoZW1lIiwiXyIsInVzZVRoZW1lIiwicHJvamVjdHNEYXRhIiwicmVxdWlyZSIsImxpbmtzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FDRUMsSUFERixFQUVFQyxJQUZGLEVBR0U7QUFDQSxNQUFJRCxJQUFJLEtBQUssS0FBYixFQUFvQjtBQUNsQix3QkFDQSw4REFBQyxnREFBRDtBQUFLLGVBQVMsRUFBQywrQkFBZjtBQUFBLGdCQUNDRSx1REFBYSxlQUFDO0FBQUcsWUFBSSxFQUFFRCxJQUFUO0FBQWUsY0FBTSxFQUFDLFFBQXRCO0FBQUEsK0JBQ2YsOERBQUMsMkVBQUQ7QUFDSSxjQUFJLEVBQUVFLHdFQURWO0FBRUksY0FBSSxFQUFDO0FBRlQsV0FHU0YsSUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGUsU0FBb0NBLElBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBRCxFQUtSLEtBTFE7QUFEZCxPQUFvREEsSUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBO0FBVUQsR0FYRCxNQVlLLElB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QSxNQUFJRyxZQUFZLEdBQUdDLG1CQUFPLENBQUMsaURBQUQsQ0FBMUI7O0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQUEsNkJBQ0UsOERBQUMscURBQUQ7QUFBQSxnQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxFQUdZRCxZQUFZLENBQUNQLEdBQWIsQ0FBaUIsQ0FBQ08sWUFBRCxFQUFlZCxHQUFmLEtBRWZMLFFBQVEsQ0FDSm1CLFlBQVksQ0FBQ2xCLEtBRFQsRUFFSmtCLFlBQVksQ0FBQ2pCLE9BRlQsRUFHSmlCLFlBQVksQ0FBQ2hCLFdBSFQsRUFJSmdCLFlBQVksQ0FBQ0UsS0FKVCxFQUtKaEIsR0FMSSxFQU1KQyxJQU5JLENBRlYsQ0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZSdcbmltcG9ydCB7IENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJztcbmltcG9ydCB7Um93LCBDb2x9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IGZhUGVuY2lsQWx0LCBmYUZpbGVQZGYsIGZhQ29kZSwgZmFFeHRlcm5hbExpbmtBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgeyBmYUdpdGh1YiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCJcbmltcG9ydCB7IE92ZXJsYXlUcmlnZ2VyLCBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgYm90dG9tVG9vbHRpcCB9IGZyb20gJy4uL2hlbHBlcnMnXG5cbmZ1bmN0aW9uIG1ha2VMaW5rKFxuICB0eXBlLFxuICBkZXN0XG4pIHtcbiAgaWYgKHR5cGUgPT09IFwicGRmXCIpIHtcbiAgICByZXR1cm4gKFxuICAgIDxDb2wgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcicga2V5PXtkZXN0fT5cbiAgICB7Ym90dG9tVG9vbHRpcCg8YSBocmVmPXtkZXN0fSB0YXJnZXQ9XCJfYmxhbmtcIiBrZXk9e2Rlc3R9PlxuICAgIDxGb250QXdlc29tZUljb24gXG4gICAgICAgIGljb249e2ZhRmlsZVBkZn0gXG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIGtleT17ZGVzdH0vPlxuICAgIDwvYT4sIFwiUERGXCIpfVxuICAgIDwvQ29sPlxuICAgICk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZSA9PT0gXCJjb2RlXCIpIHtcbiAgICByZXR1cm4gKFxuICAgIDxDb2wgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcicga2V5PXtkZXN0fT5cbiAgICB7Ym90dG9tVG9vbHRpcCg8YSBocmVmPXtkZXN0fSB0YXJnZXQ9XCJfYmxhbmtcIiBrZXk9e2Rlc3R9PlxuICAgIDxGb250QXdlc29tZUljb24gXG4gICAgICAgIGljb249e2ZhQ29kZX0gXG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIGtleT17ZGVzdH0vPlxuICAgIDwvYT4sIFwiQ29kZVwiKX1cbiAgICA8L0NvbD5cbiAgICApO1xuICB9XG4gIGVsc2UgaWYgKHR5cGUgPT09IFwiYmxvZ1wiKSB7XG4gICAgcmV0dXJuIChcbiAgICA8Q29sIGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInIGtleT17ZGVzdH0+XG4gICAge2JvdHRvbVRvb2x0aXAoPGEgaHJlZj17ZGVzdH0gdGFyZ2V0PVwiX2JsYW5rXCIga2V5PXtkZXN0fT5cbiAgICA8Rm9udEF3ZXNvbWVJY29uIFxuICAgICAgICBpY29uPXtmYVBlbmNpbEFsdH0gXG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIGtleT17ZGVzdH0vPlxuICAgIDwvYT4sIFwiQmxvZyBQb3N0XCIpfVxuICAgIDwvQ29sPlxuICAgICk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZSA9PT0gXCJhcnhpdlwiKSB7XG4gICAgcmV0dXJuIChcbiAgICA8Q29sIGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInIGtleT17ZGVzdH0+XG4gICAge2JvdHRvbVRvb2x0aXAoPGEgaHJlZj17ZGVzdH0gdGFyZ2V0PVwiX2JsYW5rXCIga2V5PXtkZXN0fT5cbiAgICA8aSBjbGFzc05hbWU9XCJhaSBhaS1hcnhpdiBhaS0yeFwiPjwvaT5cbiAgICA8L2E+LCBcImFyWGl2XCIpfVxuICAgIDwvQ29sPlxuICAgICk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZSA9PT0gXCJnZW5lcmljTGlua1wiKSB7XG4gICAgcmV0dXJuIChcbiAgICA8Q29sIGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInIGtleT17ZGVzdH0+XG4gICAge2JvdHRvbVRvb2x0aXAoPGEgaHJlZj17ZGVzdC5saW5rRGVzdH0gdGFyZ2V0PVwiX2JsYW5rXCIga2V5PXtkZXN0fT5cbiAgICA8Rm9udEF3ZXNvbWVJY29uIFxuICAgICAgICBpY29uPXtmYUV4dGVybmFsTGlua0FsdH0gXG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIGtleT17ZGVzdH0vPlxuICAgIDwvYT4sIGRlc3QubGlua0xhYmVsKX1cbiAgICA8L0NvbD5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VDYXJkKFxuICB0aXRsZSxcbiAgYXV0aG9ycyxcbiAgZGVzY3JpcHRpb24sXG4gIGxpbmtzRGF0YSxcbiAgaWR4LFxuICBkYXJrXG4pIHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvanBzd2Fsc2gvYWNhZGVtaWNvbnNAMS9jc3MvYWNhZGVtaWNvbnMubWluLmNzc1wiLz5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS85ZDA1ZmNjZmUwLmpzXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgXG4gICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyOiBcIjJweCBzb2xpZFwifX0ga2V5PXtpZHh9PlxuICAgIDxDYXJkLkJvZHkgc3R5bGU9eyBkYXJrID8geyBiYWNrZ3JvdW5kQ29sb3I6J2JsYWNrJ30gOiB7fX0ga2V5PXtpZHh9PlxuICAgICAgPENhcmQuVGl0bGUga2V5PXtpZHh9Pnt0aXRsZX08L0NhcmQuVGl0bGU+XG4gICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIiBrZXk9e2lkeH0+e2F1dGhvcnN9PC9DYXJkLlN1YnRpdGxlPlxuICAgICAgPENhcmQuVGV4dCBrZXk9e2lkeH0+e2Rlc2NyaXB0aW9ufTwvQ2FyZC5UZXh0PlxuICAgICAgPFJvdyBrZXk9e2lkeH0+XG4gICAgICA8Q29sIGtleT17aWR4fT48L0NvbD5cbiAgICAgIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMobGlua3NEYXRhKS5tYXAoKFtsaW5rX3R5cGUsIGxpbmtfZGVzdF0pPT57XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgbWFrZUxpbmsobGlua190eXBlLCBsaW5rX2Rlc3QpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIDxDb2wga2V5PXtpZHh9PjwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9DYXJkLkJvZHk+XG4gICAgPC9DYXJkPlxuICAgIDxicj48L2JyPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgdGhlbWUsIF8gfSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGRhcmsgPSB0aGVtZSA9PT0gJ2RhcmsnID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIC8vIHJldHVybiAoXG4gIC8vICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgLy8gICAgIDxIZWFkPlxuICAvLyAgICAgICA8dGl0bGU+TWljaGFlbCBDb29wZXI8L3RpdGxlPlxuICAvLyAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gIC8vICAgICA8L0hlYWQ+XG5cbiAgLy8gICAgIDxtYWluPlxuICAvLyAgICAgICA8UGFnZT5cbiAgLy8gICAgICAgPGgzPlByb2plY3RzPC9oMz5cbiAgLy8gICAgICAgPHA+UHJvamVjdHMgcGFnZSBjb21pbmcgc29vbiE8L3A+XG4gIC8vICAgICAgIDwvUGFnZT5cbiAgLy8gICAgICAgPC9tYWluPlxuICAvLyAgICAgPC9kaXY+XG4gIC8vIClcblxuICAvLyBQdWxsIHRoZSBwcm9qZWN0cyBmcm9tIHJlcy9wcm9qZWN0cy5qc29uXG4gIGxldCBwcm9qZWN0c0RhdGEgPSByZXF1aXJlKFwiLi4vcmVzL3Byb2plY3RzLmpzb25cIilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1pY2hhZWwgQ29vcGVyPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPFBhZ2U+XG4gICAgICAgIDxoMz5Qcm9qZWN0czwvaDM+XG4gICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNEYXRhLm1hcCgocHJvamVjdHNEYXRhLCBpZHgpID0+XG4gICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICBtYWtlQ2FyZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNEYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0RhdGEuYXV0aG9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNEYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0RhdGEubGlua3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyayAgXG4gICAgICAgICAgICAgICAgICAgICkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgPC9QYWdlPlxuICAgICAgPC9tYWluPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

/***/ }),

/***/ "./res/projects.json":
/*!***************************!*\
  !*** ./res/projects.json ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"title":"Multimodal Semantic Embeddings to Reduce Hidden Stratification in Medical Imaging Data","authors":"Kent Vainio, Michael Cooper","description":"Encoder architecture to produce semantic embeddings of x-ray images and corresponding radiological reports, with an attention-based image captioning model to enable mapping of report-free medical images into the multimodal embedding space.","links":{"pdf":"projects/multimodal_semantic_embeddings.pdf"}},{"title":"BodySLAM: Markerless Human-Object Alignment in Augmented Reality through Pose Estimation and Ray Intersection","authors":"Kent Vainio, Michael Cooper","description":"Encoder architecture to produce semantic embeddings of x-ray images and corresponding radiological reports, with an attention-based image captioning model to enable mapping of report-free medical images into the multimodal embedding space.","links":{"pdf":"projects/bodyslam.pdf"}},{"title":"Hacking for Defense (H4D) - Protecting Civilian Sites","authors":"Michael Cooper, Jason Ginsberg, Xinlan Emily Hu, Matthew Trost","description":"Sponsored by the DoD\'s Joint Artificial Intelligence Center, we collaborated with the Air Force Research Laboratory to architect a speech-to-text platform for streamlining pilot-JTAC communications during close air support operations. We presented our final report to former Secretary of Defense Jim Mattis.","links":{"genericLink":{"linkDest":"https://slideshare.net/sblank/protocol-one-h4d-2020-lessons-learned","linkLabel":"Project Report Slides"}}},{"title":"Generative Photocathode Materials Sourcing","authors":"Jason Zheng, Michael Cooper, Makena Low","description":"We present a series of generative models to learn the distribution over the structure of a photocathode given the target of minimizing its emittance value. This work has applications in sourcing materials for particle accelerator research.","links":{"pdf":"projects/generative_photocathode_materials_sourcing.pdf","code":"https://github.com/cooper-mj/Generative-Photocathode-Materials"}}]');

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/fontawesome-svg-core");;

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");;

/***/ }),

/***/ "@material-ui/icons/Brightness3":
/*!*************************************************!*\
  !*** external "@material-ui/icons/Brightness3" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Brightness3");;

/***/ }),

/***/ "@material-ui/icons/WbSunny":
/*!*********************************************!*\
  !*** external "@material-ui/icons/WbSunny" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/WbSunny");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-themes");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap");;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_material-ui_lab_esm_ToggleButton_index_js-node_modules_fortawesome_fonta-86f8ec","components_page_js"], function() { return __webpack_exec__("./pages/projects.js"); });
module.exports = __webpack_exports__;

})();