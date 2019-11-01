import Component from '../Component.js';
import Header from '../common/Header.js';
import SearchOptions from '../pokedex/SearchOptions.js';
import Paging from '../pokedex/Paging.js';
import PokemonList from './pokedex/PokemonList.js';

class HomeApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options-section');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());

        const listSection = dom.querySelector('.list-section');
        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokemonList = new PokemonList();
        listSection.appendChild(pokemonList.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header -->

                <main>
                    <section class="options-section">
                        <!-- options -->
                    </section>
                
                    <section class="list-section">
                        <!-- paging -->

                        <!-- pokemon list -->

                    </section>
                </main>
            </div>
        `;
    }
}

export default HomeApp;