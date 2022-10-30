enum StatusCode{
    Success = 1,
    In_progress = 2 ,
    Failed= 3
    } //variantu znacheniy

const res = {
    message: 'Payment success',
    statusCode: StatusCode.Success
};

if (res.statusCode === StatusCode.Success){

}//проверка


function action (status: StatusCode) {

} //func prinimaet znachenia StatusCode
action (StatusCode.Success);
action(1);


 const enum Roles { //constantnuy enam
    ADMIN = 1,
    USER = ADMIN*2
}
const res2= Roles.ADMIN ; // pokazet 1
