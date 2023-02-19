import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/meme-maker/meme-maker.js";

//const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CityCard extends LitElement {
  static properties = {
    title: { type: String },
    image: { type: String },
    topLabel: { type: String },
  };

  static styles = css`
    body {
      background: grey;
    }
    .wrapper {
      display: inline-flex;
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

    .paragraph {
      font-size: 18px;
      color: white;
      margin-top: 24px;
      margin-bottom: 24px;
      margin-right: 24px;
      margin-left: 24px;
    }

    .header {
      font: 38px Papyrus;
      color: white;
      margin-bottom: 16px;
    }

    .buttons button {
      border-radius: 25px;
    }

    .details {
      border-radius: 25px;
      color: yellow;
      background-color: #4caf50;
    }

    button:hover,
    button:focus {
      background-color: yellow;
    }

    .image {
      border: 3px solid yellow;
      max-width: 300px;
      text-align: center;
    }

    @media (max-width: 800px) and (min-width: 500px) {
      .button {
        display: none;
      }
    }

    @media (max-width: 500px) {
      * {
        transform: scale(0.8);
      }
    }
  `;

  constructor() {
    super();
    this.title = "Bryce Schneider";
    this.image =
      "https://cdn.discordapp.com/attachments/1062806966021402684/1063160172773654659/IMG_9420.png";
    this.topLabel = "Handsome Bryce";
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
          <p class="paragraph">
            This image depicts a strapping young Penn State student reacting to
            an insane moment in his favorite class: IST 256. He can not believe
            what he is seeing!
          </p>
          <button class="details" @click=${this.details}>Details</button>
        </div>
      </div>
    `;
  }
}

customElements.define("city-card", CityCard);
