const baseUrl = import.meta.env.VITE_PHONE_API_BASE_URL;

const fetchApiPhoneData = async (number: string) => {
  try {
    const res = await fetch(`${baseUrl}?number=${number}`);
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchApiPhoneData;
