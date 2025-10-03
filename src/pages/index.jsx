import { QueryClient, QueryClientProvider } from 'react-query';

import { AboutTheProject } from '../components/about_the_project/about_the_project.jsx';

export default function Index() {
    //Формирование клиента запросов
    const queryClient = new QueryClient();

    //Вывод основного содержимого
    return (
        <QueryClientProvider client={queryClient}>
            <div className='index__block'>
                <AboutTheProject />
            </div>
        </QueryClientProvider>
    )
}