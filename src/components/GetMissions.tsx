import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_MISSIONS } from "../GraphQL/Queries";
import { List, LoadingSpinner, ApiError } from "../components";
import { Mission } from "../@types/custom.d";

export const GetMissions = () => {
  const { error, loading, data } = useQuery(LOAD_MISSIONS);
  const [missions, setMissions] = useState<Mission[] | null>(null);

  const fetchData = () => {
    if (data) {
      setMissions([...data.launchesPast]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading, error, data]);

  return (
    <main>
      {loading && <LoadingSpinner />}
      {error && <ApiError />}
      {missions && <List missions={missions} />}
    </main>
  );
};
