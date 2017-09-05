'use strict';

define(['module'], function (module) {

    function Note(name) {
        this.name = name;
        this.store = '';
    }

    module.exports = Note;

    return Note;

});