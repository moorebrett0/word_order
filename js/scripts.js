var word_order = function(input) {
    var split = input.split(" ").sort();
    console.log(split);
    var result = [];
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


    for (var i = 0; i < words.length; i++) {
        var the_word = words[i];
        var the_count = counts[i];
        result.push({the_word:the_count});
    }
    console.log("result: " + result);
    // debugger;

    return result.filter(function(element));

}
