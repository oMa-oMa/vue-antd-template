const router = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: "/dashboard/indexPage",
    meta: {
      title: "Dashboard",
      icon: "desktop",
    },
  },
  {
    path: "/menu1",
    name: "Menu1",
    redirect: '/menu1-1',
    component: "/menu1/menuPage1",
    meta: {
      title: "Menu1",
      icon: "user",
    },
    children: [
      {
        path: "/menu1-1",
        name: "Menu1-1",
        component: "/menu1/menuPage1-1",
        meta: {
          title: "Menu1-1",
          icon: "",
        },
      },
      {
        path: "/menu1-2",
        name: "Menu1-2",
        component: "/menu1/menuPage1-2",
        meta: {
          title: "Menu1-2",
          icon: "",
        },
      },
    ],
  },
  {
    path: "/menu2",
    name: "Menu2",
    component: "/menu2/menuPage2",
    meta: {
      title: "Menu2",
      icon: "pie-chart",
    },
  },
  {
    path: "/menu3",
    name: "Menu3",
    component: "/menu3/menuPage3",
    meta: {
      title: "Menu3",
      icon: "setting",
    },
  },
];

module.exports = [
  {
    url: "/routerList",
    type: "get",
    response: () => {
        return {
          code: 20000,
          data: router,
        };
    },
  },
];
