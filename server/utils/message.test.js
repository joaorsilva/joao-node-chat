var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

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

    describe('generateLocationMessage', () => {

        it('should generate the correct location object', () => {
            var data = {
                from:'test@example.com',
                latitude:-25.4289541,
                longitude: -49.267137
            };
            var res = generateLocationMessage(data.from,data.latitude,data.longitude);
            expect(res.from).toBe(data.from);
            expect(res.url).toBe(`https://www.google.com/maps?q=${data.latitude},${data.longitude}`);
            expect(typeof res.createdAt).toBe('object');
            expect(res.createdAt.constructor.name).toBe('Date');
        });
    });    
});