import { useSetRecoilState} from "recoil"
import { darkMode } from "state/atom"

export const useDarkMode = () => {
    const setDarkMode = useSetRecoilState(darkMode);
    const toggleMode = () => {
        setDarkMode((prev: Boolean) => !prev)
    }

    return toggleMode
}