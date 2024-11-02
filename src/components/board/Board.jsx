import React, { useState } from 'react'
import s from '../../style/Board.module.css'
import Moroni from '../moroniSign/Moroni'
import Nephi from '../nephiSign/Nephi'
import Slot from '../slotSign/Slot'


let cellsData = ['Фотосессия', 'Джампинг', 'Занимательная математика', 'Супер скорость', 'А так слабо?', 'Угадай мелодию', 'Черный ящик', 'Спорт', 'Дискотека']


const Board = () => {
    return (
        <div className={s.boardWrapper}>
            <div className={s.board}>
            <Cell title={cellsData[0]} />
            <Cell title={cellsData[1]} />
            <Cell title={cellsData[2]} />
            <Cell title={cellsData[3]} />
            <Cell title={cellsData[4]} />
            <Cell title={cellsData[5]} />
            <Cell title={cellsData[6]} />
            <Cell title={cellsData[7]} />
            <Cell title={cellsData[8]} />
            </div>
        </div>
    )
}

const Cell = (props) => {
    const [state, setState] = useState(0);
    if (state === 0) {
        return (
                <div className={s.cell} onClick={() => setState(state + 1)}
                >{props.title}
                </div>
        )
    } else if (state === 1) {
        return (
                <div className={s.cell} onClick={() => setState(state + 1)}
                >   <Slot />
                    {/* <img className={s.slot} src={require('../../resources/slot background.png')}/> */}
                </div>
        )
    } else if (state === 2) {
        return (
            <div className={s.cell} onClick={() => setState(state + 1)} >
                <Nephi />
            </div>
        )
    } else if (state === 3) {
        return (
            <div className={s.cell} onClick={() => setState(state - 1)} >
                <Moroni />
            </div>
        )
    }
}

export default Board