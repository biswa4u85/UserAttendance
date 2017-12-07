import RestClient from 'react-native-rest-client'

export default class UserRestApi extends RestClient {
    constructor() {
        super('https://appitalk.in/admin/ajax/?action=')
    }

    // login(username, password) {     return this.POST('/auth', {username,
    // password}) } //Get getCurrentUser() {     return this         .GET('/auth')
    //       .then(response => response.user) }
}