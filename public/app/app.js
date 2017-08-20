
var CONTACT_ID_ATTR_NAME = 'data-contractid';
var CONTACT_REMOVE_CONFIRM = 'Are you sure?';
var NO_CONTACTS_TEXT = 'No ideas';

class IdeasStore {

    constructor(store) {
        this.store = store;
        this.init();
        this.refresh();
    }

    init() {
    }

    refresh() {
        this.store.getAll().then(contacts => {
        });
    }

    showContact(event) {
        var contactId = event.currentTarget.getAttribute(CONTACT_ID_ATTR_NAME);

        this.store.get(contactId).then(contact => {
        })
    }

    editContact() {
        var contactId = this.getContactId();

        this.store.get(this.getContactId()).then(contact => {
        });
    }

    saveIdea() {
        var contact = this.getContactDetails();

        this.store.save(contact).then(() => {
        });
    }

    /**
     * Put an idea to removed list
     */
    removeIdea() {
        if(!window.confirm(CONTACT_REMOVE_CONFIRM))
            return;

        var contactId = this.getContactId();

        this.store.remove(contactId).then(() => {
        });
    }
}

window.IdeasStore = IdeasStore;
