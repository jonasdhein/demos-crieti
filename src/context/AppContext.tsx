import { createContext, FunctionComponent, ReactElement, useState } from "react";
interface IProps {
    children: ReactElement
}
export interface IAppContext {
    username: string;
    password: string;
    saveUser: (username: string, password: string) => void;
}

/*exportação para utilização nas telas em que as informações
do contexto serão necessárias*/
export const AppContext = createContext({} as IAppContext);

export const AppProvider: FunctionComponent<IProps> = ({ children }) => {

    const [usuario, setUsuario] = useState({
        username: '',
        password: ''
    });

    function saveUser(username: string, password: string) {
        setUsuario({
            username: username,
            password: password
        })
    }
    
    //inicialmente, os dados do contexto são vazios
    return (
        <AppContext.Provider value={{
            username: usuario.username,
            password: usuario.password,
            saveUser: saveUser
        } as IAppContext}>
            {children}
        </AppContext.Provider>
    )
}