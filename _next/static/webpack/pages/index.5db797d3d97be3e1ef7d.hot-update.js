webpackHotUpdate_N_E("pages/index",{

/***/ "./styles/jss/profilePage.js":
/*!***********************************!*\
  !*** ./styles/jss/profilePage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_postareservas_Desktop_diegolibreros_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nextjs-material-kit.js */ \"./styles/jss/nextjs-material-kit.js\");\n/* harmony import */ var _imageStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageStyles.js */ \"./styles/jss/imageStyles.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_postareservas_Desktop_diegolibreros_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar profilePageStyle = _objectSpread(_objectSpread({\n  container: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"],\n  containerView: _objectSpread({\n    zIndex: \"12\",\n    color: \"#FFFFFF\"\n  }, _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"]),\n  profile: {\n    textAlign: \"center\",\n    \"& img\": {\n      maxWidth: \"160px\",\n      width: \"100%\",\n      margin: \"0 auto\",\n      transform: \"translate3d(0, -50%, 0)\"\n    }\n  },\n  description: {\n    margin: \"1.071rem auto 0\",\n    maxWidth: \"600px\",\n    color: \"#999\",\n    textAlign: \"center !important\"\n  },\n  name: {\n    marginTop: \"-80px\"\n  }\n}, _imageStyles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), {}, {\n  main: {\n    background: \"#FFFFFF\",\n    position: \"relative\",\n    zIndex: \"3\"\n  },\n  mainRaised: {\n    margin: \"-60px 30px 0px\",\n    borderRadius: \"6px\",\n    boxShadow: \"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)\"\n  },\n  titleView: _objectSpread(_objectSpread({}, _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__[\"title\"]), {}, {\n    display: \"inline-block\",\n    position: \"relative\",\n    marginTop: \"30px\",\n    minHeight: \"32px\",\n    color: \"#FFFFFF\",\n    textDecoration: \"none\"\n  }),\n  title: _objectSpread(_objectSpread({}, _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__[\"title\"]), {}, {\n    display: \"inline-block\",\n    position: \"relative\",\n    marginTop: \"30px\",\n    minHeight: \"32px\",\n    textDecoration: \"none\"\n  }),\n  socials: {\n    marginTop: \"0\",\n    width: \"100%\",\n    transform: \"none\",\n    left: \"0\",\n    top: \"0\",\n    height: \"100%\",\n    lineHeight: \"41px\",\n    fontSize: \"20px\",\n    color: \"#999\"\n  },\n  navWrapper: {\n    margin: \"20px auto 50px auto\",\n    textAlign: \"center\"\n  },\n  containerGrid: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    justifyContent: 'center',\n    alignItems: 'flex-start'\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (profilePageStyle);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2pzcy9wcm9maWxlUGFnZS5qcz85MTgzIl0sIm5hbWVzIjpbInByb2ZpbGVQYWdlU3R5bGUiLCJjb250YWluZXIiLCJjb250YWluZXJWaWV3IiwiekluZGV4IiwiY29sb3IiLCJwcm9maWxlIiwidGV4dEFsaWduIiwibWF4V2lkdGgiLCJ3aWR0aCIsIm1hcmdpbiIsInRyYW5zZm9ybSIsImRlc2NyaXB0aW9uIiwibmFtZSIsIm1hcmdpblRvcCIsImltYWdlc1N0eWxlIiwibWFpbiIsImJhY2tncm91bmQiLCJwb3NpdGlvbiIsIm1haW5SYWlzZWQiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJ0aXRsZVZpZXciLCJ0aXRsZSIsImRpc3BsYXkiLCJtaW5IZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsInNvY2lhbHMiLCJsZWZ0IiwidG9wIiwiaGVpZ2h0IiwibGluZUhlaWdodCIsImZvbnRTaXplIiwibmF2V3JhcHBlciIsImNvbnRhaW5lckdyaWQiLCJmbGV4V3JhcCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsZ0JBQWdCO0FBQ3BCQyxXQUFTLEVBQVRBLGlFQURvQjtBQUVwQkMsZUFBYTtBQUNYQyxVQUFNLEVBQUUsSUFERztBQUVYQyxTQUFLLEVBQUU7QUFGSSxLQUdSSCxpRUFIUSxDQUZPO0FBT3BCSSxTQUFPLEVBQUU7QUFDUEMsYUFBUyxFQUFFLFFBREo7QUFFUCxhQUFTO0FBQ1BDLGNBQVEsRUFBRSxPQURIO0FBRVBDLFdBQUssRUFBRSxNQUZBO0FBR1BDLFlBQU0sRUFBRSxRQUhEO0FBSVBDLGVBQVMsRUFBRTtBQUpKO0FBRkYsR0FQVztBQWdCcEJDLGFBQVcsRUFBRTtBQUNYRixVQUFNLEVBQUUsaUJBREc7QUFFWEYsWUFBUSxFQUFFLE9BRkM7QUFHWEgsU0FBSyxFQUFFLE1BSEk7QUFJWEUsYUFBUyxFQUFFO0FBSkEsR0FoQk87QUFzQnBCTSxNQUFJLEVBQUU7QUFDSkMsYUFBUyxFQUFFO0FBRFA7QUF0QmMsR0F5QmpCQyx1REF6QmlCO0FBMEJwQkMsTUFBSSxFQUFFO0FBQ0pDLGNBQVUsRUFBRSxTQURSO0FBRUpDLFlBQVEsRUFBRSxVQUZOO0FBR0pkLFVBQU0sRUFBRTtBQUhKLEdBMUJjO0FBK0JwQmUsWUFBVSxFQUFFO0FBQ1ZULFVBQU0sRUFBRSxnQkFERTtBQUVWVSxnQkFBWSxFQUFFLEtBRko7QUFHVkMsYUFBUyxFQUNQO0FBSlEsR0EvQlE7QUFxQ3BCQyxXQUFTLGtDQUNKQyw2REFESTtBQUVQQyxXQUFPLEVBQUUsY0FGRjtBQUdQTixZQUFRLEVBQUUsVUFISDtBQUlQSixhQUFTLEVBQUUsTUFKSjtBQUtQVyxhQUFTLEVBQUUsTUFMSjtBQU1QcEIsU0FBSyxFQUFFLFNBTkE7QUFPUHFCLGtCQUFjLEVBQUU7QUFQVCxJQXJDVztBQThDcEJILE9BQUssa0NBQ0FBLDZEQURBO0FBRUhDLFdBQU8sRUFBRSxjQUZOO0FBR0hOLFlBQVEsRUFBRSxVQUhQO0FBSUhKLGFBQVMsRUFBRSxNQUpSO0FBS0hXLGFBQVMsRUFBRSxNQUxSO0FBTUhDLGtCQUFjLEVBQUU7QUFOYixJQTlDZTtBQXNEcEJDLFNBQU8sRUFBRTtBQUNQYixhQUFTLEVBQUUsR0FESjtBQUVQTCxTQUFLLEVBQUUsTUFGQTtBQUdQRSxhQUFTLEVBQUUsTUFISjtBQUlQaUIsUUFBSSxFQUFFLEdBSkM7QUFLUEMsT0FBRyxFQUFFLEdBTEU7QUFNUEMsVUFBTSxFQUFFLE1BTkQ7QUFPUEMsY0FBVSxFQUFFLE1BUEw7QUFRUEMsWUFBUSxFQUFFLE1BUkg7QUFTUDNCLFNBQUssRUFBRTtBQVRBLEdBdERXO0FBaUVwQjRCLFlBQVUsRUFBRTtBQUNWdkIsVUFBTSxFQUFFLHFCQURFO0FBRVZILGFBQVMsRUFBRTtBQUZELEdBakVRO0FBcUVwQjJCLGVBQWEsRUFBRTtBQUNiVixXQUFPLEVBQUUsTUFESTtBQUViVyxZQUFRLEVBQUUsTUFGRztBQUdiQyxrQkFBYyxFQUFFLFFBSEg7QUFJYkMsY0FBVSxFQUFFO0FBSkM7QUFyRUssRUFBdEI7O0FBNkVlcEMsK0VBQWYiLCJmaWxlIjoiLi9zdHlsZXMvanNzL3Byb2ZpbGVQYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udGFpbmVyLCB0aXRsZSB9IGZyb20gXCIuL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcblxuaW1wb3J0IGltYWdlc1N0eWxlIGZyb20gXCIuL2ltYWdlU3R5bGVzLmpzXCI7XG5cbmNvbnN0IHByb2ZpbGVQYWdlU3R5bGUgPSB7XG4gIGNvbnRhaW5lcixcbiAgY29udGFpbmVyVmlldzoge1xuICAgIHpJbmRleDogXCIxMlwiLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAuLi5jb250YWluZXJcbiAgfSxcbiAgcHJvZmlsZToge1xuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBcIiYgaW1nXCI6IHtcbiAgICAgIG1heFdpZHRoOiBcIjE2MHB4XCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoMCwgLTUwJSwgMClcIlxuICAgIH1cbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBtYXJnaW46IFwiMS4wNzFyZW0gYXV0byAwXCIsXG4gICAgbWF4V2lkdGg6IFwiNjAwcHhcIixcbiAgICBjb2xvcjogXCIjOTk5XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlciAhaW1wb3J0YW50XCJcbiAgfSxcbiAgbmFtZToge1xuICAgIG1hcmdpblRvcDogXCItODBweFwiXG4gIH0sXG4gIC4uLmltYWdlc1N0eWxlLFxuICBtYWluOiB7XG4gICAgYmFja2dyb3VuZDogXCIjRkZGRkZGXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB6SW5kZXg6IFwiM1wiXG4gIH0sXG4gIG1haW5SYWlzZWQ6IHtcbiAgICBtYXJnaW46IFwiLTYwcHggMzBweCAwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiXG4gIH0sXG4gIHRpdGxlVmlldzoge1xuICAgIC4uLnRpdGxlLFxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxuICAgIG1pbkhlaWdodDogXCIzMnB4XCIsXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIlxuICB9LFxuICB0aXRsZToge1xuICAgIC4uLnRpdGxlLFxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxuICAgIG1pbkhlaWdodDogXCIzMnB4XCIsXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiXG4gIH0sXG4gIHNvY2lhbHM6IHtcbiAgICBtYXJnaW5Ub3A6IFwiMFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxuICAgIGxlZnQ6IFwiMFwiLFxuICAgIHRvcDogXCIwXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjQxcHhcIixcbiAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgY29sb3I6IFwiIzk5OVwiXG4gIH0sXG4gIG5hdldyYXBwZXI6IHtcbiAgICBtYXJnaW46IFwiMjBweCBhdXRvIDUwcHggYXV0b1wiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICB9LFxuICBjb250YWluZXJHcmlkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0J1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9maWxlUGFnZVN0eWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/jss/profilePage.js\n");

/***/ })

})