'use strict';

define(['Vue', 'app/notes/notes', 'app/core/store'], function (Vue, Notes, Store) {

    // Vue.component('note-view', {
    //     props: ['todo'],
    //     template: ''
    // })

    Vue.component('note-view', function (resolve) {
        require(['text!app/note/note.view.html'], function (template) {
            resolve({ template: template });
        });
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

        var instance = new Vue({
            el: selector,
            data: {
                now: {
                    yesterday: { name: 'Yesterday', type: 'yesterday', items: [] },
                    today: { name: 'Today', type: 'today', items: [], new: {} },
                    tomorrow: { name: 'Tomorrow', type: 'tomorrow', items: [], new: {} }
                },
                past: { name: 'Past', type: 'past', items: [] },
                future : { name: 'Future', type: 'future', items: [] }
            },
            methods: {
                moveNote: function _moveNote(from, to, note) {
                    var fromStore = _getStore(from.type);
                    var toStore = _getStore(to.type);

                    return fromStore.remove(note.id).then(function () {
                        delete note._id;
                        return toStore.add(note);
                    }).finally(function () {
                        // loading(false);
                    });
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