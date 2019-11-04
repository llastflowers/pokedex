import Component from '../Component.js';

class Paging extends Component {
    renderHTML() {
        return /*html*/`

        <section class="page-controls">
            <div class="results">
                <h3>151 Results</h3>
                <h3>Page 1 of 19</h3>
            </div>
            <button class="prev-button" id="prev-button">Previous</button><button class="next-button" id="next-button">Next</button>
        </section>
        `;
    }
}

export default Paging;