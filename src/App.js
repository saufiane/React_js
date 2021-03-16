import React from "react";
import Client from "./Client";
import ClientForm from "./ClientForm";



class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Lior Chamla" },
      { id: 2, nom: "Yoann Génique" },
      { id: 3, nom: "Saufiane Cherief"}
    ]
  };

  handleDelete = id => {
    const clients = [...this.state.clients];
    const index = clients.findIndex(client => client.id === id);

    clients.splice(index, 1);

    this.setState({ clients });
  };

  handleAdd = client => {
    const clients = [...this.state.clients];
    clients.push(client);

    this.setState({ clients });
  };

  render() {
    const title = "Liste des clients";

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map(client => (
            <Client
              key={client.id}
              details={client}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

