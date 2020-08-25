import React, { Component } from 'react';
import classes from './App.module.scss';
import Card from './components/Card/Card'

class App extends Component {
  state = {
    options:
    [
      {taste : 'с фуа-гра', 
      amount: 10, 
      gift: 1, 
      weight: '0,5', 
      active: false, 
      disabled: false,
      heading:"Сказочное заморское явство", 
      selectedText: 'Печень утки разварная с артишоками.',
      disabledText: 'Печалька, с фуа-гра закончился',
      mouseLeaved: false},

      {taste : 'с рыбой', 
      amount: 40, 
      gift: 2, 
      weight: '2', 
      active: false, 
      disabled: false,
      heading:"Сказочное заморское явство", 
      selectedText: 'Головы щучьи с чесноком да свежайшая сёмгушка.', 
      disabledText: 'Печалька, с рыбой закончился',
      mouseLeaved: false},

      {taste : 'с курой', 
      amount: 100, 
      gift: 5, 
      weight: '5', 
      additional: 'заказчик доволен', 
      active: false, 
      disabled: true,
      heading:"Сказочное заморское явство", 
      selectedText: 'Филе из цыплят с трюфеляит в бульоне.', 
      disabledText: 'Печалька, с курой закончился',
      mouseLeaved: false}

    ]
  };

  onClickHandler = index => {
    const card = this.state.options[index];
    card.active = !this.state.options[index].active;
    if(!this.state.options[index].active) {
      card.heading = "Сказочное заморское явство"
    }
    card.mouseLeaved = false;
    const options = [...this.state.options];
    options[index] = card;
    this.setState({options})
  }

  onMouseLeaveHandler = index => {
    const card = this.state.options[index];
    if(this.state.options[index].active === true) {
      card.heading = 'Котэ не одобряет?';
      card.mouseLeaved = true;
    }
    const options = [...this.state.options];
    options[index] = card;
    this.setState({options})
  }

  

  render () {
    console.log(this.state);
    let cards = [...this.state.options].map((item, index) => {
      return (
        <Card 
          key = {index}
          taste = {item.taste}
          amount = {item.amount}
          gift = {item.gift}
          weight = {item.weight}
          additional = {item.additional}
          active = {item.active}
          disabled = {item.disabled}
          heading = {item.heading}
          selectedText = {item.selectedText}
          disabledText = {item.disabledText}
          mouseLeaved = {item.mouseLeaved}
          onClick = {() => this.onClickHandler(index)}
          onMouseLeave = {() => this.onMouseLeaveHandler(index)}
        />
      )
    })
        return (
        <div className={classes.App}>
          <h1 className={classes.heading}>Ты сегодня покормил кота?</h1>
          <div className={classes.cards}>
            {cards}
          </div>
          
        </div>
      );
    }
  }
  

export default App;
