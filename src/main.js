import { setColor, setPercentage, setTotalDay } from "./utilities/setValues.mjs";

const daysSpendings = document.querySelectorAll('.spending-grafic--item');
const totalDay = document.querySelectorAll('.total-day-spending');

daysSpendings.forEach(item=>{
    item.addEventListener('mouseover', ()=>{
        const totalDaySendingParent = item.firstElementChild;
        const totalDaySending = totalDaySendingParent.firstElementChild;
        
        totalDaySending.classList.add('total-day-spending--active');

        const totalDayGrafic = totalDaySending.parentElement;
        totalDayGrafic.style.opacity  = '.8'
    })

    item.addEventListener('mouseout', ()=>{
        const totalDaySendingParent = item.firstElementChild;
        const totalDaySending = totalDaySendingParent.firstElementChild;
        totalDaySending.classList.remove('total-day-spending--active');
        
        const totalDayGrafic = totalDaySending.parentElement;
        totalDayGrafic.style.opacity  = ''
    })
})

const spendingPercentages = document.querySelectorAll('.spending-percentage');

totalDay.forEach(item=>{
  setTotalDay(item)
})

spendingPercentages.forEach(item=>{
  setPercentage(item);
  setColor(item)
})


//TODO: hacer merge a la rama master.
//TODO: ajustar el tamaño de las graficas.