import React from 'react'
import styled from 'styled-components'

const Cell = styled.div`
display: table-cell;
vertical-align: middle;
padding: 5px;
`
const BigCell = styled(Cell)`
width: 180px;
`

const SmallCell = styled(Cell)`
width: 80px;
`

export const TableElement = ({wrapperClass='', date="Date", address='Address', district='District', crime='Crime'}) => {
    return (
        <div className={wrapperClass}>
        <SmallCell className={'date'}>{date}</SmallCell>
        <BigCell className={'address'}>{address}</BigCell>
        <SmallCell className={'district'}>{district}</SmallCell>
        <BigCell className={'crime'}>{crime}</BigCell>
        </div>
    )
}
