import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteUser } from "../../shared/actions";
import axios from "axios";
import "./home.scss";
import BlogPage from "../BlogPage/BlogPage";
import Landing from "../Landing/Landing";
import NavBar from "../NavBar/NavBar";
import Profile from "../Profile/Profile";
import { LoadingOverlay } from "../Loader/Loader";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const {
    given_name = "First Name",
    family_name = "Last Name",
    nickname = "Nickname",
    picture,
    email,
  } = user || {};
  const [isCreated, setIsCreated] = useState(false);
  let updatedAuthenticated = isAuthenticated;

  const requestBody = {
    firstName: given_name,
    lastName: family_name,
    userId: nickname,
    email: email,
    photo_url: picture,
    password: "test",
  };

  const getUserData = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://aidenshaw-blogpage.herokuapp.com/users/"
    );
    const data = await response.data;
    setAllUsers(data);
    setLoading(false);
  };
  const usersEmail = allUsers.map((item) => {
    return item.email;
  });

  const loggedInUser = usersEmail.filter((user) => {
    return user === requestBody.email;
  });

  const userID = allUsers.filter((user) => {
    if (user.email === loggedInUser?.[0]) {
      return user.id;
    }
  });

  const userId = userID?.[0]?.id;



  useEffect(() => {
    getUserData();
  }, [isCreated]);


    // const renderUsers = allUsers.map((user) => {
    //   return (
    //     <div>
    //       <h1>{user.firstName}</h1>
    //       <h1>{user.lastName}</h1>
    //       <h1>{user.email}</h1>
    //       <button onClick={deleteUser}>Delete User</button>
    //     </div>
    //   );
    // });

  const navBarData = allUsers.filter((item) => {
    if (item.id === userId) {
      return (
        <div className="userdata" key={item.id}>
          {item.firstName} {item.lastName}
        </div>
      );
    } else {
      return null;
    }
  });

  console.log(navBarData);

  if (!updatedAuthenticated) return <Landing />;
  if (loading) return <LoadingOverlay show={loading} />;
  if (navBarData.length === 0 || navBarData[0]?.firstName === "First Name")
    return (
      <Profile
        userId={userId}
        loggedInUserEmail={loggedInUser[0]}
        user={user}
        setIsCreated={setIsCreated}
      />
    );

  return (
    <div className="app">
      <NavBar userId={userId} allUsers={allUsers} getUserData={getUserData} />
      <BlogPage userId={userId} allUsers={allUsers} getUserData={getUserData} />
      {/* {renderUsers} */}
    </div>
  );
};

export default Home;
