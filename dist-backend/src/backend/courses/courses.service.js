var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
let CoursesService = class CoursesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.course.findMany({
            include: { instructor: { select: { name: true, email: true } } },
        });
    }
    async findOne(id) {
        return this.prisma.course.findUnique({
            where: { id },
            include: {
                instructor: { select: { name: true, email: true } },
                modules: {
                    include: { lessons: true },
                    orderBy: { order: 'asc' },
                },
            },
        });
    }
    async create(data) {
        return this.prisma.course.create({ data });
    }
    async enroll(courseId, userId) {
        return this.prisma.course.update({
            where: { id: courseId },
            data: {
                students: { connect: { id: userId } },
            },
        });
    }
};
CoursesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], CoursesService);
export { CoursesService };
