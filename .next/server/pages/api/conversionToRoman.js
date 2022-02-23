"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/conversionToRoman";
exports.ids = ["pages/api/conversionToRoman"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./helpers/filePathAndExtraction.ts":
/*!******************************************!*\
  !*** ./helpers/filePathAndExtraction.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildEntryPath\": () => (/* binding */ buildEntryPath),\n/* harmony export */   \"extractEntries\": () => (/* binding */ extractEntries),\n/* harmony export */   \"romanBuildEntryPath\": () => (/* binding */ romanBuildEntryPath)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction buildEntryPath() {\n    return path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), 'data', 'entries.json');\n}\nfunction extractEntries(filePath) {\n    const fileData = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath);\n    const data = JSON.parse(fileData.toString());\n    return data;\n}\nfunction romanBuildEntryPath() {\n    return path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), 'data', 'romeToNum.json');\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2ZpbGVQYXRoQW5kRXh0cmFjdGlvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVCO0FBQ0o7QUFFWixTQUFTRSxjQUFjLEdBQUcsQ0FBQztJQUNoQyxNQUFNLENBQUNGLGdEQUFTLENBQUNJLE9BQU8sQ0FBQ0MsR0FBRyxJQUFJLENBQU0sT0FBRSxDQUFjO0FBQ3hELENBQUM7QUFFTSxTQUFTQyxjQUFjLENBQUNDLFFBQWdCLEVBQUUsQ0FBQztJQUNoRCxLQUFLLENBQUNDLFFBQVEsR0FBR1Asc0RBQWUsQ0FBQ00sUUFBUTtJQUN6QyxLQUFLLENBQUNHLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNKLFFBQVEsQ0FBQ0ssUUFBUTtJQUN6QyxNQUFNLENBQUNILElBQUk7QUFDYixDQUFDO0FBRU0sU0FBU0ksbUJBQW1CLEdBQUUsQ0FBQztJQUNwQyxNQUFNLENBQUNkLGdEQUFTLENBQUNJLE9BQU8sQ0FBQ0MsR0FBRyxJQUFJLENBQU0sT0FBRSxDQUFnQjtBQUMxRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9tZS1hbXBsaW8vLi9oZWxwZXJzL2ZpbGVQYXRoQW5kRXh0cmFjdGlvbi50cz84MzkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEVudHJ5UGF0aCgpIHtcbiAgcmV0dXJuIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsICdlbnRyaWVzLmpzb24nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEVudHJpZXMoZmlsZVBhdGg6IHN0cmluZykge1xuICBjb25zdCBmaWxlRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aClcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZmlsZURhdGEudG9TdHJpbmcoKSlcbiAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvbWFuQnVpbGRFbnRyeVBhdGgoKXtcbiAgcmV0dXJuIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsICdyb21lVG9OdW0uanNvbicpXG59XG4iXSwibmFtZXMiOlsicGF0aCIsImZzIiwiYnVpbGRFbnRyeVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImV4dHJhY3RFbnRyaWVzIiwiZmlsZVBhdGgiLCJmaWxlRGF0YSIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJ0b1N0cmluZyIsInJvbWFuQnVpbGRFbnRyeVBhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./helpers/filePathAndExtraction.ts\n");

/***/ }),

/***/ "(api)/./helpers/romanNumerals.ts":
/*!**********************************!*\
  !*** ./helpers/romanNumerals.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"romeObj\": () => (/* binding */ romeObj)\n/* harmony export */ });\nconst romeObj = {\n    I: 1,\n    IV: 4,\n    V: 5,\n    IX: 9,\n    X: 10,\n    XL: 40,\n    L: 50,\n    XC: 90,\n    C: 100,\n    CD: 400,\n    D: 500,\n    CM: 900,\n    M: 1000\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL3JvbWFuTnVtZXJhbHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQWlCTyxLQUFLLENBQUNBLE9BQU8sR0FBa0IsQ0FBQztJQUNyQ0MsQ0FBQyxFQUFFLENBQUM7SUFDSkMsRUFBRSxFQUFFLENBQUM7SUFDTEMsQ0FBQyxFQUFFLENBQUM7SUFDSkMsRUFBRSxFQUFFLENBQUM7SUFDTEMsQ0FBQyxFQUFFLEVBQUU7SUFDTEMsRUFBRSxFQUFFLEVBQUU7SUFDTkMsQ0FBQyxFQUFFLEVBQUU7SUFDTEMsRUFBRSxFQUFFLEVBQUU7SUFDTkMsQ0FBQyxFQUFFLEdBQUc7SUFDTkMsRUFBRSxFQUFFLEdBQUc7SUFDUEMsQ0FBQyxFQUFFLEdBQUc7SUFDTkMsRUFBRSxFQUFFLEdBQUc7SUFDUEMsQ0FBQyxFQUFFLElBQUk7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9tZS1hbXBsaW8vLi9oZWxwZXJzL3JvbWFuTnVtZXJhbHMudHM/N2RlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFJvbWFuTnVtZXJhbHMge1xuICBJOiBOdW1iZXJcbiAgSVY6IE51bWJlclxuICBWOiBOdW1iZXJcbiAgSVg6IE51bWJlclxuICBYOiBOdW1iZXJcbiAgWEw6IE51bWJlclxuICBMOiBOdW1iZXJcbiAgWEM6IE51bWJlclxuICBDOiBOdW1iZXJcbiAgQ0Q6IE51bWJlclxuICBEOiBOdW1iZXJcbiAgQ006IE51bWJlclxuICBNOiBOdW1iZXJcbiAgW2tleTogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCBjb25zdCByb21lT2JqOiBSb21hbk51bWVyYWxzID0ge1xuICBJOiAxLFxuICBJVjogNCxcbiAgVjogNSxcbiAgSVg6IDksXG4gIFg6IDEwLFxuICBYTDogNDAsXG4gIEw6IDUwLFxuICBYQzogOTAsXG4gIEM6IDEwMCxcbiAgQ0Q6IDQwMCxcbiAgRDogNTAwLFxuICBDTTogOTAwLFxuICBNOiAxMDAwXG59Il0sIm5hbWVzIjpbInJvbWVPYmoiLCJJIiwiSVYiLCJWIiwiSVgiLCJYIiwiWEwiLCJMIiwiWEMiLCJDIiwiQ0QiLCJEIiwiQ00iLCJNIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./helpers/romanNumerals.ts\n");

/***/ }),

