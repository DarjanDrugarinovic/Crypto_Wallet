import services from "../service";

const profileImages = [
  "https://media.licdn.com/dms/image/C5603AQEnU5IuooNVxA/profile-displayphoto-shrink_800_800/0/1596366518523?e=2147483647&v=beta&t=uTVVxGUnsrhTkTCPoRrIwpZqbdd5f9fO6IWD0PAqvqw",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnxmdfMtlm9CPk9naGSWv_Rsfi3NtR4WAgqyHoL_o2Q&s",
];

export const getUser = async (walletAddress) => {
  const { name } = await services.get(`/users/1`);

  return { name, image: profileImages[1] };
};
