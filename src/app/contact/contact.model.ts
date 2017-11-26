import { Timestamp } from "rxjs/operators/timestamp";


export class Contact {
    private _id: string;
    private _name: string;
    private _email: string;
    private _comment: string;
    private _created_date: Date;

    static fromJSON(json): Contact {
        const rec = new Contact(json.name, json.email, json.comment, json.createdDate);
        rec._id = json._id;
        return rec;
    }

    constructor(name: string, email: string, comment: string, createdDate: Date) {
        this._name = name;
        this._email = email;
        this._comment = comment;
        this.createdDate = createdDate;
    }

    get id(): string {
        return this._id;
    }
    get comment(): string {
        return this._comment;
    }
    set comment(comment: string) {
        this._comment = comment;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string){
        this._name = name;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string){
        this._email = email;
    }

    get createdDate(): Date {
        return this._created_date;
    }

    set createdDate(created_date: Date) {
        this._created_date = created_date;
    }

    toJSON() {
        return {
            _id: this._id,
            name: this._name,
            email: this._email,
            comment: this._comment,
            created_date: this._created_date,
        };
    }

}
