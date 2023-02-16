import { html } from 'lit';
import '../src/city-card.js';

export default {
  title: 'CityCard',
  component: 'city-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <city-card
      style="--city-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </city-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
