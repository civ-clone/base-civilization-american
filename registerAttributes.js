"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const American_1 = require("./American");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'American',
    nation: 'America',
    colors: ['#0055A4', '#FFF'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(American_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map