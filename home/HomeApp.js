import Component from '../Component.js';
import Header from '../common/Header.js';

class HomeApp extends Component {
    
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header -->
                <main>
                    <h2>Turn on Pokédex to Begin!</h2>
                    <div class="enter">
                        <a href="pokedex.html"><img class="pokedex" title="Turn on Pokédex!"src="https://img.rankedboost.com/wp-content/uploads/2016/07/Pokemon-Go-Pok%C3%A9dex.png"></a>
                    </div>
                </main>
            </div>
        `;
    }
}

export default HomeApp;