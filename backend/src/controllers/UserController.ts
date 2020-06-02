import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Marcos', email: 'marcos@yahoo.com' }
]

const index = async (req: Request, res: Response) => {
  return res.json(users);
}

const create = async (req: Request, res: Response) => {
  const emailService = new EmailService();

  emailService.sendMail({
    to: { 
      name: 'Marcos Nunes', 
      email: 'marcos@yahoo.com' 
    },
    message: { 
      subject: 'Bem-vindo ao sistema', 
      body: 'Seja bem-vindo' 
    }
  });

  return res.send('Success');
}

export {
  index,
  create,
}
