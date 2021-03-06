import { Timestamp } from "rxjs/operators/timestamp";


export class Rating {
    private _id: string;
    private _comment: string;
    private _ratingNumber: Number;
    private _created_date: Date;

    static fromJSON(json): Rating {
        const rec = new Rating(json.comment, json.ratingNumber, json.createdDate);
        rec._id = json._id;
        return rec;
    }

    constructor(comment: string, ratingNumber: Number, createdDate: Date) {
        this._comment = comment;
        this._ratingNumber = ratingNumber;
        //this._created_date = new Date();
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

    get ratingNumber(): Number {
        return this._ratingNumber;
    }
    set ratingNumber(ratingNumber: Number) {
        this._ratingNumber = ratingNumber;
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
            comment: this._comment,
            ratingNumber: this._ratingNumber,
            created_date: this._created_date,
        };
    }

}
