import React from 'react'
import renderer from 'react-test-renderer'
import Date from '../../src/components/date'

test('Date component renders correctly', () => {
    const tree = renderer.create(
        <Date dateString={'2021-01-01'}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
})
