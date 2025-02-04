import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 10;

const HistoryPage: React.FC = () => {
  const navigate = useNavigate();
  const fullHistory: string[] = JSON.parse(
    localStorage.getItem("searchHistory") || "[]"
  );

  const [visibleHistory, setVisibleHistory] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setVisibleHistory(fullHistory.slice(0, page * ITEMS_PER_PAGE));
  }, [page]);

  const loadMore = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(loadMore, { threshold: 1.0 });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loadMore]);

  const clearHistory = () => {
    localStorage.removeItem("searchHistory");
    setVisibleHistory([]);
    setPage(1);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Search History</h1>

      {visibleHistory.length > 0 ? (
        <>
          <ul>
            {visibleHistory.map((term, index) => (
              <li
                key={index}
                onClick={() => navigate(`/?search=${term}`)}
                style={{
                  cursor: "pointer",
                  padding: "10px",
                  borderBottom: "1px solid #ccc",
                }}
              >
                {term}
              </li>
            ))}
          </ul>

          {visibleHistory.length < fullHistory.length && (
            <div
              ref={loaderRef}
              style={{ textAlign: "center", padding: "10px" }}
            >
              Loading...
            </div>
          )}

          <button
            onClick={clearHistory}
            style={{
              marginTop: "10px",
              background: "red",
              color: "white",
              padding: "10px",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
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
