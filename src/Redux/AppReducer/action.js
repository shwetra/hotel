import axios from "axios";
import * as types from "./actionTypes";



//delete users
const getUserdeletereq =()=>{
    return { type : types.DELETE_USERDATA_REQUEST }   
}
const getUserdeletersuc =(payload)=>{
    return { type : types.DELETE_USERDATA_SUCCESS,payload} 
}
const getUserdeletefail =()=>{
    return {type : types.DELETE_USERDATA_FAILURE}   
}
export const userDataDelete = (_id) => (dispatch) => {
    dispatch(getUserdeletereq());
    return axios.delete(`https://babu.onrender.com/users/${_id}`).then((res) => {
        return dispatch(getUserdeletersuc(res.data));
    }).catch((err) => {
        return dispatch(getUserdeletefail());
    })
}
//delete user end


// get user data 
const getUserdatareq =()=>{
    return { type : types.GET_USER_REQUEST}  
}
const getUserdatarsuc =(payload)=>{
    return { type : types.GET_USER_SUCCESS,payload} 
}
const getUserdatafail =()=>{
    return { type : types.GET_USER_FAILURE}  
}
export const userData = (dispatch) => {
    dispatch(getUserdatareq());
    return axios.get("https://babu.onrender.com/allusers").then((res) => {
        return dispatch(getUserdatarsuc(res.data));
    }).catch((err) => {
        return dispatch(getUserdatafail());
    })
}
// get user data end



// get offer data 
const getofferdatareq =()=>{
    return { type : types.GET_OFFERDATA_REQUEST}  
}
const getofferdatarsuc =(payload)=>{
    return { type : types.GET_OFFERDATA_SUCCESS,payload} 
}
const getofferdatafail =()=>{
    return { type : types.GET_OFFERDATA_FAILURE}  
}
export const offerData = (dispatch) => {
    dispatch(getofferdatareq());
    return axios.get("https://babu.onrender.com/offerimages").then((res) => {
        return dispatch(getofferdatarsuc(res.data));
    }).catch((err) => {
        return dispatch(getofferdatafail());
    })
}
// get offer data end

//delete offer img 
const getofferdeletereq =()=>{
    return { type : types.DELETE_OFFERIMAGE_REQUEST }   
}
const getofferdeletersuc =(payload)=>{
    return { type : types.DELETE_OFFERIMAGE_SUCCESS,payload} 
}
const getofferdeletefail =()=>{
    return {type : types.DELETE_OFFERIMAGE_FAILURE}   
}
export const offerDataDelete = (_id) => (dispatch) => {
    dispatch(getofferdeletereq());
    return axios.delete(`https://babu.onrender.com/offerimages/${_id}`).then((res) => {
        return dispatch(getofferdeletersuc(res.data));
    }).catch((err) => {
        return dispatch(getofferdeletefail());
    })
}
//delete offer img  end

// get slider image 
const sliderrdatareq =()=>{
    return { type : types.GET_SLIDERDATA_FAILURE}  
}
const sliderdatarsuc =(payload)=>{
    return { type : types.GET_SLIDERDATA_SUCCESS,payload} 
}
const sliderdatafail =()=>{
    return { type : types.GET_SLIDERDATA_FAILURE}  
}
export const sliderData = (dispatch) => {
    dispatch(sliderrdatareq());
    return axios.get("https://babu.onrender.com/sliderimages").then((res) => {
        return dispatch(sliderdatarsuc(res.data));
    }).catch((err) => {
        return dispatch(sliderdatafail());
    })
}
// get slider image end

//slider image delete
const getsliderdeletereq =()=>{
    return { type : types.DELETE_SLIDERIMAGE_REQUEST }   
}
const getsliderdeletersuc =(payload)=>{
    return { type : types.DELETE_SLIDERIMAGE_SUCCESS,payload} 
}
const getsliderdeletefail =()=>{
    return {type : types.DELETE_SLIDERIMAGE_FAILURE}   
}
export const getsliderDelete = (_id) => (dispatch) => {
    dispatch(getsliderdeletereq());
    return axios.delete(`https://babu.onrender.com/sliderimages/${_id}`).then((res) => {
        return dispatch(getsliderdeletersuc(res.data));
    }).catch((err) => {
        return dispatch(getsliderdeletefail());
    })
}
//slider image delete end





export const addOffer = (payload) => (dispatch) => {
    dispatch({ type: types.POST_OFFERIMAGE_REQUEST});
    return axios.post(`https://babu.onrender.com/offer`, payload).then((res) => {
        return dispatch({ type: types.POST_OFFERIMAGE_SUCCESS, payload: res.data });
    }).catch((err) => {
        return dispatch({ type: types.POST_OFFERIMAGE_REQUEST, payload: err });
    })
}

export const addSlider = (payload) => (dispatch) => {
    dispatch({ type: types.POST_SILDERIMAGE_REQUEST});
    return axios.post(`https://babu.onrender.com/sliderimages`, payload).then((res) => {
        return dispatch({ type: types.POST_SILDERIMAGE_SUCCESS, payload: res.data });
    }).catch((err) => {
        return dispatch({ type: types.POST_SILDERIMAGE_FAILURE, payload: err });
    })
}


export const addHotel = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_HOTEL_REQUEST });
    try {
      const response = await axios.post(`https://babu.onrender.com/hoteldata`, payload);
      dispatch({ type: types.POST_HOTEL_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: types.POST_HOTEL_FAILURE, payload: error });
    }
  };
  

//get hotel data

const getHotelreq =()=>{
    return { type : types.GET_HOTEL_REQUEST}  
}
const getHotelsuc =(payload)=>{
    return { type : types.GET_HOTEL_SUCCESS,payload} 
}
const getHotelfail =()=>{
    return { type : types.GET_HOTEL_FAILURE}  
}
export const HotelData = (dispatch) => {
    dispatch(getHotelreq());
    return axios.get("https://babu.onrender.com/Hotel").then((res) => {
        return dispatch(getHotelsuc(res.data));
    }).catch((err) => {
        return dispatch(getHotelfail());
    })
}


//get hotel delete
const Hotelereq =()=>{
    return { type : types.DELETE_HOTEL_REQUEST}   
}
const Hotelsuc =(payload)=>{
    return { type : types.DELETE_HOTEL_SUCCESS,payload} 
}
const Hotelfail =()=>{
    return {type : types.DELETE_HOTEL_FAILURE}   
}
export const HotelDelete = (_id) => (dispatch) => {
    dispatch(Hotelereq());
    return axios.delete(`https://babu.onrender.com/hotels/${_id}`).then((res) => {
        return dispatch(Hotelsuc(res.data));
    }).catch((err) => {
        return dispatch(Hotelfail());
    })
}


export const Sendemail = (payload) => async (dispatch) => {
    console.log(payload)
    dispatch({ type: types.POST_EMAIL_REQUEST });
    try {
      const response = await axios.post(`https://babu.onrender.com/send-email`, payload);
      dispatch({ type: types.POST_EMAIL_SUCCESS, payload: response.data });
      console.log(response)
    } catch (error) {
      dispatch({ type: types.POST_EMAIL_FAILURE, payload: error });
    }
  };