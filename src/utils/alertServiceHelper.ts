export const uidGenerator = () => {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    const s = (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    return (s);
  });
  return (
    uuid
  );
};

export function pubSub() {
  const subscribers: any = {};
  function publish(eventName: string | number, data: any) {
    if (!Array.isArray(subscribers[eventName])) {
      return;
    }
    let toastId = uidGenerator();
    subscribers[eventName].forEach((callback: (arg0: any) => void) => {
      callback({ ...data, toastId });
    });
    return toastId;
  }

  function subscribe(eventName: string | number, callback: any) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }
    subscribers[eventName].push(callback);
    const index = subscribers[eventName].length - 1;
    return () => subscribers[eventName].splice(index, 1);
  }
  return {
    publish,
    subscribe
  };
}