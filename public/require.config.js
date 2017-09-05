(function () {

    requirejs.config({
        baseUrl: './',

        paths: {
            Vue: './vendors/vue',
            PouchDB: './vendors/pouchdb',
            text: './vendors/text'
        }
    });

    requirejs(['index'], function (app) {
        var instance = app.initialize('#app');

        instance.now[0].items = [1, 2, 3, 4, 5].map(_buildTestNote);
        instance.now[1].items = [1, 2, 3].map(_buildTestNote);
        instance.now[2].items = [1, 2].map(_buildTestNote);

        function _buildTestNote(name) {
            return { name: name, description: 'Text' + name, edit: function () {

            } };
        }
    });

})();