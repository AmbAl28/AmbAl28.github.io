// Определим объект в формате {“код клавиши”: “выполняемое действие”}. Далее добавим обработчики событий при нажатии и отпускании клавиш клавиатуры. При срабатывании обработчиков будем определять текущие выполняемые действия и обновлять их активное состояние. В конечном результате из хука вернём объект в формате {“выполняемое действие”: “статус”}.
import { useEffect, useState } from "react";

export const usePersonControls = () => {
    const keys = {
        KeyW: "forward",
        KeyS: "backward",
        KeyA: "left",
        KeyD: "right",
        Space: "jump"
    }

    const moveFieldByKey = (key) => keys[key];

    const [movement, setMovement] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
        jump: false
    });

    const setMovementStatus = (code, status) => {
        setMovement((m) => ({...m, [code]: status}))
    }

    useEffect(() => {
        const handleKeyDown = (ev) => {
            setMovementStatus(moveFieldByKey(ev.code), true);
        }

        const handleKeyUp = (ev) => {
            setMovementStatus(moveFieldByKey(ev.code), false);
        }

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, []);

    return movement;
}