import React from "react";
import "./style.css";

const pets = [
    {
      key: 1,
      isDog: true,
      image: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg'
    },
    {
      key: 2,
      isDog: false,
      image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg'
    },
    {
      key: 3,
      isDog: true,
      image: 'https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=678&h=381'
    },
    {
      key: 4,
      isDog: false,
      image: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1136638860%2F960x0.jpg%3Ffit%3Dscale'
    },
  ];
   
  const Dog = (props) => <img alt='' src={props.image} />
  const Cat = (props) => <img alt='' src={props.image} />
  const Pet = (props) =>  props.IsDog ? (<Dog image={props.img} />) : (<Cat image={props.img} />)
  
  export default class Pets extends React.Component {
      constructor(props){
          super(props);
  
          this.state = {
              catsOrDogs: "all"
          }
  
      }
      
      displayCats = () => {
        this.setState({catsOrDogs: 'cats'});
      }
      
      displayDogs = () => {
        this.setState({catsOrDogs: 'dogs'});
      }
      
      displayAll = () => {
        this.setState({catsOrDogs: 'all'});
      }
    
      render() {
        let images;
        images = <div>{
                pets.map((el) => 
                      { switch (this.state.catsOrDogs){
                        case 'all' : return <Pet key={el.key} isDog={el.isDog} img={el.image} />
                        case 'cats' : if (!el.isDog) 
                                        {return <Pet key={el.key} isDog={el.isDog} img={el.image} />} 
                                      else {return null}
                        case 'dogs' : if (el.isDog) 
                                        {return <Pet key={el.key} isDog={el.isDog} img={el.image} />} 
                                      else {return null}
                        default : return('no images!')
                        }
                      }
                   )
                }</div>
      return (
        <div>
          <h2>Welcome to the world of pets</h2>
          <button onClick={this.displayCats}>Display Cats</button>
          <button onClick={this.displayDogs}>Display Dogs</button>
          <button onClick={this.displayAll}>Display All</button>
          {images}
        </div>
      )
    }
  }