/***/ "(api)/./pages/api/conversionToRoman/index.ts":
/*!**********************************************!*\
  !*** ./pages/api/conversionToRoman/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_romanNumerals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/romanNumerals */ \"(api)/./helpers/romanNumerals.ts\");\n/* harmony import */ var _helpers_filePathAndExtraction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/filePathAndExtraction */ \"(api)/./helpers/filePathAndExtraction.ts\");\n\n\n\nfunction convertToRoman(num) {\n    let romanNum = '';\n    const romanKeys = Object.keys(_helpers_romanNumerals__WEBPACK_IMPORTED_MODULE_1__.romeObj).reverse();\n    romanKeys.forEach((key)=>{\n        while(num >= _helpers_romanNumerals__WEBPACK_IMPORTED_MODULE_1__.romeObj[key]){\n            romanNum += key;\n            num -= _helpers_romanNumerals__WEBPACK_IMPORTED_MODULE_1__.romeObj[key];\n        }\n    });\n    return romanNum;\n}\nfunction handler(req, res) {\n    const entry = req.body.entry;\n    const entryConverted = Number(entry);\n    if (isNaN(entryConverted) || entryConverted === 0) {\n        res.status(422).json({\n            message: 'Invalid input! Try entering a number next time!'\n        });\n        return;\n    }\n    const entryData = {\n        id: new Date().toISOString(),\n        entry: entry,\n        romanEntry: convertToRoman(Number(entry))\n    };\n    //store entries\n    const filePath = (0,_helpers_filePathAndExtraction__WEBPACK_IMPORTED_MODULE_2__.buildEntryPath)();\n    const data = (0,_helpers_filePathAndExtraction__WEBPACK_IMPORTED_MODULE_2__.extractEntries)(filePath);\n    data.push(entryData);\n    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, JSON.stringify(data));\n    res.status(201).json({\n        message: 'Success!',\n        entry: entryData\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udmVyc2lvblRvUm9tYW4vaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUI7QUFFcUM7QUFDK0I7U0FFOUVJLGNBQWMsQ0FBQ0MsR0FBVyxFQUFFLENBQUM7SUFDcEMsR0FBRyxDQUFDQyxRQUFRLEdBQUcsQ0FBRTtJQUNqQixLQUFLLENBQUNDLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUNSLDJEQUFPLEVBQUVTLE9BQU87SUFDOUNILFNBQVMsQ0FBQ0ksT0FBTyxFQUFDQyxHQUFHLEdBQUksQ0FBQztjQUNqQlAsR0FBRyxJQUFJSiwyREFBTyxDQUFDVyxHQUFHLEVBQUcsQ0FBQztZQUMzQk4sUUFBUSxJQUFJTSxHQUFHO1lBQ2ZQLEdBQUcsSUFBSUosMkRBQU8sQ0FBQ1csR0FBRztRQUNwQixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQ04sUUFBUTtBQUNqQixDQUFDO1NBRVFPLE9BQU8sQ0FBQ0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRSxDQUFDO0lBRTNELEtBQUssQ0FBQ0MsS0FBSyxHQUFXRixHQUFHLENBQUNHLElBQUksQ0FBQ0QsS0FBSztJQUNwQyxLQUFLLENBQUNFLGNBQWMsR0FBR0MsTUFBTSxDQUFDSCxLQUFLO0lBRW5DLEVBQUUsRUFBRUksS0FBSyxDQUFDRixjQUFjLEtBQUtBLGNBQWMsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUVsREgsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBaUQ7UUFBQyxDQUFDO1FBRW5GLE1BQU07SUFDUixDQUFDO0lBRUQsS0FBSyxDQUFDQyxTQUFTLEdBQUcsQ0FBQztRQUNqQkMsRUFBRSxFQUFFLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHQyxXQUFXO1FBQzFCWCxLQUFLLEVBQUVBLEtBQUs7UUFDWlksVUFBVSxFQUFFeEIsY0FBYyxDQUFDZSxNQUFNLENBQUNILEtBQUs7SUFDekMsQ0FBQztJQUVELEVBQWU7SUFDZixLQUFLLENBQUNhLFFBQVEsR0FBRzNCLDhFQUFjO0lBQy9CLEtBQUssQ0FBQzRCLElBQUksR0FBRzNCLDhFQUFjLENBQUMwQixRQUFRO0lBQ3BDQyxJQUFJLENBQUNDLElBQUksQ0FBQ1AsU0FBUztJQUNuQnhCLHVEQUFnQixDQUFDNkIsUUFBUSxFQUFFSSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSTtJQUM5Q2YsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztRQUFDQyxPQUFPLEVBQUUsQ0FBVTtRQUFFUCxLQUFLLEVBQUVRLFNBQVM7SUFBQyxDQUFDO0FBQ2hFLENBQUM7QUFFRCxpRUFBZVgsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3JvbWUtYW1wbGlvLy4vcGFnZXMvYXBpL2NvbnZlcnNpb25Ub1JvbWFuL2luZGV4LnRzP2Q3Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBmcyBmcm9tICdmcydcblxuaW1wb3J0IHsgcm9tZU9iaiB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvcm9tYW5OdW1lcmFscydcbmltcG9ydCB7IGJ1aWxkRW50cnlQYXRoLCBleHRyYWN0RW50cmllcyB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZmlsZVBhdGhBbmRFeHRyYWN0aW9uJ1xuXG5mdW5jdGlvbiBjb252ZXJ0VG9Sb21hbihudW06IG51bWJlcikge1xuICBsZXQgcm9tYW5OdW0gPSAnJ1xuICBjb25zdCByb21hbktleXMgPSBPYmplY3Qua2V5cyhyb21lT2JqKS5yZXZlcnNlKClcbiAgcm9tYW5LZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICB3aGlsZSAobnVtID49IHJvbWVPYmpba2V5XSkge1xuICAgICAgcm9tYW5OdW0gKz0ga2V5XG4gICAgICBudW0gLT0gcm9tZU9ialtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gcm9tYW5OdW1cbn1cblxuZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuXG4gIGNvbnN0IGVudHJ5OiBzdHJpbmcgPSByZXEuYm9keS5lbnRyeTtcbiAgY29uc3QgZW50cnlDb252ZXJ0ZWQgPSBOdW1iZXIoZW50cnkpXG4gIFxuICBpZiAoaXNOYU4oZW50cnlDb252ZXJ0ZWQpIHx8IGVudHJ5Q29udmVydGVkID09PSAwKSB7XG5cbiAgICByZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIGlucHV0ISBUcnkgZW50ZXJpbmcgYSBudW1iZXIgbmV4dCB0aW1lIScgfSlcblxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZW50cnlEYXRhID0ge1xuICAgIGlkOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgZW50cnk6IGVudHJ5LFxuICAgIHJvbWFuRW50cnk6IGNvbnZlcnRUb1JvbWFuKE51bWJlcihlbnRyeSkpXG4gIH1cblxuICAvL3N0b3JlIGVudHJpZXNcbiAgY29uc3QgZmlsZVBhdGggPSBidWlsZEVudHJ5UGF0aCgpXG4gIGNvbnN0IGRhdGEgPSBleHRyYWN0RW50cmllcyhmaWxlUGF0aClcbiAgZGF0YS5wdXNoKGVudHJ5RGF0YSlcbiAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogJ1N1Y2Nlc3MhJywgZW50cnk6IGVudHJ5RGF0YSB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIl0sIm5hbWVzIjpbImZzIiwicm9tZU9iaiIsImJ1aWxkRW50cnlQYXRoIiwiZXh0cmFjdEVudHJpZXMiLCJjb252ZXJ0VG9Sb21hbiIsIm51bSIsInJvbWFuTnVtIiwicm9tYW5LZXlzIiwiT2JqZWN0Iiwia2V5cyIsInJldmVyc2UiLCJmb3JFYWNoIiwia2V5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImVudHJ5IiwiYm9keSIsImVudHJ5Q29udmVydGVkIiwiTnVtYmVyIiwiaXNOYU4iLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVudHJ5RGF0YSIsImlkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwicm9tYW5FbnRyeSIsImZpbGVQYXRoIiwiZGF0YSIsInB1c2giLCJ3cml0ZUZpbGVTeW5jIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/conversionToRoman/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/conversionToRoman/index.ts"));
module.exports = __webpack_exports__;

})();