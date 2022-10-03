import helpIcon from "./../assets/help-icon.svg";

const DesktopFormBlock: React.FC<{
    children: any;
    icon: string;
    caption?: string;
    description?: string;
    captionOnTop?: boolean;
    className?: string;
    captionMargin?: number;
    onHelp?: () => void;
}> = ({
    children,
    icon,
    caption,
    captionOnTop,
    className,
    description,
    captionMargin,
    onHelp,
}) => (
    <div
        className={`flex items-center my-3 overflow-hidden ${className} ${
            captionOnTop ? "!items-start" : ""
        }`}
    >
        <div
            className={` w-[360px] max-w-[360px] min-w-[360px] ${
                captionOnTop && !captionMargin ? "mt-8" : ""
            }`}
            style={{ marginTop: captionMargin }}
        >
            {caption && (
                <>
                    <div className="flex gap-2 items-center">
                        <img src={icon} alt="icon" className="brightness-0" />
                        <div className="text-[#122B46] text-[14px] flex items-center gap-2">
                            <span>{caption}</span>
                            {onHelp && (
                                <span
                                    onClick={onHelp}
                                    className="cursor-pointer"
                                >
                                    <img
                                        src={helpIcon}
                                        alt="help"
                                        className="w-4 h-4"
                                    />
                                </span>
                            )}
                        </div>
                    </div>
                    {description && (
                        <div className="text-[#122B4680] text-[12px] ml-8">
                            {description}
                        </div>
                    )}
                </>
            )}
        </div>
        {children}
    </div>
);
export default DesktopFormBlock;
