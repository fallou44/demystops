import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.course.findMany({
      include: { instructor: { select: { name: true, email: true } } },
    });
  }

  async findOne(id: number) {
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

  async create(data: any) {
    return this.prisma.course.create({ data });
  }

  async enroll(courseId: number, userId: number) {
    return this.prisma.course.update({
      where: { id: courseId },
      data: {
        students: { connect: { id: userId } },
      },
    });
  }
}
