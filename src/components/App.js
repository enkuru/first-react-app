import React, {Component} from 'react';
import logo from '../logo.svg';

import '../App.css';
//import kare, {topla as add, cikar as diff} from './Udemy-Example';
// import * as Udemy from './Udemy-Example';

import News from './News';
import Counter from './Counter';
import Footer from './Footer';

/*
    let list = [1, 2, 3, 4];

    console.log(...list);//spread operator, yaymak anlamına geliyor

    list = list.map(item => () => {//mapleme
      item += 1;
      console.log(item);
    });

    const filteredList = list.filter(item => item > 1);//filtreleme

    console.log(filteredList);

    const data = {name: 'name 1'}, data2 = {surname: 'surname 1'};

    const assignedData = Object.assign(data, data2);//object assign etme, data e data 2 i birleştirip(aynı field varsa üzerine yazar) yeni nesne verir

    console.log(assignedData);

    const dataCopy = Object.assign({}, data);//bağımsız olarak nesne kopyalama
* */

const news = [{id: 1, title: "title 1", desc: "desc 1"},
  {id: 2, title: "title 2", desc: "desc 2"},
  {id: 3, title: "title 3", desc: "desc 3"}];

class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    foo: "Foo"
  };

  addNews() {
    console.log("add news");
    news.push({id: +news.length + 1, title: "title " + news.length + 1, desc: "desc " + news.length + 1});
    console.log(news);
  }

  change() {
    const randomVal = Math.floor(Math.random() * 10);
    this.setState({foo: 'Foo random: ' + randomVal})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React -> {this.state.foo}</h1>
        </header>
        <div>
          <Counter/>
          <button style={{marginTop:'10px'}} onClick={this.change.bind(this)}>Change</button>
        </div>
        {/*<News news={news} header={"header time"}/>*/}
        <News news={news} addNews={this.addNews}/>
        <Footer/>

        {/*<p className="App-intro">*/}
        {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*topla 2,4 = {Udemy.topla(2,4)}*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*cikar 2,4 = {Udemy.cikar(2,4)}*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*kare 4 = {Udemy.default(4)}*/}
        {/*</p>*/}
      </div>
    );
  }
}

export default App;
