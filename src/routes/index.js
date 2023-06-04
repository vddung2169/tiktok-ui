import Home from '~/pages/Home';
import Following from '~/pages/Following';

// Don't need to login
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
];

// Must login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
