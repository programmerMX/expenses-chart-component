import { setColor, setPercentage, setTotalDay } from "./utilities/setValues.mjs";

const daysSpensings = document.querySelectorAll('.spending-grafic--item');

daysSpensings.forEach(item=>{
    item.addEventListener('mouseover', ()=>{
        const totalDaySending = item.firstElementChild;
        totalDaySending.classList.add('total-day-spending--active');

        const totalDayGrafic = totalDaySending.nextElementSibling;
        totalDayGrafic.style.opacity  = '.8'
    })

    item.addEventListener('mouseout', ()=>{
        const totalDaySending = item.firstElementChild;
        totalDaySending.classList.remove('total-day-spending--active');
        
        const totalDayGrafic = totalDaySending.nextElementSibling;
        totalDayGrafic.style.opacity  = ''
    })
})

const spendingPercentages = document.querySelectorAll('.spending-percentage');
const totalDay = document.querySelectorAll('.total-day-spending');

totalDay.forEach(item=>{
  setTotalDay(item)
})

spendingPercentages.forEach(item=>{
  setPercentage(item);
  setColor(item)
})
