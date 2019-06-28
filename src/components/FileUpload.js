import React from 'react';
import DataTable from './DataTable';
import Papa from 'papaparse';
import styled from 'styled-components';
const path = 'M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z'

const Input = styled.input`
width: 0.1px;
height: 0.1px;
opacity: 0;
overflow: hidden;
position: absolute;
z-index: -1;
`;
const Label = styled.label`
  max-width: 80%;
  font-size: 1.25rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  border-radius: 5px;
  padding: 0.625rem 1.25rem;
  background-color:  rgb(177, 174, 174);  
 :hover {
    background-color: gray;
    } 

`;

export default class FileUpload extends React.Component {

    state = {
      fetchedData : null
    }
  
  handleUpload(event) {
    event.preventDefault();
    let reader = new FileReader();
    const file = event.target.files[0];  


    reader.onloadend = () => {
      const parsed = Papa.parse(reader.result, {header:true, skipEmptyLines: true});
      this.setState({
        fetchedData: parsed.data
      })
    }
    reader.readAsText(file);

  }
  render() {
     
    return (
      <div>
        {this.state.fetchedData ?  <DataTable data={this.state.fetchedData} />:
        <div>
        <Input id = 'file' type="file" onChange={(event)=>this.handleUpload(event)} />
        <Label for="file"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d={path}/></svg> Choose a file</Label>
        </div>
      }
        
        </div>
    )
  }
}

