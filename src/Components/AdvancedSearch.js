import React, {Component} from 'react'
import { Dropdown, Menu, Checkbox, Accordion, Icon, Form } from 'semantic-ui-react'
// stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]

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
const colors = (
    <Form>
        <Form.Group grouped>
        <Form.Checkbox label="Dark Brown" name='color' value='Dark Brown' />
        <Form.Checkbox label="light brown" name='color' value='light brown' />
        <Form.Checkbox label="violet" name='color' value='violet' />
        <Form.Checkbox label="blue" name='color' value='blue' />
        <Form.Checkbox label="brown" name='color' value='brown' />
        <Form.Checkbox label="orange" name='color' value='orange' />
        <Form.Checkbox label="red" name='color' value='red' />
        <Form.Checkbox label="white" name='color' value='white' />
        <Form.Checkbox label="red-brown" name='color' value='red-brown' />
        <Form.Checkbox label="black" name='color' value='black' />
        <Form.Checkbox label="grey" name='color' value='grey' />
        </Form.Group>
    </Form>
)

class dropdown extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }
    render(){
        const { activeIndex } = this.state
        return(
            <Accordion as={Menu} vertical>
             <Menu.Item>
                 <Accordion.Title
                 active={activeIndex === 0}
                 content='colors'
                 index={0}
                 onClick={this.handleClick}
                 />
                 <Accordion.Content active={activeIndex === 0} content={colors} />
             </Menu.Item>
            </Accordion>
    //         <Accordion styled>
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
    //       </Accordion>
        )
      }
    }
export default dropdown;