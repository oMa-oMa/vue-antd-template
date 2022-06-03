import router from "./router";
import store from "./store";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from "./utils/auth";

NProgress.configure({ showSpinner: false });

const whiteList = ['/login'];

router.beforeEach(async(to, from, next) => {
    console.log(to.path, from)
    NProgress.start();

    const hasToken = getToken();

    if (hasToken) {
        // 如果已经登录了，直接跳到默认页
        if (to.path === '/login') {
            next({ path: '/' });
            NProgress.done();
        } else {
            const hasGetUserInfo = store.getters.name;
            
            if (hasGetUserInfo) {
                next()
            } else {
                try {
                    await store.dispatch('user/getInfo');
                    next();
                } catch (error) {
                    next(`/login?redirect=${to.path}`);
                    NProgress.done();
                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next(`/login?redirect=${to.path}`);
            NProgress.done();
        }
    }
})

// 完成进度条
router.afterEach(() => {
    NProgress.done();
})