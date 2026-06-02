const prisma = require("../config/prisma");

async function createActivity({
  actorId,
  groupId,
  activityType,
  entityId,
  metadata,
}) {
  return prisma.activity.create({
    data: {
      actorId,
      groupId,
      activityType,
      entityId,
      metadata,
    },
  });
}

module.exports = {
  createActivity,
};