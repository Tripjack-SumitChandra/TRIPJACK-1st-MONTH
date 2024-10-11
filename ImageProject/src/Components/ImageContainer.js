import React, { Component } from 'react'
import '../css/ImageContainer.css'
export default class ImageContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            query:this.props.query,
            photos:[],
            isloading:false,
            error:''
        }
        this.FetchImages = this.FetchImages.bind(this)
    }

    FetchImages(){
        this.setState({isloading:true})

        fetch(`https://api.unsplash.com/search/photos/?query=${this.state.query}&client_id=Wtrlw6xrt1W51zXEeqlUHJ1i7Rt58CNXaJ-GGxlnawc`)
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
    
    static getDerivedStateFromProps(props , state){
        if(state.query !== props.query){
            return state.query = props.query;
        }
        else{
            return null;
        }
    }
  render() {

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
                 {this.state.photos.length > 0 && this.state.photos.map((item , index)=>(
                    <img className='images' style={{height:item.height/16, width:'500px' }} key={index} src={item.urls.full}/>
                 ))}
             </div>
            </>
         )
    }
  }
}
