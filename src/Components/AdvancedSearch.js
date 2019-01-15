import React, {Component} from 'react'
import { Dropdown, Menu, Checkbox, Accordion, Icon, Form } from 'semantic-ui-react'
import Birdydex from './Birdydex'
import {connect} from 'react-redux'
import { getBirdData } from "../Actions/action";


class AdvancedSearch extends Component {
    state = { activeIndex: 0, filterBirds: this.props.birds || []}
    componentDidMount() {
        this.props.getBirdData();
      }
      componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.birds!== prevProps.birds) {
          this.setState({filterBirds:this.props.birds});
        }
      }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }
    handleFilter= event => {
      const colorToFind = event.currentTarget.getElementsByTagName("input")[0].value
      const checked = event.currentTarget.getElementsByTagName("input")[0].checked
        if (checked === true){
            //filter
            this.setState({filterBirds: this.props.birds.filter(bird => {
                const result = bird.color.split(",").find(color => {
                    return color === colorToFind
                })
                if (result){
                    return true
                }
                else{
                    return false
                }
            })})
        }
        else{
            //unfilter
            this.setState({filterBirds: this.props.birds})
        }
        
    }
    handleFilterCharacteristics= event => {
        const CharacteristicToFind = event.currentTarget.getElementsByTagName("input")[0].value
        const checked = event.currentTarget.getElementsByTagName("input")[0].checked
          if (checked === true){
              //filter
              this.setState({filterBirds: this.props.birds.filter(bird => {
                  const returnCharcteristic = bird.Characteristic.split(",").find(Characteristic => {
                      return Characteristic === CharacteristicToFind
                  })
                  if (returnCharcteristic){
                      return true
                  }
                  else{
                      return false
                  }
              })})
          }
          else{
              //unfilter
              this.setState({filterBirds: this.props.birds})
          }
          
      }
    render(){
        const { activeIndex } = this.state
        return(
            <React.Fragment>
            <Accordion as={Menu} vertical>
             <Menu.Item>
                 <Accordion.Title
                 active={activeIndex === 0}
                 content='colors'
                 index={0}
                 onClick={this.handleClick}
                 />
                 <Accordion.Content active={activeIndex === 0} content={
    <Form>
        <Form.Group grouped>
        <Form.Checkbox onClick = {this.handleFilter} label="Dark Brown" name='color' value='d-brown' />
        <Form.Checkbox onClick = {this.handleFilter} label="light brown" name='color' value='l-brown' />
        <Form.Checkbox onClick = {this.handleFilter} label="violet" name='color' value='violet' />
        <Form.Checkbox onClick = {this.handleFilter} label="blue" name='color' value='blue' />
        <Form.Checkbox onClick = {this.handleFilter} label="brown" name='color' value='brown' />
        <Form.Checkbox onClick = {this.handleFilter} label="orange" name='color' value='orange' />
        <Form.Checkbox onClick = {this.handleFilter} label="red" name='color' value='red' />
        <Form.Checkbox onClick = {this.handleFilter} label="white" name='color' value='white' />
        <Form.Checkbox onClick = {this.handleFilter} label="red-brown" name='color' value='red-brown' />
        <Form.Checkbox onClick = {this.handleFilter} label="black" name='color' value='black' />
        <Form.Checkbox onClick = {this.handleFilter} label="gray" name='color' value='gray' />
        </Form.Group>
    </Form>
} />
             </Menu.Item>
            </Accordion>
            <Accordion as={Menu} vertical>
             <Menu.Item>
                 <Accordion.Title
                 active={activeIndex === 1}
                 content='Characteristics'
                 index={1}
                 onClick={this.handleClick}
                 />
                 <Accordion.Content active={activeIndex === 1} content={ <Form>
        <Form.Group grouped>
        <Form.Checkbox onClick = {this.handleFilterCharacteristics} label="Ears" name='Characteristics' value='ears' />
        <Form.Checkbox label="Long tail" name='Characteristic' value='Long tail' />
        <Form.Checkbox label="Long legs" name='Characteristic' value='Long legs' />
        <Form.Checkbox label="Long neck" name='Characteristic' value='Long neck' />
        <Form.Checkbox label="Bare face/head" name='Characteristic' value='Bare face/head' />
        <Form.Checkbox label="Crest" name='Characteristic' value='Crest' />
        <Form.Checkbox label="Black mask/cap/bib" name='Characteristic' value='Black mask/cap/bib' />
        <Form.Checkbox label="Iridescent" name='Characteristic' value='Iridescent' />
        <Form.Checkbox label="Collar" name='Characteristic' value='Collar' />
        <Form.Checkbox label="Whiskers" name='Characteristic' value='Whiskers' />
        <Form.Checkbox label="Webbed feet" name='Characteristic' value='Webbed feet' />
        <Form.Checkbox label="Yellow eyes" name='Characteristic' value='Yellow eyes' />
        <Form.Checkbox label="Yellow beak" name='Characteristic' value='Yellow beak' />
        <Form.Checkbox label="Yellow feet" name='Characteristic' value='Yellow feet' />
        <Form.Checkbox label="Yellow legs" name='Characteristic' value='Yellow legs' />
        <Form.Checkbox label="Yellow eye ring" name='Characteristic' value='Yellow eye ring' />
        <Form.Checkbox label="Red eyes" name='Characteristic' value='Red eyes' />
        <Form.Checkbox label="Red eye ring" name='Characteristic' value='Red eye ring' />
        <Form.Checkbox label="Red beak" name='Characteristic' value='Red beak' />
        <Form.Checkbox label="Red feet" name='Characteristic' value='Red feet' />
        <Form.Checkbox label="Red legs" name='Characteristic' value='Red legs' />
        <Form.Checkbox label="Orange eyes" name='Characteristic' value='Orange eyes' />
        <Form.Checkbox label="Orange beak" name='Characteristic' value='Orange beak' />
        <Form.Checkbox label="Orange feet" name='Characteristic' value='Orange feet' />
        <Form.Checkbox label="Orange legs" name='Characteristic' value='Orang legs' />
        <Form.Checkbox label="White eyes" name='Characteristic' value='White eyes' />
        <Form.Checkbox label="White eye ring" name='Characteristic' value='White eye ring' />
        <Form.Checkbox label="Pink beak" name='Characteristic' value='Pink beak' />
        <Form.Checkbox label="Pink feet" name='Characteristic' value='Pink feet' />
        <Form.Checkbox label="Pink legs" name='Characteristic' value='Pink legs' />
        <Form.Checkbox label="Blue eyes" name='Characteristic' value='Blue eyes' />
        <Form.Checkbox label="Blue eye ring" name='Characteristic' value='Blue eye ring' />
        <Form.Checkbox label="Blue beak" name='Characteristic' value='Blue beak' />
        <Form.Checkbox label="Blue feet" name='Characteristic' value='Blue feet' />
        <Form.Checkbox label="Blue legs" name='Characteristic' value='Blue legs' />
        <Form.Checkbox label="Black eye ring" name='Characteristic' value='Black eye ring' />
        </Form.Group>
    </Form>} />
             </Menu.Item>
            </Accordion>

            <Accordion as={Menu} vertical>
             <Menu.Item>
                 <Accordion.Title
                 active={activeIndex === 2}
                 content='States'
                 index={2}
                 onClick={this.handleClick}
                 />
                 <Accordion.Content active={activeIndex === 2 } content={
                     <Form>
                         <Form.Group grouped>
                         <Form.Checkbox label="Alabama" name='states' value='AL' />
                         <Form.Checkbox label="Alaska" name='states' value='AK' />
                         <Form.Checkbox label="Arizona" name='states' value='AZ' />
                         <Form.Checkbox label="Arkansas" name='states' value='AR' />
                         <Form.Checkbox label="California" name='states' value='CA' />
                         <Form.Checkbox label="Colorado" name='states' value='CO' />
                         <Form.Checkbox label="Connecticut" name='states' value='CT' />
                         <Form.Checkbox label="Delaware" name='states' value='DE' />
                         <Form.Checkbox label="Florida" name='states' value='FL' />
                         <Form.Checkbox label="Georgia" name='states' value='GA' />
                         <Form.Checkbox label="Hawaii" name='states' value='HI' />
                         <Form.Checkbox label="Idaho" name='states' value='ID' />
                         <Form.Checkbox label="Illnois" name='states' value='IL' />
                         <Form.Checkbox label="Indiana" name='states' value='IN' />
                         <Form.Checkbox label="Iowa" name='states' value='IA' />
                         <Form.Checkbox label="Kansas" name='states' value='KS' />
                         <Form.Checkbox label="Kentucky" name='states' value='KY' />
                         <Form.Checkbox label="Louisiana" name='states' value='LA' />
                         <Form.Checkbox label="Maine" name='states' value='ME' />\
                         <Form.Checkbox label="Maryland" name='states' value='MD' />
                         <Form.Checkbox label="Massachusetts" name='states' value='MA' />
                         <Form.Checkbox label="Michigan" name='states' value='MI' />
                         <Form.Checkbox label="Minnesota" name='states' value='MN' />
                         <Form.Checkbox label="Mississippi" name='states' value='MS' />
                         <Form.Checkbox label="Missouri" name='states' value='MO' />
                         <Form.Checkbox label="Montana" name='states' value='MT' />
                         <Form.Checkbox label="Nebraska" name='states' value='NE' />
                         <Form.Checkbox label="Nevada" name='states' value='NV' />
                         <Form.Checkbox label="New Hampshire" name='states' value='NH' />
                         <Form.Checkbox label="New Jersey" name='states' value='NJ' />
                         <Form.Checkbox label="New Mexico" name='states' value='NM' />
                         <Form.Checkbox label="New York" name='states' value='NY' />
                         <Form.Checkbox label="North Carolina" name='states' value='NC' />
                         <Form.Checkbox label="North Dakota" name='states' value='ND' />
                         <Form.Checkbox label="Ohio" name='states' value='OH' />
                         <Form.Checkbox label="Oklahoma" name='states' value='OK' />
                         <Form.Checkbox label="Oregon" name='states' value='OR' />
                         <Form.Checkbox label="Pennsylvania" name='states' value='PA' />
                         <Form.Checkbox label="Rhode Island" name='states' value='RI' />
                         <Form.Checkbox label="South Carolina" name='states' value='SC' />
                         <Form.Checkbox label="South Dakota" name='states' value='SD' />
                         <Form.Checkbox label="Tennessee" name='states' value='TN' />
                         <Form.Checkbox label="Texas" name='states' value='TX' />
                         <Form.Checkbox label="Utah" name='states' value='UT' />
                         <Form.Checkbox label="Vermont" name='states' value='VT' />
                         <Form.Checkbox label="Virginia" name='states' value='VA' />
                         <Form.Checkbox label="Washington" name='states' value='WA' />
                         <Form.Checkbox label="West Virginia" name='states' value='WV' />
                         <Form.Checkbox label="Wisconsin" name='states' value='WI' />
                         <Form.Checkbox label="Wyoming" name='states' value='WY' />
                         </Form.Group>
                     </Form>
                 } />
                      </Menu.Item>
                      </Accordion>
            

    <Birdydex birds = {this.state.filterBirds} />
    </React.Fragment>
        )
      }
    }
    const mapStateToProps = state => {
        return { birds: state.bird, error: state.error };
      };
      const mapDispatchToProps = dispatch => {
        return { getBirdData: () => dispatch(getBirdData()) };
      };
export default connect(mapStateToProps, mapDispatchToProps)(AdvancedSearch);