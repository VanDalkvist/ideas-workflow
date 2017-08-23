'use strict';

define(['PouchDB'], function (PouchDB) {

    function Store(name, remote, onChange) {
        this.db = new PouchDB(name);

        let settings = {
            live: true,
            retry: true
        };

        PouchDB.sync(name, `${remote}/${name}`, settings).on('change', info => {
            onChange(info);
        });
    }

    Store.prototype.getAll = _getAll;
    Store.prototype.get = _get;
    Store.prototype.save = _save;
    Store.prototype.add = _add;
    Store.prototype.update = _update;
    Store.prototype.remove = _remove;

    return Store;

    function _getAll() {
        return this.db.allDocs({include_docs: true}).then(db => {
            return db.rows.map(row => {
                return row.doc;
            });
        });
    }

    function _get(id) {
        return this.db.get(id);
    }

    function _save(item) {
        return item._id
            ? this.update(item)
            : this.add(item);
    }

    function _add(item) {
        return this.db.post(item);
    }

    function _update(item) {
        let db = this.db;

        return db.get(item._id).then(updatingItem => {
            Object.assign(updatingItem, item);
            return db.put(updatingItem);
        });
    }

    function _remove(id) {
        let db = this.db;

        return db.get(id).then(item => {
            return db.remove(item);
        });
    }
});