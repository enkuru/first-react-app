import React, {Component} from 'react';
import NewsItem from './NewsItem';
import NewsForm from './NewsForm';
import PropTypes from 'prop-types';

class News extends Component {
  /*static propTypes = {
    news: PropTypes.array
  };*/

  static defaultProps = {header:"Default Header"};

  render() {
    // const title = "React JS";
    // const desc = "Reacj Desc";
    //const elements = this.props.news.map(news => <NewsItem key={news.id} title={news.title} newsData={news.desc}/>);
    const elements = this.props.news.map(news => <NewsItem key={news.id} newsData={news}/>);
    return (
      <div>
        <p>{this.props.header}</p>
        {/*<NewsItem title={title} desc={desc}/>*/}
        <NewsForm addNews={this.props.addNews}/>
        {elements}
      </div>
    );
  }
}

News.propTypes = {//yukarıdaki ile aynı
  // news: PropTypes.array
  news: PropTypes.array.isRequired,//eğer bu prop girilmezse hata vermesi için
  header: PropTypes.oneOfType([PropTypes.number, PropTypes.string])//birden fazla tipte gelebiliyosa prop, bu şekilde yapılır
  // header: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired //eğer required kullanacaksak bu şekilde
};

export default News;