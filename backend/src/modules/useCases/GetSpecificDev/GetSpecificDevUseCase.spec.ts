import { FakeDevsRepository } from "../../devs/repositories/fakes/FakeDevsRepository"
import { CreateDevUseCase } from '../CreateDev/CreateDevUseCase'
import { GetSpecificDevUseCase } from '../GetSpecificDev/GetSpecificDevUseCase'

describe("GetSpecificDev", () => {
  it("should be able to get a specific Dev", async () => {
    const fakeDevsRepository = new FakeDevsRepository()
    const createDevUseCase = new CreateDevUseCase(fakeDevsRepository)
    const getSpecificDevUseCase = new GetSpecificDevUseCase(fakeDevsRepository)

    const data = {
      nome: "John Doe",
      sexo: "M",
      idade: 25,
      hobby: "Praticar Yoga",
      datanascimento: new Date
    }

    const data1 = {
      nome: "John Doe Fake",
      sexo: "M",
      idade: 25,
      hobby: "Praticar Yoga",
      datanascimento: new Date
    }

    await createDevUseCase.execute(data)
    await createDevUseCase.execute(data1)

    const dev = await getSpecificDevUseCase.execute("123")

    expect(dev.id).toBe("123")
  })
})
