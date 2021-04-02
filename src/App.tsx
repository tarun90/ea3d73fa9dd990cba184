import React, { useState } from "react";
import "./App.css";
import Service from "./service";
import CountryForm from "./components/countryForm";
import CountryList from "./components/countryList";
import Capital from "./components/capital";
import { CountryData } from "./interfaces/CountryData";
import { CapitalData } from "./interfaces/CapitalData";

function App() {
  const [step, setStep] = useState<number>(0);
  const [countryName, setCountryName] = useState<string | null>(null);
  const [countryListArr, setCountryListArr] = useState<Array<CountryData>>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(
    null
  );
  const [capitalData, setCapitalData] = useState<CapitalData | null>(null);

  const handleCountryOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(e.target.value);
  };

  const updateCountryList = (data: Array<any>) => {
    setCountryListArr(data);
    setStep(1);
  };

  const selectCountry = (e: any) => {
    setSelectedCountry(countryListArr[e.target.value]);
    setStep(2);
  };

  const showCountryCapital = async () => {
    const api_url = Service.weatherstackAPI;
    const params = `access_key=${Service.weatherstackAPIKey}&query=${selectedCountry?.capital}`;
    const response = await Service.makeAPICall(
      Service.getMethod,
      api_url,
      params
    );
    if (!response) {
      return console.log(Service.error_message);
    }
    if (response.data && response.data.current) {
      setCapitalData(response.data.current);
    }
  };

  return (
    <div className="App">
      {step === 2 ? (
        <>
          {selectedCountry && (
            <Capital
              selectedCountry={selectedCountry}
              capitalData={capitalData}
              showCountryCapital={showCountryCapital}
            />
          )}
        </>
      ) : step === 1 ? (
        <>
          <CountryList
            countryListArr={countryListArr}
            selectCountry={selectCountry}
          />
        </>
      ) : (
        <CountryForm
          countryName={countryName}
          handleCountryOnChange={handleCountryOnChange}
          updateCountryList={updateCountryList}
        />
      )}
    </div>
  );
}

export default App;
