import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { IUserService } from './interfaces/iuser.service';

@Injectable()
export class UserService implements IUserService {
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}

    async findUser(id: string, username: string): Promise<Partial<User>> {
        /**
         * 
         * SELECT id, username, password, roles 
         * FROM 'user'
         * WHERE 
         *  user.username = {username}
         *  user.id = {id}
         * 
         */
        return await this.userRepo.findOne({
            select: ["id", "username", "password", "roles"],
            where: {
                id: id,
                username: username 
            }
        });
    }

}
