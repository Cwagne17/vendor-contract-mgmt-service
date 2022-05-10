import { BadRequestException } from "@nestjs/common"
import { StatusTypes } from "../entities/vendor.entity"

export class SearchVendorsDto {

    text: string = '';
    
    work_type: string[];

    status: string[];

    sort: "ASC" | "DESC" | -1 | 1 = "ASC";

    constructor(query: any) {
        console.log(query);
        console.log(typeof query.work_type)
        if (query.text) {
            this.text = query.text;
        }
        if (query.work_type) {
            this.work_type = query.work_type.split();
        }
        if (query.status) {

            const statuses = query.status.split();
            for (let i = 0; i<statuses.length; i++) {
                if (!Object.values(StatusTypes).includes(statuses[i])) {
                    throw new BadRequestException(`The status query, ${statuses[i]} is not a valid status type.`)
                }
            }
        }
        if (query.sort) {
            this.sort = query.sort;
        }
    }
    
}