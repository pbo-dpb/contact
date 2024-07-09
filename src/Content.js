export default class Content {
    constructor(payload) {
        this.type = payload.type;
        this.value = payload.value;
        this.presentation = payload.presentation && payload.presentation !== 'default' ? payload.presentation : null;
    }
}