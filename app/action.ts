"use server";
export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  if (response.ok) {
    // const response = await fetch("https://api.jikan.moe/v4/anime?");
    const data = await response.json();
    return data;
  }
};
