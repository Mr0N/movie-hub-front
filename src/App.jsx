import React ,{Component} from 'react';
import './App.css'
import Head from './header-site/head';
import Menu from "./menu-site/menu"; 

export default class App extends Component
{
   // 🔹 2. getDerivedStateFromProps
  // Викликається перед кожним render (і при монтуванні, і при оновленні)
  // Повертає об'єкт для оновлення state або null
    static getDerivedStateFromProps(props, state) {
      console.log("🔹 getDerivedStateFromProps");
      return null; // Ми нічого не змінюємо тут
    }
     componentDidMount() {
    console.log("✅ componentDidMount");
    // Стартуємо таймер, що кожну секунду збільшує count
    }
      // 📸 5. getSnapshotBeforeUpdate
  // Викликається перед оновленням DOM, але після render
  // Дає можливість зберегти щось з DOM (наприклад, scroll позицію)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("📸 getSnapshotBeforeUpdate");
    // Повертаємо рядок, який отримає componentDidUpdate як snapshot
    return `Рахунок був ${prevState.count}`;
  }

  // ✅ 6. componentDidUpdate
  // Викликається після оновлення DOM
  // Тут можна реагувати на зміни props або state
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("✅ componentDidUpdate");
    console.log("📝 snapshot:", snapshot); // Показує, що повернув getSnapshotBeforeUpdate
  }

  // 🧹 7. componentWillUnmount
  // Викликається перед тим, як компонент буде видалено з DOM
  // Тут потрібно очищати таймери, підписки, запити тощо
  componentWillUnmount() {
    console.log("🧹 componentWillUnmount");
    clearInterval(this.timer); // Очищаємо таймер
  }

  render(){
     return <div>
      <Head/>
      <Menu/>
    </div>

  }
}