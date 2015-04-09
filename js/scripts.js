var scrabbleScore = function(input) {
    var letters = {'a':1,'e':1,'i':1,'o':1,'l':1,'n':1,'r':1,'s':1,'t':1,
                    'd':2, 'g':2};
    console.log(letters);
    var score = 0;
    var split_input = input.split("");
    console.log(split_input);

    for (var i = 0; i < split_input.length; i++) {
        score += letters[split_input[i]];
    }

    return score;
}
