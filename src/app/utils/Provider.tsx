'use client';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import {Provider} from 'react-redux'
import {store} from "./../Redux/Store"


const queryClient = new QueryClient();

export function Providers({children}: { children: React.ReactNode }){

 return(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>;
    </Provider>

 ) 
}