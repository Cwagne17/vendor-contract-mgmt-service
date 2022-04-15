import { StatusTypes } from "../../src/modules/vendor/entities/vendor.entity";
import { v4 as uuidV4 } from 'uuid';

export const VENDOR_DATA = {
    CREATE_VENDOR: {
        vendor_name: "test vendor",
        first_name: "john",
        last_name: "smith",
        selection_method: "saw on internet",
        status: StatusTypes.IN_CONTRACT,
        contact_phone_number: "123-123-1234",
        contact_email: "test@gmail.com",
        memo: "This is a mock vendor memo",
        work_id: uuidV4()
    }
};
