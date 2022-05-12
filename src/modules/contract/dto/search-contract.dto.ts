export class SearchContractsDto {

    text: string = '';

    work_type: string[];

    sort: "ASC" | "DESC" | -1 | 1 = "ASC";
    
    constructor(query: any) {
        if (query.text) {
            this.text = query.text;
        }
        if (query.work_type) {
            this.work_type = query.work_type;
        }
        if (query.sort && ["ASC", "DESC", -1, 1].includes(query.sort)) {
            this.sort = query.sort;
        }
    }
}