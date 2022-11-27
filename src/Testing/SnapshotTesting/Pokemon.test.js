import Pokemon from "../../components/Pokemon/Pokemon";
import renderer from 'react-test-renderer';

it('should have the right Pokemon Card component snapshot', () => {
    const tree = renderer.create(<Pokemon />).toJSON();
    expect(tree).toMatchSnapshot();
});