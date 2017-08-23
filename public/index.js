define(['Vue', 'app/core/store'], function (Vue, Store) {

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

});