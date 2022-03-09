import React, {Component} from "react";
import { CSVLink } from "react-csv";
import './Coin.css'

class AsyncCSV extends Component {

    constructor(props){
        super(props);
        this.state={
            data: []
        }

        this.CSVLinkElement = React.createRef();

        this.headers = [

            {label: 'Name ' , key:'name'},
            {label: 'Symbol ', key:'symbol'},
            {label: 'Balance ', key:'high_24h'}
            
            

        ]
    }

    getUserList = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        return await res.json();
    }

    downloadReport = async () =>{
        const data = await this.getUserList();
        this.setState({data: data}, () =>{
            
            setTimeout(() => {
                this.CSVLinkElement.current.link.click();
            })
        } );
    }


    render(){
        const {data} = this.state;

        return <div >
            <input className="export-button"
            type="button"
            value="Export to CSV"
            onClick={this.downloadReport}
            />
            <CSVLink 
            headers={this.headers}
            data={data}
            filename="Report.csv"
            ref={this.CSVLinkElement}
            />
        </div>
    }


}

export default AsyncCSV