import style from './HaveTask.module.css'

import { AiFillDelete } from 'react-icons/ai'

interface ProspsTask {
    create:String
}

export function HaveTask({create}:ProspsTask) {
    return (
        <div className={style.contHave}>
            <form>
                <div>
                <input type="checkbox" />
                <p>{create}</p>
                </div>
                <span><AiFillDelete className={style.icon}/></span>

            </form>
        </div>
    )
}