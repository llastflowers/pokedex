import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
            <div class="pokemon-item">
                <img src="${pokemon.Image}">
                <h2>#${pokemon.Number} ・ ${pokemon.Name}</h2>
                <p>Type: ${pokemon.Type}</p>
                <p>Weight: ${pokemon.Weight}</p>
            </div>
        `;
    }
}

export default PokemonItem;