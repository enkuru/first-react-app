import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewsForm extends Component {
  /*static defaultProps = {};

  static propTypes = {};*/

  constructor(props) {
    super(props);
    this.add = this.add.bind(this);//bu şekilde bind işlemini constructor içinde yapabiliriz.
  }

  add() {
    console.log("add clicked");
    this.props.addNews();
  }

  /*add = () => {/!*arrow function ile bu şekilde de bind edilebilir*!/
    console.log("add clicked");
    this.props.addNews();
  };*/

  render() {
    return (
      <div>
        {/*<button onClick={this.add}>Add</button>*/}
        {/*<button onClick={this.add.bind(this)}>Add</button>/!*.bind(this) contexti olmayan metoda context olarak Componentin kendisi atanıyor böylece this ile içeride componente ait şeylere ulaşabiliyoruz*!/*/}
        {/*<button onClick={this.add}>Add</button>*/}
        <button onClick={() => this.add()}>Add</button>
      </div>
    );
  }
}

export default NewsForm;