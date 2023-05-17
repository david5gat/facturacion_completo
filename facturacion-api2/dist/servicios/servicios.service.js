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
exports.ServiciosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const servicio_entity_1 = require("./entities/servicio.entity");
let ServiciosService = class ServiciosService {
    constructor(ServicioRepository) {
        this.ServicioRepository = ServicioRepository;
    }
    async create(createServicioDto) {
        const crear = await this.ServicioRepository.create(createServicioDto);
        return await this.ServicioRepository.save(crear);
    }
    async findAll() {
        return await this.ServicioRepository.find({
            take: 10,
            skip: 0
        });
    }
    async findOne(id) {
        return await this.ServicioRepository.findOne({ where: { id_servcio: id } });
    }
    async update(id, updateServicioDto) {
        const actualizar = await this.ServicioRepository.preload(Object.assign({ id_servcio: id }, updateServicioDto));
        return await this.ServicioRepository.save(actualizar);
    }
    async remove(id) {
        const borrar = await this.ServicioRepository.findOne({ where: { id_servcio: id } });
        return await this.ServicioRepository.remove(borrar);
    }
};
ServiciosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(servicio_entity_1.servicios)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ServiciosService);
exports.ServiciosService = ServiciosService;
//# sourceMappingURL=servicios.service.js.map