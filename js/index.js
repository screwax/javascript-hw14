const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';

for (let i = 0; i < friends.length; i ++) {
    string += friends[i];
    if (i !== friends.length -1) {
        string += ","
    }
}
console.log(string)

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];
const cardRemoveIndex = cards.indexOf('Карточка-3');
const cardToRemove = cards.splice(cardRemoveIndex, 1);
console.log(cards);

const cardAddIndex = 'Карточка-6';
const cardToAdd = cards.splice(cards.length, 1, cardAddIndex);
console.log(cards);

const cardUpdateIndex = cards.indexOf('Карточка-4');
const cardToUpdate = 'Карточка-2'
cards.splice(cardUpdateIndex, 1, cardToUpdate);
console.log(cards);