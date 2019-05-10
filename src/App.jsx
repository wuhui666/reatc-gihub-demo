import React,{Component} from 'react'
import './Main'
import './Search'
import Search from "./Search";
import Main from "./Main";

import './app.css'
export default  class App extends Component{



    state={
        key:''
    };
    setKey=(key)=>{
        this.setState({key});
    };

    render() {


        return (
           <div>

               <div style={{textAlign:'center'}}>
                   <Search setKey={this.setKey}/>
               </div>
               <div id='main'>
                   <Main keyWord={this.state.key}/>
               </div>


           </div>
        )
    }
}