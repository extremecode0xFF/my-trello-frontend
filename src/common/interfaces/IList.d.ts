import { ICard } from './ICard';

export interface IList extends ICard {
  cards: ICard[];
}
