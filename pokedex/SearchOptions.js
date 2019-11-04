import Component from '../Component.js';

class SearchOptions extends Component {

    renderHTML() {
        return /*html*/`
            <section class="search-sort">
                <input type="text" class="name" name="name" placeholder="Name"><br><br>
            <select class="type">
                <option selected="true" disabled="disabled" value="type">Type</option>
                <option value="all">All</option>
                <option value="grass">Grass</option>
                <option value="water">Water</option>
                <option value="fire">Fire</option>
            </select>
            <input type="number" class= "weight" name="weight" step="10" placeholder="Min. Weight"><br><br>
            <select class="sort-by">
                <option selected="true" disabled="disabled" value="sort">Sort By...</option>
                <option value="low-to-high">Number ↑</option>
                <option value="high-to-low">Number ↓</option>
                <option value="water">A-Z</option>
                <option value="fire">Z-A</option>
            </select>
            </section>
        `;
    }
}

export default SearchOptions;