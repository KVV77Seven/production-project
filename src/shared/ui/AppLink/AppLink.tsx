import {classNames} from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss"
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}
interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: React.ReactNode;
}
export const AppLink = (props: AppLinkProps) => {
    const {
        to,
        children,
        className,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
