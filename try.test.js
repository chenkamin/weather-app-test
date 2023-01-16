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
    handleInputTypeMock.mockReturnValue(['q', 'los angeles']);
    handleAjaxMock.mockResolvedValue({ data: { list: [{ weather: 'sunny' }] } });
    manipulateForDaysNeededMock.mockReturnValue([{ weather: 'sunny' }]);
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
  });

  // it('should call handleInputType and destructure the returned values', async () => {
  //   await instance.handleSubmit();
  //   expect(handleInputTypeMock).toHaveBeenCalled();
  //   expect(handleAjaxMock).toHaveBeenCalledWith('q', 'los angeles');
  // });

  // it('should call handleAjax with the correct arguments', async () => {
  //   await instance.handleSubmit();
  //   expect(handleAjaxMock).toHaveBeenCalledWith('q', 'los angeles');
  // });

  // it('should call manipulateForDaysNeeded', async () => {
  //   await instance.handleSubmit();
  //   expect(manipulateForDaysNeededMock).toHaveBeenCalledWith({ data: { list: [{ weather: 'sunny' }] } }, null);
  // });

  // it('should call setForecast with the correct data', async () => {
  //   await instance.handleSubmit();
  //   expect(setForecastMock).toHaveBeenCalledWith([{ weather: 'sunny' }]);
  // });

  // it('should call setError with the correct error message', async () => {
  //   handleAjaxMock.mockRejectedValue(new Error('test error'));
  //   await instance.handleSubmit();
  //   expect(setErrorMock).toHaveBeenCalledWith(new Error('test error'));
  // });
});
