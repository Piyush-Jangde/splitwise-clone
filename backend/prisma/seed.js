const prisma = require("../src/config/prisma");

async function main() {
  await prisma.expenseParticipant.deleteMany();
  await prisma.expense.deleteMany();
  await prisma.settlement.deleteMany();
  await prisma.groupMember.deleteMany();
  await prisma.group.deleteMany();
  await prisma.friendship.deleteMany();
  await prisma.user.deleteMany();

  const a = await prisma.user.create({
    data: {
      fullName: "A User",
      email: "a@example.com",
      phoneNumber: "1111111111",
    },
  });

  const b = await prisma.user.create({
    data: {
      fullName: "B User",
      email: "b@example.com",
      phoneNumber: "2222222222",
    },
  });

  const c = await prisma.user.create({
    data: {
      fullName: "C User",
      email: "c@example.com",
      phoneNumber: "3333333333",
    },
  });

  const d = await prisma.user.create({
    data: {
      fullName: "D User",
      email: "d@example.com",
      phoneNumber: "4444444444",
    },
  });

  const group = await prisma.group.create({
    data: {
      name: "Goa Trip",
      ownerId: a.id,
      inviteCode: "goa-trip-test",
    },
  });

  await prisma.groupMember.createMany({
    data: [
      { groupId: group.id, userId: a.id },
      { groupId: group.id, userId: b.id },
      { groupId: group.id, userId: c.id },
      { groupId: group.id, userId: d.id },
    ],
  });

  const expense = await prisma.expense.create({
    data: {
      description: "Dinner",
      amount: 900,
      splitType: "EQUAL",
      payerId: a.id,
      creatorId: a.id,
      groupId: group.id,
      participants: {
        create: [
          { userId: a.id, amountOwed: 225 },
          { userId: b.id, amountOwed: 225 },
          { userId: c.id, amountOwed: 225 },
          { userId: d.id, amountOwed: 225 },
        ],
      },
    },
  });

  await prisma.settlement.create({
    data: {
      amount: 100,
      payerId: b.id,
      receiverId: a.id,
      groupId: group.id,
      note: "Partial settlement",
    },
  });

  console.log("Seed completed");
  console.log({ groupId: group.id, expenseId: expense.id });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });