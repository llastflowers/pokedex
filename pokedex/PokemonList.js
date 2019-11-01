import Component from '..Component.js';
import PokemonItem from './PokemonItem';

class PokemonList extends Component {

    onRender(dom) {
        const pokemonItem = new PokemonItem();
        dom.prepend(pokemonItem.renderDOM());
    }

    renderHTML() {

        return /*html*/`
            <section class="pokemon-results">
                <div class="pokemon-item">
                <div class="pokemon-item">
                <div class="pokemon-item">
                <div class="pokemon-item">
                <div class="pokemon-item">
                <div class="pokemon-item">
                <div class="pokemon-item">
                <div class="pokemon-item">
            </section>
        `;
    }
}

export default PokemonList;