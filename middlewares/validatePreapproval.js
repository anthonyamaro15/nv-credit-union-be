const validatePreapprovalData = (req, res, next) => {
   const { 
      address, 
      cellPhone, 
      city, 
      creditScore, 
      dateOfBirth, 
      email, 
      employmentStatus, 
      firstName, 
      haveBankAccount, 
      lastName, 
      monthlyExpenses, 
      monthlyIncome, 
      ssn, 
      state, 
      zip 
   } = req.body;

   if(
      !address || 
      !cellPhone || 
      !city || 
      !creditScore || 
      !dateOfBirth || 
      !email || 
      !employmentStatus || 
      !firstName || 
      !haveBankAccount || 
      !lastName || 
      !monthlyExpenses || 
      !monthlyIncome || 
      !ssn || 
      !state || 
      !zip
      ) {
      res.status(400).json({ errorMessage: "Enter required fields" });
   } else {
      next();
   }
}

module.exports = { validatePreapprovalData };
