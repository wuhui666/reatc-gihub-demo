import React,{Component} from 'react'
import PropTypes from 'prop-types'

import './item.css'
export default  class Component_item extends Component{

    static propTypes={
        comment:PropTypes.object.isRequired,
        delComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    };

    handleClick=()=>{
        const {comment,delComment,index}=this.props;
        if (window.confirm(`确定删除${comment.username}的评论？`)) {
            delComment(index);
        }
    };

    render() {

        const {comment}=this.props;
        return (
            <li>
                <div className='row'>
                    <div className='col-md-11'>
                        {comment.username}:
                    </div>
                    <div className='col-md-1'>
                        <button className='btn btn-danger btn-sm' onClick={this.handleClick}>delete</button>
                    </div>
                </div>
                <div className='row'>
                    <span>{comment.content}</span>
                </div>
            </li>
        )
    }
}