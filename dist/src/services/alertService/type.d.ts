import { ToastProps } from '@innovaccer/design-system';
declare type autoHiderBarProp = {
    style: object;
};
export interface AlertServiceToastProps extends ToastProps {
    toastId: string;
    dismissIn?: number;
    toastClassName: string;
    autoHiderBar: autoHiderBarProp;
}
export {};
