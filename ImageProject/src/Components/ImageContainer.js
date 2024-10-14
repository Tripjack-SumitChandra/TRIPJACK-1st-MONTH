import React, { Component } from 'react'
import '../css/ImageContainer.css'
import DefaultImages from './DefaultImages';

export default class ImageContainer extends Component {
    constructor(props){
        super(props);
    }
    render() {
        if(this.props.loading){
            return(
                <>
                    <p className='loading-conatiner'> Loading Images ...... </p>
                </>
            )
        }
        else{
            return (
                <>
                <div className='image-container'>
                    {this.props.photos.map((item , index)=>(
                        <img className='images' style={{height:item.height/16, width:'300px', minHeight:'300px' }} key={index} src={item.urls.full}/>
                    ))}
                </div>
                </>
            )
        }
    }
}
