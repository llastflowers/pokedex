import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`

            <div class="pokemon-item">
                <img src="${pokemon.url_image}">
                <h2>#${pokemon.id} ・ ${pokemon.pokemon}</h2>
                <p>Type: ${pokemon.type_1} + ${pokemon.type_2}</p>
                <p>Weight: ${pokemon.weight} lbs</p>
            </div>
        `;
    }
}

export default PokemonItem;