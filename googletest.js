var AngularPage = require('./pages/AngularPage');

describe('angularjs homepage', function () {
    var page;

    beforeEach(function () {
        page = new AngularPage();
    });

    it('should greet the named user', function () {
        page.typeName('Julie');
        expect(page.greeting).toEqual('Hello Julie!');
    });

    describe('todo list', function () {
        it('should list todos', function () {
            expect(page.todoList.count()).toEqual(2);
            expect(page.todoAt(1)).toEqual('build an AngularJS app');
        });

        it('should add a todo', function () {
            page.addTodo('write a protractor test');
            page.addTodo('write a protractor test 2');
            expect(page.todoList.count()).toEqual(4);
            expect(page.todoAt(3)).toEqual('write a protractor test 2');
        });
    });
    describe('search project', function () {

        it('should search a project', function () {
            page.searchProject('project');
        });
    });
});