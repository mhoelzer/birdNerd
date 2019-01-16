import React, {Component} from 'react'
import { Dropdown, Menu, Checkbox, Accordion, Icon, Form } from 'semantic-ui-react'
import BirdCards from './BirdCards'
import {connect} from 'react-redux'
import { getBirdData } from "../Actions/action";

const States =[
    { key: 'AL', value: 'AL', text: 'Alabama' },
    { key: 'AK', value: 'AK', text: 'Alaska' },
    { key: 'AZ', value: 'AZ', text: 'Arizona' },
    { key: 'AR', value: 'AR', text: 'Arkansas' },
    { key: 'CA', value: 'CA', text: 'California' },
    { key: 'CO', value: 'CO', text: 'Colarado' },
    { key: 'CT', value: 'CT', text: 'Connecticut' },
    { key: 'DE', value: 'DE', text: 'Delaware' },
    { key: 'FL', value: 'Fl', text: 'Florida' },
    { key: 'GA', value: 'GA', text: 'Georgia' },
    { key: 'HI', value: 'HI', text: 'Hawaii' },
    { key: 'ID', value: 'ID', text: 'Idaho' },
    { key: 'IL', value: 'IL', text: 'Illnois' },
    { key: 'IN', value: 'IN', text: 'Indiana' },
    { key: 'IA', value: 'IA', text: 'Iowa' },
    { key: 'KS', value: 'KS', text: 'Kansas' },
    { key: 'KY', value: 'KY', text: 'Kentucky' },
    { key: 'LA', value: 'LA', text: 'Louisiana' },
    { key: 'ME', value: 'ME', text: 'Maine' },
    { key: 'MD', value: 'MD', text: 'Maryland' },
    { key: 'MA', value: 'MA', text: 'Massachusetts' },
    { key: 'MI', value: 'MI', text: 'Michigan' },
    { key: 'MN', value: 'MN', text: 'Minnesota' },
    { key: 'MS', value: 'MS', text: 'Mississippi' },
    { key: 'MO', value: 'MO', text: 'Missouri' },
    { key: 'MT', value: 'MT', text: 'Montana' },
    { key: 'NE', value: 'NE', text: 'Nebraska' },
    { key: 'NV', value: 'NV', text: 'Nevada' },
    { key: 'NH', value: 'NH', text: 'New Hampshire' },
    { key: 'NJ', value: 'NJ', text: 'New Jersey' },
    { key: 'NM', value: 'NM', text: 'New Mexico' },
    { key: 'NY', value: 'NY', text: 'New York' },
    { key: 'NC', value: 'NC', text: 'North Carolina' },
    { key: 'ND', value: 'ND', text: 'North Dakota' },
    { key: 'OH', value: 'OH', text: 'Ohio' },
    { key: 'OK', value: 'OK', text: 'Oklahoma' },
    { key: 'OR', value: 'OR', text: 'Oregon' },
    { key: 'PA', value: 'PA', text: 'Pennsylvania' },
    { key: 'RI', value: 'RI', text: 'Rhode Island' },
    { key: 'SC', value: 'SC', text: 'South Carolina'},
    { key: 'SD', value: 'SD', text: 'Soth Dakota' },
    { key: 'TN', value: 'TN', text: 'Tennessee' },
    { key: 'TX', value: 'TX', text: 'Texas' },
    { key: 'UT', value: 'UT', text: 'Utah' },
    { key: 'VT', value: 'VT', text: 'Vermont' },
    { key: 'AL', value: 'AL', text: 'Alabama' },
    { key: 'VA', value: 'VA', text: 'Virginia' },
    { key: 'WA', value: 'WA', text: 'Washington' },
    { key: 'WV', value: 'WV', text: 'West Virginia' },
    { key: 'WI', value: 'WI', text: 'Wisconsin' },
    { key: 'WY', value: 'WY', text: 'Wyoming' },
]

