define(['Vue', 'app/core/store'], function (Vue, Store) {

    // Vue.component('note-view', {
    //     props: ['todo'],
    //     template: ''
    // })

    Vue.component('note-view', function (resolve) {
        require(['text!app/note/note.view.html'], function (template) {
            resolve({ template: template });
        });
    });

    return {
        initialize: _initialize
    };

    function _initialize(selector) {
        return new Vue({
            el: selector,
            data: {
                days: {
                    yesterday: { name: 'Yesterday', data: [1, 2, 3].map(_buildNote) },
                    today: { name: 'Today', data: [1, 2, 3, 4, 5].map(_buildNote) },
                    tomorrow: { name: 'Tomorrow', data: [1, 2].map(_buildNote) }
                }
            }
        });
    }

    function _buildNote(name) {
        return { name: name, description: 'Text' + name };
    }

    function DayNotes(name, notes, canAdd, canRemove) {
        this.name = name;
        this.notes = notes || [];
        this.canAdd = canAdd;
        this.canRemove = canRemove;
    }

    function _addNote(day, note) {
        if (!day.canAdd) {
            return;
        }

        day.notes.push(note);
    }

    function _removeNote(day, id) {
        if (!day.canRemove) {
            return;
        }

        // todo: remove
        // day.notes.push();
    }

});