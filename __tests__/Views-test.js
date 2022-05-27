import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../src/views/home/home';
import Detail from '../src/views/detail/detail';

jest.useFakeTimers();
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Views', () => {
  it('Home', () => {
    const renderHome = renderer.create(<Home />).toJSON();
    expect(renderHome).toMatchSnapshot();
  });
  it('Detail', () => {
    const renderDetail = renderer
      .create(
        <Detail
          route={{params: {mode: true, dish: {servings: 1, ingredients: []}}}}
          navigation={{goBack: () => {}}}
        />,
      )
      .toJSON();
    expect(renderDetail).toMatchSnapshot();
  });
});
