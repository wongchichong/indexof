System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function indexof(arr, obj) {
        if (arr.indexOf)
            return arr.indexOf(obj);
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i] === obj)
                return i;
        }
        return -1;
    }
    exports_1("indexof", indexof);
    return {
        setters: [],
        execute: function () {
            ;
        }
    };
});
