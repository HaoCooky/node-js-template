import { ApiPermission } from "../enum/ApiPermission.enum";
import { KeyStatus } from "../enum/KeyStatus.enum";

export interface ApiKey {
  key: string,
  status: KeyStatus,
  permissions: ApiPermission[]
}