function register(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ Registered user: ${username}`);
      resolve(username);
    }, 2000);
  });
}

function sendemail(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`📧 Sent welcome email to ${username}`);
      resolve(username);
    }, 1000);
  });
}

function logactivity(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`logged to the activity by user ${username}`);
      resolve(`all tasks done for${username}`);
    }, 1000);
  });
}

// register("rishi")
//   .then(sendemail)
//   .then(logactivity)
//   .then((finalmessage) => {
//     console.log(finalmessage);
//   });

async function handleflow() {
  const user = await register("rishi");
  await sendemail(user);
  const finalmessage = await logactivity(user);
  console.log(finalmessage);
}

handleflow();
