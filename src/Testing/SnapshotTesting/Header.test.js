import renderer from 'react-test-renderer';
import Header from '../../components/Header/Header';

it('should have the right Header component snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
});