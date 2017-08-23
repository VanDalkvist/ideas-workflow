(function () {

    requirejs.config({
        baseUrl: './',

        paths: {
            Vue: './vendors/vue',
            PouchDB: './vendors/pouchdb',
        }
    });

    requirejs(['index'], function (app) {
        app.initialize('#app');
    });

})();