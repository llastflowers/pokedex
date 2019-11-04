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

        const optionsSection = dom.querySelector('.search-sort');
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
                <header>
                </header>
                <div class="wrapper">
                        <section class="search-sort">
                        </section>
                        <section class="blue">
                        </section>
                        <section class="search-controls">
                        </section>
                    <div class="results-background">
                        <section class="pokemon-results">
                        </section>
                    </div>
                        <section class="page-controls">
                        </section>
                </div>
            </div>        
        `;
    }
}

export default PokedexApp;