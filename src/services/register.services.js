import app from '../utils/axiosConfig';
const baseUrl = process.env.REACT_APP_API_URL;

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

function submitForm(formData, userRole) {
  const requestOptions = {
    method: 'POST',
    headers: {},
    data: { ...formData }
  };
  return userRole === 'EMPLOYEE' ? app.request(`${baseUrl}users/employee`, requestOptions)
    : app.request(`${baseUrl}users/client`, requestOptions);
}

export const registerService = {
  getUserDetails,
  checkPhoneNumber,
  checkCompanyName,
  submitForm
};
