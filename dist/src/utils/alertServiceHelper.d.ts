export declare const uidGenerator: () => string;
export declare function pubSub(): {
    publish: (eventName: string | number, data: any) => string | undefined;
    subscribe: (eventName: string | number, callback: any) => () => any;
};
