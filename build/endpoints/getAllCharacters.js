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
// import { characters } from "../data";
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let errorCode = 400;
        try {
            const { name, orderBy, orderType, page } = req.query;
            // const characters: Character = await connections.raw("SELECT * FROM Actors")
            // res.status(200).send(result[0])
            const resultsPerPage = 5;
            // página 1 -> offset 0  === 5 * 0 ou (1 - 1) = 0
            // paginá 2 -> offset 5 === 5 * 1 ou (2 - 1) = 5
            // paginá 3 -> offset 10 === 5 * 2 ou (3 - 1) = 10
            const offset = resultsPerPage * (Number(page) - 1);
            const Characters = yield (0, connections_1.connections)("Characters")
                .where("name", "LIKE", `%${name}%`)
                .orderBy(orderBy || "name", orderType)
                .offset(offset);
            res.send(Characters);
        }
        catch (error) {
            res.status(errorCode).send("Unexpected server error");
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=getAllCharacters.js.map