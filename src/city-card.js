import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/meme-maker/meme-maker.js";

//const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CityCard extends LitElement {
  static properties = {
    title: { type: String },
    image: { type: String },
    topLabel: { type: String },
    detail: { type: String },
    cardColor: { type: String, reflect: true, attribute: "card-color" },
  };

  static styles = css`
    :host([card-color="colorblind"]) .card {
      border: 3px solid white;
      background-color: black;
    }

    :host([card-color="colorblind"]) .image {
      border: 3px solid white;
    }

    .wrapper {
      display: inline-block;
    }
    .card {
      width: var(--city-card-width, 300px);
      text-align: center;
      border: var(--city-card-border, 3px solid yellow);
      margin: 40px 40px 40px 80px;
      padding: 0px 8px 16px 8px;
      box-shadow: var(--city-card-box-shadow, 3px 3px);
      border-radius: var(--city-card-border-radius, 25px);
      background: var(--city-card-background-color, blue);
    }

    .stats {
      font-size: 18px;
      color: var(--city-card-stats-color, white);
      margin-top: 24px;
      margin-bottom: 24px;
      margin-right: 24px;
      margin-left: 24px;
      display: block;
      text-align: left;
    }

    .header {
      font: var(--city-card-title-font, 38px Papyrus);
      color: var(--city-card-title-color, white);
      margin-bottom: 16px;
    }

    .buttons button {
      border-radius: 25px;
    }

    button:hover,
    button:focus {
      background-color: yellow;
    }

    .image {
      border: 3px solid yellow;
      max-width: 400px;
      text-align: center;
    }

    summary {
      font: var(--city-card-subheading-font, 20px Papyrus);
      color: white;
      margin-top: 16px;
    }

    @media (max-width: 800px) and (min-width: 500px) {
      .button {
        display: none;
      }
    }

    @media (max-width: 500px) {
      .card {
        transform: scale(0.8);
      }
    }
  `;

  constructor() {
    super();
    this.title = "Philadelphia";
    this.image =
      "https://whyy.org/wp-content/uploads/2020/01/2018-03-15-e-lee-philadelphia-germantown-developer-emanuel-freeman-garbage.jpg";
    this.topLabel = "Worst City";
    this.detail = "City Statistics";
    this.cardColor = "normal";
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="card">
          <h2 class="header">${this.title}</h2>
          <meme-maker
            class="image"
            alt=${this.topLabel}
            image-url=${this.image}
            top-text=${this.topLabel}
          ></meme-maker>
          <details class="details">
            <summary part="details">${this.detail}</summary>
            <div class="stats">
              <slot name="stats"></slot>
            </div>
          </details>
        </div>
      </div>
    `;
  }
}

customElements.define("city-card", CityCard);
