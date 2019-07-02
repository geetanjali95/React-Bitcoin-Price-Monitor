import React from 'react';
import Bitcoin from './Bitcoin';
import axios from 'axios';
import '../style.css';

class App extends React.Component{

    state = { response: [] };


    async componentDidMount () {
        try {
             setInterval(async () => {
               const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json'); 
               this.setState({
                    response: [ 
                        response.data,
                        ...this.state.response.slice(0,9)
                    ]
                });
            }, 60000);
        } catch(e) {
            console.log(e);
        }
    }

    render(){
        console.log(this.state);
        return(
            <div>
                <h2><center>Bitcoin Price Monitor</center></h2>
                <div>
                    <Bitcoin response={this.state.response} />
                </div>
            </div>
        );
    }
    
}

export default App;