var app = new Vue({
    el: '#app',
    data: {
        days: {
            yesterday: { name: 'Yesterday', data: [1, 2, 3].map(_buildNote) },
            today: { name: 'Today', data: [1, 2, 3, 4, 5].map(_buildNote) },
            tomorrow: { name: 'Tomorrow', data: [1, 2].map(_buildNote) }
        }
    }
});

function _buildNote(name) {
    return { name: name, description: 'Text' + name };
}

import Store from 'app/store.js'
import IdeasStore from 'app/app.js'

new IdeasStore(new Store('ideas', "http://localhost:5984", () => {
    this.refresh();
}));