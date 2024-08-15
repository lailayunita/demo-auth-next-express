import { getBlogsService } from '@/services/blog/get-blogs-service';
import { NextFunction, Request, Response } from 'express';

export class BlogController {
  async getBlogs(req: Request, res: Response, next: NextFunction) {
    try {
      const query = {
        page: parseInt(req.query.page as string) || 1,
        take: parseInt(req.query.take as string) || 2,
        sortOrder: (req.query.sortOrder as string) || 'desc',
        sortBy: (req.query.sortBy as string) || 'createdAt',
        search: (req.query.search as string) || '',
      };
      const result = await getBlogsService(query);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
