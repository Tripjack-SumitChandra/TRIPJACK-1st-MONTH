import React, { Component } from 'react'
import '../css/ImageContainer.css'
export default class DefaultImages extends Component {
    constructor(props){
        super(props);
        this.state={
            photos:[],
            isloading:false,
            error:''
        }
    }
    componentDidMount(){
        this.setState({isloading:true})
        fetch(`https://api.unsplash.com/photos/?client_id=Wtrlw6xrt1W51zXEeqlUHJ1i7Rt58CNXaJ-GGxlnawc`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            this.setState({ photos: data, isloading: false })
        })
        .catch(error=>{
            this.setState({ error, isloading: false });
            console.log('error occcured whhile fetching data')
        })
    }
  render() {
    console.log('Default image continer >>>>>>>>>>>>>>.')
    if(this.state.isloading){
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
                 {this.state.photos.map((item , index)=>(
                    <img className='images' style={{height:item.height/16, width:'300px', minHeight:'300px' }} key={index} src={item.urls.full}/>
                 ))}
             </div>
            </>
         )
    }
  }
}
