var word_order = function(input) {
    var split = input.split(" ").sort();
    console.log(split);

    var words = [];
    var counts = [];
    var p = 0;

    while(p < split.length) {
        var count = 1;
        var index = split[p];
        words.push(index);
        while(index === split[p+1]){
            split.splice(p+1, 1);
            count++;
        }
        p++;
        counts.push(count);
    }





    // for (var i = 0; i<=split.length; i++) {
    //     var count = 0;
    //     var index = split[p];
    //     words.push(index);
    //     console.log("i: " + i);
    //
    //
    //     // for (var k = 0; k < split.length; k++) {
    //         while((index === split[p]) && (index === split[p+1])) {
    //             split.splice(p+1, 1);
    //             count++;
    //             p++;
    //             console.log("index: " + index);
    //             console.log("split : " + split);
    //             // console.log("k: " + k);
    //             console.log("count" + count);
    //             console.log("p :" + p);
    //             if (p > 15) break;
    //         }
    //
    //
    //
    //     }
    //     counts.push(count);
    //
    //     // for(var k = 0; k < split.length; k++) {
    //     //     if((split[i] === split[k])) {
    //     //         split.splice(k, 1);
    //     //         count++;
    //     //         console.log("split in k loop: " + split);
    //     //     }
    //     //     if (split.length === 1) {
    //     //         split.splice(0,1);
    //     //         count++;
    //     //     }
    //     // }
    //
    // }


    console.log("words: " + words);
    console.log("counts: " + counts);

    return counts;







    // for (var i = 0; i < split.length; i++) {
    //     var word = split[i];
    //     var count = 0;
    //     console.log("word: " + word);
    //
    //     amounts.push({word:count});
    //     console.log("amounts: " + amounts);
    //
    //     for (var k = 0; k < split.length; k++) {
    //         if (word === split[k]) {
    //             word.count++;
    //             split.splice(k, 1);
    //         }
    //     }
    // }
    // // console.log(amounts);




    return amounts;

}

// $(document).ready(function() {
//
//     $("form#input").submit(function(event) {
//         var input = $("input#input").val();
//
//         var score = scrabbleScore(input);
//
//         $('#score').text("Your scrabble score is: " + score +
//                          " for the word " + input);
//
//                          $("#result").show();
//                          event.preventDefault();
//     });
//
//
//
// });
