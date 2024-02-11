import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import mockUsers from "./mockUsers";
import mockApartments from "./mockApartments";
import { Header, Footer } from "./components";
import { StytchHeadlessClient } from "@stytch/vanilla-js/dist/index.headless";
import { StytchProvider } from "@stytch/react";
import {
  ApartmentEdit,
  ApartmentIndex,
  ApartmentNew,
  ApartmentProtectedIndex,
  ApartmentShow,
  Home,
  NotFound,
  LogIn,
  SignUp,
  ResetPassword,
} from "./pages";

export default function App() {
  const [currentUser, setCurrentUser] = useState(mockUsers[0]);
  const [apartments, setApartments] = useState(mockApartments);
  const [myApartments, setMyApartments] = useState(
    apartments.filter(apartment => apartment.user_id === currentUser.id)
  );

  const stytchKey = process.env.REACT_APP_STYTCH_API_KEY;
  const stytchClient = new StytchHeadlessClient(stytchKey);

  function logout() {
    stytchClient.session.revoke();
    alert("Thank you, you are now logged out.");
  }

  function handleCreateApartment(apartment) {
    setMyApartments(prev => [...prev, apartment]);
  }

  function handleDeleteMyApartment(id) {
    setMyApartments(prev => prev.filter(apartment => apartment.id !== id));
  }

  return (
    <div>
      <Header logout={logout} />
      <main className="h-screen">
        <StytchProvider stytch={stytchClient}>
          <Routes>
            <Route exact path="/apartment-app-frontend" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resetpassword/*" element={<ResetPassword />} />
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
        </StytchProvider>
      </main>
      <Footer />
    </div>
  );
}
