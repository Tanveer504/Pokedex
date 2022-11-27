import renderer from 'react-test-renderer';
import Weakness from '../../components/PokemonDetails/Weakness'

it('should have the weakness component snapshot', () => {
    const tree = renderer.create(<Weakness />).toJSON();
    expect(tree).toMatchSnapshot();
});