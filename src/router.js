import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import List from "./pages/List";
import Markdown from "./pages/Markdown";
import Slider from "./pages/Slider";

const routes = [
    { path: '/Home', component: Home },
    { path: '/List', component: List },
    { path: '/Calendar', component: Calendar },
    { path: '/Markdown', component: Markdown },
    { path: '/Slider', component: Slider },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;