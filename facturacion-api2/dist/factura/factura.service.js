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
exports.FacturaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const factura_entity_1 = require("./entities/factura.entity");
let FacturaService = class FacturaService {
    constructor(facturacionRepository) {
        this.facturacionRepository = facturacionRepository;
    }
    async create(createFacturaDto) {
        return await this.facturacionRepository.save(createFacturaDto);
    }
    async findAll() {
        return await this.facturacionRepository.find({
            take: 10,
            skip: 0
        });
    }
    async findOne(id) {
        return this.facturacionRepository.findOne({
            where: { n_factura: id }
        });
    }
    async update(id, updateFacturaDto) {
        const actualizar = await this.facturacionRepository.preload(Object.assign({ n_factura: id }, updateFacturaDto));
        return await this.facturacionRepository.save(actualizar);
    }
    async remove(id) {
        const borrar = await this.facturacionRepository.find({ where: { n_factura: id } });
        return this.facturacionRepository.remove(borrar);
    }
};
FacturaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(factura_entity_1.Factura)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], FacturaService);
exports.FacturaService = FacturaService;
//# sourceMappingURL=factura.service.js.map