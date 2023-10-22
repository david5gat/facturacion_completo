"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationBuffer = void 0;
const class_validator_1 = require("class-validator");
let ValidationBuffer = class ValidationBuffer {
    validate(value, validationArguments) {
        const Isbuffer = Buffer.isBuffer(value);
        if (!Isbuffer) {
            try {
                return Isbuffer;
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    defaultMessage(arg) {
        return `here was expecting buffer`;
    }
};
ValidationBuffer = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: "IsBuffer", async: true })
], ValidationBuffer);
exports.ValidationBuffer = ValidationBuffer;
//# sourceMappingURL=ValidationBuffer.js.map