import American from './American';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'American',
  nation: 'America',
  colors: ['#0055A4', '#FFF'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(American, name, value))
);
