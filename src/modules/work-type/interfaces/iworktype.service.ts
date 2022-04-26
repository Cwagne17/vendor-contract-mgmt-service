import { CreateWorkTypeDto } from "../dto/create-work-type.dto";
import { SearchWorkTypesDto } from "../dto/search-work-type.dto";
import { UpdateWorkTypeDto } from "../dto/update-work-type.dto";
import { WorkType } from "../entities/work-type.entity";


export interface IWorkTypeService {

    /**
     * Function to create a new work type in the database
     * 
     * @param createWorkTypeDto - Request Body validated by the CreateWorkTypeDto class
     */
    createWorkType(createWorkTypeDto: CreateWorkTypeDto): Promise<void>;

    /**
     * Function to get many work types associated to a given query
     * 
     * @param query - Request Query validated by the SearchWorkTypeDto class
     */
    searchWorkType(query: SearchWorkTypesDto): Promise<WorkType[]>;

    /**
     * Function to update an existing work type in the database
     * 
     * @param id - Request Param worktypeId
     * @param updateWorkTypeDto - Request Body validated by the UpdateWorkTypeDto
     */
    updateWorkType(id: string, updateWorkTypeDto: UpdateWorkTypeDto): Promise<void>;

    /**
     * Function to delete an existing work type in the database
     * 
     * @param id - Request Param worktypeId
     */
    deleteWorkType(id: string): Promise<void>;

}