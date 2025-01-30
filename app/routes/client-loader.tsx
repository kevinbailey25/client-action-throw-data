import { data, Form } from "react-router";

export function clientLoader() {
	throw data({ wow: true }, { status: 400 })
}

export default function Test(){
	return <></>
}