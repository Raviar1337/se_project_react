import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import APIkey from "../utils/constants";
import { getWeatherInfo, parseWeatherData } from "../utils/weatherApi";
import AddGarmentForm from "../AddGarmentForm/AddgarmentForm";
import ItemModal from "../ItemModal/ItemModal";

const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [selectedForm, setSelectedForm] = useState(2);
  const [selectedCard, setSelectedCard] = useState({});

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleOpenItemModal = () => {
    setActiveModal("preview");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  const handleOpenAddGarmentForm = () => {
    setSelectedForm(1);
  };

  useEffect(() => {
    getWeatherInfo().then((res) => {
      const weatherApiInfo = parseWeatherData(res);

      setTemp(weatherApiInfo.temp);
      setLocation(weatherApiInfo.location);
    });
  }, []);

  return (
    <div className="backdrop">
      <div className="App">
        <Header
          onCreateModal={handleCreateModal}
          onOpenAddGarmentForm={handleOpenAddGarmentForm}
          location={location}
        />
        <Main
          items={defaultClothingItems}
          temp={temp}
          onCreateModal={handleCreateModal}
          onOpenItemModal={handleOpenItemModal}
          cardSelect={handleCardSelect}
        />
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm onCloseModal={handleCloseModal}>
            {selectedForm === 1 && <AddGarmentForm />}
          </ModalWithForm>
        )}
        {activeModal === "preview" && (
          <ItemModal onCloseModal={handleCloseModal} card={selectedCard} />
        )}
      </div>
    </div>
  );
}

export default App;
