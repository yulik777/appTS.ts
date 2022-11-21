interface PaymentPersistent {
    id: number;
    sum: number;
    from: string;
    to: string;
}

//нужно получить платеж без id
type Payment1 = Omit<PaymentPersistent,'id'>;
//Исключить <от куда, 'что исключить'>

type PaymentReq = Pick<PaymentPersistent, 'from' | 'to'>;
//Взять только то, что необходимо 'from' | 'to'

type ExtractEx = Extract<'from' | 'to' | Payment1, string>;
//Вытащить только те, кто является строками

type ExcludeEx = Exclude<'from' | 'to' | Payment1, string>;
//Исключчаем тех, кто является строками
