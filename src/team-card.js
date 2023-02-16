import { LitElement, html, css } from 'lit';




export class TeamCard extends LitElement {
  static properties = {
    version: {}
   
  };

  static get styles(){
    return css`
  .player{
  width: 350px;
  border: 5px solid red;
  outline: 5px solid blue;
  
}

.card{
  margin: 8px;
  border: 6px solid blue;
  outline: 6px solid red;
  padding: 16px 8px 16px 8px;
  width: 400px;
  text-align: center;
  background-color: #F5F5DD;
  
  }
.card button:hover{
  background-color: red;
}

p{
  font-size: 21px;
  color: red;
  -webkit-text-stroke: .7px blue;
 }
h1{
  font-size: 35px;
  color: red;
  -webkit-text-stroke: 1.2px blue;
}
.details{
  margin: 16px;
  border: 2px solid blue;
  padding: 8px;
  width: 200px;
  box-shadow: 10px 5px 5px red;
  
}

.buttons button{
  margin: 8px;
  border: 2px dashed blue;
  padding: 8px;
  width: 150px;
  box-shadow: 10px 5px 5px red;
}

  

.duplicate:hover{
  background-color: red;
}

.change:hover{
  background-color: red;
}


.bg-color:hover{
  background-color: red;
}

.delete:hover{
  background-color: red;
}


.logo{
  width: 250px;
  height: 125px;
  border: 5px solid red;
  outline: 5px solid blue;
}

/* If the screen size is between 500px and 800px, hide all elemtns besides .btn */
@media screen and (min-width: 500px) and (max-width: 800px) {
  .details{
    display: none;
  }
 
}

@media screen and (max-width: 500px){
  .card{
    max-width: 250px;
    padding: 8px 16px 8px 16px;
    
  }
  .player{
    width: 200px
    
  }
  h1{
    font-size: 22px;
  }
  p{
    font-size: 18px;
  }
  .details{
    width: 100px;
    padding: 8px 4px 4px 8px;;
  }
  
  
}
    `;
  }
  
  constructor() {
    super();
    this.name = "Bryce Harper";
    this.imageDescription = "NLCS Game 5: Phillies vs Padres"
    this.stats = "Game Stats";
  }

  render() {
    return html`


<div class="card">
  <img class ="logo" src="https://content.sportslogos.net/logos/54/70/full/hplu542ts3fp99gkmueu7uirg.gif"/>
  <h1>${this.name}</h1>
  <img class="player" src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/10/1440/810/bryce-hr.jpg?ve=1&tl=1"/>
  <p>${this.imageDescription}</p>
      <details class="details">
          <summary>${this.stats}</summary>
          <div>
            <slot></slot>
          </div>
      </details>
</div>


    `;
  }
}

customElements.define('team-card', TeamCard);