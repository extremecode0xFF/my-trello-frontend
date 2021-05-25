import { IUser } from './IUser';
import { ILists } from './ILists';

export interface IBoardFull {
  title: string;
  lists: ILists;
  users: IUser[];
}
