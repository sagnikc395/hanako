# rtc

Real Time Chat Applications using raw websockets in Bun that supports the following features:

- Allow an admin to create a new chat session/room. Admin should be allowed to set the following properties on the room:
    - Name 
    - start_time 
    - is_open
    - cool_down_time 
    - allow users to join the room and send messages 
    - allow users to upvote chat messages.
    - if chat messages reach more than 3 upvotes, move them over to a seperate section.
    - if cha messages reach mre than 10 upvotes, alert the admin to answer.
    - People are rate limited.
    - Upvoting 
    - Most upvoted comments/QA should read the admin.




## Install:
To install dependencies:

```bash
bun install
```

To run:

```bash
bun run src/index.ts
```

This project was created using `bun init` in bun v1.1.38. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
