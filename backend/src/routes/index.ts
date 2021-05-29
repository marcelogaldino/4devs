import { Router } from "express"

import { devsRoutes } from './devs.routes'

const routes = Router()

routes.use("/devs", devsRoutes)

export { routes }
