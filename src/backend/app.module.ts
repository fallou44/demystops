import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { CoursesModule } from './courses/courses.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    CoursesModule,
    ContactModule,
  ],
})
export class AppModule {}
