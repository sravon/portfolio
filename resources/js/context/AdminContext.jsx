    import React, { createContext,Component } from 'react'
    import Axios from '../Axios/Axios';
    
    export const AContext = createContext();
    
    
    
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
                        this.setState({user:response.data,isLoggedIn: true})
                        console.log(response.data)
                        console.log("from admin")
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
                <AContext.Provider value={{
                    ...this.state,
                    setUser: this.setUser,
                    logoutUser: this.logoutUser
                }}>
                    {this.props.children}
                </AContext.Provider>
            )
        }
    }
    