import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import American from '../American';

export class GeorgeWashington extends Leader {
  static civilization(): typeof Civilization {
    return American;
  }

  name(): string {
    return 'George Washington';
  }
}

export default GeorgeWashington;
