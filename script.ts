import { PrismaClient } from './prisma/.generated/index';

const prisma = new PrismaClient();

async function main() {
  const number = 531.8 - 26.11;

  console.log({ number, processedNumber: JSON.parse(JSON.stringify(number)) });
  await prisma.test.deleteMany();
  console.log(
    await prisma.test.create({
      data: { single: number, arr: [{ number }], obj: { number } },
    }),
  );
  console.log(await prisma.test.findMany());
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
