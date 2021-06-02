import { FakeDevsRepository } from "../../devs/repositories/fakes/FakeDevsRepository"
import { CreateDevUseCase } from '../CreateDev/CreateDevUseCase'
import { ListDevUseCase } from '../ListDevs/ListDevUseCase'
import { DeleteDevUseCase } from '../DeleteDev/DeleteDevUseCase'

describe("ListDevs", () => {
  it("should be able to list Devs", async () => {
    const fakeDevsRepository = new FakeDevsRepository()
    const createDevUseCase = new CreateDevUseCase(fakeDevsRepository)
    const listDevUseCase = new ListDevUseCase(fakeDevsRepository)
    const deleteDevUseCase = new DeleteDevUseCase(fakeDevsRepository)

    const data = {
      nome: "John Doe",
      sexo: "M",
      idade: 25,
      hobby: "Praticar Yoga",
      datanascimento: new Date
    }

    await createDevUseCase.execute(data)

    const dev = await listDevUseCase.execute()

    await deleteDevUseCase.execute(dev[0].id)

    expect(dev.length).toBeLessThanOrEqual(0)
  })
})
