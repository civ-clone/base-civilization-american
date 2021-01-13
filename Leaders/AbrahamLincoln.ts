import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import American from '../American';

export class AbrahamLincoln extends Leader {
  static civilization(): typeof Civilization {
    return American;
  }

  name(): string {
    return 'Abraham Lincoln';
  }
}

export default AbrahamLincoln;
