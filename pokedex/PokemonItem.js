import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        // const pokemon = this.props.pokemon;

        return /*html*/`

        <div class="pokemon-item">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png">
            <h2>#001 ・ Bulbasaur</h2>
            <p>Type: Grass + Poison</p>
            <p>Weight: 15.2 lbs</p>
        </div>
        `;
    }
}

export default PokemonItem;

// <!-- <div class="pokemon-item">
// <img src="${pokemon.Image}">
// <h2>#${pokemon.Number} ・ ${pokemon.Name}</h2>
// <p>Type: ${pokemon.Type}</p>
// <p>Weight: ${pokemon.Weight}</p>
// </div> -->