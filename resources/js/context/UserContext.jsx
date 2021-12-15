    import React, { createContext,Component } from 'react'
    import Axios from '../Axios/Axios';
    
    export const VisitContext = createContext();
    
    
    
    export default class UserContext extends Component {
        state = {
            user: ""
        }
    
        componentDidMount = () =>{
            Axios.get('/users/visitorData').then(response =>{
                if (response.status == 200) {
                    this.setState({user:response.data})
                    console.log(response.data)
                }
            })
        }
    
        render() {
            return (
                <VisitContext.Provider value={{
                    ...this.state
                }}>
                    {this.props.children}
                </VisitContext.Provider>
            )
        }
    }
    
