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
        app.initialize('#app');
    });

})();