import axios from 'axios'

export const addPassword = data =>{
  return dispatch =>
    axios.post('http://localhost:4000/password',
    data)
    .then(response =>{
      return dispatch({
        type : 'ADD_PASSWORD',
        payload : data
      })
    })
    .catch(err =>{
      console.log(err);
    })
  }

export const fetchPassword = () => {
  return dispatch =>
    axios.get('http://localhost:4000/password')
    .then(response => {
      return dispatch({
        type: 'FETCH_PASSWORD',
        payload: response.data
      })
    })
    .catch(err => console.log(err))
}

export const deletePassword = id => {
  return dispatch =>
  axios.delete('http://localhost:4000/password/'+id)
  .then(response=>{
    return dispatch({
      type: 'DELETE_PASSWORD',
      payload: id
    })
  })
  .catch(err=>{
    console.log(err);
  })
}

  export const editPassword = data => {
    return dispatch =>
    axios.put('http://localhost:4000/password/'+data.id,{
      url: data.url,
      username: data.username,
      password: data.password,
    })
    .then(response=>{
      return dispatch({
        type: 'EDIT_PASSWORD',
        payload: data
      })
    })
    .catch(err=>{
      console.log(err);
    })
}