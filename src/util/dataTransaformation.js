import { miliSecondInADay } from "./util";

let transactions = new Array(365);
const SUCCESS_STATUS = "success";

function getTransactionDayCount(date) {
	return (date - new Date("2019")) / miliSecondInADay;
}

function updateHeatMap(transaction) {
	let dayCount = getTransactionDayCount(new Date(transaction.date));
	if (!transactions[dayCount]) {
		if (transaction.transactionType === SUCCESS_STATUS) {
			transactions[dayCount] = {
				txnDate: transaction.date,
				totalCreditAmt: transaction.amount,
				totalDebitAmt: 0,
			};
		}
		else { //if (transaction.transactionType === FAILED_STATUS) 
			transactions[dayCount] = {
				txnDate: transaction.date,
				totalCreditAmt: 0,
				totalDebitAmt: transaction.amount,
			};
		}
	} else {
		const currentDetails = transactions[dayCount];

		if (transaction.transactionType === SUCCESS_STATUS) {
			let newCreditAmt = +(
				currentDetails.totalCreditAmt + transaction.amount
			).toFixed(2);
			transactions[dayCount] = {
				...currentDetails,
				totalCreditAmt: newCreditAmt,
			};
		} else {
			//if (transaction.transactionType === FAILED_STATUS)
			let newDebitAmt = +(
				currentDetails.totalDebitAmt + transaction.amount
			).toFixed(2);
			transactions[dayCount] = {
				...currentDetails,
				totalDebitAmt: newDebitAmt,
			};
		}
	}
}

export default function getTransformeddata(data) {
	data.forEach((transaction) => updateHeatMap(transaction));
	return { year: "2019", transactions: transactions };
}
