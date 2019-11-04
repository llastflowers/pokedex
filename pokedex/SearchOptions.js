import Component from '../Component.js';

class SearchOptions extends Component {

    renderHTML() {
        return /*html*/`
            <div>
                <section class="options-section">
                <form class="search-form">
                <input class="pokemon-name-search" placeholder="Pokemon Name">
                <input class="pokemon-weight-search" placeholder="Pokemon Weight">
    
                <h2>Type: <select class="pokemon-type-dropdown"></h2>
                <option>All</option>
                <option>Water</option>
                <option>Fire</option>
                <option>Grass</option>
                </select>
                <button>Go!</button>
                </form>
                </section>
            </div>
        `;
    }
}

export default SearchOptions;