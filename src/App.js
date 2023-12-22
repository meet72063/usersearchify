import "./App.css";
import { useEffect, useState } from "react";
import {
  UserList,
  SearchBar,
  Notification,
  LoadingIndicator,
} from "./components";
import { usersApiUrl } from "./config"; //Import the API endpoint from the configuration file

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //state to hold fetched data
  const [fetchUser, setFetchUser] = useState([]);
  // State to hold the  filterd list of users, initially set to null, filled with users after fetching data
  const [usersList, setUsersList] = useState(null);

  useEffect(() => {
    // Creating an AbortController instance to manage the fetch request
    const abortController = new AbortController();
    const { signal } = abortController;

    //fetch users
    const fetchUsers = async () => {
      try {
        const response = await fetch(usersApiUrl, { signal });
        const users = await response.json();

        setUsersList(users);
        setFetchUser(users);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    // Cleanup function to abort the fetch data when the component unmounts
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="container">
      <main className="main-content">
        <h1 className="heading">Users List</h1>

        {/*Display loading indicator while fetching data */}
        {loading && <LoadingIndicator />}

        {/*  Display error notification if there's an error */}
        {error && (
          <Notification
            message={"Oops! Something went wrong. Please try again later."}
            variant={"error"}
          />
        )}

        {/* Display the main content area when there are no errors and data has been loaded successfully */}
        {!error && !loading && usersList && (
          <>
            {/* Searchbar ( filters: name,email)*/}
            <SearchBar
              setUsersList={setUsersList}
              fetchUser={fetchUser}
              searchFilters={["name", "email"]}
            />
            {/* Display UserList if there are users */}
            {usersList.length > 0 && <UserList usersList={usersList} />}
            {
              //  Show "No User Found" if the search results are empty Or zero users
              usersList.length === 0 && (
                <Notification message={"No User Found"} variant={"info"} />
              )
            }
          </>
        )}
      </main>
    </div>
  );
}

export default App;
