export const data = {
    boards: [
        {
            id: 'b1',
            columnoder: ['c1','c2','c3'],
            columns:[
                {
                    id: 'c1',
                    boardId:'b1',
                    title:'To do',
                    cardOder: ['ca1','ca2','ca3'],
                    cards: [
                        {
                            id:'ca1',
                            boardId:'b1',
                            columnsId:'c1',
                            title:'Title of card 1',
                            cover: null,                           
                        },
                        {
                            id:'ca2',
                            boardId:'b1',
                            columnsId:'c1',
                            title:'Title of card 2',
                            cover: null,                           
                        },
                        {
                            id:'ca3',
                            boardId:'b1',
                            columnsId:'c1',
                            title:'Title of card 3',
                            cover: null,                           
                        },
                    ]
                },
                {
                    id: 'c2',
                    boardId:'b1',
                    title:'Inprogress',
                    cardOder: ['ca3','ca4','ca5'],
                    cards: [
                        {
                            id:'ca3',
                            boardId:'b1',
                            columnsId:'c2',
                            title:'Title of card 3',
                            cover: null,                           
                        },
                        {
                            id:'ca4',
                            boardId:'b1',
                            columnsId:'c2',
                            title:'Title of card 4',
                            cover: null,                           
                        },
                        {
                            id:'ca5',
                            boardId:'b1',
                            columnsId:'c2',
                            title:'Title of card 5',
                            cover: null,                           
                        },
                    ]
                },
                {
                    id: 'c3',
                    boardId:'b1',
                    title:'Done',
                    cardOder: ['ca6','ca7','ca8'],
                    cards: [
                        {
                            id:'ca6',
                            boardId:'b1',
                            columnsId:'c3',
                            title:'Title of card 6',
                            cover: null,                           
                        },
                        {
                            id:'ca7',
                            boardId:'b1',
                            columnsId:'c3',
                            title:'Title of card 7',
                            cover: null,                           
                        },
                        {
                            id:'ca8',
                            boardId:'b1',
                            columnsId:'c3',
                            title:'Title of card 8',
                            cover: null,                           
                        },
                    ]
                },
            ]
        }
    ]
}