// const Characteristics = (
//     <Form>
//         <Form.Group grouped>
//         <Form.Checkbox onClick = {this.handleFilter} label="Ears" name='Characteristic' value='Ears' />
//         <Form.Checkbox label="Long tail" name='Characteristic' value='Long tail' />
//         <Form.Checkbox label="Long legs" name='Characteristic' value='Long legs' />
//         <Form.Checkbox label="Long neck" name='Characteristic' value='Long neck' />
//         <Form.Checkbox label="Bare face/head" name='Characteristic' value='Bare face/head' />
//         <Form.Checkbox label="Crest" name='Characteristic' value='Crest' />
//         <Form.Checkbox label="Black mask/cap/bib" name='Characteristic' value='Black mask/cap/bib' />
//         <Form.Checkbox label="Iridescent" name='Characteristic' value='Iridescent' />
//         <Form.Checkbox label="Collar" name='Characteristic' value='Collar' />
//         <Form.Checkbox label="Whiskers" name='Characteristic' value='Whiskers' />
//         <Form.Checkbox label="Webbed feet" name='Characteristic' value='Webbed feet' />
//         <Form.Checkbox label="Yellow eyes" name='Characteristic' value='Yellow eyes' />
//         <Form.Checkbox label="Yellow beak" name='Characteristic' value='Yellow beak' />
//         <Form.Checkbox label="Yellow feet" name='Characteristic' value='Yellow feet' />
//         <Form.Checkbox label="Yellow legs" name='Characteristic' value='Yellow legs' />
//         <Form.Checkbox label="Yellow eye ring" name='Characteristic' value='Yellow eye ring' />
//         <Form.Checkbox label="Red eyes" name='Characteristic' value='Red eyes' />
//         <Form.Checkbox label="Red eye ring" name='Characteristic' value='Red eye ring' />
//         <Form.Checkbox label="Red beak" name='Characteristic' value='Red beak' />
//         <Form.Checkbox label="Red feet" name='Characteristic' value='Red feet' />
//         <Form.Checkbox label="Red legs" name='Characteristic' value='Red legs' />
//         <Form.Checkbox label="Orange eyes" name='Characteristic' value='Orange eyes' />
//         <Form.Checkbox label="Orange beak" name='Characteristic' value='Orange beak' />
//         <Form.Checkbox label="Orange feet" name='Characteristic' value='Orange feet' />
//         <Form.Checkbox label="Orange legs" name='Characteristic' value='Orang legs' />
//         <Form.Checkbox label="White eyes" name='Characteristic' value='White eyes' />
//         <Form.Checkbox label="White eye ring" name='Characteristic' value='White eye ring' />
//         <Form.Checkbox label="Pink beak" name='Characteristic' value='Pink beak' />
//         <Form.Checkbox label="Pink feet" name='Characteristic' value='Pink feet' />
//         <Form.Checkbox label="Pink legs" name='Characteristic' value='Pink legs' />
//         <Form.Checkbox label="Blue eyes" name='Characteristic' value='Blue eyes' />
//         <Form.Checkbox label="Blue eye ring" name='Characteristic' value='Blue eye ring' />
//         <Form.Checkbox label="Blue beak" name='Characteristic' value='Blue beak' />
//         <Form.Checkbox label="Blue feet" name='Characteristic' value='Blue feet' />
//         <Form.Checkbox label="Blue legs" name='Characteristic' value='Blue legs' />
//         <Form.Checkbox label="Black eye ring" name='Characteristic' value='Black eye ring' />
//         </Form.Group>
//     </Form>
// )

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
    // handleFilterCharacteristics= event => {
    //     const CharacteristicToFind = event.currentTarget.getElementsByTagName("input")[0].value
    //     const checked = event.currentTarget.getElementsByTagName("input")[0].checked
    //       if (checked === true){
    //           //filter
    //           this.setState({filterBirds: this.props.birds.filter(bird => {
    //               const result = bird.Characteristics.split(",").find(Characteristics => {
    //                   return Characteristics === CharacteristicToFind
    //               })
    //               if (result){
    //                   return true
    //               }
    //               else{
    //                   return false
    //               }
    //           })})
    //       }
    //       else{
    //           //unfilter
    //           this.setState({filterBirds: this.props.birds})
    //       }
          
    //   }
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
        <Form.Checkbox onClick = {this.handleFilterCharacteristics} label="Ears" name='Characteristic' value='ears' />
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
                         </Form.Group>
                     </Form>
                 } />
                      </Menu.Item>
                      </Accordion>
            
    {/* //         <Accordion styled>
    //           <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>color
    //           <Icon name='dropdown'/>
    //           </Accordion.Title>
    //           <Accordion.Content>
    //               <Form.Checkbox label="Dark Brown" name='color' value='Dark Brown' />
    //               <Checkbox label='light brown'></Checkbox>
    //               <Checkbox label='violet'></Checkbox>
    //               <Checkbox label='blue'></Checkbox>
    //               <Checkbox label='brown'></Checkbox>
    //               <Checkbox label='orange'></Checkbox>
    //               <Checkbox label='red'></Checkbox>
    //               <Checkbox label='white'></Checkbox>
    //               <Checkbox label='red-brown'></Checkbox>
    //               <Checkbox label='black'></Checkbox>
    //               <Checkbox label='grey'></Checkbox>
    //             </Accordion.Content>
    
    //         <Menu.Item>
    //           <Menu.Header>Characteristics</Menu.Header>
    //           <Menu.Menu>
    //               <Checkbox label='ears'></Checkbox>
    //               <Checkbox label='Long tail'></Checkbox>
    //               <Checkbox label='Long legs'></Checkbox>
    //               <Checkbox label='Long beak'></Checkbox>
    //               <Checkbox label='Long neck'></Checkbox>
    //               <Checkbox label='Bare face/head'></Checkbox>
    //               <Checkbox label='Crest'></Checkbox>
    //               <Checkbox label='Blackmask/cap/bib'></Checkbox>
    //               <Checkbox label='Iridescent'></Checkbox>
    //               <Checkbox label='Collar'></Checkbox>
    //               <Checkbox label='Whiskers'></Checkbox>
    //               <Checkbox label='Webbed feet'></Checkbox>
    //               <Checkbox label='yellow eyes'></Checkbox>
    //               <Checkbox label='Yellow beak'></Checkbox>
    //               <Checkbox label='Yellow feat'></Checkbox>
    //               <Checkbox label='Yellow Legs'></Checkbox>
    //               <Checkbox label='Yellow eye ring'></Checkbox>
    //               <Checkbox label='Red eyes'></Checkbox>
    //               <Checkbox label='Red eye ring'></Checkbox>
    //               <Checkbox label='Red beak'></Checkbox>
    //               <Checkbox label='Red feet'></Checkbox>
    //               <Checkbox label='Red legs'></Checkbox>
    //               <Checkbox label= 'Orange eyes'></Checkbox>
    //               <Checkbox label='Orange beak'></Checkbox>
    //               <Checkbox label='Orange feet'></Checkbox>
    //               <Checkbox label='Orange legs'></Checkbox>
    //               <Checkbox label='White eyes'></Checkbox>
    //               <Checkbox label='White eye ring'></Checkbox>
    //               <Checkbox label='Pink beak'></Checkbox>
    //               <Checkbox label='Pink feet'></Checkbox>
    //               <Checkbox label='Pink legs'></Checkbox>
    //               <Checkbox label='Blue beak'></Checkbox>
    //               <Checkbox label='Blue eyes'></Checkbox>
    //               <Checkbox label='Blue eye ring'></Checkbox>
    //               <Checkbox label='Blue feet'></Checkbox>
    //               <Checkbox label='Blue legs'></Checkbox>
    //               <Checkbox label='Black eye ring'></Checkbox>
    //           </Menu.Menu>
    //           <Menu.Item>
    //               <Menu.Header>Type</Menu.Header>
    //               <Menu.Menu>
    //                   <Checkbox label='Raptor'></Checkbox>
    //                   <Checkbox label='Songbird'></Checkbox>
    //                   <Checkbox label='Waterbird'></Checkbox>
    //               </Menu.Menu>
    //           </Menu.Item>
    //           <Menu.Item>
    //               <Menu.Header>Size</Menu.Header>
    //               <Menu.Menu>
    //                   <Checkbox label='Tiny'></Checkbox>
    //                   <Checkbox label='Small'></Checkbox>
    //                   <Checkbox label='Medium'></Checkbox>
    //                   <Checkbox label='Medium-large'></Checkbox>
    //                   <Checkbox label='large'></Checkbox>
    //                   <Checkbox label='Giant'></Checkbox>

    //               </Menu.Menu>
    //           </Menu.Item>

    //           <Menu.Item>
    //               <Menu.Header>States</Menu.Header>
    //               <Menu.Menu>
    //                   <Dropdown placeholder='State' fluid multiple search selection options={States} />
    //               </Menu.Menu>
    //           </Menu.Item>


    //         </Menu.Item>
    //       </Accordion> */}
    <BirdCards birds = {this.state.filterBirds} />
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