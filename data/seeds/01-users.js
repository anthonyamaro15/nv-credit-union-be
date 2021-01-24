const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(async function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
           firstName: 'Lisa',
           middleName: "",
           lastName: "Smith",
           SSNNumber: await bcrypt.hash('123456789', 8),
           dateOfBirth: '01/10/1990',
           gender: "female",
           email: "userone@gmail.com", 
           password: await bcrypt.hash("password", 8),
           addressLineOne: 'testing address one',
           addressLineTwo: "testing address two",
           aparmentNumber: '',
           city: 'Las Vegas',
           state: "NV",
           zip: '89030',
           country: "USA",
           citizenshipType: "citizen",
           primaryPhone: "888888888",
           cellPhone: '8888888888',
           workPhone: '',
           driverLicenseNumber: '1234567890',
           licenseState: "NV",
           dateIssued: "02/12/2020",
           expirationDate: "02/21/2022",
           employerName: 'Old Job',
           occupation: 'cook',
           accountNumber: '12345678',
           pin: 0,
           resetLink: null
        },
        { 
           firstName: 'Lisa',
           middleName: "",
           lastName: "Smith",
           SSNNumber: '123456789',
           dateOfBirth: '01/10/1990',
           gender: "female",
           email: "usertwo@gmail.com", 
           password: 'passtwo' ,
           addressLineOne: 'testing address one',
           addressLineTwo: "testing address two",
           aparmentNumber: '',
           city: 'Las Vegas',
           state: "NV",
           zip: '89030',
           country: "USA",
           citizenshipType: "citizen",
           primaryPhone: "888888888",
           cellPhone: '8888888888',
           workPhone: '',
           driverLicenseNumber: '1234567890',
           licenseState: "NV",
           dateIssued: "02/12/2020",
           expirationDate: "02/21/2022",
           employerName: 'Old Job',
           occupation: 'cook',
           accountNumber: '12345678',
           pin: 0,
           resetLink: null
         },
      ]);
    });
};
