interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IpaymentsRequest extends IPayment {
  
}
interface IDataSuccess extends IPayment {
  databaseId: number;
}
interface IDataSuccess{
    databaseId: number;
    sum: number;
    from: number;
    to: number;
}

interface IDataFailed{
   errorMessage: number;
   errorCode: number;
}

// interface IResponse {
// status: PaymentStatus;
// data: IDataSuccess | IDataFailed;
// }


interface IResponseSuccess {
status: PaymentStatus.Success;
data: IDataSuccess;
  }
  interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
      }

    //   function get(): IResponseSuccess | IResponseFailed {

    //   }
    

// Запрос в виде платежа
// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }
// // Ответ
// {
// 	"status": "success",
// 	"data": {
// 		"databaseId": 567,
// 		"sum": 10000,
// 		"from": 2,
// 		"to": 4
// 	}
// },
// {
// 	"status": "failed",
// 	"data": {
// 		"errorMessage": "Недостаточно средств",
// 		"errorCode": 4
// 	}
// }