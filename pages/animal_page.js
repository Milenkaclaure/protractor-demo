'use strict';
//require('./confirm_page');

module.exports = {

    toDo: {
        animalSelectbox: element(by.model('animal')),
        continueButton: element(by.buttonText('CONTINUE'))
    },

    selectAnimal: function(animal_id) {
        var todo = this.toDo;
        todo.animalSelectbox.$('[value="1"]').click();
    },

    clickContinue: function() {
        var todo = this.toDo;
        todo.continueButton.click();
        return require('./confirm_page.js');
    }
};
