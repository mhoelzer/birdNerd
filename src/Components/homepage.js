import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Search,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import { homepage } from "../Actions/action.js"



const homepage = ({ mobile }) => (
    <Container text>
    <Header
    as='h1'
    content='Bird Nerd'
    inverted
    style={{
        fontSize: mobile ? '2em' : '4em', 
        fontWeight: 'normal', 
        marginBottom: 0, 
        marginTop: mobile ? '0.5em' : '3em', 
    }}
    />
    <Header 
    as='h2'
    content='search that bird you nerd.'
    inverted
    style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5' : '1.5'
    }}
    />
    </Container>
)
