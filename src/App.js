import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id' : 1,
    'img' : 'http://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '961222',
    'gender' : '남자',
    'job' : '대학생'
  },
  {  
    'id' : 2,
    'img' : 'http://placeimg.com/64/64/2',
    'name' : '홍경원',
    'birthday' : '950922',
    'gender' : '남자',
    'job' : '프론트엔드' 
  },
  {
    'id' : 3,
    'img' : 'http://placeimg.com/64/64/3',
    'name' : '김세환',
    'birthday' : '960712',
    'gender' : '남자',
    'job' : '백엔드'
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key = {c.id}
                id = {c.id}
                img = {c.img}
                name = {c.name}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}
              />
            );
          })
        }
      </div>
    )
  }
}

export default App;
