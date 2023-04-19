import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const album = await prisma.album.createMany({
    data: [
      {
        id: 1,
        title: 'travel',
      },
      {
        id: 2,
        title: 'work',
      },
      {
        id: 3,
        title: 'walking',
      },
    ],
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
