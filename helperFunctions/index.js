function makeADecision(data) {
   const { employmentStatus } = data;
   const creditScore = parseInt(data.creditScore);
   const monthlyIncome = parseInt(data.monthlyIncome);

   if(creditScore < 500) {
      return false;
   }else if(creditScore < 550 && employmentStatus !== 'employed') {
      return false;
   }else if(
      creditScore <= 600 && 
      employmentStatus === 'unemployed' && 
      monthlyIncome <= 1000
   ) {
      return false;
   } else if(
      creditScore <= 600 && 
      employmentStatus === 'employed' && 
      monthlyIncome > 1300
   ) {
      return true;
   } else if(creditScore <= 650 && employmentStatus) {
      return true;
   } else if(
      creditScore >= 700 && 
      employmentStatus === 'employed' && 
      monthlyIncome >= 2500
   ) {
      return true;
   } else if(creditScore >= 700 && employmentStatus) {
      return true;
   } else if(creditScore >= 800) {
      return true;
   }
   return false;
}

module.exports = {
   makeADecision
};
