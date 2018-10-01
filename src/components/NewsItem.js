import React, {Component} from 'react';
import '../NewsItem.css';

class NewsItem extends Component {
  render() {
    // let nameElement = <div>name</div>;
    console.log(this.props);
    const {title, desc} = this.props;
    return (
      <div>
        {/*{nameElement}*/}
        {/*<h1 className="title">{this.props.title}</h1>*/}
        <h1 className="title">{title}</h1>
        {/*<p>{this.props.desc }</p>*/}
        <p>{desc }</p>
      </div>
    );
  }
}

export default NewsItem;