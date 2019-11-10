import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {

    onRender(dom){
        const pokemon = this.props.pokemon;

        pokemon.forEach(pokeman => {
            const props = { pokeman };
            const pokemonItem = new PokemonItem(props);
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