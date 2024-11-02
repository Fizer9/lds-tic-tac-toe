import s from '../../style/App.css';
import Board from '../board/Board.jsx';

const App = () => {
  return (
    <>
      <Board className={s.board} />
    </>
  );
}

export default App;
