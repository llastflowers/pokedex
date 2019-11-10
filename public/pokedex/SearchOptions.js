import Component from '../Component.js';

class SearchOptions extends Component {

    onRender(form) {
        const searchInput = form.querySelector('input[name=search]');
        const typeDropdown = form.querySelectorAll('select[name=sort]');

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchInput.value = searchParams.get('pokemon') || searchParams.get('weight') || searchParams.get('hp') || searchParams.get('type_1') || '';

            const sort = searchParams.get('sort');
            if (sort) {
                typeDropdown.forEach(typeDropdown => {
                    typeDropdown.selected = typeDropdown.value === sort;
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

            const queryString = '';
            const searchParams = new URLSearchParams(queryString);

            searchParams.set(formData.get('sort'), formData.get('search'));
            searchParams.set('page', 1);

            window.location.hash = searchParams.toString();


        });

    }

    renderHTML() {
        return /*html*/`
            <form class="options">
                <input id="search" type="text" class="name" name="search" placeholder="Search"><br><br>
                <fieldset class="sort-options">
                    <label>
                        <input type="radio" name="sort" value="pokemon" checked>
                        Name
                    </label>
                    <label>
                        <input type="radio" name="sort" value="type" checked>
                        Type
                    </label>
                    <label>
                        <input type="radio" name="sort" value="weight">
                        Weight
                    </label>
                    <label>
                        <input type="radio" name="sort" value="hp">
                        HP
                    </label>
                </fieldset>

                <section class="search-controls">
                    <button type="submit" class="search-button" id="search-button">Search</button><button class="blank-button"></button>
                </section>
            </form>

        `;
    }
}

export default SearchOptions;