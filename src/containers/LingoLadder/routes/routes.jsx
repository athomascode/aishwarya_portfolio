import LingoLadder from "../index";
import Add from "../Add";
import Edit from "../Edit";

const LingoLadderRoutes = [
  {
    component: LingoLadder,
    path: "/lingoladder",
    exact: true,
    type: "public",
  },
  {
    component: Add,
    path: "/lingoladder/new",
    exact: true,
    type: "public",
  },
  {
    component: Edit,
    path: "/lingoladder/edit/:id",
    exact: true,
    type: "public",
  },
];

export default LingoLadderRoutes;
