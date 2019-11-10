import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const pokeman = this.props.pokeman;

        return /*html*/`

            <div class="pokemon-item">
                <img src="${pokeman.url_image}">
                <h2>#${pokeman.id} ・ ${pokeman.pokemon}</h2>
                <p>Type: ${pokeman.type_1} + ${pokeman.type_2}</p>
                <p>Weight: ${pokeman.weight} lbs</p>
            </div>
        `;
    }
}

export default PokemonItem;