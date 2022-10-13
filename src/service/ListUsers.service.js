import { dataUtils, env } from "../DataUtils.js";
import { Get } from "./Requestor.service.js";

async function ListUsers(params, header) {
    return Get(params, null, header, dataUtils[env].BASE_URL_GET, dataUtils[env].END_POINT_GET);
}

export { ListUsers };