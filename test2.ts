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

//Пишем к нему typeGuard
type f = (res: IResponseSuccess | IResponseFailed) => number;
type Res = IResponseSuccess | IResponseFailed;

function isSuccess(res: Res): res is IResponseSuccess{
  if(res.status === PaymentStatus.Success){
    return true;
  }
  return false;
  }

// function getIdRfomData(res: Res): number {
// if (isSuccess(res)) {
//   return res.data.databaseId;
// } else {
//   throw new Error(res.data.errorMessage);
// }
// }
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