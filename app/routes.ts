import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"), 
	route('client-action', 'routes/client-action.tsx'),
	route('client-loader', 'routes/client-loader.tsx'),
	route('action', 'routes/action.tsx'),
	route('loader', 'routes/loader.tsx')
] satisfies RouteConfig;
