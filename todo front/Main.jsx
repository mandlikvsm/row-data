import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Login from './screens/Login'
import Footer from './components/Footer'
import Profile from './screens/Profile'
import Register from './screens/Register'
import Cameras from './screens/Cameras'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadUser } from './redux/action'

const Main = () => {

    const { isAuthenticated, loading } = useSelector(state => state.auth);
    console.log(`console home ${isAuthenticated}`)
    const Stack = createNativeStackNavigator()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isAuthenticated ? 'home' : 'login'}>
                <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
                <Stack.Screen name='click' component={Cameras} options={{ headerShown: false }} />
                <Stack.Screen name='profile' component={Profile} />
            </Stack.Navigator>
            {isAuthenticated && <Footer />}
        </NavigationContainer>
    )
}

export default Main