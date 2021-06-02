import { FakeDevsRepository } from "../../devs/repositories/fakes/FakeDevsRepository"
import { CreateDevUseCase } from '../CreateDev/CreateDevUseCase'
import { ListDevUseCase } from '../ListDevs/ListDevUseCase'

describe("ListDevs", () => {
  it("should be able to list Devs", async () => {
    const fakeDevsRepository = new FakeDevsRepository()
    const createDevUseCase = new CreateDevUseCase(fakeDevsRepository)
    const listDevUseCase = new ListDevUseCase(fakeDevsRepository)

    const data = {
      nome: "John Doe",
      sexo: "M",
      idade: 25,
      hobby: "Praticar Yoga",
      datanascimento: new Date
    }

    await createDevUseCase.execute(data)
    await createDevUseCase.execute(data)

    const dev = await listDevUseCase.execute()

    expect(dev.length).toBeGreaterThan(1)
  })
})
