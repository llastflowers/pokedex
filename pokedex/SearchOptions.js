import Component from '../Component.js';

class SearchOptions extends Component {

    renderHTML() {
        return /*html*/`
            <div>
                <form class="search">
                    <p>Search</p>
                    <input name="search">
                    <button>Go!</button>
                </form>

                <fieldset class="type">
                    <label>
                        <input type="radio" name="type" value="grass" checked>
                        Grass
                    </label>
                    <label>
                        <input type="radio" name="type" value="water">
                        Water
                    </label>
                    <label>
                        <input type="radio" name="type" value="fire">
                        Fire
                    </label>
                </fieldset>
            </div>
        `;
    }
}

export default SearchOptions;