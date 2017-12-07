import RestClient from 'react-native-rest-client';
export default class UserRestApi extends RestClient {
    constructor() {
        super('https://appitalk.in/admin/ajax/?action=');
    }
}
//# sourceMappingURL=index.js.map