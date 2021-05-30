import { Router } from "express"

const devsRoutes = Router()

import { CreateDevController } from "../modules/useCases/CreateDev/CreateDevController"
import { ListDevController } from "../modules/useCases/ListDevs/ListDevController"
import { GetSpecificDevController } from "../modules/useCases/GetSpecificDev/GetSpecificDevController"
import { UpdateDevController } from "../modules/useCases/UpdateDev/UpdateDevController"
import { DeleteDevController } from "../modules/useCases/DeleteDev/DeleteDevController"

const createDevController = new CreateDevController()
const listDevController = new ListDevController()
const getSpecificDevController = new GetSpecificDevController()
const updateDevController = new UpdateDevController()
const deleteDevController = new DeleteDevController()

devsRoutes.post("/", createDevController.handle)
devsRoutes.get("/", listDevController.handle)
devsRoutes.get("/:id", getSpecificDevController.handle)
devsRoutes.put("/:id", updateDevController.handle)
devsRoutes.delete("/:id", deleteDevController.handle)

export { devsRoutes }
