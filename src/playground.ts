import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress:'test@gmail.com',
        firstName:'aryan',
        lastName:'mishra'
    }
})

console.log('Done')
