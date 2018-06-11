const expect = require('expect');

const {Users} = require('./users');

beforeEach(()=>{
    users = new Users();
    users.users = [{
        id: '1',
        name: 'Mike',
        room: 'Node course'
    },{
        id: '2',
        name: 'Jen',
        room: 'React course'
    },{
        id: '3',
        name: 'Julie',
        room: 'Node course'
    }];
});

describe('Users', () => {

    describe('addUser',() => {

        it('shoud add a new user', (done) => {
            var users = new Users();
            var user = {
                id: '1234',
                name: 'Joao',
                room: 'The Office Fans'
            };
    
            var resUser = users.addUser(user.id, user.name, user.room);
    
            expect(users.users).toEqual([user]);
            done();
        });
    });

    describe('removeUser', () => {

        it('should not remove user', (done) => {
            var userId = '123';
            var user = users.removeUser(userId);
            expect(user).not.toBeTruthy();
            expect(users.users.length).toBe(3);
            done();
        });

        it('should remove user', (done) => {
            var userId = '1';
            var user = users.removeUser(userId);
            expect(user.id).toBe(userId);
            expect(users.users.length).toBe(2);
            done();
        });
    });

    describe('getUser',() => {

        it('should not find user', (done) => {
            var userId = '123';
            expect(users.getUser(userId)).not.toBeTruthy();
            done();
        });

        it('should find user', (done) => {
            var userId = '3';
            var user = users.getUser(userId);
            expect(user).toBeTruthy();
            expect(typeof user).toBe('object');
            expect(user).toEqual(users.users[2]);
            done();
        });
    });

    describe('getUserList',() => {

        it('should return names for node course', (done) => {
            var userList = users.getUserList('Node course');
            expect(userList).toEqual(['Mike','Julie']);
            done();
        });

        it('should return names for react course', (done) => {
            var userList = users.getUserList('React course');
            expect(userList).toEqual(['Jen']);
            done();
        });

    });


});