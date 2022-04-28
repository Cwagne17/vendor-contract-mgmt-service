import { User } from "../entities/user.entity";

export interface IUserService {
    findUser(id: string, username: string): Promise<Partial<User>>;
}