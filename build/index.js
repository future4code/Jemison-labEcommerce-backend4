"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const getAllCharacters_1 = __importDefault(require("./endpoints/getAllCharacters"));
const putCreateCharacter_1 = __importDefault(require("./endpoints/putCreateCharacter"));
const deleteCharacter_1 = __importDefault(require("./endpoints/deleteCharacter"));
app_1.default.get("/characters", getAllCharacters_1.default);
app_1.default.put("/characters", putCreateCharacter_1.default);
app_1.default.delete("/characters/:id", deleteCharacter_1.default);
//# sourceMappingURL=index.js.map