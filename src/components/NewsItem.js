import React, {Component} from 'react';
import '../NewsItem.css';
import PropTypes from 'prop-types';

class NewsItem extends Component {

  constructor() {
    super();
  }

  static propTypes = {
    newsData: PropTypes.shape({//gelen prop eğer nesne şeklindeyse, içindeki fieldların tipleri falan bu şekilde verebiliriz.
      title: PropTypes.string, desc: PropTypes.string
    })
  };

  render() {
    // let nameElement = <div>name</div>;
    // const {title, desc} = this.props;
    const {title, desc} = this.props.newsData;
    return (
      <div>
        {/*{nameElement}*/}
        {/*<h1 className="title">{this.props.title}</h1>*/}
        <h1 className="title">{title}</h1>
        {/*<p>{this.props.desc }</p>*/}
        <p>{desc}</p>
      </div>
    );
  }
}

export default NewsItem;