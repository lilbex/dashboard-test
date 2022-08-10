export const options= {
  responsive: true,
  maintainAspectRatio: false,
  plugins:{
    title:{
    display: false,
    text: "Todo List",
    font:{
      size: 20,
    }
  },
  legend: {
    labels: {
      boxHeight: 0,
      boxWidth:15
    },
  }
},
scales: {
    x: {
      title: {
        display: false,
        // text: 'Months'
      },
      grid: {
        display: true,
       
      }
    },
    y: {
      display: true,
      title: {
        display: false,
        // text: 'Amount in Naira(₦)'
      },
      ticks: {
        stepSize: 20,
      },
      grid: {
        display: true,
        borderDash: [4, 2],
        color: "#D7DBDE"
      },
    }
  }
}
