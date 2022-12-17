const phoneNumberApiUrl = import.meta.env.VITE_PHONE_API_URL;
const numberVerificationApiUrl = import.meta.env
  .VITE_NUMBER_VERIFICATION_API_URL;
const numberVerificationApiKey = import.meta.env
  .VITE_NUMBER_VERIFICATION_API_KEY;

const parsePhoneNumberApiResponse = (res: any) => {
  return res.status !== "success"
    ? { ok: false }
    : {
        ok: true,
        countryCode: res.numberCountryCode ? `+${res.numberCountryCode}` : "",
        countryName: res.countryName || "",
        countryId: res.country || "",
        number: res.query || "",
      };
};

const parseNumberVerificationApiResponse = (res: any) => {
  return res.valid
    ? {
        ok: true,
        countryCode: res.country_prefix || "",
        countryName: res.country_name || "",
        countryId: res.country_code || "",
        number: res.local_format || "",
      }
    : { ok: false };
};

export const APIS = {
  "number-verification": {
    url: numberVerificationApiUrl,
    config: { headers: { apikey: numberVerificationApiKey } },
    parsingFunction: parseNumberVerificationApiResponse,
  },
  "phone-number": {
    url: phoneNumberApiUrl,
    config: {},
    parsingFunction: parsePhoneNumberApiResponse,
  },
};

const fetchApiPhoneData = async (number: string, api: string) => {
  try {
    if (!(api in APIS)) throw new Error("Api name is missing or doesn't exist");
    const currentAPI = APIS?.[api as "number-verification" | "phone-number"];
    const queryUrl = currentAPI?.url;
    if (!queryUrl) throw new Error(`Missing url in .env for api ${api}`);
    const res = await fetch(`${queryUrl}${number}`, currentAPI.config);
    const json = await res.json();
    if (json.error) throw new Error(json.error);
    return currentAPI.parsingFunction(json);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchApiPhoneData;
