"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ui/infinite-moving-cards.jsx":
/*!*****************************************************!*\
  !*** ./src/components/ui/infinite-moving-cards.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InfiniteMovingCards: function() { return /* binding */ InfiniteMovingCards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/utils */ \"(app-pages-browser)/./src/app/lib/utils.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ InfiniteMovingCards auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst InfiniteMovingCards = (param)=>{\n    let { items, direction = \"left\", speed = \"fast\", pauseOnHover = true, className } = param;\n    _s();\n    const containerRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);\n    const scrollerRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        addAnimation();\n    });\n    const [start, setStart] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    function addAnimation() {\n        if (containerRef.current && scrollerRef.current) {\n            const scrollerContent = Array.from(scrollerRef.current.children);\n            scrollerContent.forEach((item)=>{\n                const duplicatedItem = item.cloneNode(true);\n                if (scrollerRef.current) {\n                    scrollerRef.current.appendChild(duplicatedItem);\n                }\n            });\n            getDirection();\n            getSpeed();\n            setStart(true);\n        }\n    }\n    const getDirection = ()=>{\n        if (containerRef.current) {\n            if (direction === \"left\") {\n                containerRef.current.style.setProperty(\"--animation-direction\", \"forwards\");\n            } else {\n                containerRef.current.style.setProperty(\"--animation-direction\", \"reverse\");\n            }\n        }\n    };\n    const getSpeed = ()=>{\n        if (containerRef.current) {\n            if (speed === \"fast\") {\n                containerRef.current.style.setProperty(\"--animation-duration\", \"20s\");\n            } else if (speed === \"normal\") {\n                containerRef.current.style.setProperty(\"--animation-duration\", \"40s\");\n            } else {\n                containerRef.current.style.setProperty(\"--animation-duration\", \"80s\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        className: (0,_app_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"scroller relative z-20  max-w-7xl overflow-hidden\", className),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            ref: scrollerRef,\n            className: (0,_app_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap\", start && \"animate-scroll \", pauseOnHover && \"hover:[animation-play-state:paused]\"),\n            children: items.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"w-[350px] max-w-full relative px-8 py-6 md:w-[450px]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative z-20 mt-6 flex flex-row items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex flex-col gap-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: item.src,\n                                    alt: \"corousel_image\",\n                                    width: 300,\n                                    height: 300\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\UQIDEV\\\\my-projects\\\\shopify\\\\shopify\\\\src\\\\components\\\\ui\\\\infinite-moving-cards.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\UQIDEV\\\\my-projects\\\\shopify\\\\shopify\\\\src\\\\components\\\\ui\\\\infinite-moving-cards.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\UQIDEV\\\\my-projects\\\\shopify\\\\shopify\\\\src\\\\components\\\\ui\\\\infinite-moving-cards.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\UQIDEV\\\\my-projects\\\\shopify\\\\shopify\\\\src\\\\components\\\\ui\\\\infinite-moving-cards.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, undefined)\n                }, item.title, false, {\n                    fileName: \"D:\\\\UQIDEV\\\\my-projects\\\\shopify\\\\shopify\\\\src\\\\components\\\\ui\\\\infinite-moving-cards.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\UQIDEV\\\\my-projects\\\\shopify\\\\shopify\\\\src\\\\components\\\\ui\\\\infinite-moving-cards.jsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\UQIDEV\\\\my-projects\\\\shopify\\\\shopify\\\\src\\\\components\\\\ui\\\\infinite-moving-cards.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(InfiniteMovingCards, \"jB/MF5m62Rqy7sONWbLCmM0Tkmk=\");\n_c = InfiniteMovingCards;\nvar _c;\n$RefreshReg$(_c, \"InfiniteMovingCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2luZmluaXRlLW1vdmluZy1jYXJkcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFcUM7QUFDYztBQUNwQjtBQUV4QixNQUFNSyxzQkFBc0I7UUFBQyxFQUNsQ0MsS0FBSyxFQUNMQyxZQUFZLE1BQU0sRUFDbEJDLFFBQVEsTUFBTSxFQUNkQyxlQUFlLElBQUksRUFDbkJDLFNBQVMsRUFDVjs7SUFDQyxNQUFNQyxlQUFlVixtREFBWSxDQUFDO0lBQ2xDLE1BQU1ZLGNBQWNaLG1EQUFZLENBQUM7SUFFakNDLGdEQUFTQSxDQUFDO1FBQ1JZO0lBQ0Y7SUFDQSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUM7SUFDbkMsU0FBU1c7UUFDUCxJQUFJSCxhQUFhTSxPQUFPLElBQUlKLFlBQVlJLE9BQU8sRUFBRTtZQUMvQyxNQUFNQyxrQkFBa0JDLE1BQU1DLElBQUksQ0FBQ1AsWUFBWUksT0FBTyxDQUFDSSxRQUFRO1lBRS9ESCxnQkFBZ0JJLE9BQU8sQ0FBQyxDQUFDQztnQkFDdkIsTUFBTUMsaUJBQWlCRCxLQUFLRSxTQUFTLENBQUM7Z0JBQ3RDLElBQUlaLFlBQVlJLE9BQU8sRUFBRTtvQkFDdkJKLFlBQVlJLE9BQU8sQ0FBQ1MsV0FBVyxDQUFDRjtnQkFDbEM7WUFDRjtZQUVBRztZQUNBQztZQUNBWixTQUFTO1FBQ1g7SUFDRjtJQUNBLE1BQU1XLGVBQWU7UUFDbkIsSUFBSWhCLGFBQWFNLE9BQU8sRUFBRTtZQUN4QixJQUFJVixjQUFjLFFBQVE7Z0JBQ3hCSSxhQUFhTSxPQUFPLENBQUNZLEtBQUssQ0FBQ0MsV0FBVyxDQUNwQyx5QkFDQTtZQUVKLE9BQU87Z0JBQ0xuQixhQUFhTSxPQUFPLENBQUNZLEtBQUssQ0FBQ0MsV0FBVyxDQUNwQyx5QkFDQTtZQUVKO1FBQ0Y7SUFDRjtJQUNBLE1BQU1GLFdBQVc7UUFDZixJQUFJakIsYUFBYU0sT0FBTyxFQUFFO1lBQ3hCLElBQUlULFVBQVUsUUFBUTtnQkFDcEJHLGFBQWFNLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDQyxXQUFXLENBQUMsd0JBQXdCO1lBQ2pFLE9BQU8sSUFBSXRCLFVBQVUsVUFBVTtnQkFDN0JHLGFBQWFNLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDQyxXQUFXLENBQUMsd0JBQXdCO1lBQ2pFLE9BQU87Z0JBQ0xuQixhQUFhTSxPQUFPLENBQUNZLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLHdCQUF3QjtZQUNqRTtRQUNGO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0M7UUFDQ0MsS0FBS3JCO1FBQ0xELFdBQVdWLGtEQUFFQSxDQUNYLHFEQUNBVTtrQkFHRiw0RUFBQ3VCO1lBQ0NELEtBQUtuQjtZQUNMSCxXQUFXVixrREFBRUEsQ0FDWCwwREFDQWUsU0FBUyxtQkFDVE4sZ0JBQWdCO3NCQUdqQkgsTUFBTTRCLEdBQUcsQ0FBQyxDQUFDWCxNQUFNWSxvQkFDaEIsOERBQUNDO29CQUNDMUIsV0FBVTs4QkFHViw0RUFBQ3FCO3dCQUFJckIsV0FBVTtrQ0FDYiw0RUFBQzJCOzRCQUFLM0IsV0FBVTtzQ0FDZCw0RUFBQzJCOzBDQUNDLDRFQUFDakMsa0RBQUtBO29DQUNKa0MsS0FBS2YsS0FBS2UsR0FBRztvQ0FDYkMsS0FBSTtvQ0FDSkMsT0FBTztvQ0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQVRYbEIsS0FBS21CLEtBQUs7Ozs7Ozs7Ozs7Ozs7OztBQXdDM0IsRUFBRTtHQW5IV3JDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VpL2luZmluaXRlLW1vdmluZy1jYXJkcy5qc3g/ZDQwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvYXBwL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZpbml0ZU1vdmluZ0NhcmRzID0gKHtcclxuICBpdGVtcyxcclxuICBkaXJlY3Rpb24gPSBcImxlZnRcIixcclxuICBzcGVlZCA9IFwiZmFzdFwiLFxyXG4gIHBhdXNlT25Ib3ZlciA9IHRydWUsXHJcbiAgY2xhc3NOYW1lLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHNjcm9sbGVyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWRkQW5pbWF0aW9uKCk7XHJcbiAgfSk7XHJcbiAgY29uc3QgW3N0YXJ0LCBzZXRTdGFydF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgZnVuY3Rpb24gYWRkQW5pbWF0aW9uKCkge1xyXG4gICAgaWYgKGNvbnRhaW5lclJlZi5jdXJyZW50ICYmIHNjcm9sbGVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3Qgc2Nyb2xsZXJDb250ZW50ID0gQXJyYXkuZnJvbShzY3JvbGxlclJlZi5jdXJyZW50LmNoaWxkcmVuKTtcclxuXHJcbiAgICAgIHNjcm9sbGVyQ29udGVudC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHVwbGljYXRlZEl0ZW0gPSBpdGVtLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBpZiAoc2Nyb2xsZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgc2Nyb2xsZXJSZWYuY3VycmVudC5hcHBlbmRDaGlsZChkdXBsaWNhdGVkSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGdldERpcmVjdGlvbigpO1xyXG4gICAgICBnZXRTcGVlZCgpO1xyXG4gICAgICBzZXRTdGFydCh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgZ2V0RGlyZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgaWYgKGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XHJcbiAgICAgICAgY29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXHJcbiAgICAgICAgICBcIi0tYW5pbWF0aW9uLWRpcmVjdGlvblwiLFxyXG4gICAgICAgICAgXCJmb3J3YXJkc1wiXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcclxuICAgICAgICAgIFwiLS1hbmltYXRpb24tZGlyZWN0aW9uXCIsXHJcbiAgICAgICAgICBcInJldmVyc2VcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGdldFNwZWVkID0gKCkgPT4ge1xyXG4gICAgaWYgKGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGlmIChzcGVlZCA9PT0gXCJmYXN0XCIpIHtcclxuICAgICAgICBjb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYW5pbWF0aW9uLWR1cmF0aW9uXCIsIFwiMjBzXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNwZWVkID09PSBcIm5vcm1hbFwiKSB7XHJcbiAgICAgICAgY29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWFuaW1hdGlvbi1kdXJhdGlvblwiLCBcIjQwc1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYW5pbWF0aW9uLWR1cmF0aW9uXCIsIFwiODBzXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICByZWY9e2NvbnRhaW5lclJlZn1cclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcInNjcm9sbGVyIHJlbGF0aXZlIHotMjAgIG1heC13LTd4bCBvdmVyZmxvdy1oaWRkZW5cIixcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgID5cclxuICAgICAgPHVsXHJcbiAgICAgICAgcmVmPXtzY3JvbGxlclJlZn1cclxuICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgXCIgZmxleCBtaW4tdy1mdWxsIHNocmluay0wIGdhcC00IHB5LTQgdy1tYXggZmxleC1ub3dyYXBcIixcclxuICAgICAgICAgIHN0YXJ0ICYmIFwiYW5pbWF0ZS1zY3JvbGwgXCIsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXIgJiYgXCJob3ZlcjpbYW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkXVwiXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzM1MHB4XSBtYXgtdy1mdWxsIHJlbGF0aXZlIHB4LTggcHktNiBtZDp3LVs0NTBweF1cIlxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0yMCBtdC02IGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiY29yb3VzZWxfaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XHJcbiAgICAgICAgICAgICAgICAgID48L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8YmxvY2txdW90ZT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlci1zZWxlY3Qtbm9uZSAtei0xIHBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgLWxlZnQtMC41IC10b3AtMC41IGgtW2NhbGMoMTAwJV8rXzRweCldIHctW2NhbGMoMTAwJV8rXzRweCldXCJcclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTIwIG10LTYgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiY29yb3VzZWxfaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICAgICAgICAgICAgICAgID48L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0ZXh0LXNtIGxlYWRpbmctWzEuNl0gdGV4dC1ncmF5LTQwMCBmb250LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYmxvY2txdW90ZT4gKi99XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImNuIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiSW5maW5pdGVNb3ZpbmdDYXJkcyIsIml0ZW1zIiwiZGlyZWN0aW9uIiwic3BlZWQiLCJwYXVzZU9uSG92ZXIiLCJjbGFzc05hbWUiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJzY3JvbGxlclJlZiIsImFkZEFuaW1hdGlvbiIsInN0YXJ0Iiwic2V0U3RhcnQiLCJjdXJyZW50Iiwic2Nyb2xsZXJDb250ZW50IiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiaXRlbSIsImR1cGxpY2F0ZWRJdGVtIiwiY2xvbmVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJnZXREaXJlY3Rpb24iLCJnZXRTcGVlZCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJkaXYiLCJyZWYiLCJ1bCIsIm1hcCIsImlkeCIsImxpIiwic3BhbiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/infinite-moving-cards.jsx\n"));

/***/ })

});