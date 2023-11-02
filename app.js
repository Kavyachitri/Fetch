
const prompt = require("prompt-sync")()
var notes_2000 = true;
var notes_500 = false;
var notes_200 = true;
var notes_100 = true;

const HDFC = {
    UserName: "Krishna",
    Password: 7123,
    TransforUserName: "abcd",
    AccountNumber: "1234",
}
console.log("Details of HDFC Bank");
console.table(HDFC)
const ICICI = {
    UserName: "Harsha",
    Password: 1234,
    TransforUserName: "efgh",
    AccountNumber: "2345",
}
console.log("Details of ICICI Bank");
console.table(ICICI)
const SBI = {
    UserName: "Ram",
    Password: 2345,
    TransforUserName: "ijkl",
    AccountNumber: "3456",
}

console.log("Details of SBI Bank");
console.table(SBI)

var BankBalance = 1000;
var TransferBankBalance = 1000;
var printministatement=[];




const User = prompt("Enter the UserName :");
const pwd = parseInt(prompt("Enter your Password :"));
if ((User === HDFC.UserName && pwd === HDFC.Password) || (User === ICICI.UserName && pwd === ICICI.Password) || (User === SBI.UserName && pwd === SBI.Password)) {
    console.log("Welcome to Banking process");
    while (true) {
        let options = {
            Deposit: '1',
            WithDraw: '2',
            BalanceEnquiry: '3',
            MoneyTransfer: '4',
            MiniStatement: '5',
            Exit: '6',
        }
        console.table(options);
        let option = prompt("Chose one :")
        if (option == options.Deposit) {
            console.log("Deposit")
            var DepositAmount = parseInt(prompt("Enter Your Deposit Amount:"));
            if ((DepositAmount < BankBalance) || (DepositAmount > BankBalance) || (DepositAmount == BankBalance)) {
                BankBalance = BankBalance + DepositAmount;
                var printDepositAmout = '${DepositAmount} Deposited Amount successfully';
                console.log(printDepositAmout);
                printministatement.push(printDepositAmout);

            }
        }
        else if (option == options.WithDraw) {
            console.log("WithDraw")
            var WithDrawAmount = parseInt(prompt("Enter The Amount:"));
            if (WithDrawAmount <= BankBalance) {
                BankBalance = BankBalance - WithDrawAmount;
                var printWithDraw = '${WithDraw} WithDraw Amount';
                console.log(printWithDraw);
                printministatement.push(printWithDraw);
                var count = 0;
                if (notes_2000 && WithDrawAmount >= 2000) {
                    var notes_2000_count = (Math.floor(WithDrawAmount / 2000));
                    console.log(notes_2000_count, "=2000 notes");
                    count = count + notes_2000_count;
                    WithDrawAmount = WithDrawAmount - (notes_2000_count * 2000)
                }
                if (notes_500 && WithDrawAmount >= 500) {
                    var notes_500_count = (Math.floor(WithDrawAmount / 500));
                    console.log(notes_500_count, "=500 notes");
                    count = count + notes_500_count;
                    WithDrawAmount = WithDrawAmount - (notes_500_count * 500)
                }
                if (notes_200 && WithDrawAmount >= 200) {
                    var notes_200_count = (Math.floor(WithDrawAmount / 200));
                    console.log(notes_200_count, "=200 notes");
                    count = count + notes_200_count;
                    WithDrawAmount = WithDrawAmount - (notes_200_count * 200)
                }
                if (notes_100 && WithDrawAmount >= 100) {
                    var notes_100_count = (Math.floor(WithDrawAmount / 100));
                    console.log(notes_100_count, "=100 notes");
                    count = count + notes_100_count;
                    WithDrawAmount = WithDrawAmount - (notes_100_count * 100)
                }
                console.log("notes count :", count);

            }
            else {
                console.log("Insufficient balance");
            }
        }
        else if (option == options.BalanceEnquiry) {
            console.log("BalanceEnquiry")
            console.log(BankBalance)
        }
        else if (option == options.MoneyTransfer) {
            console.log("MoneyTransfer")
            const TransferUserid = prompt("Enter the user id");
            const Transforacountnumber = prompt("Enter the acount number");
            if (((TransferUserid === SBI.TransforUserName) && (Transforacountnumber === SBI.AccountNumber)) || ((TransferUserid === HDFC.TransforUserName) && (Transforacountnumber === HDFC.AccountNumber) || (TransferUserid === ICICI.TransforUserName) && (Transforacountnumber === ICICI.AccountNumber))) {
                var TransforAmount = parseInt(prompt("Enter the amount"))
                if (TransforAmount <= BankBalance) {
                    TransferBankBalance = TransferBankBalance + TransforAmount;
                    BankBalance -= TransforAmount;
                    var printTransferAmout = `${TransforAmount} Amount Successfully`;
                    console.log(printTransferAmout);
                    printministatement.push(printTransferAmout);
                }

            }



        }
        else if (option == options.MiniStatement) {
            console.log("Meni")
            console.log(printministatement)
            
        }
        else if (option == options.Exit) {
            console.log("Exit")
            break;
        }

    }
}
else {
    console.log("Invalid Details")
}

