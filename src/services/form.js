export default class form {
    constructor(data) {
        this.originData = _.cloneDeep(data);
        for (let field in data) {
            this[field] = _.cloneDeep(data[field]);
        }
    }
    reset() {
        for (let field in this.originData) {
            this[field] = this.originData[field];
        }
    }
    getData() {
        const data = _.cloneDeep(this);

        delete data.originData;

        return data;
    }

    patchValue(newData) {
        let mergeData = _.merge(this, newData);
        return mergeData;
    }

}