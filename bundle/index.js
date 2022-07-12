(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@ethersproject/bignumber"), require("big-number-input"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@ethersproject/bignumber", "big-number-input"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("react"), require("@ethersproject/bignumber"), require("big-number-input"));
	else
		root["lib"] = factory(root["react"], root["@ethersproject/bignumber"], root["big-number-input"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__156__, __WEBPACK_EXTERNAL_MODULE__482__, __WEBPACK_EXTERNAL_MODULE__610__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 10:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(907)

/***/ }),

/***/ 907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BigNumberInput": () => (/* reexport */ Input_BigNumberInput)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(156);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@ethersproject/bignumber"
var bignumber_ = __webpack_require__(482);
// EXTERNAL MODULE: external "big-number-input"
var external_big_number_input_ = __webpack_require__(610);
;// CONCATENATED MODULE: ./src/components/Input/BigNumberInput.tsx
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





function BigNumberInput(_a) {
  var _b;

  var value = _a.value,
      onChange = _a.onChange,
      inputRef = _a.inputRef,
      props = __rest(_a, ["value", "onChange", "inputRef"]);

  var _c = (0,external_react_.useState)(value.toString()),
      displayValue = _c[0],
      setDisplayValue = _c[1];

  var handleInputChange = function handleInputChange(targetValue) {
    var newValue = targetValue === '' ? '0' : targetValue;
    setDisplayValue(newValue);
    onChange && onChange((0,bignumber_.parseFixed)(newValue));
  };

  (0,external_react_.useEffect)(function () {
    inputRef && inputRef({
      setValue: setDisplayValue
    });
  }, []);
  return external_react_default().createElement(external_big_number_input_.BigNumberInput, __assign({}, props, {
    value: displayValue,
    decimals: (_b = props.decimals) !== null && _b !== void 0 ? _b : 18,
    onChange: handleInputChange
  }));
}

/* harmony default export */ const Input_BigNumberInput = (BigNumberInput);
;// CONCATENATED MODULE: ./src/components/Input/index.ts

;// CONCATENATED MODULE: ./src/components/index.ts

;// CONCATENATED MODULE: ./src/index.ts


/***/ }),

/***/ 482:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__482__;

/***/ }),

/***/ 610:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__610__;

/***/ }),

/***/ 156:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(10);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map