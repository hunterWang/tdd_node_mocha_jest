var assert = require('assert');


const contents = {
    string: '測試',
    number: 100
};


suite('contents is an Object,', function(){
    test('contents have string and number fields.', (done) => {
        contents.should.be.an.Object();
        contents.should.have.keys('string', 'number');
        contents.string.should.be.String();
        contents.string.should.be.equal('測試');
        contents.number.should.be.Number().and.equal(100);
        return done();
    });
})
suite('math module', function(){
    test('should add numbers', function () {
        assert.equal((1+1), '2');
        assert.strictEqual(127 + 319, 446);
    });

    test('should sub numbers', function () {
        assert.equal((23-1), '22');
        assert.strictEqual(127 - 7, 120);
    });
});


