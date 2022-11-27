import renderer from 'react-test-renderer';
import Types from '../../components/PokemonDetails/Types'

it('should have the ability component snapshot', () => {
    const tree = renderer.create(<Types />).toJSON();
    expect(tree).toMatchSnapshot();
});