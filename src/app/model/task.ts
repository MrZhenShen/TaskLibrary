import {Complexity} from "./complexity";

export interface Task {
  title?: string,
  content?: string,
  author: string,
  complexity?: Complexity,
  topic?: string,
  sharedWith: string[]
}
