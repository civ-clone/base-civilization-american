"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeorgeWashington = void 0;
const Leader_1 = require("@civ-clone/core-civilization/Leader");
const American_1 = require("../American");
class GeorgeWashington extends Leader_1.default {
    static civilization() {
        return American_1.default;
    }
    name() {
        return 'George Washington';
    }
}
exports.GeorgeWashington = GeorgeWashington;
exports.default = GeorgeWashington;
//# sourceMappingURL=GeorgeWashington.js.map