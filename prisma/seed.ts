import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Create Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@demystops.com' },
    update: {},
    create: {
      email: 'admin@demystops.com',
      name: 'Admin User',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  // Create Instructor
  const instructor = await prisma.user.upsert({
    where: { email: 'instructor@demystops.com' },
    update: {},
    create: {
      email: 'instructor@demystops.com',
      name: 'DevOps Expert',
      password: hashedPassword,
      role: 'INSTRUCTOR',
    },
  });

  // Create Course
  const course = await prisma.course.create({
    data: {
      title: 'Docker for Production',
      description: 'Master containerization from development to production deployment.',
      price: 49,
      instructorId: instructor.id,
      modules: {
        create: [
          {
            title: 'Introduction to Docker',
            order: 1,
            lessons: {
              create: [
                { title: 'What is a Container?', order: 1, content: 'Containers are lightweight...' },
                { title: 'Installing Docker', order: 2, content: 'Follow these steps...' },
              ],
            },
          },
        ],
      },
    },
  });

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
