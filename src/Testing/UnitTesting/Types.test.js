import {shallow} from 'enzyme'
import Types from '../../components/PokemonDetails/Types';

describe("renders Pokemon Feature - Types component", () => {

    it('display Pokemon Feature - Types className', () => {
        let wrapper = shallow(<Types/>);
        expect(wrapper.exists('.PokemonDetail__Types')).toEqual(true);
    });

});