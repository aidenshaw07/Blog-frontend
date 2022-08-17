import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./home.scss";
import BlogPage from "../BlogPage/BlogPage";
import Landing from "../Landing/Landing";
import NavBar from "../NavBar/NavBar";
import Profile from "../Profile/Profile";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userId, setUserId] = useState("");
  const {
    given_name = "First Name",
    family_name = "Last Name",
    nickname = "Nickname",
    picture,
    email,
  } = user || {};
  const [userEmail, setUserEmail] = useState([]);
  const [userData, setUserData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const getData = async () => {
    const response = await axios.get(
      "https://aidenshaw-blogpage.herokuapp.com/users/"
    );
    const data = await response.data;
    setUserData(data);
  };

  let updatedAuthenticated = isAuthenticated;

  const requestBody = {
    firstName: given_name,
    lastName: family_name,
    userId: nickname,
    email: email,
    photo_url: picture,
    password: "test",
  };

  const checkAuthentication = async () => {
    try {
      const response = await axios.get(
        "https://aidenshaw-blogpage.herokuapp.com/users/"
      );
      const data = await response.data;
      const userEmail = data.map((item) => {
        return item.email;
      });
      setUserEmail(userEmail);

      const matchedEmail = userEmail.filter((item) => {
        return item == requestBody.email;
      });

      if (requestBody.email === matchedEmail[0]) {
        // console.log("Successful Login");
      } else {
        const response = await axios.post(
          "https://aidenshaw-blogpage.herokuapp.com/users/",
          requestBody
        );
        const data = await response.data;
        console.log(data);
      }
      const loggedInUser = data.filter((user) => {
        return user.email === requestBody.email;
      });
      // console.log(loggedInUser[0].id);
      setUserId(loggedInUser[0]?.id);
      setFirstName(loggedInUser[0]?.firstName);
      setLastName(loggedInUser[0]?.lastName);
    } catch {
      console.log("error");
    }
  };
  console.log(userData);

  useEffect(() => {
    // console.log(isAuthenticated);
    checkAuthentication();
  }, [email]);

  const navBarData = userData.filter((item) => {
    if (item.id === userId) {
      return (
        <div className="userdata" key={item.id}>
          {item.firstName} {item.lastName}
        </div>
      );
    }
  });

  if (!updatedAuthenticated) return <Landing />;
  if (updatedAuthenticated && navBarData[0]?.firstName === "First Name" && navBarData[0]?.lastName === "Last Name") return <Profile userId={userId} setFirstName={setFirstName} setLastName={setLastName}/>;

  return (
    <>
      <NavBar getData={getData} userId={userId} userData={userData} />
      <BlogPage
        userId={userId}
        userData={userData}
        setUserData={setUserData}
        getData={getData}
      />
    </>
  );
};

export default Home;
