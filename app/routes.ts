import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route('/events', "routes/events/events.tsx"),
  route('/events/:id', "routes/eventDetails/eventDetails.tsx"),
  route('/new', "routes/events/newEvent.tsx")
] satisfies RouteConfig
