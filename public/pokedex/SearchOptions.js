import Component from '../Component.js';

class SearchOptions extends Component {

    onRender(form) {
        const searchInput = form.querySelector('input[name=name]');
        const typeDropdown = form.querySelectorAll('select[name=type]');

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchInput.value = searchParams.get('s') || '';

            const type = searchParams.get('type');
            if (type) {
                typeDropdown.forEach(typeDropdown => {
                    typeDropdown.selected = typeDropdown.value === type;
                });
            }
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);

            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchParams.set('type', formData.get('type'));
            searchParams.set('s', formData.get('search'));
            //reset to page 1 as this is new search and
            //we don't know how many pages
            searchParams.set('page', 1);

            window.location.hash = searchParams.toString();
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
            <section>
                <input type="text" class="name" name="name" placeholder="Name"><br><br>
                <select class="type" name="type" value="type">
                <option selected="true" disabled="disabled">Type</option>
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
        </div>
        `;
    }
}

export default SearchOptions;