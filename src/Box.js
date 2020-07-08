import React , {Component} from 'react';

class Box extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            color : this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    pickColor(){
        var newColor = this.state.color;
        while(this.state.color === newColor){
            newColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
        }
        this.setState({
            color : newColor
        })
    }

    handleClick(){
        this.pickColor()
    }

    render(){
        return <div onClick={this.handleClick} style={{backgroundColor : this.state.color,
                            height : '11.33em',
                            width : '11.33em'  }}></div>
    }
} 

export default Box;