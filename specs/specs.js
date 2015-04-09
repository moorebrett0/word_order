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

});
