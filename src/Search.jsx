import React,{Component} from 'react'
import PropTypes from 'prop-types'


export default  class Search extends Component{

    static propTypes={
        setKey:PropTypes.func.isRequired
    };

    handleClick=()=>{
        const key=this.input.value;
        if (key){
            this.props.setKey(key);

        }
    };

    render() {

        return (
           <div>
                <h3>serach right here</h3>
               <input placeholder='输入关键词...' ref={x=>this.input=x}/>
               <button onClick={this.handleClick}>搜索</button>
           </div>
        )
    }
}