import { AlertServiceConfig, PubSubServiceProps } from "./alertService";
interface AlertContainerProps {
    pubSubService: PubSubServiceProps;
    defaultConfig: AlertServiceConfig;
}
export declare type doctype = Document;
declare const AlertContainer: (props: AlertContainerProps) => JSX.Element;
export default AlertContainer;
