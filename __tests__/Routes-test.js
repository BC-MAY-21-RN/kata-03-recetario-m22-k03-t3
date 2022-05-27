import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Navigation from '../src/routes';

jest.useFakeTimers();
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Routes', () => {
  it('Navigation', () => {
    const renderNavigation = renderer.create(<Navigation />).toJSON();
    expect(renderNavigation).toMatchSnapshot();
  });
});
