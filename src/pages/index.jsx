import { QueryClient, QueryClientProvider } from 'react-query';

import Data from '../components/data/data.jsx';

export default function Index() {
    //Формирование клиента запросов
    const queryClient = new QueryClient();

    //Вывод основного содержимого
    return (
        <QueryClientProvider client={queryClient}>
            <Data />
        </QueryClientProvider>
    )
}