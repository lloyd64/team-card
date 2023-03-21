import { LitElement, html, css } from 'lit';
import "./team-card.js";
export class TeamList extends LitElement {
    static get tag(){
        return 'team-list';
    }
    static get properties(){
        return {
            teams: {type: String},
            name: {type: String},
        }
    }

    constructor() {
        super();
        this.teams = [];
        this.name = "Phillies"
        this.updateTeams();
    }

    updateTeams() {
        const address = new URL('../assets/teams.json', import.meta.url).href;
        const data = fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.teams = data;
        });
        console.log(data);
    }
    

    static get styles() {
        return css`
        :host{
            display: block;
        }
        .wrapper{
            
            border: 2px solid black;
            display: flex;
        }
        .item{
            display: inline-flex
        }
        `;
    }
    
    render() {
        return html`
        <h2>${this.name}</h2>
        <div class="wrapper">
            ${this.teams.map(team => html`
                <div class="item">
                    <team-card name="${team.name}" imageDescription="${team.imageDescription}" stats="${team.stats}" top="${team.top}"></team-card>
                </div>
            `)}
        </div> 
        `;
    }
}

customElements.define(TeamList.tag, TeamList);