import styles from "./method.module.scss"
import clsx from "clsx"


function Method({ method, results }) {

    return (

        <div
            className={styles.method}
        >
            <div
                className={styles.method__call}
            >
                <div
                    className={clsx(styles.method__name, {

                        [styles.payable] : method.payable,
                        [styles.lost__money] : method.lostmoney
                    })}
                >
                    {method.name}
                </div>
                <div
                    className={styles.method__params}
                >
                    {
                        method.params.map((param, index) => {

                            return (

                                <div
                                    className={styles.method__param}
                                    key={index}
                                >
                                    <input
                                        className={styles.method__input}
                                        placeholder={param.name}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div
                className={styles.results}
            >
                {
                    results.map((item, index) => {

                        return (

                            <div
                                className={styles.result__field}
                                key={index}
                            >
                                {item.name} : {item.result}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Method