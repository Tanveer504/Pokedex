import renderer from 'react-test-renderer';
import PokemonDetails from '../../components/PokemonDetails/PokemonDetails'

it('should have the ability component snapshot', () => {
    const tree = renderer.create(<PokemonDetails />).toJSON();
    expect(tree).toMatchSnapshot();
});