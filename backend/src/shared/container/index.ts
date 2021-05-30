import { container } from "tsyringe";

import { IDevsRepository } from "../../modules/devs/repositories/IDevsRepository";
import { DevsRepository } from "../../modules/devs/repositories/implementations/DevsRepository";

container.registerSingleton<IDevsRepository>(
  "DevsRepository",
  DevsRepository
);

