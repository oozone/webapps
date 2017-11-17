
export class Rating {
    private _id: string;
    private _comment: string;
    private _ratingNumber: Number;

    static fromJSON(json): Rating {
        const rec = new Rating(json.comment, json.ratingNumber);
        rec._id = json._id;
        return rec;
    }

    constructor(comment: string, ratingNumber: Number) {
        this._comment = comment;
        this._ratingNumber = ratingNumber;
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

    toJSON() {
        return {
            _id: this._id,
            comment: this._comment,
            ratingNumber: this._ratingNumber,
        };
    }

}
