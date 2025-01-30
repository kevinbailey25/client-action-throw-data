import { data, Form } from "react-router";

export function action() {
	throw data({ wow: true }, { status: 400 })
}

export default function Test(){
	return <Form method='POST'>
		<button type='submit'>Do it!</button>
	</Form>
}