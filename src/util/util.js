export const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"June",
	"July",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export const dayBoxWidth = 15;
export const dayBoxHeight = 15;
export const dayBoxMargin = 2;
export const miliSecondInADay = (24 * 60 * 60 * 1000);

export function calculateWidth({ index, year }) {
	let startDayCount =
		Math.floor(
			(new Date(year, index) - new Date(year)) / miliSecondInADay
		) + 1;
	let nextMonthStart =
		Math.floor(
			(new Date(year, index + 1) - new Date(year)) / miliSecondInADay
		) + 1;

	let weeksInMonth =
		Math.ceil(nextMonthStart / 7) - Math.ceil(startDayCount / 7);

	let monthWidth = (weeksInMonth * dayBoxWidth) + (2* dayBoxMargin *(weeksInMonth - 1)) ;
	return `width: ${monthWidth}px;`;
}

export function calculateBGcolor(txnDetails){
  if(!txnDetails)
    return `background-color: rgba(0, 0, 0, 0.05)`;
  const totalTransactionAmt = txnDetails.totalCreditAmt + txnDetails.totalDebitAmt;
  let greenPercentile = Math.round((txnDetails.totalCreditAmt /totalTransactionAmt)*100);
  let redPercentile =Math.round((txnDetails.totalDebitAmt /totalTransactionAmt)*100);
  return `background-color: rgb(${redPercentile}%, ${greenPercentile}%, 0%)`;
}