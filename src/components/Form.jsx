import React,{Component} from 'react';
import Datalist from './Datalist'
export default class Form extends Component{
  state = {
    searchFighter:'',
    form: null
  }

  componentDidMount(){
    this.setState({
      form: document.querySelector("form")
    })
  }

  handleChange = (e)=>{
    this.setState(
      {
        searchFighter: e.target.value
      }
    )
    console.log(this.state.form)
    this.fetchData()
  }

  fetchData = ()=>{
    console.log( this.state.searchFighter)
      fetch("http://localhost/montereau_react_app/php/ajax.php", {
    
        
            method: "POST",
            body: new FormData(this.state.form)
          }
          )
          .then((response) => response.json())
          .then((datas) => {
            console.log(datas);
            // fighters.innerHTML = "";
            // datas.forEach((data) => {
      
            //   const option = document.createElement("option");
            //   option.value = data["prenom_nom"];
            //   option.innerText = data["prenom_nom"];
      
      
              
            //   fighters.appendChild(option);
      
            // });
            // const options = document.querySelectorAll("option");
      
            // options.forEach(option => {
            //   if (input.value == option.innerText) {
      
            //     fighters.innerText = "";
            //     btn.click();
            //   }
            // })
      
          });
  }

  render(){
    return(
      <form>
        <label htmlFor="name">Veuillez choisir un combattant:</label>
        <input list="fighters" name="name" id="name" onChange={this.handleChange} />
        <Datalist></Datalist>
        <input type="submit" id="btn" value="Valider" />
      </form>
    )
  }
}