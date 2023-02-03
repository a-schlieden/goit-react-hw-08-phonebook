export const SelectedContacts = (state) => {
    return state.contacts.contacts.items.filter((contact) => {
        return contact.name.toLowerCase()
            .includes(state.filter.filter.toLowerCase())
    })

}

export const AllContacts = state => state.contacts.contacts.items;
export const Status = state => state.contacts.contacts.status;
export const Filtered = state => state.filter.filter;


export const UsersName = state => state.auth.user.name;
export const IsLoggedIn = state => state.auth.isLoggedIn;