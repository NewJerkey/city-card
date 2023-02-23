import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/meme-maker/meme-maker.js";

//const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CityCard extends LitElement {
  static properties = {
    title: { type: String },
    image: { type: String },
    topLabel: { type: String },
    detail: { type: String },
  };

  static styles = css`
    body {
      background: grey;
    }
    .wrapper {
      display: inline-block
    }
    .card {
      width: 300px;
      text-align: center;
      border: 3px solid yellow;
      margin-top: 40px;
      margin-bottom: 40px;
      margin-right: 40px;
      margin-left: 80px;
      padding-bottom: 16px;
      padding-right: 8px;
      padding-left: 8px;
      box-shadow: 3px 3px;
      border-radius: 25px;
      background: blue;
    }

    .stats {
      font-size: 18px;
      color: white;
      margin-top: 24px;
      margin-bottom: 24px;
      margin-right: 24px;
      margin-left: 24px;
      display: block;
      text-align: left;
    }

    .header {
      font: 38px Papyrus;
      color: white;
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
      font: 20px Papyrus;
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
            <summary>${this.detail}</summary>
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
