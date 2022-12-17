const phoneNumberApiUrl = import.meta.env.VITE_PHONE_API_URL;
const numberVerificationApiUrl = import.meta.env
  .VITE_NUMBER_VERIFICATION_API_URL;
const numberVerificationApiKey = import.meta.env
  .VITE_NUMBER_VERIFICATION_API_KEY;

const parsePhoneNumberApiResponse = (res: any) => {
  return {
    countryCode: res.numberCountryCode ? `+${res.numberCountryCode}` : "",
    countryName: res.countryName || "",
    countryId: res.country || "",
    number: res.query || "",
  };
};

const parseNumberVerificationApiResponse = (res: any) => {
  return {
    countryCode: res.country_prefix || "",
    countryName: res.country_name || "",
    countryId: res.country_code || "",
    number: res.local_format || "",
  };
};

const APIS = {
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

const fetchApiPhoneData = async (
  number: string,
  api: "number-verification" | "phone-number"
) => {
  const queryUrl = APIS?.[api]?.url;
  try {
    const res = await fetch(`${queryUrl}${number}`, APIS[api].config);
    const json = await res.json();
    return APIS[api].parsingFunction(json);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchApiPhoneData;
