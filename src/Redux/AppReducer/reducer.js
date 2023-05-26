
import * as types from "./actionTypes";

const initialState = {
    userData: [],
    offerData : [],
     slider: [],
    isLoading: false,
    isError: false,
    message: '',
    hotel: []
}

const reducer = (oldstate = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
    //get all user    
        case types.GET_USER_REQUEST: return { ...oldstate, isLoading: true };
        case types.GET_USER_SUCCESS: return { ...oldstate,  isLoading:false, userData:payload };
        case types.GET_USER_FAILURE: return { ...oldstate, isLoading: false, isError: true, userData: [] };
//delete user data
        case types.DELETE_USERDATA_REQUEST: return { ...oldstate, isLoading: true };
        case types.DELETE_USERDATA_SUCCESS: return { ...oldstate, isLoading:false,};
        case types.DELETE_USERDATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, userData: [] };
//GET OFFER DATa
             case types.GET_OFFERDATA_REQUEST:return { ...oldstate, isLoading: true };
             case types.GET_OFFERDATA_SUCCESS: return { ...oldstate, isLoading:false,  offerDa: payload };
             case types.GET_OFFERDATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, offerData: [] };
// delet offer image 
            case types.DELETE_OFFERIMAGE_REQUEST: return { ...oldstate, isLoading: true };
            case types.DELETE_OFFERIMAGE_SUCCESS: return { ...oldstate, isLoading:false,};
            case types.DELETE_OFFERIMAGE_FAILURE: return { ...oldstate, isLoading: false, isError: true, offerData : [] };
//GET SLIDER DATa
            case types.GET_SLIDERDATA_REQUEST: return { ...oldstate, isLoading: true };
            case types.GET_SLIDERDATA_SUCCESS: return { ...oldstate,  isLoading:false, slider:payload };
            case types.GET_SLIDERDATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, slider: [] };
// delet offer image 
            case types.DELETE_SLIDERIMAGE_REQUEST: return { ...oldstate, isLoading: true };
            case types.DELETE_SLIDERIMAGE_SUCCESS: return { ...oldstate, isLoading:false,};
            case types.DELETE_SLIDERIMAGE_FAILURE: return { ...oldstate, isLoading: false, isError: true, slider : [] };

            case types.GET_HOTEL_REQUEST: return { ...oldstate, isLoading: true };
            case types.GET_HOTEL_SUCCESS: return { ...oldstate,  isLoading:false, hotel:payload };
            case types.GET_HOTEL_FAILURE: return { ...oldstate, isLoading: false, isError: true, hotel: [] };



            
        default: return oldstate;
    }
};
export { reducer }
