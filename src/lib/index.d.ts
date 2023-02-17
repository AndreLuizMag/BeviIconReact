/// <reference types="react" />
interface BvIconProps {
    variant?: string;
    name: string;
    title?: string;
    label?: string;
    hidden?: boolean;
    size?: number;
    className?: string;
}
declare const BvIcon: ({ variant, name, title, label, hidden, size, className }: BvIconProps) => JSX.Element;
export default BvIcon;
