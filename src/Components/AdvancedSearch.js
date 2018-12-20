import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'

class Checkbox1 extends Component{
    render(){
        return(
            <Checkbox>
                <Checkbox label= "color" />
                <Checkbox label= "size" />
                <Checkbox label= "U.S. State" />
                <Checkbox label= "type" />
                <Checkbox label= "Characteristics" />
            </Checkbox>
        );
    }
}
export default Checkbox1;