import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const API_URL = "https://66449af6b8925626f88f1cc1.mockapi.io/users";
  const [selectedChoice, setSelectedChoice] = useState("all");
  const [usersData, setUsersData] = useState([]);
  const role = ["Contributor", "Author", "Adminstrator", "Subscriber"];
  const images = [
    {
      id: 0,
      url: "https://s3-alpha-sig.figma.com/img/fd12/31da/0cc8a75d1de495f7ccac7fbc1c5435db?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HmdPZKHL7haGmq8iz6TxSiPNIsLJfICUxfXPoJZukqBsK4pnAjoGXHF2c4b-sWI6oD8Nc6E239UZtwQH9DuliREIGutTHhXtXf0-5eFPwjOP3glPr4bRu165-G62mzMuEd0BAmYga7zbsb7sxHMBRKJwrD05~FN4Zzcd1DygwJJN6ExvC9Ez0cf~C7kn~VMdOhFNQw-4Low8q1aVI-vVoxvqCQ8Y8CJ5Stu6FSUiq7DXmnCFobmQGugToeL~pErgYtP5syHNU7wZCz-bh~EAcNhulYBoiTT2b731wWCVCbZ~Ra-wLQ6~0ADqnb4nof8XRGF8M8Lk23E2dtMIOchmOw__",
      color: "#ba8a6b",
    },
    {
      id: 1,
      url: "https://s3-alpha-sig.figma.com/img/5513/9986/425a01ab12048bb0d7d20d6662631e4c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lKOUduSPRQeEfiVwjL0X1JEBgg~wQFP87SlAgXgOwv3yvmmakI7nNus3A--64M822g7ydSL4dLUF~ujLVhgrrhM3Qs6AuP0GSRCydueJBcxWbgMfhjBqxJ4qN-ZH6YXadQLbwtkmAzzUH8W8UXQZPgHszuLGClQ-25mI821JnthL0Li5d3TUB3ON6FvZp1sAwmfUfSQ-edfiwKbiCGFbeF~YT1TllpQaHgJMNc53cvAIKRGaSHgtmJZBm0XXfDsWZOW0ydA39hB-sNNcCv5mVqDwamSEuIW~9Jl5deAbh1BQbVTSGw8C7r24sFlq1mm5JVbZwfStA571Ssr~4DyycA__",
      color: "#f4b8aa",
    },
    {
      id: 2,
      url: "https://s3-alpha-sig.figma.com/img/26b2/0f5e/854cb929f5296203b9918776c3d43194?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hkZkT3SSnDk3Sow6osMnb-7oUXUCGJUM1Bkt8wNPGkOQuUUqn0xyddwZK-NJ-YTeTuHpS0MZAHILXWzw6BgbBQL7TLzScm1Yqcf3heLE-~Tk6KK69fe6JdrT4NWJ5llBQKgtJWXSYYmY9tSVBglRsdMkORHWhu8yN1bSmfsfqq4GCTC26Y1CvfH1ZYvVhEmSlKhzgo3HjHMRyFyO2yPeovsGwz8cwUZpylumf-fzaomZnGUHlfj4iay4B5ZmEwaZtCK2si8uGuH98m7Keg-gzjaqbmkxrgeiodzT7-GZqJdLwBari4v2nxvHSEfOvSXwOiNxsU7JFdnqw1UrZXFj-g__",
    },
    {
      id: 3,
      url: "https://s3-alpha-sig.figma.com/img/001a/db86/e27621e667b5fd9c0ac3a2580976f151?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KNFH0e9VAZRJzmKawSXa-YICou9A~UBD1oTycdYbJTdXY4vCUVU9E51PoSSRwtk3wJBYDZpevSulA20YwkMFf2jUZfzZpGLmbI~PU92AItL-Dc0s04-WXVql1tVI9V8dJbP1EGADgvAb4rFdSq1Bru6lTWFm5JLfI2VvMex4u-nVkXHObJMfOZaHwFu1wmQvYsWcQAtHNaoVmuwhdZcEc8CJUX-Fbyl6E~F6Y5RqOKQDzEYXcXz4Wk879tC4oPJwnQyKHKIJwaSeF7OKjSu5JO9XdjwG60lld~YY2ZdNmug-59y5cXaUUjqwu0KfOGFuaSB0arzYUemUMyAM1I8MFQ__",
    },
    {
      id: 4,
      url: "https://s3-alpha-sig.figma.com/img/563b/7da9/3f5856b5ebf85dc83dbace9cfa45398a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gz-CW~8SAF4xRwzt512LPz8mVymoYjyoTTaqdx1KJw5DnrQkiR6eKnjZhnSsy95b9N678JE-HxLeuq5Z8nJtiWjCobjCT7k2GLc7B1ZItxBLKNp47bqjTz2l8Fdf7mqw6kwJwSx22gLubgdifflks9HcuN3AbBfnF5jBmjSAf4sEcO4NQiCIzoes5mPo2HfHATpCLaE1ZXJ2Xk~iJRyd5V6fFXJa9RHSVwxSLsxbwiIBbNfPssz3v8XjSneVaHd~pJZVZoAA~hdNv30LLqytQi9hq4K0BWAf5Xc9KgLyIK4TsQj8YIv5qk6e3rlh-jl4tNuAdi7ELyH5cNKIdcilfQ__",
      color: "#e1e6f5",
    },
    {
      id: 5,
      url: "https://s3-alpha-sig.figma.com/img/7160/cc55/57067d5c0a6f9ca323509500338e3b9a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IfAfySMUY0QdqtG8-EqFJg1R7sM8LcqgBwnqM4gh5yVNpeOEnqBxJTpYltS2j78EguRLCxL8Oat4YVfGsdfltAY19VvkLgxdXZ-24j1NCzZOuUwWjTc7uGTcGD5903KZiy2zkJKaLLm5vZPZRzyhJDaKBCili4CXj1dnI3UBzHaPLxj6z35GEHCN4NWzOZapJAaeK3xRWDGAxmO~uGFTddN8xz92369NrRZ2mV~ruRXlTCmpOpNS1GrUBhy0txQJofZLQ3-9yWigaKdxDSZ98Wntj2Drcu8S8gkAQz4xT0eJvCca-MYJKlfY9z7TD1x4uvmaNubHOT-racx-hQjlYg__",
      color: "#eaefff",
    },
  ];

  const getData = async () => {
    try {
      const response = await axios.get(API_URL);
      const newData = response.data.map((user) => {
        const { emailFormat, defaultAvatar } = processUserData(user);
        return {
          ...user,
          email: user.email || emailFormat,
          username: user.username || user.name.replace(" ", "-").toLowerCase(),
          role: user.role || role[Math.floor(Math.random() * 4)],
          avatar: user.avatar || defaultAvatar,
          ...processAvatarData(user.avatar),
        };
      });
      setUsersData(newData);
    } catch (err) {
      console.log(err);
    }
  };

  const processUserData = (user) => {
    const emailFormat = `${user.name
      .toLowerCase()
      .replace(" ", "-")}@gmail.com`;
    const defaultAvatar = Math.floor(Math.random() * 6);
    return { emailFormat, defaultAvatar };
  };

  const processAvatarData = (avatarId) => {
    let avatarUrl = null;
    let avatarColor = null;
    if (avatarId !== undefined) {
      const foundImage = images.find((img) => img.id === avatarId);
      avatarUrl = foundImage ? foundImage.url : null;
      avatarColor = foundImage ? foundImage.color : null;
    } else {
      const defaultAvatarIndex = Math.floor(Math.random() * images.length);
      avatarUrl = images[defaultAvatarIndex].url;
      avatarColor = images[defaultAvatarIndex].color;
    }
    return { avatarUrl, avatarColor };
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (usersData.length > 0) {
      usersData.forEach((user) => {
        if (!user.username || !user.email || !user.role || !user.avatar) {
          usersDataDetailsPush();
        }
      });
    }
  }, [usersData]);

  const usersDataDetailsPush = async () => {
    const updatedData = await Promise.all(
      usersData.map(async (user) => {
        if (!user.username || !user.email || !user.role || !user.avatar) {
          const emailFormat = `${user.name
            .toLowerCase()
            .replace(" ", "-")}@gmail.com`;
          const { avatarUrl, avatarColor } = processAvatarData(user.avatar);
          const updatedUser = {
            ...user,
            email: user.email || emailFormat,
            username: user.username || user.name.replace(" ", "-"),
            role: user.role || role[Math.floor(Math.random() * 4)],
            avatar: user.avatar || Math.floor(Math.random() * 6),
            avatarUrl,
            avatarColor,
          };
          await axios.put(`${API_URL}/${user.id}`, updatedUser);
          return updatedUser;
        } else {
          return user;
        }
      })
    );
    setUsersData(updatedData);
  };

  const data = { selectedChoice, setSelectedChoice, usersData };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserContext;
export { UserProvider };
