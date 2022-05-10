import { BadRequestException } from "@nestjs/common"
import { StatusTypes } from "../entities/vendor.entity"

export class SearchVendorsDto {

    text: string = '';
    
    work_type: string[];

    status: string[];

    sort: "ASC" | "DESC" | -1 | 1 = "ASC";

    constructor(query: any) {
        if (query.text) {
            this.text = query.text;
        }
        if (query.work_type) {
            this.work_type = query.work_type;
        }
        if (query.status) {
            const statuses = query.status;
            for (let i = 0; i<query.status.length; i++) {
                if (!Object.values(StatusTypes).includes(statuses[i])) {
                    throw new BadRequestException(`The status query, ${statuses[i]} is not a valid status type.`)
                }
            }
            this.status = query.status;
        }
        if (query.sort) {
            this.sort = query.sort;
        }
    }
    
}