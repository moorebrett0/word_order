var scrabbleScore = function(input) {
    var letters = { 'a':1, 'e':1, 'i':1, 'o':1, 'l':1, 'n':1, 'r':1, 's':1, 't':1, 'u':1,
                    'd':2, 'g':2,
                    'b':3, 'c':3, 'm':3, 'p':3,
                    'f':4, 'h':4, 'v':4, 'w':4, 'y':4,
                    'k':5,
                    'j':8, 'x':8,
                    'q':10, 'z':10};

    var score = 0;
    var split_input = input.toLowerCase().split("");
    console.log(split_input);

    for (var i = 0; i < split_input.length; i++) {
        score += letters[split_input[i]];
        console.log(score);
    }

    return score;
}

$(document).ready(function() {

    $("form#input").submit(function(event) {
        var input = $("input#input").val();

        var score = scrabbleScore(input);

        $('#score').text("Your scrabble score is: " + score +
                         " for the word " + input);

                         $("#result").show();
                         event.preventDefault();
    });



});
