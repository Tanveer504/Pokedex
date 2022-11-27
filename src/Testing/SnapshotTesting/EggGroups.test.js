import renderer from 'react-test-renderer';
import EggGroup from '../../components/PokemonDetails/EggGroup';

it('should have the right EggGroup component snapshot', () => {
    const tree = renderer.create(<EggGroup />).toJSON();
    expect(tree).toMatchSnapshot();
});