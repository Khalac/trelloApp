import React, {useState,useEffect,useRef,useCallback} from 'react'
import { data } from '../../actions/data'
import { isEmpty } from 'lodash'
import Columns from '../Columns/Columns'
import { Container, Draggable } from "react-smooth-dnd";
import {applyDrag} from "../funct/dnd.js"
import './Boards.scss'

function Boards(){
    const [board,setBoard] = useState({})
    const [columns,setColumns] = useState([])
    const [createColumn, setCreateColumn] = useState(false)
    const newColumnInputRef = useRef(null)
    const [newColumnTitle, setNewColumnTitle] = useState('') 
    const newColumnTitleChange = useCallback((e) => setNewColumnTitle(e.target.value), [])
    //get data from database
    useEffect(() => {
        const boardFromData = data.boards.find(board => board.id === 'b1')
        if(boardFromData){
            setBoard(boardFromData)
            setColumns(boardFromData.columns)
        }
    },[])

    useEffect(() => {
        if(newColumnInputRef && newColumnInputRef.current){
            newColumnInputRef.current.focus()
        }
    },[createColumn])

    if(isEmpty(board)){
        return <div>not found</div>
    }
    // handle when move column
    const onColumnDrop = (dropResult) => {
        let newCollumns = [...columns]
        newCollumns = applyDrag(newCollumns, dropResult)

        let newBoard = {...board}
        newBoard.columnorder = newCollumns.map(c => c.id)
        newBoard.columns = newCollumns

        setColumns(newCollumns)
        setBoard(newBoard)
    }
     // handle when move column
    const onCardDrop = (columnId,dropResult) => {
        if(dropResult.removedIndex !== null || dropResult.addedImdex !== null){
            let newColumn = [...columns]
            let currentColumns = newColumn.find(c => c.id === columnId)
            currentColumns.cards = applyDrag(currentColumns.cards, dropResult)
            currentColumns.cardOrder = currentColumns.cards.map(i => i.id)

            setColumns(newColumn)
        }
      }
    
    const createNewColumn = () => {
        setCreateColumn(!createColumn)
    }

    const addNewColumn = () => {
        
    }
    return(
        <div className='board'>
            {/* dnd for column */}
            <Container
            orientation="horizontal"
            onDrop={onColumnDrop}
            getChildPayload={index => columns[index]}
            dragHandleSelector= ".column-drag-handle"
            dropPlaceholder={{
                animationDuration: 150,
                showOnTop: true,
                className: 'cards-drop-preview'
            }}
            >
                {columns.map((column,index) => (
                    <Draggable key={index}>
                     <Columns column={column} onCardDrop={onCardDrop}/>
                    </Draggable>
                ))}
            </Container>
            {!createColumn && 
                <div className='add-column'>
                    <i className='fa fa-plus icon' onClick={createNewColumn}> Add another column </i>
                </div>
            }
            {createColumn && 
               <div className='input-column' >
                    <input 
                        className='input' 
                        placeholder='Input column title...' 
                        ref={newColumnInputRef} 
                        value={newColumnTitle}
                        onChange={newColumnTitleChange}
                    />
                    <button className='button-add-column button-add' onClick={addNewColumn}>Add column</button>
                    <span className='cancel-create-column'>
                        <i className="fa fa-times" />
                    </span>
                </div>
            }
            
            
        </div>
    )
}

export default Boards