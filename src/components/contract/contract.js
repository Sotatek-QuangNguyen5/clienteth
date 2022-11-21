import { Method } from "../method"
import styles from "./contract.module.scss"


const methods = [

    {
        name : "getBalance",
        lostmoney : true,
        params : [

            {
                name : "address",
                type : "address"
            },
            {
                name : "address",
                type : "address"
            },
            {
                name : "address",
                type : "address"
            }
        ]
    },
    {
        name : "getBalance",
        payable : true,
        params : [

            {
                name : "address"
            }
        ]
    },
    {
        name : "getBalance",
        params : [

            {
                name : "address"
            }
        ]
    }
]

const results = [

    {
        name : "address",
        result: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
    },

    {
        name : "balance",
        result: "4038562308965402"
    },
    {
        name : "signature",
        result : "0x8b9aa1ac5bdc67880c6c384bcc219055801df56a78542cd3e0450a9d03d6d9db55966f68351748a466187e0084d674a4a450b940f978033ff86f3fd957951da11c"
    }
]

function Contract(contract) {

    return (

        <div
            className={styles.contract}
        >
            <div
                className={styles.contract__address}
            >
                Contract {contract.type} : &nbsp;
                <a
                    href={contract.url}
                    target="blank"
                    className={styles.link}
                >
                    {
                        contract.address
                    }
                </a>
            </div>
            {
                methods.map((method, index) => {

                    return (

                        <Method

                            key={index}
                            method={method}
                            results={results}
                        />
                    )
                })
            }
        </div>
    )
}

export default Contract