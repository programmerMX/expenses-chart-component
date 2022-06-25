//1.-sumar el total del mes actual y renderizarlo en la section correspondiente.
//2.-almazenar el total del mes pasada y calcular el informe de aumento de decremento.
//sumar todo el total en el apartado de balance.

import { setColor, setMonthTotal, setPercentage, setTotalDay } from "./utilities/setValues.mjs";

const daysSpendings = document.querySelectorAll('.spending-grafic--item');
const totalDay = document.querySelectorAll('.total-day-spending');
const spendingPercentages = document.querySelectorAll('.spending-percentage');
const totalMonth = document.getElementById('total-month');

//aplicamos el evento para ver el resultado del dia.
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

//renderizmaos el total de dia.
totalDay.forEach(item=>{
  setTotalDay(item)
})

//calculamos el porcentaje.
spendingPercentages.forEach(item=>{
  setPercentage(item);
  setColor(item)
})

setMonthTotal(totalMonth);


//TODO: hacer merge a la rama master.
//TODO: ajustar el tamaño de las graficas.