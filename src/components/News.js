import React, {Component} from 'react';
import NewsItem from './NewsItem';

class News extends Component {
  render() {
    // const title = "React JS";
    // const desc = "Reacj Desc";

    return (
      <div>
        {/*<NewsItem title={title} desc={desc}/>*/}
        {
          this.props.news.map(news => <NewsItem key={news.id} title={news.title} desc={news.desc}/>)
        }
      </div>
    );
  }
}

export default News;