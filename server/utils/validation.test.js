const expect = require('expect');
const {isRealString} = require('./validation');

describe('Validation', () => {
    describe('isRealString', () => {
        it('should reject non-string object', (done) => {
            expect(isRealString(9)).toBe(false);
            done();
        });
        it('should reject string with only spaces', (done) => {
            expect(isRealString("    ")).toBe(false);
            done();
        });
        it('should allow string with non-space characters', (done) => {
            expect(isRealString(" real string   ")).toBe(true);
            done();
        });
    });
});