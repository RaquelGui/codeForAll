var filmCharacters = [
    ['Vito', 'Michael', 'Sonny', 'Freddo'],
    ['Mia', 'Vincent', 'Jules', 'Butch'],
    ['Bella', 'Edward', 'Jacob', 'Carlisle'],
    ['James', 'M', 'Moneypenny', 'Felix']
];

for (var i = 0; i < filmCharacters.length; i++){
    for (var j = 0; j < filmCharacters[i].length; j++){
        if (filmCharacters[i][j].startsWith("M")){
        console.log(filmCharacters[i][j])}
    }
}
