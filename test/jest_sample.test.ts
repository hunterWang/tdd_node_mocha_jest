/**
 * Created by hunterwang on 08/09/2017.
 */
const sum = require('../src/lib/sample_function.ts');
const math = require('../src/lib/sample_module.ts');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('5-2 =3', () =>{
    var math_obj = new math();
    expect(math_obj.subtract(5,2)).toBe(3);
})