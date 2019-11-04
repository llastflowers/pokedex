import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {

    onRender(dom){
        const pokemonItem = new PokemonItem();
        dom.prepend(pokemonItem.renderDOM());
    }

    // onRender(dom) {
    //     const pokemanz = this.props.pokemanz;

    //     pokemanz.forEach(pokemon => {
    //         const pokemonItem = new PokemonItem({ pokemon: pokemon });
    //         const pokemonItemDOM = pokemonItem.renderDOM();
    //         dom.appendChild(pokemonItemDOM);
    //     });
    // }

    renderHTML() {

        return /*html*/`
            <section class="pokemon-results">
                <div class="pokemon-item"></div>
                <div class="pokemon-item"></div>
                <div class="pokemon-item"></div>
                <div class="pokemon-item"></div>
                <div class="pokemon-item"></div>
                <div class="pokemon-item"></div>
                <div class="pokemon-item"></div>
                <div class="pokemon-item"></div>
            </section>
        `;
    }
}

export default PokemonList;