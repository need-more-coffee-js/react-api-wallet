import React, { Component} from "react";
import './Coin.css';

export default class GetApiBalance extends Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount(){
        fetch("https://blockchain.info/multiaddr?active=3MQTRzttkMtsMEy9dRq4Sf1xiSsWKgQkyH|1BoatSLRHtKNngkdXEeobR76b53LETtpyT|bc1q9fmqhwjem6u5gp4c8mm02tdyyz58yt5mcklykp|bc1ql9na73jamylumxk7sts2u4859fxmlsjwk0hlxs")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.addresses
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });

            }
        )

    }

    render(){
        const{error, isLoaded, items} = this.state;
        if (error){
            return <p> ERROR {error.message} </p>
        } else if (!isLoaded){
            return <p> Loading </p>
        } else {
            return (
                <ul className="balance_list">
                    {items.map(item =>(
                        <li className="balance_" key={item.addresses}> 
                            Address: {item.address} <br/>  Balance: {item.final_balance} btc
                        </li>
                    ))}
                </ul>
            )
        }
    }
}