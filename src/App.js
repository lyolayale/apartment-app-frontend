import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import mockUsers from "./mockUsers";
import mockApartments from "./mockApartments";
import { Header, Footer } from "./components";
import {
  ApartmentEdit,
  ApartmentIndex,
  ApartmentNew,
  ApartmentProtectedIndex,
  ApartmentShow,
  Home,
  NotFound,
  SignIn,
  SignUp,
} from "./pages";

export default function App() {
  const [currentUser, setCurrentUser] = useState(mockUsers[0]);
  const [apartments, setApartments] = useState(mockApartments);
  const [myApartments, setMyApartments] = useState(
    apartments.filter(apartment => apartment.user_id === currentUser.id)
  );

  console.log(myApartments);

  function handleCreateApartment(apartment) {
    setMyApartments(prev => [...prev, apartment]);
  }

  function handleDeleteMyApartment(id) {
    setMyApartments(prev => prev.filter(apartment => apartment.id !== id));
  }

  return (
    <div>
      <Header />
      <main className="h-screen">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/apartmentindex"
            element={<ApartmentIndex apartments={apartments} />}
          />
          {currentUser && (
            <Route
              path="/userapartments"
              element={
                <ApartmentProtectedIndex
                  myApartments={myApartments}
                  onDeleteMyApartment={handleDeleteMyApartment}
                />
              }
            />
          )}
          <Route
            path="/apartmentshow/:id"
            element={<ApartmentShow apartments={apartments} />}
          />
          <Route
            path="/apartmentnew"
            element={
              <ApartmentNew
                onCreateApartment={handleCreateApartment}
                currentUser={currentUser}
              />
            }
          />
          <Route path="/apartmentedit/:id" element={<ApartmentEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
