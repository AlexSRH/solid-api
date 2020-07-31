import { FakeMailProvider } from "../../providers/implementations/FakeMailProvider";
import { ArrayUsersRepository } from "../../repositories/implementations/ArrayUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const arrayUsersRepository = new ArrayUsersRepository()
const fakeMailProvider = new FakeMailProvider()

const createUserUseCase = new CreateUserUseCase(
  arrayUsersRepository,
  fakeMailProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }
