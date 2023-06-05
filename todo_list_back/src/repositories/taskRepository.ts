import { Repository, EntityRepository } from "typeorm";
import { Todo } from "../entities/todo";

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {}
