import e,{useState as t,useEffect as r}from"react";import{parseFixed as n}from"@ethersproject/bignumber";import{BigNumberInput as o}from"big-number-input";var a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(i){var u,p=i.value,l=i.onChange,c=i.inputRef,f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(i,["value","onChange","inputRef"]),m=t(p.toString()),b=m[0],s=m[1];return r((function(){c&&c({setValue:s})}),[]),e.createElement(o,a({},f,{value:b,decimals:null!==(u=f.decimals)&&void 0!==u?u:18,onChange:function(e){var t=""===e?"0":e;s(t),l&&l(n(t))}}))}export{i as BigNumberInput};
//# sourceMappingURL=index.js.map
