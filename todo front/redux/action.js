import axios from "axios";
axios.defaults.baseURL = "http://192.168.0.109:4000/api/v1";

// const serverUrl = "http://localhost:4000";
export const login = (email, password) => async (dispatch) => {

    console.log(email,password)

    try {

        dispatch({
            type: "loginRequest"
        });

        const { data } = await axios.post(`/login`,

            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        console.log({ data })

        dispatch(
            {
                type: "loginSuccess",
                payload: data
            });
    } catch (error) {
        console.log({error})

        dispatch({
            type: "loginFailure",
            payload: error.response.data
        })

    }
}


export const loadUser = () => async (dispatch) => {

    try {

        dispatch({
            type: "loadUserRequest"
        });

        const { data } = await axios.get(`${serverUrl}/me`);


        dispatch(
            {
                type: "loadUserSuccess",
                payload: data
            });
    } catch (error) {

        dispatch({
            type: "loadUserFailure",
            payload: error.response.data
        })

    }
}