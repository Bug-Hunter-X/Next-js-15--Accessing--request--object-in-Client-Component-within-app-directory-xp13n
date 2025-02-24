In Next.js 15, when using the `app` directory and server components, an uncommon error might arise if you attempt to directly access the `request` object within a React component.  Server Components operate within a Node.js environment, allowing access to the request, but Client Components operate in the browser and thus lack this context.  Attempting to use `request` within a Client Component results in a runtime error or unexpected behavior. For example:

```javascript
// pages/my-page.js (Client Component)

function MyPage() {
  const someValue = request.headers['user-agent']; // Error: request is not defined
  return <div>...</div>;
}
export default MyPage;
```