type ButtonProps = {
    children: Readonly<React.ReactNode>;
    color: string;
    border: string;
    num?: number;
    isDark?: boolean;
};
const Button = (props: ButtonProps) => {
    const { children, color,border, num, isDark } = props;
    console.log(props);
    return <button className={`${color} ${border}`}>{children}</button>;
};
export default Button;