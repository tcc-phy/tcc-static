interface DividerProps {
    marginT?: string;
    marginB?: string;
}

const Divider = ({ marginT, marginB }: DividerProps) => {
    return (
        <hr className={`w-full border-t border-border ${marginT} ${marginB}`} />
    );
};

export default Divider;
