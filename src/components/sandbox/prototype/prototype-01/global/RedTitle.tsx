const RedTitle: React.FC<{text:string, className?: string}> = ({text, className}) => {
    return (
        <h2 className={"text-SeabiscuitRedThemeColor text-[20px] font-bold mb-0.5 " + className}>{text}</h2>
    );
}
export {RedTitle};