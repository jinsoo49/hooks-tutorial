import React, { useReducer } from "react";
import useInputs from "./useInput";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info = () => {
  //   const [name, setName] = useState("");
  //   const [nickname, setNickname] = useState("");
  //   useEffect(() => {
  // 1. console.log("렌더링이 완료되었습니다!");
  // console.log({
  //   name,
  //   nickname
  // });
  // // 2. console.log("마운트 될 때만 실행");
  // 3. console.log(name);
  // console.log("effect");
  // console.log(name);
  // return () => {
  //   console.log("cleanup");
  //   console.log(name);
  // };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);
  const [state, onChange] = useInputs(reducer, {
    name: "",
    nickname: ""
  });
  const { name, nickname } = state;
  //   const onChange = e => {
  //     dispatch(e.target);
  //   };

  //   const onChangeName = e => {
  //     setName(e.target.value);
  //   };

  //   const onChangeNickname = e => {
  //     setNickname(e.target.value);
  //   };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 : </b>
          {name}
        </div>
        <div>
          <b>닉네임 : </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
