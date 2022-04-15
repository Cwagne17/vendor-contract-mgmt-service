import * as request from 'supertest';
import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { VENDOR_DATA } from './mocks/vendor-data';
import { AppModule } from '../src/app.module';
import { VendorService } from '../src/modules/vendor/vendor.service';
import { VendorServiceMock } from './mocks/vendor.service';

describe('Vendor', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule],
        }).overrideProvider(VendorService)
        .useValue(VendorServiceMock)
        .compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    describe('POST /vendor', () => {
        it('should return 200 and create user', async () => {
            return await request(app.getHttpServer())
                .post('/vendor')
                .send(VENDOR_DATA.CREATE_VENDOR)
                .expect((res) => {
                    console.log(res);
                });
        });

        // it('should return 400 Bad Request for invalid vendor_name', async () => {

        // });
        // it('should return 400 Bad Request for invalid first_name', async () => {

        // });
        // it('should return 400 Bad Request for invalid last_name', async () => {

        // });
        // it('should return 400 Bad Request for invalid selection_method', async () => {

        // });
        // it('should return 400 Bad Request for invalid status', async () => {

        // });
        // it('should return 400 Bad Request for invalid contact_phone_number', async () => {

        // });
        // it('should return 400 Bad Request for invalid contact_email', async () => {

        // });
        // it('should return 400 Bad Request for invalid memo', async () => {

        // });
        // it('should return 400 Bad Request for invalid work_id', async () => {

        // });

        // it('should return 404 Bad Request, Vendor with that name already exists.', async () => {
            
        // });

    });

    describe('GET /vendors', () => {

    });

    describe('PATCH /vendor/:vendorId', () => {

    });

    // afterAll(async () => {
    //     await app.close();
    // });

});