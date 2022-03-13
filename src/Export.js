import { CSVLink } from "react-csv";
import './Coin.css'

function ExportToCsv(){

    
    const data = [
        {
            name: "3MQTRzttkMtsMEy9dRq4Sf1xiSsWKgQkyH",
            balance: "33000 btc"
        },
        {
            name: "1BoatSLRHtKNngkdXEeobR76b53LETtpyT",
            balance: "0 btc"
        },
        {
            name: "bc1q9fmqhwjem6u5gp4c8mm02tdyyz58yt5mcklykp",
            balance: "0 btc"
        },
        {
            name: "bc1ql9na73jamylumxk7sts2u4859fxmlsjwk0hlxs",
            balance: "0 btc"
        }     

    ];

    const headers = [
        {
            label:"Address", key:"name"
            
        },
        {
            label:"Balance", key:"balance"
        }
    ]

    const csvLink = {
        filename:"Report.csv",
        headers: headers,
        data: data
    }

    return(
        <div className="export-button">
            <CSVLink {...csvLink}> Export to CSV </CSVLink>
        </div>
    )
}

export default ExportToCsv;