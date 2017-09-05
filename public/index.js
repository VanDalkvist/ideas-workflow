'use strict';

define([
    'Vue',
    'app/notes/notes', 'app/core/store', 'app/actions'
], function (Vue, Notes, Store, Actions) {

    Vue.component('note-view', {
        props: ['note', 'actions'],
        template:
            "<div class='content'>" +
                "<a class='button' v-on:click='toggleMode'><span class='panel-icon'>Edit</span></a>" +
                "<h2>{{note.name}}</h2>" +
                "<p>{{note.description}}</p>" +
            "</div>",
        methods: {
            toggleMode: function () {
                this.actions.toggle();
            }
        }
    });

    var stores = {};

    _addNotesStore(stores, 'today');
    _addNotesStore(stores, 'yesterday');
    _addNotesStore(stores, 'tomorrow');
    _addNotesStore(stores, 'past');
    _addNotesStore(stores, 'future');

    return {
        initialize: _initialize
    };

    function _initialize(selector) {

        var days = [
            { name: 'Yesterday', type: 'yesterday', items: [] },
            { name: 'Today', type: 'today', items: [], new: {} },
            { name: 'Tomorrow', type: 'tomorrow', items: [], new: {} }
        ];

        var instance = new Vue({
            el: selector,
            data: {
                now: days,
                past: { name: 'Past', type: 'past', items: [] },
                future: { name: 'Future', type: 'future', items: [] }
            },
            methods: {
                toggleMode: function (note, store) {
                    note.template = note.template === 'edit-view' ? 'details-view' : 'edit-view';
                    // store.save(note);
                },
                moveNote: function _moveNote(from, to, note) {
                    var fromStore = _getStore(from.type);
                    var toStore = _getStore(to.type);

                    return Actions.MoveAction.apply(note, fromStore, toStore);
                },
                addNote: function _addNote(list, note) {
                    var store = _getStore(list.type);
                    store.add(note);
                },
                removeNote: function _removeNote(list, note) {
                    var store = _getStore(list.type);
                    return store.remove(note.id);
                },
                changeNew: function _changeNewNote(list, note) {
                    var store = _getStore(list.type);
                    return store.changeNew(note);
                }
            }
        });

        return instance;
    }

    function _addNotesStore(stores, type) {
        stores[type] = new Store('notes' + ':' + type);
    }

    function _getStore(type) {
        return stores[type];
    }

});