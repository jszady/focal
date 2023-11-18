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
const getTelusTotalSales = (salesData) => 
{
  let totalSales = 0;

  for (let i = 0; i < salesData.length; i++)
  {
    if (salesData[i].name === "Telus")
    {
      for(let j = 0; j < salesData[i].sales.length; j++)
      {
        totalSales += salesData[i].sales[j];
      }
    }
  }
  return totalSales;
}

const getBombardierTotalSales = (salesData) => {
  let totalSales = 0;
  for (let i = 0; i < salesData.length; i++)
  {
    if(salesData[i].name === "Bombardier")
    {
      for(let j = 0; j < salesData[i].sales.length; j++)
      {
        totalSales += salesData[i].sales[j];
      }
    }
  }
  return totalSales;
}

const getTelusTax = (salesData, taxData) => 
{
  let totalTax = 0;
  for(let i = 0; i < salesData.length; i++)
  {
    if (salesData[i].name === "Telus" && salesData[i].province === "SK")
    {
      for(let j = 0; j < salesData[i].sales.length; j++)
      {
        totalTax += salesData[i].sales[j] * taxData.SK;
      }
    }
  }

  for(let i = 0; i < salesData.length; i++)
  {
    if (salesData[i].name === "Telus" && salesData[i].province === "BC")
    {
      for(let j = 0; j < salesData[i].sales.length; j++)
      {
        totalTax += salesData[i].sales[j] * taxData.BC;
      }
    }
  }
  return totalTax;
}
const getBombardierTax = (salesData, taxData) =>
{
  let totalTax = 0;

  for(let i = 0; i < salesData.length; i++)
  {
    if (salesData[i].name === "Bombardier" && salesData[i].province === "AB")
    {
      for(let j = 0; j < salesData[i].sales.length; j++)
      {
        totalTax += salesData[i].sales[j] * taxData.AB;
      }
    }
  }
  return totalTax;
}

calculateSalesTax = (salesData, taxInfo) => {
  const result = {Telus: {totalSales: getTelusTotalSales(salesData), totalTax: getTelusTax(salesData,taxInfo)}, Bombardier: {totalSales: getBombardierTotalSales(salesData), totalTax: getBombardierTax(salesData, taxInfo)}};

  return result;
}

let companySalesAndTax = calculateSalesTax(companySalesData, salesTaxRates);

console.log(companySalesAndTax);