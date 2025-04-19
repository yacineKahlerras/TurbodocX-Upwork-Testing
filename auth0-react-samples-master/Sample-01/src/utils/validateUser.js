export default async function validateUser(getAccessTokenSilently) {
  try {
    const token = await getAccessTokenSilently();
    const res = await fetch("http://localhost:3001/api/external", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
