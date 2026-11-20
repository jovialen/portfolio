import { createRouter } from '@solidjs/router';
import CvPage from './pages/CvPage';
import AllProjectsPage from './pages/AllProjectsPage';
import ProjectPage from './pages/ProjectPage';
import TranscriptPage from './pages/TranscriptPage';
import NotFoundPage from './pages/NotFoundPage';

// The site is small enough that every view ships in the main bundle; no lazy
// route splitting (and so no <Loading> boundary) is needed.
export const Router = createRouter({
  routes: [
    { path: '/', component: CvPage },
    { path: '/projects', component: AllProjectsPage },
    { path: '/projects/:id', component: ProjectPage },
    { path: '/transcript', component: TranscriptPage },
    { path: '*404', component: NotFoundPage },
  ],
});

export const { paths } = Router;
