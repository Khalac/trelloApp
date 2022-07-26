
import './App.scss';
import TrelloBar from '../components/TrelloBar/TrelloBar';
import BoardHeadere from '../components/BoardHeader/BoardHeadere';
import Boards from '../components/Boards/Boards';

function App() {
    return (
        <div className='Container'>
            <nav className='Trello_Bar'> <TrelloBar/> </nav>
            <nav className='Board_Header'>< BoardHeadere/> </nav>
            <div><Boards/></div>
        </div>
    )
}

export default App;
