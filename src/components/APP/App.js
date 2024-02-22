import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import APIkey from "../../utils/constants";
import { getWeatherInfo, parseWeatherData } from "../../utils/weatherApi";
import AddGarmentForm from "../AddGarmentForm/AddGarmentForm";
import ItemModal from "../ItemModal/ItemModal";

import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {
  BrowserRouter,
  Switch,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom";
import {
  deleteItem,
  getItems,
  postItem,
  editUser,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import RegisterModal from "../RegisterModal/RegisterModal";
import SigninModal from "../SigninModal/SigninModal";
import { getContent, createUser, signin } from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

//Yay

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  //const [selectedForm, setSelectedForm] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [items, setItems] = useState([]);
  const [currentWeatherApiInfo, setCurrentWeatherApiInfo] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleSigninModal = () => {
    setActiveModal("signin");
  };

  const handleOpenItemModal = () => {
    setActiveModal("preview");
  };

  const handleEditModal = () => {
    setActiveModal("edit");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  };

  const handleCardDelete = (card) => {
    console.log("delete buitton was clicked");
    console.log(card);
    deleteItem(card, token)
      .then(() => {
        updateItemsDelete(card);
        handleCloseModal();
      })
      .catch((res) => {
        console.error(res);
      });
  };

  const handleCardAdd = (input) => {
    postItem(input, token)
      .then((res) => {
        updateItemsAdd(res);
        //tokenCheck();
        handleCloseModal();
        getItems()
          .then((res) => {
            setItems(res.data);
          })
          .catch((res) => console.log(res));
      })
      .catch((res) => {
        console.error(res);
      });
  };

  const handleCardLike = ({ id, isLiked, currentUser }) => {
    const token = localStorage.getItem("jwt");

    if (!isLiked) {
      addCardLike(id, token, currentUser)
        .then((updatedCard) => {
          setItems((cards) => {
            return cards.map((c) => (c._id === id ? updatedCard.data : c));
          });
        })
        .catch((err) => console.log(err));
    } else {
      removeCardLike(id, token)
        .then((updatedCard) => {
          setItems((cards) =>
            cards.map((c) => (c._id === id ? updatedCard.data : c))
          );
        })
        .catch((err) => console.log(err));
    }
  };

  const handleCreateUser = (input) => {
    createUser(input)
      .then((res) => {
        console.log(res);
        handleCloseModal();
      })
      .catch((res) => {
        console.error(res);
      });
  };

  const handleEditUser = (input) => {
    editUser(input, token)
      .then((res) => {
        console.log(res);
        handleCloseModal();
        //tokenCheck();
        setCurrentUser(res.data);
      })
      .catch((res) => {
        console.error(res);
      });
  };

  const handleSignin = (input) => {
    signin(input)
      .then((res) => {
        console.log(res);
        localStorage.setItem("jwt", res.token);
        tokenCheck();
        handleCloseModal();
      })
      .catch((res) => {
        console.error(res);
      });
  };

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    console.log(`token check fired ${jwt}`);
    if (jwt) {
      getContent(jwt)
        .then((res) => {
          const userData = {
            name: res.data.name,
            avatar: res.data.avatar,
            email: res.data.email,
            _id: res.data._id,
          };

          return userData;
        })
        .then((res) => {
          setLoggedIn(true);

          setToken(jwt);
          setCurrentUser(res);
          console.log(res);
        })
        .catch((res) => console.log(res));
    } else {
      console.log("no web token");
    }
  };

  // const handleOpenAddGarmentForm = () => {
  //   setSelectedForm("addGarment");
  // };

  const handleToggleSwitchChange = () => {
    console.log(`toggle function fired ${currentTemperatureUnit}`);
    if (currentTemperatureUnit === "F") {
      setCurrentTemperatureUnit("C");
      setTemp(currentWeatherApiInfo.C);
    } else {
      setCurrentTemperatureUnit("F");
      setTemp(currentWeatherApiInfo.F);
    }
  };

  const updateItemsAdd = (item) => {
    setItems([...items, item]);
  };

  const updateItemsDelete = (card) => {
    console.log("update after delete");
    setItems(
      items.filter((item) => {
        if (item._id !== card.item._id) {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      console.log("im logged in now");
    } else {
      console.log("not logged in");
    }
  }, [loggedIn]);

  useEffect(() => {
    getWeatherInfo()
      .then((res) => {
        const weatherApiInfo = parseWeatherData(res);

        setCurrentWeatherApiInfo(weatherApiInfo);
        setTemp(weatherApiInfo[currentTemperatureUnit]);
        setLocation(weatherApiInfo.location);
      })
      .catch((res) => console.log(res));
  }, []);

  useEffect(() => {
    getItems()
      .then((res) => {
        setItems(res.data);
      })
      .catch((res) => console.log(res));
  }, []);

  return (
    <BrowserRouter>
      <div className="backdrop">
        <CurrentUserContext.Provider value={currentUser}>
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
          >
            <div className="App">
              <Header
                onCreateModal={handleCreateModal}
                onRegisterModal={handleRegisterModal}
                onSigninModal={handleSigninModal}
                // onEditModal={handleEditModal}
                // onLogOut={handleLogOut}
                isLoggedIn={loggedIn}
                // onOpenAddGarmentForm={handleOpenAddGarmentForm}
                location={location}
              />

              <Switch>
                <ProtectedRoute isLoggedIn={loggedIn} path="/profile">
                  <Route>
                    <Profile
                      items={items}
                      temp={Math.ceil(temp)}
                      onCreateModal={handleCreateModal}
                      onOpenItemModal={handleOpenItemModal}
                      cardSelect={handleCardSelect}
                      onCardLike={handleCardLike}
                      isLoggedIn={loggedIn}
                      onEditModal={handleEditModal}
                      onLogOut={handleLogOut}
                    />
                  </Route>
                </ProtectedRoute>
                <Route path="/">
                  <Main
                    items={items}
                    temp={Math.ceil(temp)}
                    onCreateModal={handleCreateModal}
                    onOpenItemModal={handleOpenItemModal}
                    cardSelect={handleCardSelect}
                    onCardLike={handleCardLike}
                  />
                </Route>
              </Switch>
              <Footer />
              {activeModal === "create" && (
                <AddItemModal
                  handleCloseModal={handleCloseModal}
                  onCardAdd={handleCardAdd}
                  //handleAddGarmentSubmit={handleAddGarmentSubmit}
                />
              )}
              {activeModal === "preview" && (
                <ItemModal
                  onCloseModal={handleCloseModal}
                  card={selectedCard}
                  handleCardDelete={handleCardDelete}
                />
              )}
              {activeModal === "register" && (
                <RegisterModal
                  onCloseModal={handleCloseModal}
                  onCreateUser={handleCreateUser}
                  onSwitchModal={handleSigninModal}
                />
              )}
              {activeModal === "signin" && (
                <SigninModal
                  onCloseModal={handleCloseModal}
                  onSignin={handleSignin}
                  onSwitchModal={handleRegisterModal}
                />
              )}
              {activeModal === "edit" && (
                <EditProfileModal
                  onCloseModal={handleCloseModal}
                  onEditUser={handleEditUser}
                />
              )}
            </div>
          </CurrentTemperatureUnitContext.Provider>
        </CurrentUserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
