// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../src/models/user';
import { UsersService } from '../../../src/services/users-service';

type Error = {
  status: string
}

const service = new UsersService();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | Error>
) {
  const { name } = req.query;

  if (!name) {
    res.status(400).json({ status: 'Name must be provided' });
    return;
  }

  const user = await service.getUser(name as string);

  if (!user) {
    res.status(404).json({ status: 'User not found' });
    return;
  }

  res.status(200).json(user);
}
