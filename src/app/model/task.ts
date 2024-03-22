import {Complexity} from "./complexity";
import {User} from "./user";

export interface Task {
  title: string,
  content: string,
  author: User,
  complexity: Complexity,
  topic: string
}
