import React, {useState,useEffect} from 'react'
import { Container, Draggable } from "react-smooth-dnd";
import '../Boards/Boards.scss'
import Card from '../Card/Card'
import './Columns.scss'

export default function Columns(props) {
  const  {column, onCardDrop}  = props
  const cards = column.cards
  
  return (
    <div className='Board'>
        <div className='Column'>
          <header className='column-drag-handle'>{column.title}</header>
          <div>
            {/* dnd for card */}
            <Container
              orientation='vertical'
                groupName="col"
                onDrop={dropResult => onCardDrop(column.id, dropResult)}
                getChildPayload={index => cards[index]}
                dragClass="card-ghost"
                dropClass="card-ghost-drop"
                dropPlaceholder={{                      
                  animationDuration: 150,
                  showOnTop: true,
                  className: 'drop-preview' 
                }}
                dropPlaceholderAnimationDuration={200}
              >
                {cards.map((card,index) => (
                  <Draggable key={index}>
                    <Card card={card}/>
                  </Draggable>
                ))}
              </Container>
          </div>
          <footer>
            <i className='fa fa-plus plus-icon'> Add another card </i>
            </footer>
        </div>
    </div>
  )
}

