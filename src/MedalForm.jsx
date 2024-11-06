import React, { useState } from "react";

const MedalForm = ({ addCountry,modifyCountry }) => {
  const [name, setName] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();

    const newCountry = {
      name,
      gold,
      silver,
      bronze,
    };

    // 추가하는 function
    addCountry(newCountry);

    setName("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  //업데이트 버튼
  const updateButton = (event) => {
    event.preventDefault();

    const modifiedCountry = {
      name,
      gold,
      silver,
      bronze,
    };

    modifyCountry(modifiedCountry)

    setName("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  return (
    <div>
      <div>
        <h2>2024 Paris Olympic</h2>
        <form>
          <div className="input-box">
            <div className="countryname">
              <label>국가명</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="goldmedal">
              <label>금메달</label>
              <input
                type="number"
                value={gold}
                onChange={(e) => {
                  setGold(e.target.value);
                }}
              />
            </div>
            <div className="silvermedal">
              <label>은메달</label>
              <input
                type="number"
                value={silver}
                onChange={(e) => {
                  setSilver(e.target.value);
                }}
              />
            </div>{" "}
            <div className="bronzemedal">
              <label>동메달</label>
              <input
                type="number"
                value={bronze}
                onChange={(e) => {
                  setBronze(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="buttons">
            <button onClick={onSubmit}>국가 추가</button>
            <button onClick={updateButton}>업데이트</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MedalForm;
