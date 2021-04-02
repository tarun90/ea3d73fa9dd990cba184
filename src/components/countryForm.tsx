import React from "react";
import Service from "../service";

type Props = {
  countryName: string | null;
  handleCountryOnChange: React.ChangeEventHandler<HTMLInputElement>;
  updateCountryList: Function
};

const CountryForm: React.FC<Props> = ({countryName, handleCountryOnChange, updateCountryList}) => {
  const onSubmitCountryForm = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    let api_url = `${Service.countryListAPI}/${countryName}`;
    const response = await Service.makeAPICall(Service.getMethod, api_url);
    if (!response) {
      return console.log(Service.error_message);
    }
    if (response.data && response.data.length > 0) {
        updateCountryList(response.data);
    }
  };

  return (
    <div className="CountryForm">
      <form name="countryForm" onSubmit={onSubmitCountryForm}>
        <input
          type="text"
          placeholder="Enter country"
          onChange={handleCountryOnChange}
        />
        <button type="submit" disabled={!countryName}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CountryForm;
