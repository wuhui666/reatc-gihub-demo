import React,{Component} from 'react'
import PropTypes from 'prop-types'

import './add.css'
export default  class Component_add extends Component{

    state={
        username:'',
        content:''
    };

    static propTypes={
        addComment:PropTypes.func.isRequired
    };

    handleNameChange=(event)=>{
        const username=event.target.value;
        this.setState({username})
    };
    handleContentChange=(event)=>{
        const content=event.target.value;
        this.setState({content})
    };
    handleClick=()=>{
        const comment=this.state;
        this.props.addComment(comment);
        this.setState({
            username:'',
            content:''
        })
    };
    render() {

        const {username,content}=this.state;
        return (
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">用户名</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="用户名" value={username} onChange={this.handleNameChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">内容</label>
                        <textarea type="textarea" className="form-control" id="exampleInputPassword1"
                               placeholder="textarea" value={content} onChange={this.handleContentChange}/>
                    </div>
                    <button type="button" className="btn btn-success" onClick={this.handleClick}>确定</button>
                </form>
        )
    }
}