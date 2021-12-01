    import React, { createContext,Component } from 'react'
    import Axios from '../Axios/Axios';
    
    export const UserContext = createContext();
    
    
    
    export default class AdminContext extends Component {
        state = {
            user: null,
            isLoggedIn: false
        }
    
        componentDidMount = () =>{
            const token = localStorage.getItem('token');
            if (token) {
                const headers = {
                    Authorization: "Bearer " + token,
                }
                Axios.get('/users/login_userdata', {headers}).then(response =>{
                    if (response.status == 200) {
                        this.setUser(response.data)
                        console.log(response)
                    }else{
                        this.logoutUser()
                    }
                })
            }
        }
    
        logoutUser = () => {
            localStorage.removeItem('token')
            this.setState({
                user: null,
                isLoggedIn: false
            });
        }
    
        setUser = user => {
            this.setState({user, isLoggedIn: true});
        }
    
        render() {
            return (
                <UserContext.Provider value={{
                    ...this.state,
                    setUser: this.setUser,
                    logoutUser: this.logoutUser
                }}>
                    {this.props.children}
                </UserContext.Provider>
            )
        }
    }
    