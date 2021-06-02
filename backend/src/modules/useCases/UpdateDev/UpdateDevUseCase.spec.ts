import { FakeDevsRepository } from "../../devs/repositories/fakes/FakeDevsRepository"
import { CreateDevUseCase } from '../CreateDev/CreateDevUseCase'
import { ListDevUseCase } from '../ListDevs/ListDevUseCase'
import { UpdateDevUseCase } from '../UpdateDev/UpdateDevUseCase'

describe("ListDevs", () => {
  it("should be able to list Devs", async () => {
    const fakeDevsRepository = new FakeDevsRepository()
    const createDevUseCase = new CreateDevUseCase(fakeDevsRepository)
    const listDevUseCase = new ListDevUseCase(fakeDevsRepository)
    const updateDevUseCase = new UpdateDevUseCase(fakeDevsRepository)

    const data1 = {
      nome: "John Doe",
      sexo: "M",
      idade: 25,
      hobby: "Praticar Yoga",
      datanascimento: new Date
    }

    await createDevUseCase.execute(data1)

    const dev = await listDevUseCase.execute()

    const data = dev[0]

    Object.assign(data, {
      nome: "Joana",
      sexo: "F",
      idade: 25,
      hobby: "Praticar Yoga",
      datanascimento: new Date
    })

    const devUpdated = await updateDevUseCase.execute("123", { data })

    expect(devUpdated.nome).toBe("Joana")
  })
})
