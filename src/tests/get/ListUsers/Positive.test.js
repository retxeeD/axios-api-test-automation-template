import { expect } from "chai";
import { Logger } from "../../../hooks/hooks.js";
import { listUsersParams } from "../../../model/ListUsers.module.js";
import { ListUsers } from "../../../service/ListUsers.service.js";
import { beforeEach } from "mocha";

let _this;
let response;
let params;

describe('Testes funcionais postivos da funcionalidade GET', async () => {
    beforeEach(() => {
        params = listUsersParams;
    })

    afterEach(() => {
        Logger(response, _this);
    })

    it("CT_001 Validar Get com sucesso", async function () {
        _this = this;
        response = await ListUsers(params);
        expect(response.status).equal(200);
    });

    it("CT_002 Validar Get com sucesso passando valor 1 no parametro page", async function () {
        _this = this;
        params.page = 0;
        response = await ListUsers(params);
        expect(response.status).equal(200);
    })

    it("CT_003 Validar Get com sucesso removendo parametro page", async function () {
        _this = this;
        delete params.page;
        response = await ListUsers(params);
        expect(response.status).equal(200);
    })
})