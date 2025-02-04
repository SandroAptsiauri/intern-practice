import React from "react";
import { useNavigate } from "react-router-dom";

const HistoryPage: React.FC = () => {
  const navigate = useNavigate();
  const searchHistory: string[] = JSON.parse(localStorage.getItem("searchHistory") || "[]");

  
  const clearHistory = () => {
    localStorage.removeItem("searchHistory");
    window.location.reload(); 
  };

  return (
    <div>
      <h1>Search History</h1>

      {searchHistory.length > 0 ? (
        <>
          <ul>
            {searchHistory
              .filter((term) => term.trim())
              .map((term, index) => (
                <li key={index} onClick={() => navigate(`/?search=${term}`)}>
                  {term}
                </li>
              ))}
          </ul>

          <button onClick={clearHistory} style={{ marginTop: "10px", background: "red", color: "white" }}>
            Clear History
          </button>
        </>
      ) : (
        <p>No search history available.</p>
      )}
    </div>
  );
};

export default HistoryPage;
