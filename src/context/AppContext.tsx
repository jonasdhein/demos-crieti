import { createContext, FunctionComponent, ReactElement, useState } from "react";
interface IProps {
    children: ReactElement
}
export interface IAppContext {
    username: string;
    password: string;
}

/*exportação para utilização nas telas em que as informações
do contexto serão necessárias*/
export const AppContext = createContext({} as IAppContext);

export const AppProvider: FunctionComponent<IProps> = ({ children }) => {
    
    return (
        <AppContext.Provider value={{
            username: 'mateus@mateus.com',
            password: '12345',
        } as IAppContext}>
            {children}
        </AppContext.Provider>
    )
}