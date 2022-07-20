"use strict";
(() => {
var exports = {};
exports.id = 933;
exports.ids = [933];
exports.modules = {

/***/ 4166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const isBuilding = false;
function handler(req, res) {
    const { cmd  } = req.query;
    if (cmd === "trigger") {} else {}
    res.status(200).json({
        data: {
            isBuilding
        }
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4166));
module.exports = __webpack_exports__;

})();