'use strict';
require('./animal_page');

module.exports = {

    toDo: {
        nameTextBox: element(by.model('person.name')),
        dynamicText: element(by.binding('person.name')),
        continueButton: element(by.buttonText('CONTINUE'))
    },

    enterName: function(name) {
        var todo = this.toDo;
        todo.nameTextBox.sendKeys(name);
    },

    getDynamicText: function() {
        var todo = this.toDo;
        return todo.dynamicText.getText();
    },
    clickContinue: function() {
        var todo = this.toDo;
        todo.continueButton.click();
        return require('./animal_page.js');
    }
};
