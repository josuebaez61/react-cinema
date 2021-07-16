export class Buyer {
    private email: string;
    private uid: string;
    private password: string | null;
    constructor(email: string,uid: string,password?: string) {
        this.email = email;
        this.uid = uid;
        this.password = password ? password : null;
    }
}