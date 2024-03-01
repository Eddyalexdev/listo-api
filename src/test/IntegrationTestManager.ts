import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppModule } from "src/app.module";

export class IntegrationTestManager {
    private app: INestApplication

    async beforeAll(): Promise<void> {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule]
        }).compile()
        this.app = moduleRef.createNestApplication()
        await this.app.init()
    }
}