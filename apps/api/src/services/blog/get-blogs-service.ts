import prisma from '@/prisma';
import { PaginationQueryParams } from '@/types/pagination';
import { Prisma } from '@prisma/client';

interface GetBlogsQuery extends PaginationQueryParams {
  search: string;
}
export const getBlogsService = async (query: GetBlogsQuery) => {
  try {
    const { take, page, sortBy, sortOrder, search } = query;

    const whereClause: Prisma.BlogWhereInput = {};

    if (search) {
      whereClause.title = { contains: search };
    }

    const blogs = await prisma.blog.findMany({
      where: whereClause,
      skip: (page - 1) * take,
      take: take,
      orderBy: {
        [sortBy]: sortOrder,
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    const total = await prisma.blog.count({
      where: whereClause,
    });
    return { data: blogs, meta: { page, take, total } };
  } catch (error) {
    throw error;
  }
};
