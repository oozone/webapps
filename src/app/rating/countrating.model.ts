
export class Countrating {
    private _id: string;
    private _total: Number;

    static fromJSON(json): Countrating {
        const rec = new Countrating(json.total);
        rec._id = json._id;
        return rec;
    }

    constructor(total: Number) {
        this._total = total;
    }

    get total(): Number {
        return this._total;
    }

    toJSON() {
        return {
        };
    }

}
