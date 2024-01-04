//* Fetching Data on the Server with fetch
//? next.js ile fetch api çekilen verileri default olarak cache'ler. bu özelliği option objesi ile değiştirebiliriz
//* const res = await fetch(URL, { cache: "force-cache" }); default
//* const res = await fetch(URL, { cache: "no-store" }); cache'leme
//*   const res = await fetch(URL, { next: { revalidate: 10 } }); belirlenen saniye cinsinden süre sonunda veriyi tekrar çek tekrar
const URL = `http://localhost:8000/users`;

//* force-cahhe
export const getUsers = async () => {
  //* By default, Next.js automatically caches the returned values of fetch
  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};

//* revalidate
// export const getUsers = async () => {
//   //* Automatically revalidate data after a certain amount of time has passed. This is useful for data that changes infrequently and freshness is not as critical.
//   //?   To revalidate data at a timed interval, you can use the next.revalidate option of fetch to set the cache lifetime of a resource (in seconds).
//   const res = await fetch(URL, { next: { revalidate: 20 } });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const data = await res.json();
//   return data;
// };

//* no-store
// export const getUsers = async () => {
//   //* This will fetch data dynamically, on every request.
//   const res = await fetch(URL, { cache: "no-store" });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const data = await res.json();
//   return data;
// };

export const getUserDetail = async (id) => {
  //* This will fetch data dynamically, on every request.
  const res = await fetch(`${URL}/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};

export const addFriends = async (friend) => {
  const res = await fetch(`http://localhost:8000/friends`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(friend),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};

export const getFriends = async () => {
  const res = await fetch(`http://localhost:8000/friends`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};
