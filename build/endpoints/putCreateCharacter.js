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
function putCreateCharacter(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let errorCode = 500;
        try {
            const { name, gender, description } = req.body;
            console.log(req.headers["content-type"]); // vai retornar no terminal o tipo de conteúdo que está sendo enviado. No caso, "application/json"
            yield (0, connections_1.connections)("Characters")
                .insert({ name, gender, description });
            if (!name || !gender) {
                errorCode = 442;
                throw new Error("Please check the fields");
            }
        }
        catch (error) {
            res.status(errorCode).end();
        }
        res.status(201).end();
    });
}
exports.default = putCreateCharacter;
//# sourceMappingURL=putCreateCharacter.js.map