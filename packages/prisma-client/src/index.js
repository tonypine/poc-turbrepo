"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaClient = void 0;
const user = {
    id: 0,
    email: '',
    name: '',
    age: 0,
};
console.log('prisma-client', { user });
var client_1 = require("@prisma/client");
Object.defineProperty(exports, "PrismaClient", { enumerable: true, get: function () { return client_1.PrismaClient; } });
