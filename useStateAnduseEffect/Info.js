import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  // 렌더링이 완료되었을때 실행
  //   useEffect(() => {
  //     console.log("렌더링 완료");
  //     console.log({
  //       name,
  //       nickName
  //     });
  //   });

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickName = e => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickName} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info;
