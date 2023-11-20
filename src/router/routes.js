const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/clienti", component: () => import("pages/ClientiPage.vue") },
      {
        path: "/istruttori",
        component: () => import("pages/IstruttoriPage.vue"),
      },
      {
        path: "/mission",
        component: () => import("pages/MissionPage.vue"),
      },
      {
        path: "/obiettivi",
        component: () => import("pages/ObiettiviPage.vue"),
      },
      {
        path: "/mezzi",
        component: () => import("pages/MezziPage.vue"),
      },
      {
        path: "/storia",
        component: () => import("pages/StoriaPage.vue"),
      },
      {
        path: "/studio-fattibilita",
        component: () => import("pages/StudioFattibilitaPage.vue"),
      },
      {
        path: "/placement",
        component: () => import("pages/PlacementPage.vue"),
      },
      {
        path: "/spese",
        component: () => import("pages/SpesePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
