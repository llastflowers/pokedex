import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <section>
                    <h1>Pokédex</h1>
                    <div class="pokeballs">
                        <img class="pokeball" src="./assets/pokeball-white.png"><img class="pokeball" src="./assets/pokeball-white.png"><img class="pokeball" src="./assets/pokeball-white.png"><img class="pokeball" src="./assets/pokeball-white.png"><img class="pokeball" src="./assets/pokeball-white.png"><img class="pokeball" src="./assets/pokeball-white.png">
                    </div>
                </section>
            </header>
        `;
    }
}

export default Header;