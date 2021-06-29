import { AlertServiceToastProps } from "./type";
interface AlertProps {
    onDismiss: (toastId: string, onClose?: () => void | undefined) => void;
    alert: AlertServiceToastProps;
    wrapId?: string;
    wrapClassName?: string;
    bottom?: number;
    top?: number;
    addingNew?: boolean;
    leftOrRight: string;
    indexNumber: number;
    zIndex: number;
    removingNew: boolean;
}
declare const AlertComponent: (props: AlertProps) => JSX.Element;
export default AlertComponent;
