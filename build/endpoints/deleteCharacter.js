"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = require("../connections");
function deleteCharacter(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let errorCode = 400;
        try {
            const id = Number(req.params.id);
            yield (0, connections_1.connections)("Characters")
                .delete()
                .where({ id });
            res.status(200).send("Character deleted successfully!");
        }
        catch (error) {
            res.status(errorCode).end();
        }
    });
}
exports.default = deleteCharacter;
//# sourceMappingURL=deleteCharacter.js.map