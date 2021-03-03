import { User } from './user.model';


export interface AppState {
  readonly payment: Array<User>;
}