(()=>{function e(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function r(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){t(r,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var n={nome:"Felipe",idade:25},o=(r(r({},n),{},{sexo:"masculino"}),n.idade);console.log(o)})();