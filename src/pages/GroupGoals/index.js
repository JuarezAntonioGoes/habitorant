import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardGoals from "../../components/CardGoals";
import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import api from "../../services/api";

import { GroupGoalsTitle } from "./style";

const GroupGoals = () => {
  const [goals, setGoals] = useState([]);
  const state = useParams();

  const getGroupGoals = async () => {
    const response = await api.get(`/groups/${state.id}/`);
    setGoals(response.data.goals);
  };

  useEffect(() => {
    getGroupGoals();
  }, []);

  goals.sort(function (a, b) {
    return a.how_much_achieved - b.how_much_achieved;
  });

  return (
    <GlobalContainer>
      <GlobalWrap>
        <GroupGoalsTitle>Group Goals</GroupGoalsTitle>
        {goals?.map(
          ({ title, difficulty, how_much_achieved, achieved }, index) => (
            <CardGoals
              key={index}
              title={title}
              difficulty={difficulty}
              how_much_achieved={how_much_achieved}
              achieved={achieved}
            />
          )
        )}
      </GlobalWrap>
      <Menu></Menu>
    </GlobalContainer>
  );
};
export default GroupGoals;