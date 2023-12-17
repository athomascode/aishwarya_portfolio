import LingoLadder from "../index";
import Add from "../Add";

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
  }
];

export default LingoLadderRoutes;
