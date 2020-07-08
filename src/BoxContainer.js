import React , {Component} from 'react';
import Box from './Box'
import './BoxContainer.css'

class BoxContainer extends Component{
    static defaultProps = {
        colors : ['indigo' , 'violet' ,'green','blue', 'yellow','black','beige','brown','cyan','gold','magenta']
    }

    render(){
        const colorList = Array.from({length : 18}).map(c => {
            return <Box colors={this.props.colors}/>
        })
        return (
            <div className='BoxContainer'>
                {colorList}
            </div>
        )
    }
}

export default BoxContainer;