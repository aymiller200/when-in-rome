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
exports.id = "pages/api/conversionToNum";
exports.ids = ["pages/api/conversionToNum"];
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

/***/ "(api)/./pages/api/conversionToNum/index.ts":
/*!********************************************!*\
  !*** ./pages/api/conversionToNum/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_romanNumerals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/romanNumerals */ \"(api)/./helpers/romanNumerals.ts\");\n/* harmony import */ var _helpers_filePathAndExtraction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/filePathAndExtraction */ \"(api)/./helpers/filePathAndExtraction.ts\");\n\n\n\nfunction convertToNumber(str) {\n    let num = 0;\n    str.split('').forEach((val, i)=>{\n        //str [\"X\", \"X\", \"X\", \"V\", \"I\"]\n        //val [10, 10, 10, 5, 1] \n        // 0     1    2    3    4  \n        if (_helpers_romanNumerals__WEBPACK_IMPORTED_MODULE_1__.romeObj[val] < _helpers_romanNumerals__WEBPACK_IMPORTED_MODULE_1__.romeObj[str[i + 1]]) {\n            num -= _helpers_romanNumerals__WEBPACK_IMPORTED_MODULE_1__.romeObj[val] // 1 - 0\n            ;\n        } else {\n            num += _helpers_romanNumerals__WEBPACK_IMPORTED_MODULE_1__.romeObj[val];\n        }\n    });\n    return num;\n}\nfunction handler(req, res) {\n    const romeEntry = req.body.romeEntry;\n    //Error Handling\n    const pattern = /^M{0,1}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;\n    if (!romeEntry.match(pattern) || !romeEntry) {\n        res.status(422).json({\n            message: 'Invalid input! Remember, Roman Numerals are symbols like: I, IV, V'\n        });\n        return;\n    }\n    //\n    const romeEntryData = {\n        id: new Date().toISOString(),\n        romeEntry: romeEntry,\n        numResult: convertToNumber(romeEntry)\n    };\n    //store entries\n    const filePath = (0,_helpers_filePathAndExtraction__WEBPACK_IMPORTED_MODULE_2__.romanBuildEntryPath)();\n    const data = (0,_helpers_filePathAndExtraction__WEBPACK_IMPORTED_MODULE_2__.extractEntries)(filePath);\n    data.push(romeEntryData);\n    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, JSON.stringify(data));\n    res.status(201).json({\n        message: 'Success!',\n        entry: romeEntryData\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udmVyc2lvblRvTnVtL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ21CO0FBRXFDO0FBQ29DO1NBRW5GSSxlQUFlLENBQUNDLEdBQVcsRUFBRSxDQUFDO0lBQ3JDLEdBQUcsQ0FBQ0MsR0FBRyxHQUFHLENBQUM7SUFDWEQsR0FBRyxDQUFDRSxLQUFLLENBQUMsQ0FBRSxHQUFFQyxPQUFPLEVBQUVDLEdBQUcsRUFBRUMsQ0FBQyxHQUFLLENBQUM7UUFDakMsRUFBK0I7UUFDL0IsRUFBeUI7UUFDekIsRUFBMkI7UUFDM0IsRUFBRSxFQUFFVCwyREFBTyxDQUFDUSxHQUFHLElBQUlSLDJEQUFPLENBQUNJLEdBQUcsQ0FBQ0ssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3ZDSixHQUFHLElBQUlMLDJEQUFPLENBQUNRLEdBQUcsQ0FBRSxDQUFROztRQUM5QixDQUFDLE1BQU0sQ0FBQztZQUNOSCxHQUFHLElBQUlMLDJEQUFPLENBQUNRLEdBQUc7UUFDcEIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUNILEdBQUc7QUFFWixDQUFDO1NBRVFLLE9BQU8sQ0FBQ0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRSxDQUFDO0lBRTNELEtBQUssQ0FBQ0MsU0FBUyxHQUFXRixHQUFHLENBQUNHLElBQUksQ0FBQ0QsU0FBUztJQUU1QyxFQUFnQjtJQUNoQixLQUFLLENBQUNFLE9BQU87SUFFYixFQUFFLEdBQUdGLFNBQVMsQ0FBQ0csS0FBSyxDQUFDRCxPQUFPLE1BQU1GLFNBQVMsRUFBRSxDQUFDO1FBRTVDRCxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUFvRTtRQUFDLENBQUM7UUFFdEcsTUFBTTtJQUNSLENBQUM7SUFDRCxFQUFFO0lBRUYsS0FBSyxDQUFDQyxhQUFhLEdBQUcsQ0FBQztRQUNyQkMsRUFBRSxFQUFFLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHQyxXQUFXO1FBQzFCVixTQUFTLEVBQUVBLFNBQVM7UUFDcEJXLFNBQVMsRUFBRXJCLGVBQWUsQ0FBQ1UsU0FBUztJQUN0QyxDQUFDO0lBRUQsRUFBZTtJQUNmLEtBQUssQ0FBQ1ksUUFBUSxHQUFHeEIsbUZBQW1CO0lBQ3BDLEtBQUssQ0FBQ3lCLElBQUksR0FBR3hCLDhFQUFjLENBQUN1QixRQUFRO0lBQ3BDQyxJQUFJLENBQUNDLElBQUksQ0FBQ1AsYUFBYTtJQUN2QnJCLHVEQUFnQixDQUFDMEIsUUFBUSxFQUFFSSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSTtJQUM5Q2QsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztRQUFDQyxPQUFPLEVBQUUsQ0FBVTtRQUFFWSxLQUFLLEVBQUVYLGFBQWE7SUFBQyxDQUFDO0FBRXBFLENBQUM7QUFFRCxpRUFBZVYsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3JvbWUtYW1wbGlvLy4vcGFnZXMvYXBpL2NvbnZlcnNpb25Ub051bS9pbmRleC50cz85ODU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbmltcG9ydCB7IHJvbWVPYmogfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9yb21hbk51bWVyYWxzXCI7XG5pbXBvcnQgeyByb21hbkJ1aWxkRW50cnlQYXRoLCBleHRyYWN0RW50cmllcyB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZmlsZVBhdGhBbmRFeHRyYWN0aW9uJ1xuXG5mdW5jdGlvbiBjb252ZXJ0VG9OdW1iZXIoc3RyOiBzdHJpbmcpIHtcbiAgbGV0IG51bSA9IDA7XG4gIHN0ci5zcGxpdCgnJykuZm9yRWFjaCgodmFsLCBpKSA9PiB7XG4gICAgLy9zdHIgW1wiWFwiLCBcIlhcIiwgXCJYXCIsIFwiVlwiLCBcIklcIl1cbiAgICAvL3ZhbCBbMTAsIDEwLCAxMCwgNSwgMV0gXG4gICAgLy8gMCAgICAgMSAgICAyICAgIDMgICAgNCAgXG4gICAgaWYgKHJvbWVPYmpbdmFsXSA8IHJvbWVPYmpbc3RyW2kgKyAxXV0pIHtcbiAgICAgIG51bSAtPSByb21lT2JqW3ZhbF0gLy8gMSAtIDBcbiAgICB9IGVsc2Uge1xuICAgICAgbnVtICs9IHJvbWVPYmpbdmFsXVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gbnVtXG5cbn1cblxuZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuXG4gIGNvbnN0IHJvbWVFbnRyeTogc3RyaW5nID0gcmVxLmJvZHkucm9tZUVudHJ5XG5cbiAgLy9FcnJvciBIYW5kbGluZ1xuICBjb25zdCBwYXR0ZXJuID0gL15NezAsMX0oQ018Q0R8RD9DezAsM30pKFhDfFhMfEw/WHswLDN9KShJWHxJVnxWP0l7MCwzfSkkL1xuXG4gIGlmICghcm9tZUVudHJ5Lm1hdGNoKHBhdHRlcm4pIHx8ICFyb21lRW50cnkpIHtcblxuICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgaW5wdXQhIFJlbWVtYmVyLCBSb21hbiBOdW1lcmFscyBhcmUgc3ltYm9scyBsaWtlOiBJLCBJViwgVicgfSlcbiAgICBcbiAgICByZXR1cm5cbiAgfVxuICAvL1xuXG4gIGNvbnN0IHJvbWVFbnRyeURhdGEgPSB7XG4gICAgaWQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICByb21lRW50cnk6IHJvbWVFbnRyeSxcbiAgICBudW1SZXN1bHQ6IGNvbnZlcnRUb051bWJlcihyb21lRW50cnkpXG4gIH1cblxuICAvL3N0b3JlIGVudHJpZXNcbiAgY29uc3QgZmlsZVBhdGggPSByb21hbkJ1aWxkRW50cnlQYXRoKClcbiAgY29uc3QgZGF0YSA9IGV4dHJhY3RFbnRyaWVzKGZpbGVQYXRoKVxuICBkYXRhLnB1c2gocm9tZUVudHJ5RGF0YSlcbiAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogJ1N1Y2Nlc3MhJywgZW50cnk6IHJvbWVFbnRyeURhdGEgfSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIl0sIm5hbWVzIjpbImZzIiwicm9tZU9iaiIsInJvbWFuQnVpbGRFbnRyeVBhdGgiLCJleHRyYWN0RW50cmllcyIsImNvbnZlcnRUb051bWJlciIsInN0ciIsIm51bSIsInNwbGl0IiwiZm9yRWFjaCIsInZhbCIsImkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicm9tZUVudHJ5IiwiYm9keSIsInBhdHRlcm4iLCJtYXRjaCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwicm9tZUVudHJ5RGF0YSIsImlkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwibnVtUmVzdWx0IiwiZmlsZVBhdGgiLCJkYXRhIiwicHVzaCIsIndyaXRlRmlsZVN5bmMiLCJKU09OIiwic3RyaW5naWZ5IiwiZW50cnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/conversionToNum/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/conversionToNum/index.ts"));
module.exports = __webpack_exports__;

})();