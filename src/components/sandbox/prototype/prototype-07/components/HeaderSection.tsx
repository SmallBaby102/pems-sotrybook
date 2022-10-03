import appLogo from "../assets/app-logo.svg";

const HeaderLink: React.FC<{ children: any; href: string }> = ({
    children,
    href,
}) => (
    <a className="text-white text-[25px] px-10" href={href}>
        {children}
    </a>
);

const HeaderSection: React.FC = () => {
    return (
        <div className="flex items-center text-white p-6 gap-6 h-[118px]">
            <div>
                <img src={appLogo} alt="logo" />
            </div>
            <div className="flex-1">
                <h1 className="text-[30px] font-normal">Pegasus App</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <HeaderLink href="">HELP</HeaderLink>
                        <HeaderLink href="">FAG</HeaderLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderSection;
