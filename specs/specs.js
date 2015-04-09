describe('scrabbleScore', function() {

    it("will return a score of one if the user inputs a", function() {
        expect(scrabbleScore('a')).to.equal(1);
    });

    it("will return a score of 2 if the user inputs as", function(){
        expect(scrabbleScore('as')).to.equal(2);
    });

    it("will return a score of 5 if the user inputs dog", function(){
        expect(scrabbleScore('dog')).to.equal(5);
    });

    it("will return a score of 9 if the user inputs gimp", function(){
        expect(scrabbleScore('gimp')).to.equal(9);
    });

    it("will return a score of 14 if the user inputs CHAMP", function(){
        expect(scrabbleScore('CHAMP')).to.equal(14);
    });
    it("will return a score of 23 if the user inputs quintessential", function(){
        expect(scrabbleScore('quintessential')).to.equal(23);
    });
});
