import router from "./index";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; 
import { getToken } from "@/utils/token";

router.beforeEach((to, from, next) => {
  NProgress.start();
  console.log(getToken())
  if (getToken()) {
    if (to.path === "/login") {
      next({ path: "/" });// if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
    //   if (store.getters.roles.length === 0) {
    //     store
    //       .dispatch("GetInfo")
    //       .then(res => {
    //         // 拉取用户信息
    //         let menus = res.data.menus;
    //         let username = res.data.username;
    //         store.dispatch("GenerateRoutes", { menus, username }).then(() => {
    //           // 生成可访问的路由表
    //           router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
    //           next({ ...to, replace: true });
    //         });
    //       })
    //       .catch(err => {
    //         store.dispatch("FedLogOut").then(() => {
    //           Message.error(err || "Verification failed, please login again");
    //           next({ path: "/home" });
    //         });
    //       });
    //   } else {
    //     next();
    //   }
    }
  } else {
    if (to.meta.white) {
      next();
    } else {
      next("/login");
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});
