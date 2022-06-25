const spendingsData = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

export const getWeekTotal = ()=>{
    return spendingsData.reduce((accum, current)=> accum + current.amount, 0);
}


export const getPercentage = (total, value)=>{
    return (value * 100) / total
}   

export const getSpending = (day)=>{
    const spending =  spendingsData.find(item=> item.day === day);
    return spending.amount
}

