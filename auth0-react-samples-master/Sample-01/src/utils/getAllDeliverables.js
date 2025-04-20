export default async function getAllDeliverables(getAccessTokenSilently) {
  try {
    const token = await getAccessTokenSilently();
    const res = await fetch(`http://localhost:3001/api/deliverables`, {
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
