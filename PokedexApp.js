import Component from '../Component.js';
import Header from '../commonHeader.js';
import PokemonList from './PokemonList.js';

class HomeApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const listSection = dom.querySelector('.list-section');

        const pokemonList = new PokemonList();
        listSection.appendChild(pokemonList.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header -->

                <main>
                    <section class="list-section">
                        <!-- pokemon list -->

                    </section>
                </main>
            </div>
        `;
    }
}

export default HomeApp;