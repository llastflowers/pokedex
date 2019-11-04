import Component from './Component.js';
import Header from './common/Header.js';
import SearchOptions from './pokedex/SearchOptions.js';
import Paging from './pokedex/Paging.js';
import PokemonList from './pokedex/PokemonList.js';
import { getPokemanz } from './services/pokedex-api.js';

class PokedexApp extends Component {

    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options-section');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());

        const listSection = dom.querySelector('.pokemon-results');
        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokemonList = new PokemonList({ pokemanz: [] });
        listSection.appendChild(pokemonList.renderDOM());

        const pokemanz = await getPokemanz();
        const results = pokemanz.results;

        pokemonList.update({ pokemanz: results });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header -->
                <header>
                </header>
                
                <main>
                    <section class="options-section">
                    </section>
                    <section class="paging-section">
                    </section>
                    <section class="pokemon-results">

                    </section>
                </main>
            </div>
        `;
    }
}

export default PokedexApp;