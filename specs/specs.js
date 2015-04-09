describe('word_order', function() {

    it("will return a word if the word a word is entered", function() {
        expect(word_order('hi')).to.eql([1]);
    });

    it("will return a word if the word a word is entered", function() {
        expect(word_order('hi hi')).to.eql([2]);
    });

    it("will return the word that appears most frequently first", function() {
        expect(word_order('hi brett brett brett hi')).to.eql([3, 2]);
    });

    it("will return something proper for whatever", function() {
        expect(word_order('a a b b b c c c c')).to.eql([2, 3, 4]);
    });

    it("will return something proper for whatever", function() {
        expect(word_order('a b b a a c a c b')).to.eql([4, 3, 2]);
    });
    it("will return the word that appears most in order of first to last", function() {
        expect(word_order("how can can we we we play football")).to.equal("we, can, how, play, football");
    });
});
