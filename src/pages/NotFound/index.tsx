import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "src/components";
import { RoutesEnum } from "src/foundation";
import { NotFoundPageComp } from "./types";
import styles from "./styles";

const NotFoundPage: NotFoundPageComp = () => {
  const navigate = useNavigate();

  return (
    <div css={styles.container()}>
      <div css={styles.wrapper()}>
        <p>
          {"Ничего не найдено"}
        </p>
        <Button onClick={() => navigate(RoutesEnum.Root)}>
          <p>
            {"Вернуться"}
          </p>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
