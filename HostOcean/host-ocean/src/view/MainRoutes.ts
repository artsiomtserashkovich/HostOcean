import { MainPage } from './MainPage';
import { AccountModule } from './Account/AccountModule';
import { QueueModule } from './Queue/QueueModules';
import { Statistics } from './Statistics/Statistics';

export const MainRoutes: IRoute[] =[ 
    {
        path: "",
        component: MainPage,
        exact: true,
    },
    {
        path: "accounts",
        component: AccountModule,
    },
    {
        path: "queue",
        component: QueueModule,
    },
    {
        path: "statistics",
        component: Statistics,
    }
];
