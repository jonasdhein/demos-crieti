import { createContext, FunctionComponent, ReactElement } from "react";

interface IProps {
    children: ReactElement
}

export interface IAppContext {
    username: string;
    password: string;
}

export const AppContext = createContext({} as IAppContext);

export const AppProvider: FunctionComponent<IProps> = ({ children }) => {
    return (
        <AppContext.Provider value={{
            username: 'mateus@mateus.com',
            password: '12345'
        } as IAppContext}>
        </AppContext.Provider>
    )
}