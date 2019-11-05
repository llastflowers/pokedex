import Component from '../Component.js';

class BlueButtons extends Component {

    renderHTML() {
        return /*html*/`
            <div>
                <section class="blue"><button></button><button></button><button></button><button></button><button></button><br><button></button><button></button><button></button><button></button><button></button>
                </section>
            </div>
        `;
    }
}

export default BlueButtons;