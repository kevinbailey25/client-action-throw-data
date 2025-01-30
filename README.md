# Issue

```
npm i
npm run dev
```

I have 4 routes, `loader`, `action`, `client-loader` and `client-action`. 

Each of these do the same thing:

```tsx
throw data({ wow: true }, { status: 400 })
```

(exception: the action routes have a form with a button to trigger the action)

I've added a `console.log(error)` in the error boundary.

View each error in the console, you'll note that all of them are 400 errors, except the `clientAction` is a 500 error, where the `data` is the full `DataWithResponseInit<{ wow: boolean; }>` instead of just `{ wow: boolean }`