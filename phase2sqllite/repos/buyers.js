import prisma from "@/repos/prisma";

export async function get(id) {
  try {
    if (id) {
      return await prisma.buyer.findUnique({
        where: { id },
        include: { transactions: true },
      });
    }
    return await prisma.buyer.findMany({ include: { transactions: true } });
  } catch (e) {
    return {
      error: {
        message: e.message,
        status: 500,
      },
    };
  }
}
export async function getLogged(username, password) {
  try {
    if (username && password) {
      return await prisma.buyer.findUnique({
        where: { username, password },
      });
    }
  } catch (e) {
    return {
      error: {
        message: e.message,
        status: 500,
      },
    };
  }
}

export async function update(id, data) {
  try {
    return await prisma.buyer.update({
      where: { id: id },
      data,
    });
  } catch (e) {
    return {
      error: {
        message: e.message,
        status: 500,
      },
    };
  }
}
