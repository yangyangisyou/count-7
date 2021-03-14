const { count7 } = require('./index');

const testSampleInput = (n, expectedAns) => {
    test(`Check the sample input of ${n}`, () => {
        expect(count7(n)).toBe(expectedAns)
    });
};

testSampleInput(1, 0);
testSampleInput(7, 1);
testSampleInput(20, 2);
testSampleInput(70, 8);
testSampleInput(100, 19);
testSampleInput(1000, 271);
