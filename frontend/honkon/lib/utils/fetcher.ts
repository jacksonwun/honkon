import axios from "axios";

const updateOptions = () => {
  // if (typeof window === "undefined") return {};

  // if (!window.localStorage.user) return {};

  // if (Object.keys(window.localStorage.user).length === 0) return {};

  const user = JSON.parse(window.localStorage.user);

  if (!!user.token) {
    return {
      headers: {
        Authorization: `Token ${user.token}`,
        "Content-Type": "application/json",
      },
    };
  } else {
    return {
      headers: {
        Authorization: `Token ${user.token}`,
        "Content-Type": "application/json",
      },
    };
  }
};

export async function fetcher(url: string) {
  const { data } = await axios.get(url, updateOptions());
  console.log(data);
  return data;
}
