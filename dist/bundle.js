define("greeter", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.greet = void 0;
    var greet = function (name) {
        return "Hello, ".concat(name, "!");
    };
    exports.greet = greet;
});
define("main", ["require", "exports", "greeter"], function (require, exports, greeter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log((0, greeter_1.greet)("1"));
    console.log((0, greeter_1.greet)("2"));
    console.log((0, greeter_1.greet)("3"));
    console.log((0, greeter_1.greet)("4"));
});
//# sourceMappingURL=bundle.js.map