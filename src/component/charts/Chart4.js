import React from 'react';
export default class Chart4 extends React.Component{
    constructor (props) {
        super(props)
    
        this.state = {
         numb :[120,346,150]
        }
    
      }

  render() {
    const list = this.state.numb.map((val)=> <div className='bar'>{val}</div>)
    return (
        <div className='foo'>
            {list}
        </div>
        
        

    );
}
}