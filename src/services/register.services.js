import app from '../utils/axiosConfig';
const baseUrl = 'http://localhost:8090';

function getUserDetails(registerId) {
  const requestOptions = {
    method: 'GET',
    headers: {}
  };
  return app.request(`${baseUrl}users/valid/${registerId}`, requestOptions);
}

function checkPhoneNumber(phoneNumber) {
  const requestOptions = {
    method: 'GET',
    headers: {}
  };
  return app.request(`${baseUrl}users/phone/${phoneNumber}`, requestOptions);
}

function checkCompanyName(companyName) {
  const requestOptions = {
    method: 'GET',
    headers: {}
  };
  return app.request(`${baseUrl}users/company/${companyName}`, requestOptions);
}

function submitForm(formData, role) {
  const requestOptions = {
    method: 'POST',
    headers: {},
    data: { ...formData }
  };
  console.log("base", baseUrl);
  return app.request(`/users/${role}`);
}

export const registerService = {
  getUserDetails,
  checkPhoneNumber,
  checkCompanyName,
  submitForm
};
