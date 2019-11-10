import Component from './Component.js';
import Header from './common/Header.js';
import SearchOptions from './pokedex/SearchOptions.js';
// import ResultsDataSection from './pokedex/Results.js';
import BlueButtons from './pokedex/BlueButtons.js';
import SearchButtons from './pokedex/SearchButtons.js';
import Paging from './pokedex/Paging.js';
import PokemonList from './pokedex/PokemonList.js';
import { getPokemanz } from './services/pokedex-api.js';

class PokedexApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.search-sort');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());

        const blueSection = dom.querySelector('.blue');
        const blueButtons = new BlueButtons();
        blueSection.prepend(blueButtons.renderDOM());

        const searchControls = dom.querySelector('.search-controls');
        const searchButtons = new SearchButtons();
        searchControls.prepend(searchButtons.renderDOM());
        
        // const resultsData = dom.querySelector('.results-data');
        // const resultsDataSection = new ResultsDataSection();
        // resultsData.prepend(resultsDataSection.renderDOM());

        const listSection = dom.querySelector('.pokemon-results');

        const pokemonList = new PokemonList({ pokemanz: [] });
        listSection.appendChild(pokemonList.renderDOM());

        const pageControls = dom.querySelector('.page-controls');

        const paging = new Paging();
        pageControls.appendChild(paging.renderDOM());

        async function loadPokemanz() {
            const response = await getPokemanz();
            const pokemanz = response.Search;
            const totalResults = response.totalResults;
            pokemonList.update({ pokemanz: pokemanz });
            paging.update({ totalResults: totalResults });
        }

        loadPokemanz();

        window.addEventListener('hashchange', () => {
            loadPokemanz();
        });
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
                    <div class="results-data">
                    </div>
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