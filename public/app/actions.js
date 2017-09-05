'use strict';

define([], function () {

    function Action() {

    }

    Action.prototype.apply = function () {

    };

    function MoveAction() {
        Action.apply(this, [].push.apply(null, arguments));
    }

    MoveAction.prototype = new Action();

    MoveAction.apply = function (note, from, to) {
        // note.store = to.name;
        return from.remove(note.id).then(function () {
            delete note._id;
            return to.add(note);
        }).finally(function () {
            // loading(false);
        });
    };

    return {
        MoveAction : MoveAction
    };
});
