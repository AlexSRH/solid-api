import { IMailProvider, IMessage } from "../IMailProvider";

export class FakeMailProvider implements IMailProvider {
  async sendMail(message: IMessage): Promise<void> {
    console.log('Fake mail sending...')
  }
}
