class Resp<D, E> {
    data?: D;
    error?: E;

constructor(data?: D, error?: E) {
    if(data) {
        this.data = data;
    }
    if (error) {
        this.error = error;
    }
}
}

const ress1 = new Resp<string, number>('data');

class HTTPResp {
    code: number;

    setCode(code: number) {
        this.code = code;
    }
}
const ress2 = new HTTPResp();