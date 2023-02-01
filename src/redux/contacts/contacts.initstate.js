import { STATUS } from "constants/constants";

export const ContactsInitState = {
    contacts: {
        status: STATUS.idle,
        items: [],
        isLoading: false,
        error: null
    },

}

