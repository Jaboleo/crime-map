import React from 'react'
import styled from 'styled-components'
import {CrimeMap} from './elements/CrimeMap'
import {TableElement} from './elements/TableElement'

const RowWrapper = styled.div`
    margin: 0 auto;
    width: max-content;
    border-radius: 10px;
    
    :hover{
    background-color: rgb(177, 174, 174);
    cursor: pointer;
    }  
    
`


export default class TableRow extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
        clicked : !this.state.clicked
        })
      }
      
 render(){
    const { address, cdatetime, crimedescr, district, latitude, longitude, index  } = this.props.data 
    return (
        <RowWrapper key={index} className = {this.state.clicked && 'active'}  onClick = {this.handleClick}>       
        <TableElement address={address} date={cdatetime} crime = {crimedescr} district={district} /> 
        {this.state.clicked && <CrimeMap lat={latitude} lon = {longitude} />} 
       </RowWrapper>
    )
 }

}
