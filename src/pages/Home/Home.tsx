import { People } from "@/data/people";
import { addPeople } from "@/redux/states";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Peopletable } from "./components";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return <Peopletable />;
};

export default Home;
