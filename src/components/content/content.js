import { Contract } from "../contract"
import styles from "./content.module.scss"

function Content() {

    return (

        <div
            className={styles.content}
        >
            <Contract />
            <Contract />
        </div>
    )
}

export default Content