import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'
import { stateOptions, colorOptions  } from '../common'
import SearchBar from './SearchBar'

class dropdown extends Component {
    render(){
        return(
            <Dropdown>
<Dropdown placeholder='State' search selection options={stateOptions} />
<Dropdown placeholder='color' search selection options={colorOptions} />
            </Dropdown>
        )
    }
}
export default dropdown;