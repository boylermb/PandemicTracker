import { CardBackground } from './card-background.enum';
export class CityCard {
  constructor(
    public id: number,
    public name: string,
    public color: CardBackground) {}
}
