import React from 'react';

class Bitcoin extends React.Component{
    
    getResponse = () => (this.props.response.map((item,index) => {
        const timestring = item.time ? item.time.updateduk: '';
        const timearray = timestring.split('at');
        return(
            <tr className="dynamic-row" key={index}>
                <td>{index+1}</td>
                <td>{item.bpi ? item.bpi.USD.rate_float : ''}</td>
                <td>{item.bpi ? item.bpi.GBP.rate_float : ''}</td>
                <td>{item.bpi ? item.bpi.EUR.rate_float : ''}</td>
                <td>{timearray[0]}</td>
                <td>{timearray[1]}</td>
            </tr>
        );
    })
);
    

    render(){
        console.log(this.props.response);
        console.log(this.getResponse());
        return(
            <div>
                <table border="1px" align="center">
                    <tr className="column-headings">
                        <td>SERIAL NO.</td>
                        <td>USD</td>
                        <td>GBP</td>
                        <td>EUR</td>
                        <td>DATE</td>
                        <td>TIME</td>
                    </tr>
                   {this.getResponse()}
                </table>
            </div>
        ); 
    }
}

export default Bitcoin;