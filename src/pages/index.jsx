import { QueryClient, QueryClientProvider } from 'react-query';

import { Menu } from '../components/menu/menu.jsx';
import { AboutTheProject } from '../components/about_the_project/about_the_project.jsx';
import { AboutTheRaces } from '../components/about_the_races/about_the_races.jsx';

export default function Index() {
    //Формирование клиента запросов
    const queryClient = new QueryClient();

    //Вывод основного содержимого
    return (
        <QueryClientProvider client={queryClient}>
            <div className='index__block'>
                <div className='index__block-inner'>
                    <Menu />
                    <AboutTheProject />
                    <AboutTheRaces />
                </div>
            </div>
        </QueryClientProvider>
    )
}