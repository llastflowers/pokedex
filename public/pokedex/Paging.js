import Component from '../Component.js';

class Paging extends Component {

    onRender(dom) {
        const prevButton = dom.querySelector('.prev-button');
        const nextButton = dom.querySelector('.next-button');

        if (!prevButton) {
            return;
        }

        let page = 1;

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            const parsedPage = parseInt(searchParams.get('page'));
            if (isNaN(parsedPage)) {
                page = 1;
            }
            else {
                page = parsedPage;
            }
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        function updatePage(increment) {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchParams.set('page', page + increment);

            window.location.hash = searchParams.toString();
        }

        prevButton.addEventListener('click', () => {
            updatePage(-1);
        });

        nextButton.addEventListener('click', () => {
            updatePage(1);
        });
    }

    renderHTML() {
        const perPage = 10;
        const totalResults = this.props.totalResults;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        let page = 1;
        const parsedPage = parseInt(searchParams.get('page'));
        if (isNaN(parsedPage)) {
            page = 1;
        }
        else {
            page = parsedPage;
        }

        if (!totalResults) {
            return /*html*/`
                <h3 class="paging">0 Results</h3>
            `;
        }

        const lastPage = Math.ceil(totalResults / perPage);

        return /*html*/`

            <section class="">
            <div class="results-data">
                <h3 class="paging"></h3>
                <h3>Page ${page} of ${lastPage}</h3>
            </div>
                <button class="prev-button" id="prev-button" ${page === 1 ? 'disabled' : ''}>Previous</button><button class="next-button" id="next-button" ${page === lastPage ? 'disabled' : ''}>Next</button>
            </section>
        `;
    }
}

export default Paging;