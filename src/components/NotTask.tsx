import clipboard from '../assets/Clipboard.svg'

import style from './NotTask.module.css'

export function NotTask() {
    return (
        <div className={style.contNot}>
            <div>
            <img src={clipboard} alt="" />
            <p><strong>Voce ainda nao tem tarefas cadastradas</strong> </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}