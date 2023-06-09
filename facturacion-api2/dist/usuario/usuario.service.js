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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("./entities/usuario.entity");
const typeorm_2 = require("typeorm");
let UsuarioService = class UsuarioService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    create(createUsuarioDto) {
        const crearUsuario = this.productRepository.create(createUsuarioDto);
        return this.productRepository.save(crearUsuario);
    }
    async findAll() {
        return await this.productRepository.find({
            take: 10,
            skip: 0
        });
    }
    async findOne(id_usuario) {
        let validac;
        if (!isNaN(+id_usuario)) {
            validac = await this.productRepository.findOneBy({ id_usuario: +id_usuario });
        }
        else {
            validac = await this.productRepository.findOne({ where: { correo: id_usuario.toLowerCase() } });
        }
        return validac;
    }
    async update(id, updateUsuarioDto) {
        const actualizar = await this.productRepository.preload(Object.assign({ id_usuario: id }, updateUsuarioDto));
        return await this.productRepository.save(actualizar);
    }
    async remove(id) {
        const borrar = await this.productRepository.find({ where: { id_usuario: id } });
        return await this.productRepository.remove(borrar);
    }
};
UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map