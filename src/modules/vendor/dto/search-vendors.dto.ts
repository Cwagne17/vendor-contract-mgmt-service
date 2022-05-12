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
            this.work_type = typeof(query.work_type) == "string" ? [query.work_type] : query.work_type;
        }
        if (query.status) {
            let statuses = query.status;
            if (typeof(query.status) == "string") {
                statuses = [query.status];
            }
            for (let i = 0; i<statuses.length; i++) {
                if (!Object.values(StatusTypes).includes(statuses[i])) {
                    throw new BadRequestException(`The status query, ${statuses[i]} is not a valid status type.`)
                }
            }
            this.status = statuses;
        }
        if (query.sort) {
            this.sort = query.sort;
        }
    }
    
}