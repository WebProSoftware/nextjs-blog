import clsx from "clsx";
import styles from "./alert.module.css"
export const Alert = ({children, type}) => {
    return (
        <div
            className={clsx({
                [styles.success]: type === "success",
                [styles.error]: type === "error"
            })}
        >
            {children}
        </div>
    )
}