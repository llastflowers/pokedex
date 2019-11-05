import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const { pokemon: {
            url_image,
            id,
            pokemon,
            type_1,
            type_2,
            weight,
        },
        } = this.props;

        return /*html*/`

            <div class="pokemon-item">
                <img src="${url_image}">
                <h2>#${id} ・ ${pokemon}</h2>
                <p>Type: ${type_1} + ${type_2}</p>
                <p>Weight: ${weight} lbs</p>
            </div>
        `;
    }
}

export default PokemonItem;