var expect = require('expect');
var {generateMessage} = require('./message');

describe('Utils', () => {
    describe('generateMessage', () => {

        it('should generate the correct message object', () => {
            var data = {
                from:'test@example.com',
                text:'Test message'
            };
            var res = generateMessage(data.from,data.text);
            expect(res.from).toBe(data.from);
            expect(res.text).toBe(data.text);
            expect(typeof res.createdAt).toBe('object');
            expect(res.createdAt.constructor.name).toBe('Date');
        });
    });
});