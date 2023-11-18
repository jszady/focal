 const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
const getTotalSales = (salesData, companyName) => {

  let totalSales = 0;

  for(let i = 0; i < salesData.length; i++)
  {
    if(salesData[i].name === companyName)
    {
      for(let j = 0; j < salesData[i].sales.length; j++)
      {
        totalSales += salesData[i].sales[j]; 
      }
    }
  }
  return totalSales;
}
const getTax = (salesData, taxData, companyName) => {
  let totalTax = 0;

  for(let i = 0; i < salesData.length; i++)
  {
    if(salesData[i].name === companyName)
    {
      for(let j = 0; j < salesData[i].sales.length; j++)
      {
        totalTax += salesData[i].sales[j] * taxData[salesData[i].province];
      }
    }
  }
  return totalTax;
}

calculateSalesTax = (salesData, taxInfo) => {
  const result = {Telus: {totalSales: getTotalSales(salesData, "Telus"), totalTax: getTax(salesData,taxInfo, "Telus")}, Bombardier: {totalSales: getTotalSales(salesData, "Bombardier"), totalTax: getTax(salesData, taxInfo, "Bombardier")}};

  return result;
}

let companySalesAndTax = calculateSalesTax(companySalesData, salesTaxRates);

console.log(companySalesAndTax);