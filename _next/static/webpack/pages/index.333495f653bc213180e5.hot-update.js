webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prueba/SectionDrawOnDrop.js":
/*!************************************************!*\
  !*** ./components/Prueba/SectionDrawOnDrop.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_postareservas_Desktop_diegolibreros_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_postareservas_Desktop_diegolibreros_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_postareservas_Desktop_diegolibreros_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_postareservas_Desktop_diegolibreros_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_postareservas_Desktop_diegolibreros_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ \"./node_modules/@material-ui/core/styles/makeStyles.js\");\n/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./column */ \"./components/Prueba/column.js\");\n/* harmony import */ var _newItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newItem */ \"./components/Prueba/newItem.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/postareservas/Desktop/diegolibreros/components/Prueba/SectionDrawOnDrop.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_postareservas_Desktop_diegolibreros_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5___default()(function (theme) {\n  return {\n    container: {\n      position: 'relative',\n      margin: '20px 10px'\n    }\n  };\n});\n\nvar Prueba = function Prueba() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialColumns),\n      columns = _useState[0],\n      setColumns = _useState[1];\n\n  var onDragEnd = function onDragEnd(_ref) {\n    var source = _ref.source,\n        destination = _ref.destination;\n    // Make sure we have a valid destination\n    if (destination === undefined || destination === null) return null; // Make sure we're actually moving the item\n\n    if (source.droppableId === destination.droppableId && destination.index === source.index) return null; // Set start and end variables\n\n    var start = columns[source.droppableId];\n    var end = columns[destination.droppableId]; // If start is the same as end, we're in the same column\n\n    if (start === end) {\n      // Move the item within the list\n      // Start by making a new list without the dragged item\n      console.log(start);\n      var newList = start.list.filter(function (_, idx) {\n        return idx !== source.index;\n      }); // Then insert the item at the right location\n\n      newList.splice(destination.index, 0, start.list[source.index]); // Then create a new copy of the column object\n\n      var newCol = {\n        id: start.id,\n        list: newList\n      }; // Update the state\n\n      setColumns(function (state) {\n        return _objectSpread(_objectSpread({}, state), {}, Object(_Users_postareservas_Desktop_diegolibreros_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, newCol.id, newCol));\n      });\n      return null;\n    } else {\n      // If start is different from end, we need to update multiple columns\n      // Filter the start list like before\n      var newStartList = start.list.filter(function (_, idx) {\n        return idx !== source.index;\n      }); // Create a new start column\n\n      var newStartCol = {\n        id: start.id,\n        list: newStartList\n      }; // Make a new end list array\n\n      var newEndList = end.list; // Insert the item into the end list\n\n      newEndList.splice(destination.index, 0, start.list[source.index]); // Create a new end column\n\n      var newEndCol = {\n        id: end.id,\n        list: newEndList\n      }; // Update the state\n\n      setColumns(function (state) {\n        var _objectSpread3;\n\n        return _objectSpread(_objectSpread({}, state), {}, (_objectSpread3 = {}, Object(_Users_postareservas_Desktop_diegolibreros_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_objectSpread3, newStartCol.id, newStartCol), Object(_Users_postareservas_Desktop_diegolibreros_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_objectSpread3, newEndCol.id, newEndCol), _objectSpread3));\n      });\n      return null;\n    }\n  };\n\n  var addItem = /*#__PURE__*/function () {\n    var _ref3 = Object(_Users_postareservas_Desktop_diegolibreros_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_postareservas_Desktop_diegolibreros_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n      var title, description, column, idHigher, newEndCol;\n      return _Users_postareservas_Desktop_diegolibreros_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              title = _ref2.title, description = _ref2.description, column = _ref2.column;\n              idHigher = 0;\n              Object.values(columns).map(function (item) {\n                item.list.map(function (item2) {\n                  if (Number(item2.id) >= idHigher) {\n                    idHigher = Number(item2.id) + 1;\n                  }\n                });\n              });\n              column.list.unshift({\n                id: String(idHigher),\n                text: title,\n                description: description\n              });\n              newEndCol = {\n                id: column.id,\n                list: column.list\n              };\n              setColumns(function (state) {\n                return _objectSpread(_objectSpread({}, state), {}, Object(_Users_postareservas_Desktop_diegolibreros_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, newEndCol.id, newEndCol));\n              });\n              return _context.abrupt(\"return\", null);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function addItem(_x) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__[\"DragDropContext\"], {\n    onDragEnd: onDragEnd,\n    key: 'prueba',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n    container: true,\n    direction: \"row\",\n    justify: \"center\",\n    key: 'prueba-container',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }\n  }, Object.values(columns).map(function (column) {\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n      item: true,\n      xs: 12,\n      sm: 4,\n      md: 4,\n      className: classes.container,\n      key: \"\".concat(column.id, \"-grid\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 13\n      }\n    }, __jsx(_newItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      addItem: addItem,\n      column: column,\n      key: \"\".concat(column.id, \"-btn\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 15\n      }\n    }), __jsx(_column__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      column: column,\n      key: column.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 15\n      }\n    }));\n  })));\n};\n\n_s(Prueba, \"uK48ifxHj3HRNa8V67C6OZ+ijLE=\", false, function () {\n  return [useStyles];\n});\n\n_c = Prueba;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prueba);\nvar initialColumns = {\n  todo: {\n    id: \"todo\",\n    list: [{\n      id: \"1\",\n      text: \"text1\",\n      description: \" — I'll be in your neighborhood doing errands this… 1\"\n    }, {\n      id: \"2\",\n      text: \"text2\",\n      description: \" — I'll be in your neighborhood doing errands this… 2\"\n    }, {\n      id: \"3\",\n      text: \"text3\",\n      description: \" — I'll be in your neighborhood doing errands this… 3\"\n    }]\n  },\n  doing: {\n    id: \"doing\",\n    list: [{\n      id: \"4\",\n      text: \"text4\",\n      description: \" — I'll be in your neighborhood doing errands this… 4\"\n    }, {\n      id: \"5\",\n      text: \"text5\",\n      description: \" — I'll be in your neighborhood doing errands this… 5\"\n    }, {\n      id: \"6\",\n      text: \"text6\",\n      description: \" — I'll be in your neighborhood doing errands this… 6\"\n    }]\n  },\n  done: {\n    id: \"done\",\n    list: []\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Prueba\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcnVlYmEvU2VjdGlvbkRyYXdPbkRyb3AuanM/OWM2NiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjb250YWluZXIiLCJwb3NpdGlvbiIsIm1hcmdpbiIsIlBydWViYSIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsImluaXRpYWxDb2x1bW5zIiwiY29sdW1ucyIsInNldENvbHVtbnMiLCJvbkRyYWdFbmQiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsInVuZGVmaW5lZCIsImRyb3BwYWJsZUlkIiwiaW5kZXgiLCJzdGFydCIsImVuZCIsImNvbnNvbGUiLCJsb2ciLCJuZXdMaXN0IiwibGlzdCIsImZpbHRlciIsIl8iLCJpZHgiLCJzcGxpY2UiLCJuZXdDb2wiLCJpZCIsInN0YXRlIiwibmV3U3RhcnRMaXN0IiwibmV3U3RhcnRDb2wiLCJuZXdFbmRMaXN0IiwibmV3RW5kQ29sIiwiYWRkSXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb2x1bW4iLCJpZEhpZ2hlciIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJpdGVtMiIsIk51bWJlciIsInVuc2hpZnQiLCJTdHJpbmciLCJ0ZXh0IiwidG9kbyIsImRvaW5nIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywwRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxhQUFTLEVBQUU7QUFDVEMsY0FBUSxFQUFFLFVBREQ7QUFFVEMsWUFBTSxFQUFFO0FBRkM7QUFENEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBT0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxPQUFPLEdBQUdQLFNBQVMsRUFBekI7O0FBRG1CLGtCQUdX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RSxFQU1GO0FBQ0dSLFFBQUUsRUFBRSxHQURQO0FBRUdtQixVQUFJLEVBQUUsT0FGVDtBQUdHWCxpQkFBVyxFQUFFO0FBSGhCLEtBTkUsRUFXRjtBQUNHUixRQUFFLEVBQUUsR0FEUDtBQUVHbUIsVUFBSSxFQUFFLE9BRlQ7QUFHR1gsaUJBQVcsRUFBRTtBQUhoQixLQVhFO0FBRkYsR0FEZTtBQXFCckJhLE9BQUssRUFBRTtBQUNMckIsTUFBRSxFQUFFLE9BREM7QUFFTE4sUUFBSSxFQUFFLENBQ0Y7QUFDR00sUUFBRSxFQUFFLEdBRFA7QUFFR21CLFVBQUksRUFBRSxPQUZUO0FBR0dYLGlCQUFXLEVBQUU7QUFIaEIsS0FERSxFQU1GO0FBQ0dSLFFBQUUsRUFBRSxHQURQO0FBRUdtQixVQUFJLEVBQUUsT0FGVDtBQUdHWCxpQkFBVyxFQUFFO0FBSGhCLEtBTkUsRUFXRjtBQUNFUixRQUFFLEVBQUUsR0FETjtBQUVFbUIsVUFBSSxFQUFFLE9BRlI7QUFHRVgsaUJBQVcsRUFBRTtBQUhmLEtBWEU7QUFGRCxHQXJCYztBQXlDckJjLE1BQUksRUFBRTtBQUNKdEIsTUFBRSxFQUFFLE1BREE7QUFFSk4sUUFBSSxFQUFFO0FBRkY7QUF6Q2UsQ0FBdkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BydWViYS9TZWN0aW9uRHJhd09uRHJvcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzXCI7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xuaW1wb3J0IENvbHVtbiBmcm9tIFwiLi9jb2x1bW5cIjtcbmltcG9ydCBOZXdCdG5JdGVtIGZyb20gJy4vbmV3SXRlbSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBtYXJnaW46ICcyMHB4IDEwcHgnXG4gIH1cbn0pKTtcblxuY29uc3QgUHJ1ZWJhID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgW2NvbHVtbnMsIHNldENvbHVtbnNdID0gdXNlU3RhdGUoaW5pdGlhbENvbHVtbnMpO1xuXG4gIGNvbnN0IG9uRHJhZ0VuZCA9ICh7IHNvdXJjZSwgZGVzdGluYXRpb24gfSkgPT4ge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgdmFsaWQgZGVzdGluYXRpb25cbiAgICBpZiAoZGVzdGluYXRpb24gPT09IHVuZGVmaW5lZCB8fCBkZXN0aW5hdGlvbiA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UncmUgYWN0dWFsbHkgbW92aW5nIHRoZSBpdGVtXG4gICAgaWYgKFxuICAgICAgc291cmNlLmRyb3BwYWJsZUlkID09PSBkZXN0aW5hdGlvbi5kcm9wcGFibGVJZCAmJlxuICAgICAgZGVzdGluYXRpb24uaW5kZXggPT09IHNvdXJjZS5pbmRleFxuICAgIClcbiAgICAgIHJldHVybiBudWxsO1xuXG4gICAgLy8gU2V0IHN0YXJ0IGFuZCBlbmQgdmFyaWFibGVzXG4gICAgY29uc3Qgc3RhcnQgPSBjb2x1bW5zW3NvdXJjZS5kcm9wcGFibGVJZF07XG4gICAgY29uc3QgZW5kID0gY29sdW1uc1tkZXN0aW5hdGlvbi5kcm9wcGFibGVJZF07XG5cbiAgICAvLyBJZiBzdGFydCBpcyB0aGUgc2FtZSBhcyBlbmQsIHdlJ3JlIGluIHRoZSBzYW1lIGNvbHVtblxuICAgIGlmIChzdGFydCA9PT0gZW5kKSB7XG4gICAgICAvLyBNb3ZlIHRoZSBpdGVtIHdpdGhpbiB0aGUgbGlzdFxuICAgICAgLy8gU3RhcnQgYnkgbWFraW5nIGEgbmV3IGxpc3Qgd2l0aG91dCB0aGUgZHJhZ2dlZCBpdGVtXG4gICAgICBjb25zb2xlLmxvZyhzdGFydCk7XG4gICAgICBjb25zdCBuZXdMaXN0ID0gc3RhcnQubGlzdC5maWx0ZXIoKF8sIGlkeCkgPT4gaWR4ICE9PSBzb3VyY2UuaW5kZXgpO1xuXG4gICAgICAvLyBUaGVuIGluc2VydCB0aGUgaXRlbSBhdCB0aGUgcmlnaHQgbG9jYXRpb25cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwLCBzdGFydC5saXN0W3NvdXJjZS5pbmRleF0pO1xuXG4gICAgICAvLyBUaGVuIGNyZWF0ZSBhIG5ldyBjb3B5IG9mIHRoZSBjb2x1bW4gb2JqZWN0XG4gICAgICBjb25zdCBuZXdDb2wgPSB7XG4gICAgICAgIGlkOiBzdGFydC5pZCxcbiAgICAgICAgbGlzdDogbmV3TGlzdFxuICAgICAgfTtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBzdGF0ZVxuICAgICAgc2V0Q29sdW1ucygoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCBbbmV3Q29sLmlkXTogbmV3Q29sIH0pKTtcbiAgICAgIHJldHVybiBudWxsO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gSWYgc3RhcnQgaXMgZGlmZmVyZW50IGZyb20gZW5kLCB3ZSBuZWVkIHRvIHVwZGF0ZSBtdWx0aXBsZSBjb2x1bW5zXG4gICAgICAvLyBGaWx0ZXIgdGhlIHN0YXJ0IGxpc3QgbGlrZSBiZWZvcmVcbiAgICAgIGNvbnN0IG5ld1N0YXJ0TGlzdCA9IHN0YXJ0Lmxpc3QuZmlsdGVyKChfLCBpZHgpID0+IGlkeCAhPT0gc291cmNlLmluZGV4KTtcblxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IHN0YXJ0IGNvbHVtblxuICAgICAgY29uc3QgbmV3U3RhcnRDb2wgPSB7XG4gICAgICAgIGlkOiBzdGFydC5pZCxcbiAgICAgICAgbGlzdDogbmV3U3RhcnRMaXN0XG4gICAgICB9O1xuXG4gICAgICAvLyBNYWtlIGEgbmV3IGVuZCBsaXN0IGFycmF5XG4gICAgICBjb25zdCBuZXdFbmRMaXN0ID0gZW5kLmxpc3Q7XG5cbiAgICAgIC8vIEluc2VydCB0aGUgaXRlbSBpbnRvIHRoZSBlbmQgbGlzdFxuICAgICAgbmV3RW5kTGlzdC5zcGxpY2UoZGVzdGluYXRpb24uaW5kZXgsIDAsIHN0YXJ0Lmxpc3Rbc291cmNlLmluZGV4XSk7XG5cbiAgICAgIC8vIENyZWF0ZSBhIG5ldyBlbmQgY29sdW1uXG4gICAgICBjb25zdCBuZXdFbmRDb2wgPSB7XG4gICAgICAgIGlkOiBlbmQuaWQsXG4gICAgICAgIGxpc3Q6IG5ld0VuZExpc3RcbiAgICAgIH07XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgIHNldENvbHVtbnMoKHN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW25ld1N0YXJ0Q29sLmlkXTogbmV3U3RhcnRDb2wsXG4gICAgICAgIFtuZXdFbmRDb2wuaWRdOiBuZXdFbmRDb2xcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRJdGVtID0gYXN5bmMgKHt0aXRsZSwgZGVzY3JpcHRpb24sIGNvbHVtbn0pID0+IHtcbiAgICBsZXQgaWRIaWdoZXIgPSAwO1xuICAgIE9iamVjdC52YWx1ZXMoY29sdW1ucykubWFwKChpdGVtKT0+e1xuICAgICAgaXRlbS5saXN0Lm1hcCgoaXRlbTIpPT57XG4gICAgICAgIGlmKE51bWJlcihpdGVtMi5pZCkgPj0gaWRIaWdoZXIpe1xuICAgICAgICAgIGlkSGlnaGVyID0gTnVtYmVyKGl0ZW0yLmlkKSsxO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KSBcbiAgICBjb2x1bW4ubGlzdC51bnNoaWZ0KHtpZDpTdHJpbmcoaWRIaWdoZXIpLCB0ZXh0OiB0aXRsZSwgZGVzY3JpcHRpb259KVxuICAgIGNvbnN0IG5ld0VuZENvbCA9IHtcbiAgICAgIGlkOiBjb2x1bW4uaWQsXG4gICAgICBsaXN0OiBjb2x1bW4ubGlzdFxuICAgIH07XG4gICAgc2V0Q29sdW1ucygoc3RhdGUpID0+ICh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIFtuZXdFbmRDb2wuaWRdOiBuZXdFbmRDb2xcbiAgICB9KSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gXG5cbiAgcmV0dXJuIChcbiAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17b25EcmFnRW5kfSBrZXk9eydwcnVlYmEnfT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249e1wicm93XCJ9IGp1c3RpZnk9e1wiY2VudGVyXCJ9IGtleT17J3BydWViYS1jb250YWluZXInfT5cbiAgICAgICAge09iamVjdC52YWx1ZXMoY29sdW1ucykubWFwKChjb2x1bW4pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWQgXG4gICAgICAgICAgICAgICBpdGVtIFxuICAgICAgICAgICAgICAgeHM9ezEyfSBcbiAgICAgICAgICAgICAgIHNtPXs0fSBcbiAgICAgICAgICAgICAgIG1kPXs0fSBcbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9XG4gICAgICAgICAgICAgICBrZXk9e2Ake2NvbHVtbi5pZH0tZ3JpZGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxOZXdCdG5JdGVtIGFkZEl0ZW09e2FkZEl0ZW19IGNvbHVtbj17Y29sdW1ufSAga2V5PXtgJHtjb2x1bW4uaWR9LWJ0bmB9Lz5cbiAgICAgICAgICAgICAgPENvbHVtbiBcbiAgICAgICAgICAgICAgICAgY29sdW1uPXtjb2x1bW59IFxuICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pZH0gXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9EcmFnRHJvcENvbnRleHQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcnVlYmE7XG5cbmNvbnN0IGluaXRpYWxDb2x1bW5zID0ge1xuICB0b2RvOiB7XG4gICAgaWQ6IFwidG9kb1wiLFxuICAgIGxpc3Q6IFtcbiAgICAgICAgeyBcbiAgICAgICAgICAgaWQ6IFwiMVwiLCBcbiAgICAgICAgICAgdGV4dDogXCJ0ZXh0MVwiLFxuICAgICAgICAgICBkZXNjcmlwdGlvbjogXCIg4oCUIEknbGwgYmUgaW4geW91ciBuZWlnaGJvcmhvb2QgZG9pbmcgZXJyYW5kcyB0aGlz4oCmIDFcIiBcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgIGlkOiBcIjJcIiwgXG4gICAgICAgICAgIHRleHQ6IFwidGV4dDJcIixcbiAgICAgICAgICAgZGVzY3JpcHRpb246IFwiIOKAlCBJJ2xsIGJlIGluIHlvdXIgbmVpZ2hib3Job29kIGRvaW5nIGVycmFuZHMgdGhpc+KApiAyXCIgIFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICBpZDogXCIzXCIsIFxuICAgICAgICAgICB0ZXh0OiBcInRleHQzXCIsXG4gICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIiDigJQgSSdsbCBiZSBpbiB5b3VyIG5laWdoYm9yaG9vZCBkb2luZyBlcnJhbmRzIHRoaXPigKYgM1wiICBcbiAgICAgICAgfVxuICAgIF1cbiAgfSxcbiAgZG9pbmc6IHtcbiAgICBpZDogXCJkb2luZ1wiLFxuICAgIGxpc3Q6IFtcbiAgICAgICAgeyBcbiAgICAgICAgICAgaWQ6IFwiNFwiLCBcbiAgICAgICAgICAgdGV4dDogXCJ0ZXh0NFwiLFxuICAgICAgICAgICBkZXNjcmlwdGlvbjogXCIg4oCUIEknbGwgYmUgaW4geW91ciBuZWlnaGJvcmhvb2QgZG9pbmcgZXJyYW5kcyB0aGlz4oCmIDRcIiAgXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgIGlkOiBcIjVcIiwgXG4gICAgICAgICAgIHRleHQ6IFwidGV4dDVcIixcbiAgICAgICAgICAgZGVzY3JpcHRpb246IFwiIOKAlCBJJ2xsIGJlIGluIHlvdXIgbmVpZ2hib3Job29kIGRvaW5nIGVycmFuZHMgdGhpc+KApiA1XCIgIFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIGlkOiBcIjZcIiwgXG4gICAgICAgICAgdGV4dDogXCJ0ZXh0NlwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIiDigJQgSSdsbCBiZSBpbiB5b3VyIG5laWdoYm9yaG9vZCBkb2luZyBlcnJhbmRzIHRoaXPigKYgNlwiICBcbiAgICAgICAgfVxuICAgIF1cbiAgfSxcbiAgZG9uZToge1xuICAgIGlkOiBcImRvbmVcIixcbiAgICBsaXN0OiBbXVxuICB9XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Prueba/SectionDrawOnDrop.js\n");

/***/ })

})