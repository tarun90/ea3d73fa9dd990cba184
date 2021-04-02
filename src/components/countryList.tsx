import React from "react";
import { CountryData } from "../interfaces/CountryData";

type Props = {
  countryListArr: Array<CountryData> | null;
  selectCountry: React.ChangeEventHandler<HTMLSelectElement>;
};

const CountryList: React.FC<Props> = ({ countryListArr, selectCountry }) => {
  return (
    <div className="CountryForm">
      <select name="selectCountryList" defaultValue="none" onChange={selectCountry}>
        <option disabled value="none">
          Please select country
        </option>
        {countryListArr?.map((value, index) => (
          <option key={index} value={index}>
            {value.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryList;
