import React,{Component,Fragment} from 'react';
import Form from './components/Form.jsx';
import FightersTable from './components/FightersTable.jsx';


export default class Home extends Component{
  render(){
    return (
      <Fragment>
       <h1>Home</h1>
       <Form></Form>
       <FightersTable></FightersTable>
       </Fragment>

    )
  }
}