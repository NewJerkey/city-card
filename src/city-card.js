import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

//const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CityCard extends LitElement {
  static properties = {
    title: { type: String },
    cardCount: { type: Int16Array },
    image: { type: String }
  }

  static styles = css`
    body {
      background: grey;
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
      max-width: 250px;
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
    this.cardCount = 1;
    this.title = 'Bryce Schneider';
    this.image =
      'https://cdn.discordapp.com/attachments/1062806966021402684/1063160172773654659/IMG_9420.png';
  }

  render() {
    return html`
      <div class="buttons">
        <button class="copy" @click=${this.copy}>Duplicate</button>
        <button class="changeBackground" @click=${this.changeBG}>
          Change Background
        </button>
        <button class="changeTitle" @click=${this.changeTitle}>
          Change Title
        </button>
        <button id="delete" @click=${this.delete}>Delete Last Instance</button>
      </div>
      <div class="card">
        <h2 class="header">${this.title}</h2>
        <img class="image" alt="Handsome Bryce" src=${this.image} />
        <p class="paragraph">
          This image depicts a strapping young Penn State student reacting to an
          insane moment in his favorite class: IST 256. He can not believe what
          he is seeing!
        </p>
        <button class="details" @click=${this.details}>Details</button>
      </div>
      <meme-maker alt="Cat stalking a small toy" image-url="https://cdn2.thecatapi.com/images/9j5.jpg" top-text="I bring you" bottom-text="the death">
</meme-maker>
    `;
  }

  copy(event) {
    const clone = this.shadowRoot.querySelector('.card').cloneNode(true);
    this.shadowRoot.appendChild(clone);
    this.cardCount++;
  }

  delete(event) {
    if (this.cardCount > 1) {
      this.shadowRoot.querySelector('.card:last-child').remove();
      this.cardCount--;
    }
  }

  changeTitle(event) {
    if (
      this.shadowRoot.querySelector('.header').innerHTML === 'Bryce Schneider'
    ) {
      this.shadowRoot.querySelector('.header').innerHTML = 'Something Else';
    } else {
      this.shadowRoot.querySelector('.header').innerHTML = 'Bryce Schneider';
    }
  }

  changeBG(event) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.shadowRoot.querySelector('.card').style.backgroundColor = color;
  }

  details(event) {
    if (this.shadowRoot.querySelector('.paragraph').style.display === 'none') {
      this.shadowRoot.querySelector('.paragraph').style.display = 'block';
    } else {
      this.shadowRoot.querySelector('.paragraph').style.display = 'none';
    }
  }

}

customElements.define('city-card', CityCard);