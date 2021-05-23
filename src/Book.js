import React from 'react'

//Child component receiving props
const Book = (props) => {
  //Destructure values from props
  const { img, title, author } = props

  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('Hello World')
  }

  const complexExample = (author) => {
    console.log(author)
  }

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>

      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>

      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  )
}

export default Book
