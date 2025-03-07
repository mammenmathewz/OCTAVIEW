"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomIdGenerater = exports.generateApiKey = void 0;
const crypto_1 = __importDefault(require("crypto"));
const generateApiKey = () => {
    return crypto_1.default.randomBytes(32).toString('hex');
};
exports.generateApiKey = generateApiKey;
const roomIdGenerater = () => {
    return crypto_1.default.randomBytes(5).toString('hex');
};
exports.roomIdGenerater = roomIdGenerater;
