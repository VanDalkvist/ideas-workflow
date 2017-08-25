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

        instance.now.today.items = [1, 2, 3, 4, 5].map(_buildTestNote);
        instance.now.yesterday.items = [1, 2, 3].map(_buildTestNote);
        instance.now.tomorrow.items = [1, 2].map(_buildTestNote);

        function _buildTestNote(name) {
            return { name: name, description: 'Text' + name };
        }
    });

})();