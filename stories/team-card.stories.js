import { html } from 'lit';
import '../src/team-card.js';

export default {
  title: 'TeamCard',
  component: 'team-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <team-card
      style="--team-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </team-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
