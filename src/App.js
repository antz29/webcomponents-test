import React, { Component } from 'react';
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./assets/', false, /\.(png|jpe?g|svg)$/));
class App extends Component {
	constructor(){
		super();
		this.state={
			currentImgIndex:"0",
			showModal : false,
		};
	}
	handleClick(idx){
		this.setState({currentImgIndex:idx});
	}
	handleToggelModal(){
		this.setState({showModal:!this.state.showModal});
	}
  render() {
    return (
      <div className="App">
		<div className={"image_view" + (this.state.showModal? " modal" : "")} onClick={(e) => this.handleToggelModal()}>
			<img alt={images[this.state.currentImgIndex]} src={images[this.state.currentImgIndex]} className="img_view"></img>
		</div>
		<div className="textAlignCenter">
		{images && images.map((item, idx) => {
				return(
					<img key={idx} src={images[idx]} alt={images[idx]} className={"thumb_img" + (this.state.currentImgIndex!=idx ? " opacity2" : "")} onClick={(e) => this.handleClick(idx)}></img>
				)		
		})}
		</div>
      </div>	  
    );
  }
}

export default App;