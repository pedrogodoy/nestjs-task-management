import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { Task } from "src/tasks/task.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    
}