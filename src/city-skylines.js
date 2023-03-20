import { LitElement, html, css } from "lit";
import "./city-card.js";
import "@lrnwebcomponents/meme-maker/meme-maker.js";

export class Cities extends LitElement{

    static get tag() {
        return 'city-skylines';
    }

    static get properties() {
        return {
            cities: { type: Array },
            state: { type: String }
        }
    }

    constructor() {
        super();
        this.cities = [];
        this.state = "Pennsylvania";
        this.updateRoster();
    }

    updateRoster() {
        const address = new URL('../assets/cities-map.json', import.meta.url).href;
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.cities = data;
        });
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            width: 400px;
            display: flex;
        }
        .item {
            display: inline-flex
        }
        `;
    }

    render() {
        return html`
        <h2>${this.state}</h2>
        <div class="wrapper">
            ${this.cities.map(city => html`
            <div class="item">
                <city-card title="${city.title}" image="${city.image}" topLabel="${city.topLabel}" detail="${city.detail}" opened="${city.opened}"></city-card>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(Cities.tag, Cities);