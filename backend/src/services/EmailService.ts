interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface IMailDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendMail(request: IMailDTO): void;
}

class EmailService implements IEmailService{
  sendMail({ to, message }: IMailDTO) {
    console.log(`Email enviado para ${to.email}: ${message.subject}`);
  }
}

export default EmailService;