import { registerConstants } from '../constants/register.constants';

export function register(
  state = {
    isLoading: false,
    error: null,
    expired: false,
    companyName: '',
    phoneNumber: '',
    userEmail: '',
    userRole: null,
    formError: null
  },
  action
) {
  switch (action.type) {
    case registerConstants.GET_USER_DETAILS:
      return {
        ...state,
        formError: null,
        isLoading: true
      };
    case registerConstants.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        formError: null,
        expired: action.data.urlExpired,
        userEmail: action.data.email,
        userRole: action.data.role
      };
    case registerConstants.GET_USER_DETAILS_FAILURE:
      return {
        ...state,
        formError: action.error.response.data.message,
        isLoading: false,
        expired: false,
        userEmail: '',
        userRole: null
      };
    case registerConstants.CHECK_PHONE_NUMBER:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case registerConstants.CHECK_PHONE_NUMBER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        phoneNumber: action.data.phoneNumber
      };
    case registerConstants.CHECK_PHONE_NUMBER_FAILURE:
      return {
        ...state,
        error: action.error.response.data.message,
        isLoading: false,
        phoneNumber: ''
      };
    case registerConstants.CHECK_COMPANY_NAME:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case registerConstants.CHECK_COMPANY_NAME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        companyName: action.data.companyName
      };
    case registerConstants.CHECK_COMPANY_NAME_FAILURE:
      return {
        ...state,
        error: action.error.response.data.message,
        isLoading: false,
        companyName: ''
      };
    case registerConstants.SUBMIT_REGISTRATION_FORM:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case registerConstants.SUBMIT_REGISTRATION_FORM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case registerConstants.SUBMIT_REGISTRATION_FORM_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
}
