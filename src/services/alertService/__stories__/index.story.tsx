import * as React from 'react';
import { throttle } from 'throttle-debounce';
import { AlertService } from '@/index';
import { Button, Textarea, Text } from '@innovaccer/design-system';

export const Simple = () => {

  const alertService = new AlertService();

  const clickHandler = () => {
    const toast = {
      dismissIn: 3500,
      title: 'test',
      appearance: 'info',
      message: 'test message',
      actions: [
        {
          label: 'button label',
          onClick: () => alert('example')
        }
      ]
    }
    alertService.add(toast);
  }

  return (
    <>
      <Button
        onClick={clickHandler}>
        Add toast
      </Button>
    </>
  );
};

export default {
  title: 'Services/AlertService',
  component: AlertService
};


const newAlert = new AlertService();
const throttleFunc = throttle(3500, (conf) => {
  console.log('conf:', conf);
  newAlert.add(JSON.parse(conf));
});
const addT = (conf: string) => {
  throttleFunc(conf);
};

// arbitrary js object:
const myJsObj = {
  dismissIn: 3500,
  title: 'test',
  appearance: 'info',
  message: 'test message',
  actions: [
    {
      label: 'button label',
      onClick: () => alert('example')
    }
  ]
};
// using JSON.stringify pretty print capability:
const confSample = JSON.stringify(myJsObj, undefined, 4);
export const Config = () => {
  const [conf, setConf] = React.useState(confSample);
  return (
    <>
      <div className="Row">
        <div className="d-flex flex-column w-50">
          <label>Enter sample toast config :</label>
          <br />
          <Textarea
            id="toast_config_input_example"
            value={conf}
            onChange={event => setConf(event.target.value)}
            rows={15}
            cols={50}
          />

          <Text>
           {`AlertService.add({ title: 'test', appearance: 'info', message: 'test message' })`}
          </Text>

          <br />
        </div>
        <div className="Row m-auto justify-content-center w-50">
          <Button
            onClick={() => addT(conf)}>
            Add toast
          </Button>
        </div>
      </div>
    </>
  );
};
