"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaController = void 0;
const common_1 = require("@nestjs/common");
const factura_service_1 = require("./factura.service");
const create_factura_dto_1 = require("./dto/create-factura.dto");
const update_factura_dto_1 = require("./dto/update-factura.dto");
let FacturaController = class FacturaController {
    constructor(facturaService) {
        this.facturaService = facturaService;
    }
    create(createFacturaDto) {
        return this.facturaService.create(createFacturaDto);
    }
    findAll() {
        return this.facturaService.findAll();
    }
    findOne(id) {
        return this.facturaService.findOne(+id);
    }
    update(id, updateFacturaDto) {
        return this.facturaService.update(+id, updateFacturaDto);
    }
    remove(id) {
        return this.facturaService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_factura_dto_1.CreateFacturaDto]),
    __metadata("design:returntype", void 0)
], FacturaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FacturaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacturaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_factura_dto_1.UpdateFacturaDto]),
    __metadata("design:returntype", void 0)
], FacturaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacturaController.prototype, "remove", null);
FacturaController = __decorate([
    (0, common_1.Controller)('factura'),
    __metadata("design:paramtypes", [factura_service_1.FacturaService])
], FacturaController);
exports.FacturaController = FacturaController;
//# sourceMappingURL=factura.controller.js.map