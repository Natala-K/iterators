import Character from './Character';

export default class Team {
  constructor() {
    this.members = [];
  }

  add(character) {
    if (character instanceof Character) {
      this.members.push(character);
    } else {
      throw new Error('Только экземпляры класса Character могут быть добавлены в команду');
    }
  }

  [Symbol.iterator]() {
    let index = 0;
    const { members } = this;

    return {
      next() {
        if (index < members.length) {
          return { value: members[index++], done: false };
        }
        return { done: true };
      }
    };
  }
}
