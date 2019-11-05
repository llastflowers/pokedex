import Component from '../Component.js';

class Paging extends Component {
    renderHTML() {
        return /*html*/`

            <section class="">
                <button class="prev-button" id="prev-button">Previous</button><button class="next-button" id="next-button">Next</button>
            </section>
        `;
    }
}

export default Paging;