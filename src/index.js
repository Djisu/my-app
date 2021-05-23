import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

import {books} from './books'
import Book from './Book'

//Parent component
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        //return <Book key={book.id}  book={book}></Book>
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}


//Render the Book component through the root element
ReactDom.render(<BookList />, document.getElementById('root'))
