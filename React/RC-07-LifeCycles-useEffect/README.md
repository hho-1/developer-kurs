# The lifecycle of an Effect 

Every React component goes through the same lifecycle:

A component mounts when it’s added to the screen.
A component updates when it receives new props or state, usually in response to an interaction.
A component unmounts when it’s removed from the screen.
It’s a good way to think about components, but not about Effects. Instead, try to think about each Effect independently from your component’s lifecycle. An Effect describes how to synchronize an external system to the current props and state. As your code changes, synchronization will need to happen more or less often.

To illustrate this point, consider this Effect connecting your component to a chat server:

```
const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId]);
  // ...
}
```

Your Effect’s body specifies how to start synchronizing:

```
// ...
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
    // ...
```

The cleanup function returned by your Effect specifies how to stop synchronizing:

```
// ...
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
    // ...
```

For the rest: 

https://react.dev/learn/lifecycle-of-reactive-effects#the-lifecycle-of-an-effect 




