'use strict';

define(['module'], function (module) {

    // module

    function Notes(store) {
        this.items = [];
        this.store = store;
    }

    Notes.prototype.add = _addNote;
    Notes.prototype.remove = _removeNote;
    Notes.prototype.update = _updateNote;
    Notes.prototype.getOne = _getOneNote;

    return Notes;

    function _addNote() {

    }

    function _removeNote() {

    }

    function _updateNote() {

    }

    function _getOneNote(id) {

    }

});