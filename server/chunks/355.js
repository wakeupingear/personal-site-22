exports.id = 355;
exports.ids = [355];
exports.modules = {

/***/ 5406:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "pages_page__XGKsM",
	"defaultStyles": "pages_defaultStyles__j_dPu"
};


/***/ }),

/***/ 4355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T3": () => (/* binding */ Page),
/* harmony export */   "Uv": () => (/* binding */ HomePage)
/* harmony export */ });
/* unused harmony export homeScroll */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8293);
/* harmony import */ var _pages_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5406);
/* harmony import */ var _pages_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_module_css__WEBPACK_IMPORTED_MODULE_3__);




function Container({ children , defaultContainer =true , defaultStyles =true  }) {
    const content = children || null;
    if (!defaultContainer) return content;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default().page)} ${defaultStyles ? (_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default().defaultStyles) : ""}`,
        children: content
    });
}
function homeScroll(id) {
    const home = document.getElementById("home");
    const target = document.getElementById(id);
    if (home && target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
        });
    }
}
function HomePage(props) {
    const { setRenderedChildren  } = (0,_Auth__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .aC)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setRenderedChildren(props.children ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
            ...props
        }) : null);
        if (props.children) {
            homeScroll("homeBody");
        }
    }, []);
    return null;
}
function Page(props) {
    const { setRenderedChildren  } = (0,_Auth__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .aC)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setRenderedChildren(undefined);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        ...props
    });
}


/***/ })

};
;