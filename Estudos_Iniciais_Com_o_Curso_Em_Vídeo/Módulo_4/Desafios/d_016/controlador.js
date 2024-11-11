export default class NúmeroTela {
    static numTela = 0

    constructor() {}

    static getNum() {
        return this.numTela
    }

    static setNum(numNew) {
        this.numTela=numNew
    }

}
