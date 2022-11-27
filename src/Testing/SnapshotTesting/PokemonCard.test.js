import renderer from 'react-test-renderer';
import PokemonCard from '../../components/Pokemon/PokemonCard'

it('should have the ability component snapshot', () => {
    const tree = renderer.create(<PokemonCard />).toJSON();
    expect(tree).toMatchSnapshot();
});