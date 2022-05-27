import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Card from '../src/components/common/card';
import List from '../src/components/common/list';
import Mode from '../src/components/common/mode';
import SearchBar from '../src/components/common/searchBar';
import BarTitleDetail from '../src/components/common/barTitleDetail';

describe('Components', () => {
  it('Card', () => {
    const renderCard = renderer
      .create(
        <Card
          key={1}
          dish={{
            id: 1,
            image:
              'https://img.bestrecipes.com.au/f4jy177E/w643-h428-cfill-q90/br/2020/11/beef-stew-960642-2.jpg',
            title: 'Beef stew',
            servings: 3,
            ingredients: [
              {
                ingredient: 'extra virgin olive oil',
                size: '2 cups',
              },
              {
                ingredient: 'gravy beef, cut into 4cm pieces',
                size: '500 g',
              },
              {
                ingredient: 'large carrots, thickly sliced',
                size: '2',
              },
            ],
          }}
          mode={true}
          isLast={false}
          type={'RECENT'}
          onPress={() => {}}
        />,
      )
      .toJSON();
    expect(renderCard).toMatchSnapshot();
  });
  it('List', () => {
    const renderList = renderer
      .create(
        <List
          type="TRENDING"
          navigation={null}
          mode={true}
          data={[]}
          insertData={x => {}}
        />,
      )
      .toJSON();
    expect(renderList).toMatchSnapshot();
  });
  it('Mode', () => {
    const renderMode = renderer
      .create(<Mode mode={true} changeMode={() => {}} />)
      .toJSON();
    expect(renderMode).toMatchSnapshot();
  });
  it('SearchBar', () => {
    const renderSearchBar = renderer.create(<SearchBar mode={true} />).toJSON();
    expect(renderSearchBar).toMatchSnapshot();
  });
  it('BarTitleDetail', () => {
    const renderBarTitleDetail = renderer
      .create(
        <BarTitleDetail
          navigation={{goBack: () => null}}
          type={'RECENT'}
          name={'frijoles'}
          mode={true}
          dish={{}}
        />,
      )
      .toJSON();
    expect(renderBarTitleDetail).toMatchSnapshot();
  });
});
