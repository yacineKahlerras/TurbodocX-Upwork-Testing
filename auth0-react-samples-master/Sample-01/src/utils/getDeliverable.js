export default async function getDeliverable(id, getAccessTokenSilently) {
  try {
    const token = await getAccessTokenSilently();
    const res = await fetch(`http://localhost:3001/api/deliverable/${id}`, {
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
