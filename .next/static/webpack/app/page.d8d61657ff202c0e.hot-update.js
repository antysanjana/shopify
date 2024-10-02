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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InfiniteMovingCards: function() { return /* binding */ InfiniteMovingCards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/utils */ \"(app-pages-browser)/./src/app/lib/utils.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ InfiniteMovingCards auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst InfiniteMovingCards = (param)=>{\n    let { items, direction = \"left\", speed = \"slow\", pauseOnHover = true, className } = param;\n    _s();\n    const containerRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);\n    const scrollerRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        addAnimation();\n    });\n    const [start, setStart] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    function addAnimation() {\n        if (containerRef.current && scrollerRef.current) {\n            const scrollerContent = Array.from(scrollerRef.current.children);\n            scrollerContent.forEach((item)=>{\n                const duplicatedItem = item.cloneNode(true);\n                if (scrollerRef.current) {\n                    scrollerRef.current.appendChild(duplicatedItem);\n                }\n            });\n            getDirection();\n            getSpeed();\n            setStart(true);\n        }\n    }\n    const getDirection = ()=>{\n        if (containerRef.current) {\n            if (direction === \"left\") {\n                containerRef.current.style.setProperty(\"--animation-direction\", \"forwards\");\n            } else {\n                containerRef.current.style.setProperty(\"--animation-direction\", \"reverse\");\n            }\n        }\n    };\n    const getSpeed = ()=>{\n        if (containerRef.current) {\n            if (speed === \"fast\") {\n                containerRef.current.style.setProperty(\"--animation-duration\", \"20s\");\n            } else if (speed === \"normal\") {\n                containerRef.current.style.setProperty(\"--animation-duration\", \"40s\");\n            } else {\n                containerRef.current.style.setProperty(\"--animation-duration\", \"80s\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        className: (0,_app_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"scroller relative z-20  max-w-9xl overflow-hidden\", className),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            ref: scrollerRef,\n            className: (0,_app_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap\", start && \"animate-scroll \", pauseOnHover && \"hover:[animation-play-state:paused]\"),\n            children: items.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"w-[350px] max-w-full relative px-8 py-6 md:w-[450px]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative z-20 mt-6 flex flex-row items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex flex-col gap-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        src: item.src,\n                                        alt: \"corousel_image\",\n                                        width: 400,\n                                        height: 400\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\UQIDEV\\\\my-projects\\\\shopify\\\\shopify\\\\src\\\\components\\\\ui\\\\infinite-moving-cards.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\UQIDEV\\\\my-projects\\\\shopify\\\\shopify\\\\src\\\\components\\\\ui\\\\infinite-moving-cards.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\UQIDEV\\\\my-projects\\\\shopify\\\\shopify\\\\src\\\\components\\\\ui\\\\infinite-moving-cards.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\UQIDEV\\\\my-projects\\\\shopify\\\\shopify\\\\src\\\\components\\\\ui\\\\infinite-moving-cards.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\UQIDEV\\\\my-projects\\\\shopify\\\\shopify\\\\src\\\\components\\\\ui\\\\infinite-moving-cards.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, undefined)\n                }, item.title, false, {\n                    fileName: \"D:\\\\UQIDEV\\\\my-projects\\\\shopify\\\\shopify\\\\src\\\\components\\\\ui\\\\infinite-moving-cards.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\UQIDEV\\\\my-projects\\\\shopify\\\\shopify\\\\src\\\\components\\\\ui\\\\infinite-moving-cards.jsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\UQIDEV\\\\my-projects\\\\shopify\\\\shopify\\\\src\\\\components\\\\ui\\\\infinite-moving-cards.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(InfiniteMovingCards, \"jB/MF5m62Rqy7sONWbLCmM0Tkmk=\");\n_c = InfiniteMovingCards;\nvar _c;\n$RefreshReg$(_c, \"InfiniteMovingCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2luZmluaXRlLW1vdmluZy1jYXJkcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFcUM7QUFDYztBQUNwQjtBQUV4QixNQUFNSyxzQkFBc0I7UUFBQyxFQUNsQ0MsS0FBSyxFQUNMQyxZQUFZLE1BQU0sRUFDbEJDLFFBQVEsTUFBTSxFQUNkQyxlQUFlLElBQUksRUFDbkJDLFNBQVMsRUFDVjs7SUFDQyxNQUFNQyxlQUFlVixtREFBWSxDQUFDO0lBQ2xDLE1BQU1ZLGNBQWNaLG1EQUFZLENBQUM7SUFFakNDLGdEQUFTQSxDQUFDO1FBQ1JZO0lBQ0Y7SUFDQSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUM7SUFDbkMsU0FBU1c7UUFDUCxJQUFJSCxhQUFhTSxPQUFPLElBQUlKLFlBQVlJLE9BQU8sRUFBRTtZQUMvQyxNQUFNQyxrQkFBa0JDLE1BQU1DLElBQUksQ0FBQ1AsWUFBWUksT0FBTyxDQUFDSSxRQUFRO1lBRS9ESCxnQkFBZ0JJLE9BQU8sQ0FBQyxDQUFDQztnQkFDdkIsTUFBTUMsaUJBQWlCRCxLQUFLRSxTQUFTLENBQUM7Z0JBQ3RDLElBQUlaLFlBQVlJLE9BQU8sRUFBRTtvQkFDdkJKLFlBQVlJLE9BQU8sQ0FBQ1MsV0FBVyxDQUFDRjtnQkFDbEM7WUFDRjtZQUVBRztZQUNBQztZQUNBWixTQUFTO1FBQ1g7SUFDRjtJQUNBLE1BQU1XLGVBQWU7UUFDbkIsSUFBSWhCLGFBQWFNLE9BQU8sRUFBRTtZQUN4QixJQUFJVixjQUFjLFFBQVE7Z0JBQ3hCSSxhQUFhTSxPQUFPLENBQUNZLEtBQUssQ0FBQ0MsV0FBVyxDQUNwQyx5QkFDQTtZQUVKLE9BQU87Z0JBQ0xuQixhQUFhTSxPQUFPLENBQUNZLEtBQUssQ0FBQ0MsV0FBVyxDQUNwQyx5QkFDQTtZQUVKO1FBQ0Y7SUFDRjtJQUNBLE1BQU1GLFdBQVc7UUFDZixJQUFJakIsYUFBYU0sT0FBTyxFQUFFO1lBQ3hCLElBQUlULFVBQVUsUUFBUTtnQkFDcEJHLGFBQWFNLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDQyxXQUFXLENBQUMsd0JBQXdCO1lBQ2pFLE9BQU8sSUFBSXRCLFVBQVUsVUFBVTtnQkFDN0JHLGFBQWFNLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDQyxXQUFXLENBQUMsd0JBQXdCO1lBQ2pFLE9BQU87Z0JBQ0xuQixhQUFhTSxPQUFPLENBQUNZLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLHdCQUF3QjtZQUNqRTtRQUNGO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0M7UUFDQ0MsS0FBS3JCO1FBQ0xELFdBQVdWLGtEQUFFQSxDQUNYLHFEQUNBVTtrQkFHRiw0RUFBQ3VCO1lBQ0NELEtBQUtuQjtZQUNMSCxXQUFXVixrREFBRUEsQ0FDWCwwREFDQWUsU0FBUyxtQkFDVE4sZ0JBQWdCO3NCQUdqQkgsTUFBTTRCLEdBQUcsQ0FBQyxDQUFDWCxNQUFNWSxvQkFDaEIsOERBQUNDO29CQUNDMUIsV0FBVTs4QkFHViw0RUFBQzJCO2tDQUNDLDRFQUFDTjs0QkFBSXJCLFdBQVU7c0NBQ2IsNEVBQUM0QjtnQ0FBSzVCLFdBQVU7MENBQ2QsNEVBQUM0Qjs4Q0FDQyw0RUFBQ2xDLGtEQUFLQTt3Q0FDSm1DLEtBQUtoQixLQUFLZ0IsR0FBRzt3Q0FDYkMsS0FBSTt3Q0FDSkMsT0FBTzt3Q0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBVmJuQixLQUFLb0IsS0FBSzs7Ozs7Ozs7Ozs7Ozs7O0FBMEMzQixFQUFFO0dBckhXdEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdWkvaW5maW5pdGUtbW92aW5nLWNhcmRzLmpzeD9kNDBkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9hcHAvbGliL3V0aWxzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZmluaXRlTW92aW5nQ2FyZHMgPSAoe1xyXG4gIGl0ZW1zLFxyXG4gIGRpcmVjdGlvbiA9IFwibGVmdFwiLFxyXG4gIHNwZWVkID0gXCJzbG93XCIsXHJcbiAgcGF1c2VPbkhvdmVyID0gdHJ1ZSxcclxuICBjbGFzc05hbWUsXHJcbn0pID0+IHtcclxuICBjb25zdCBjb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgc2Nyb2xsZXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhZGRBbmltYXRpb24oKTtcclxuICB9KTtcclxuICBjb25zdCBbc3RhcnQsIHNldFN0YXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBmdW5jdGlvbiBhZGRBbmltYXRpb24oKSB7XHJcbiAgICBpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQgJiYgc2Nyb2xsZXJSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBzY3JvbGxlckNvbnRlbnQgPSBBcnJheS5mcm9tKHNjcm9sbGVyUmVmLmN1cnJlbnQuY2hpbGRyZW4pO1xyXG5cclxuICAgICAgc2Nyb2xsZXJDb250ZW50LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBkdXBsaWNhdGVkSXRlbSA9IGl0ZW0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIGlmIChzY3JvbGxlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICBzY3JvbGxlclJlZi5jdXJyZW50LmFwcGVuZENoaWxkKGR1cGxpY2F0ZWRJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZ2V0RGlyZWN0aW9uKCk7XHJcbiAgICAgIGdldFNwZWVkKCk7XHJcbiAgICAgIHNldFN0YXJ0KHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBnZXREaXJlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcclxuICAgICAgICBjb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcclxuICAgICAgICAgIFwiLS1hbmltYXRpb24tZGlyZWN0aW9uXCIsXHJcbiAgICAgICAgICBcImZvcndhcmRzXCJcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFxyXG4gICAgICAgICAgXCItLWFuaW1hdGlvbi1kaXJlY3Rpb25cIixcclxuICAgICAgICAgIFwicmV2ZXJzZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgZ2V0U3BlZWQgPSAoKSA9PiB7XHJcbiAgICBpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgaWYgKHNwZWVkID09PSBcImZhc3RcIikge1xyXG4gICAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1hbmltYXRpb24tZHVyYXRpb25cIiwgXCIyMHNcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3BlZWQgPT09IFwibm9ybWFsXCIpIHtcclxuICAgICAgICBjb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYW5pbWF0aW9uLWR1cmF0aW9uXCIsIFwiNDBzXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1hbmltYXRpb24tZHVyYXRpb25cIiwgXCI4MHNcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17Y29udGFpbmVyUmVmfVxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwic2Nyb2xsZXIgcmVsYXRpdmUgei0yMCAgbWF4LXctOXhsIG92ZXJmbG93LWhpZGRlblwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgPlxyXG4gICAgICA8dWxcclxuICAgICAgICByZWY9e3Njcm9sbGVyUmVmfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICBcIiBmbGV4IG1pbi13LWZ1bGwgc2hyaW5rLTAgZ2FwLTQgcHktNCB3LW1heCBmbGV4LW5vd3JhcFwiLFxyXG4gICAgICAgICAgc3RhcnQgJiYgXCJhbmltYXRlLXNjcm9sbCBcIixcclxuICAgICAgICAgIHBhdXNlT25Ib3ZlciAmJiBcImhvdmVyOlthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWRdXCJcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaWR4KSA9PiAoXHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bMzUwcHhdIG1heC13LWZ1bGwgcmVsYXRpdmUgcHgtOCBweS02IG1kOnctWzQ1MHB4XVwiXHJcbiAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJsb2NrcXVvdGU+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTIwIG10LTYgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiY29yb3VzZWxfaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfVxyXG4gICAgICAgICAgICAgICAgICAgID48L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYmxvY2txdW90ZT5cclxuICAgICAgICAgICAgey8qIDxibG9ja3F1b3RlPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyLXNlbGVjdC1ub25lIC16LTEgcG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSAtbGVmdC0wLjUgLXRvcC0wLjUgaC1bY2FsYygxMDAlXytfNHB4KV0gdy1bY2FsYygxMDAlXytfNHB4KV1cIlxyXG4gICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMjAgbXQtNiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjb3JvdXNlbF9pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIHRleHQtc20gbGVhZGluZy1bMS42XSB0ZXh0LWdyYXktNDAwIGZvbnQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9ibG9ja3F1b3RlPiAqL31cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiY24iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJJbmZpbml0ZU1vdmluZ0NhcmRzIiwiaXRlbXMiLCJkaXJlY3Rpb24iLCJzcGVlZCIsInBhdXNlT25Ib3ZlciIsImNsYXNzTmFtZSIsImNvbnRhaW5lclJlZiIsInVzZVJlZiIsInNjcm9sbGVyUmVmIiwiYWRkQW5pbWF0aW9uIiwic3RhcnQiLCJzZXRTdGFydCIsImN1cnJlbnQiLCJzY3JvbGxlckNvbnRlbnQiLCJBcnJheSIsImZyb20iLCJjaGlsZHJlbiIsImZvckVhY2giLCJpdGVtIiwiZHVwbGljYXRlZEl0ZW0iLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsImdldERpcmVjdGlvbiIsImdldFNwZWVkIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImRpdiIsInJlZiIsInVsIiwibWFwIiwiaWR4IiwibGkiLCJibG9ja3F1b3RlIiwic3BhbiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/infinite-moving-cards.jsx\n"));

/***/ })

});