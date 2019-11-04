import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {

    onRender(dom){
        const { pokemanz } = this.props;

        pokemanz.forEach(pokemon => {
            const pokemonItem = new PokemonItem({ pokemon });
            const pokemonItemDOM = pokemonItem.renderDOM();
            dom.appendChild(pokemonItemDOM);
        });
    }

    renderHTML() {

        return /*html*/`
                <section class="pokemon-results">
                </section>
        `;
    }
}

export default PokemonList;