import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        // const pokemon = this.props.pokemon;

        return /*html*/`

        <div class="pokemon-item">
            <img class="pokemon-image" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png">
            <p class="pokemon-name">Name: venusaur</p>
            <p class="pokemon-type1">Type1: grass</p>
            <p class="pokemon-type2">Type2: poison</p>
            <p class="pokemon-attack">Attack: 82</p>
        </div>
            <!-- <div class="pokemon-item">
                <img src="${pokemon.Image}">
                <h2>#${pokemon.Number} ・ ${pokemon.Name}</h2>
                <p>Type: ${pokemon.Type}</p>
                <p>Weight: ${pokemon.Weight}</p>
            </div> -->
        `;
    }
}

export default PokemonItem;