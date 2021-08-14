const axios= require("axios");

const getDetails= async () => {
try {
  const res= await axios.get("https://api.covid19api.com/summary")
  const countries= await res.data
  return countries
}
catch (e) {
  console.log(e)
}

}




module.exports= {
  countries:getDetails,
  // charts:getChartDetails
}