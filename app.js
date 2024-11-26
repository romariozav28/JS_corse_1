const film = 'Звездные войны';
console.log(film.padStart(film.length+5, '*').padEnd(film.length+10, '*'));
console.log((film.padStart(film.length+5, '*').padEnd(film.length+10, '*') + '\n').repeat(5));