import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";
const serverUrl = "http://localhost:4000";
export const login = (email, password) => async (dispatch) => {

    try {

        dispatch({
            type: "loginRequest"
        });

        const data = await axios.post(`/login`,

            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            });


        dispatch(
            {
                type: "loginSuccess",
                payload: data.data
            });
    } catch (error) {

        dispatch({
            
            type: "loginFailure",
          
            payload: error.response.data.message
        })

    }
}