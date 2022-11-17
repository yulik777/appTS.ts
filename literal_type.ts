type ReadorWrite = 'read' | 'write';
type Bulk = 'bulk' | '';

type Access = `can${Capitalize<ReadorWrite>}${Bulk}`;

//вытаскиваем тип с ReadorWrite с помощью infer

type ReadorWriteBulk<T> =
T extends `can${infer R}` ? R : never;

type T = ReadorWriteBulk<Access>;

//пример

type ErrororSuccess = 'error'| 'success';

type ResponseT = {
    result: `http${Capitalize<ErrororSuccess>}`
}

const f: ResponseT = {
    result: 'httpSuccess'
}