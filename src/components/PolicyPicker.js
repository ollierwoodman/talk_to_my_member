import { Label, TextInput, ToggleSwitch, Button } from "flowbite-react";
import React, { useState } from "react";

export const QUERY_PARAM_FORORAGAINST = 'leaning';
export const QUERY_PARAM_POLICYNAME = 'policy';

async function getMessageBody(isFor, policyName) {
  let stringForOrAgainst = "";
  isFor ? stringForOrAgainst = "for" : stringForOrAgainst = "against";
  
  const response = await fetch(`/api/compose?${QUERY_PARAM_FORORAGAINST}=${stringForOrAgainst}&${QUERY_PARAM_POLICYNAME}=${policyName}`);
}

export default function PolicyPicker() {
  const [isFor, setIsFor] = useState("");
  const [policyName, setPolicyName] = useState("");

  const onIsForChange = event => {
    setIsFor(event.target.value);
  };
  const onPolicyNameChange = event => {
    setPolicyName(event.target.value);
  };
  
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <p>I am passionately</p>
        <ToggleSwitch
          className=""
          checked={isFor}
          label={isFor ? "for" : "against"}
          onChange={onIsForChange}
        />
        <Label htmlFor="emailbody" value="Email body" hidden />
        <TextInput id="policy"
          className="flex-grow"
          type="text" 
          list="policies" 
          placeholder="e.g. climate change action"
          required={false}
          disabled={false}
          value={policyName}
          onChange={onPolicyNameChange}
        />
        <datalist id="policies">
          <option value="Boston">Boston</option>
          <option value="Melbourne">Melbourne</option>
        </datalist>
      </div>
      <Button 
        onClick={getMessageBody(isFor, policyName)} 
        gradientDuoTone="purpleToPink"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-2 w-5 h-5">
          <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
        Write email
      </Button>
      <p className="text-sm text-gray-500 text-center">Powered by ChatGPT.</p>
    </>
  );
}
