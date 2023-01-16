import Enzyme from 'enzyme';
import {mount}from 'enzyme';

import Adapter from 'enzyme-adapter-react-16'
import axios from 'axios';
// import { configure, Adapter } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() })

import 'jsdom-global/register'
import App from './src/App';

jest.mock('axios');
// configure({adapter: new Adapter()});

describe('handleSubmit', () => {
  let wrapper;
  let instance;
  let cleanRenderedStateMock = jest.fn();
  let handleInputTypeMock = jest.fn();
  let handleAjaxMock = jest.fn();
  let manipulateForDaysNeededMock = jest.fn();
  let setForecastMock = jest.fn();
  let setErrorMock = jest.fn();

  beforeEach(() => {
    wrapper = mount(<App 
      cleanRenderedState={cleanRenderedStateMock} 
      handleInputType={handleInputTypeMock} 
      handleAjax={handleAjaxMock} 
      manipulateForDaysNeeded={manipulateForDaysNeededMock}
      setForecast={setForecastMock}
      setError={setErrorMock}
    />)
    instance = wrapper.instance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call cleanRenderedState', async () => {
    await instance.handleSubmit();
    expect(cleanRenderedStateMock).toHaveBeenCalled();
  })
});
