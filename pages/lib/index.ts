interface TokenData {
  token: string;
  token_expire_time: string;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value};path=/`;
}

function getCookie(name: string): any {
  const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return cookieValue ? cookieValue.pop() : null;
}

async function getToken(): Promise<string | null> {
  const existingToken = getCookie("token");
  const existingTokenExpiry = getCookie("token_expire_time");

  if (existingToken && existingTokenExpiry) {
    const currentTime = new Date().getTime();
    const expiryTime = new Date(existingTokenExpiry).getTime();
    if (currentTime < expiryTime) {
      return existingToken;
    }
  }

  const apiKey = "4NKQ3-815C2-8T5Q2-16318-55301";
  const endpoint = "https://devcore02.cimet.io/v1/generate-token";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-key": apiKey,
      },
    });

    if (!response) {
      return null;
    }

    const tokenData: TokenData = await response.json();

    const token = tokenData.token;
    const tokenExpiry = tokenData.token_expire_time;
    setCookie("token", token);
    setCookie("token_expire_time", tokenExpiry);
    return token;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
}

export default getToken;
