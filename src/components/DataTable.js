import React from 'react'
import TableRow from './TableRow'
import {TableElement} from './elements/TableElement'
import List from 'list.js'
export default class DataTable extends React.Component
{   
      componentDidMount(){      
            var options = {
                  valueNames: [ 'date','district','address', 'crime' ]
                };
             let userList = new List('table', options)
            }
     render() {

        return (
           <div id='table'>
                <input className="search" placeholder="Search" />
                <p> click on a crime to see its location</p>
                <div className='list'>
                 <TableElement wrapperClass={'table-header'} />
                 {this.props.data.map((crime, index) => <TableRow data={crime} index={index}/> )}
                 </div>
           </div>
        )
        
     }
  
}

