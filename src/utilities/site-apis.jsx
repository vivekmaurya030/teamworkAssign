import Config from "./config";
import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: Config.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  }
});

export function apiPostCall(path, params) {
  let headers = {}
  return axiosAPI.post(path, params, { headers: headers })
    .then((response) => {
      return response
    })
    .catch((error) => {
      if (error.response) {
        return error.response
      } else if (error.request) {
        return error.request
      } else {
        return error.message
      }
    });
}

export function apiPostCall1(path, params) {
  let headers = {}
  return axiosAPI.post(path, params, { headers: {'Authorization': `Bearer ${(localStorage.getItem('Authorization'))}`} })
    .then((response) => {
      return response
    })
    .catch((error) => {
      if (error.response) {
        return error.response
      } else if (error.request) {
        return error.request
      } else {
        return error.message
      }
    });
}
export function apiPutCall(path, params) {
  let headers = {}
  return axiosAPI.put(path, params, { headers: {'Authorization': `Bearer ${(localStorage.getItem('Authorization'))}`} })
    .then((response) => {
      return response
    })
    .catch((error) => {
      if (error.response) {
        return error.response
      } else if (error.request) {
        return error.request
      } else {
        return error.message
      }
    });
}
export function apiGETCall1(path, params) {
  let headers = {}
  const searchParams = new URLSearchParams();
  Object.keys(params).forEach(key => searchParams.append(key, params[key]));
  let newUrl = `${path}?`+searchParams.toString();
  console.log("newUrl are", localStorage.getItem('Authorization'));
  return axiosAPI.get(newUrl, { headers: {'Authorization': `Bearer ${(localStorage.getItem('Authorization'))}`} })
    .then((response) => {
      return response
    })
    .catch((error) => {
      if (error.response) {
        return error.response
      } else if (error.request) {
        return error.request
      } else {
        return error.message
      }
    });
}

export function apiGetCall(path, params) {
  let headers = {}
  const searchParams = new URLSearchParams();
  Object.keys(params).forEach(key => searchParams.append(key, params[key]));
  let newUrl = `${path}?`+searchParams.toString();
  // for (const key of Object.keys(params)) {
  //   if (params[key]) {
  //     newUrl += `${key}=${params[key]}`
  //   }
  // }
  return axiosAPI.get(newUrl)
    .then((response) => {
      return response
    })
    .catch((error) => {
      if (error.response.data) {
        return error.response
      } else if (error.request.data) {
        return error.request
      } else {
        alert('Network error, Please try again later.' )
        return error.message
      }
    });
}
