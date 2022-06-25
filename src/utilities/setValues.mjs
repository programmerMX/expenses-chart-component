import { getPercentage, getSpending, getWeekTotal } from "../services/spendings.service.mjs"

const getDay = ()=>{
    const date = new Date();
    const numberDay = date.getDay();

    const days = {
        '1': 'mon',
        '2': 'tue',
        '3': 'wed',
        '4': 'thu',
        '5': 'fri',
        '6': 'sat',
        '7': 'sun'
    }

    const day = days[numberDay.toString()];

    return day;
}

export const setPercentage = (node)=>{
    const total = getWeekTotal();
    const day = node.parentElement.lastElementChild.textContent.toLocaleLowerCase();
    const spending = getSpending(day);
    const percentage = getPercentage(total, spending)

    node.style.height = `${percentage * 4}%`
}

export const setTotalDay = (node)=>{
    const spendingPercentage = node.parentElement;
    const day = spendingPercentage.parentElement.lastElementChild.textContent.toLocaleLowerCase();
    
    const total = getSpending(day);

    node.textContent = `$${total}`
}

export const setColor = (node)=>{
    const spendingDay = node.parentElement.lastElementChild.textContent.toLocaleLowerCase();
    const day  = getDay();

    if (day === spendingDay) {
        node.style.background = 'blue'
    }
}

export const setMonthTotal = (node)=>{
    node.textContent = `$${getWeekTotal()}`
}
