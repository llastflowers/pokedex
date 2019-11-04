import Component from '../Component.js';

class Paging extends Component {
    renderHTML() {
        return /*html*/`
            <section class="paging-section">
                <button class="prev" disabled>Previous</button>
                <span>Page 1 of 5</span>
                <button class="next">Next</button>
            </section>
        `;
    }
}

export default Paging;