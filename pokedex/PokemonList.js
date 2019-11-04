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
            <div class="results-background">
                <section class="pokemon-results">
                </section>
            </div>
        `;
    }
}

export default PokemonList;